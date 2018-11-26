
// @flow

const prefix = 'data-react-beautiful-dnd'

const attributes = {
     dragHandle: `${prefix}-drag-handle`,
     draggable: `${prefix}-draggable`,
     droppable: `${prefix}-droppable`,
     placeholder: `${prefix}-placeholder`,
}

/* Css selectors used */
const singleListContainer = `[${attributes.droppable}]`;
const firstCard = `[${attributes.dragHandle}]:nth-child(1)`;
const secondCard = `[${attributes.dragHandle}]:nth-child(2)`;
const fourthCard = `[${attributes.dragHandle}]:nth-child(5)`;

console.log('singleListContainer:', singleListContainer);
console.log('firstCard:', firstCard);
console.log('secondCard:', secondCard);
console.log('fourthCard:', fourthCard);


// Outputs:
/*
singleListContainer: [data-react-beautiful-dnd-droppable]
firstCard: [data-react-beautiful-dnd-drag-handle]:nth-child(1)
secondCard: [data-react-beautiful-dnd-drag-handle]:nth-child(2)
fourthCard: [data-react-beautiful-dnd-drag-handle]:nth-child(5)
*/