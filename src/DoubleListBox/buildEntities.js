// @flow
import type { Task, Id, Column, Entities, TaskMap } from './types';

export default (possible: String[], selected: String[]): Entities => {

if (!possible) {
   console.log('Warning Possible[] is empty');
   possible = []
}

if (!selected) {
   console.log('Warning Selected[] is empty');
   selected = []
}

const tasks: Task[] = possible.map(
  (val: String, k: number): Task => ({
    id: `task-${k}`,
    content: val,
  }),
);

const taskMap: TaskMap = tasks.reduce(
  (previous: TaskMap, current: Task): TaskMap => {
    previous[current.id] = current;
    return previous;
  },
  {},
);

const isSelected = (content: String):Boolean => {
  return selected.indexOf(content) >= 0
}

const todo: Column = {
  id: 'notselected',
  title: 'Not Selected',
  taskIds: tasks.filter(task => !isSelected(task.content)).map((task: Task): Id => task.id),
};

const done: Column = {
  id: 'selected',
  title: 'Selected',
  taskIds: tasks.filter(task => isSelected(task.content)).map((task: Task): Id => task.id),
};

const entities: Entities = {
  columnOrder: [todo.id, done.id],
  columns: {
    [todo.id]: todo,
    [done.id]: done,
  },
  tasks: taskMap,
};
  
   return entities;
}

