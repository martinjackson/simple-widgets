// @flow

import React, { Component } from 'react';
import autoBind from 'react-autobind';
import styled from 'react-emotion';
import { DragDropContext } from 'react-beautiful-dnd';

import type { DragStart, DropResult, DraggableLocation } from 'react-beautiful-dnd';

import type { Result as ReorderResult } from './utils';
import type { Task, Id, Entities } from './types';

type State = {|
  entities: Entities,
  selectedTaskIds: Id[],
  // sad times
  draggingTaskId: ?Id,
|};


import buildEntities from './buildEntities';
import Column from './column';
import { mutliDragAwareReorder, multiSelectTo as multiSelect } from './utils';


const Container = styled('div')`
  display: flex;
  user-select: none;
`;

const getTasks = (entities: Entities, columnId: Id): Task[] =>
  entities.columns[columnId].taskIds.map(
    (taskId: Id): Task => entities.tasks[taskId],
  );

type FlowProps = {choices: string[], value: string[]}

export default class DoubleListBox extends Component<*, State> {

  state: State

  constructor(props: FlowProps) {
    super(props);

    this.state = {
      entities: buildEntities(props.choices, props.value),
      selectedTaskIds: [],
      draggingTaskId: null,
    };
  
    autoBind(this);
  }

  notifyOfChange() {
    if (this.props.onChange) {
      console.log('notifyOfChange:', this.state);
      
      console.log('col:', this.state.entities.columns);
      
      const ids: Id[] = this.state.entities.columns.selected.taskIds

      const answer = ids.map(id => this.state.entities.tasks[id].content)

      const e = {}
      e.target = {}
      e.target.name = this.props.name
      e.target.value = answer
      console.log('answer:', answer);
      
      this.props.onChange(e);         
    }    

  }

  allSelect() {
    const choices = this.props.choices
    this.setState({
      entities: buildEntities(choices, choices),
      selectedTaskIds: [],
      draggingTaskId: null
    }, this.notifyOfChange)
  }

  componentDidMount() {
    window.addEventListener('click', this.onWindowClick);
    window.addEventListener('keydown', this.onWindowKeyDown);
    window.addEventListener('touchend', this.onWindowTouchEnd);
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.onWindowClick);
    window.removeEventListener('keydown', this.onWindowKeyDown);
    window.removeEventListener('touchend', this.onWindowTouchEnd);
  }

  onDragStart = (start: DragStart) => {
    const id: string = start.draggableId;
    const selected: ?Id = this.state.selectedTaskIds.find(
      (taskId: Id): boolean => taskId === id,
    );

    // if dragging an item that is not selected - unselect all items
    if (!selected) {
      this.unselectAll();
    }
    this.setState({
      draggingTaskId: start.draggableId,
    });
  };

  onDragEnd = (result: DropResult) => {
    const destination: ?DraggableLocation = result.destination;
    const source: DraggableLocation = result.source;

    // nothing to do
    if (!destination || result.reason === 'CANCEL') {
      this.setState({
        draggingTaskId: null,
      });
      return;
    }

    const processed: ReorderResult = mutliDragAwareReorder({
      entities: this.state.entities,
      selectedTaskIds: this.state.selectedTaskIds,
      source,
      destination,
    });

    this.setState({...processed, draggingTaskId: null, }, this.notifyOfChange);    
  };

  onWindowKeyDown = (event: KeyboardEvent) => {
    if (event.defaultPrevented) {
      return;
    }

    if (event.key === 'Escape') {
      this.unselectAll();
    }
  };

  onWindowClick = (event: KeyboardEvent) => {
    if (event.defaultPrevented) {
      return;
    }
    this.unselectAll();
  };

  onWindowTouchEnd = (event: TouchEvent) => {
    if (event.defaultPrevented) {
      return;
    }
    this.unselectAll();
  };

  toggleSelection = (taskId: Id) => {
    const selectedTaskIds: Id[] = this.state.selectedTaskIds;
    const wasSelected: boolean = selectedTaskIds.includes(taskId);

    const newTaskIds: Id[] = (() => {
      // Task was not previously selected
      // now will be the only selected item
      if (!wasSelected) {
        return [taskId];
      }

      // Task was part of a selected group
      // will now become the only selected item
      if (selectedTaskIds.length > 1) {
        return [taskId];
      }

      // task was previously selected but not in a group
      // we will now clear the selection
      return [];
    })();

    this.setState({ selectedTaskIds: newTaskIds, });
  };

  toggleSelectionInGroup = (taskId: Id) => {
    const selectedTaskIds: Id[] = this.state.selectedTaskIds;
    const index: number = selectedTaskIds.indexOf(taskId);

    // if not selected - add it to the selected items
    if (index === -1) {
      this.setState({
        selectedTaskIds: [...selectedTaskIds, taskId],
      });
      return;
    }

    // it was previously selected and now needs to be removed from the group
    const shallow: Id[] = [...selectedTaskIds];
    shallow.splice(index, 1);
    this.setState({
      selectedTaskIds: shallow,
    });
  };

  // This behaviour matches the MacOSX finder selection
  multiSelectTo = (newTaskId: Id) => {
    const updated: ?(Id[]) = multiSelect(
      this.state.entities,
      this.state.selectedTaskIds,
      newTaskId,
    );

    if (updated == null) {
      return;
    }

    this.setState({
      selectedTaskIds: updated,
    });
  };

  unselect = () => {
    this.unselectAll();
  };

  unselectAll = () => {
    this.setState({
      selectedTaskIds: [],
    });
  };

  render() {
    const entities: Entities = this.state.entities;
    const selected: Id[] = this.state.selectedTaskIds;
    return (
      <DragDropContext
        onDragStart={this.onDragStart}
        onDragEnd={this.onDragEnd}
      >
        <Container>
          {entities.columnOrder.map((columnId: Id) => (
            <Column
              column={entities.columns[columnId]}
              tasks={getTasks(entities, columnId)}
              selectedTaskIds={selected}
              key={columnId}
              draggingTaskId={this.state.draggingTaskId}
              toggleSelection={this.toggleSelection}
              toggleSelectionInGroup={this.toggleSelectionInGroup}
              multiSelectTo={this.multiSelectTo}
            />
          ))}
        </Container>
      </DragDropContext>
    );
  }
}
