#!/bin/bash 

#  find node_modules/react-beautiful-dnd -name '*.js' | grep -v 'min\.js' | grep -v 'esm.js' | xargs grep  -l 'window\.' >>window-use-in-react-beautiful.txt

# cat <<< EOL |  xargs echo grep 'window\.'  
# node_modules/react-beautiful-dnd/dist/react-beautiful-dnd.cjs.js
# node_modules/react-beautiful-dnd/dist/react-beautiful-dnd.js
# node_modules/react-beautiful-dnd/src/state/auto-scroller/fluid-scroller.js
# node_modules/react-beautiful-dnd/src/state/create-store.js
# node_modules/react-beautiful-dnd/src/view/drag-handle/sensor/create-touch-sensor.js
# node_modules/react-beautiful-dnd/src/view/drag-handle/util/focus-retainer.js
# node_modules/react-beautiful-dnd/src/view/droppable-dimension-publisher/get-closest-scrollable.js
# node_modules/react-beautiful-dnd/src/view/droppable-dimension-publisher/get-env.js
# node_modules/react-beautiful-dnd/src/view/droppable-dimension-publisher/is-in-fixed-container.js
# node_modules/react-beautiful-dnd/src/view/window/get-window-scroll.js
# node_modules/react-beautiful-dnd/src/view/window/scroll-window.js
# EOL

grep 'window\.'  \
node_modules/react-beautiful-dnd/dist/react-beautiful-dnd.cjs.js \
node_modules/react-beautiful-dnd/dist/react-beautiful-dnd.js \
node_modules/react-beautiful-dnd/src/state/auto-scroller/fluid-scroller.js \
node_modules/react-beautiful-dnd/src/state/create-store.js \
node_modules/react-beautiful-dnd/src/view/drag-handle/sensor/create-touch-sensor.js \
node_modules/react-beautiful-dnd/src/view/drag-handle/util/focus-retainer.js \
node_modules/react-beautiful-dnd/src/view/droppable-dimension-publisher/get-closest-scrollable.js \
node_modules/react-beautiful-dnd/src/view/droppable-dimension-publisher/get-env.js \
node_modules/react-beautiful-dnd/src/view/droppable-dimension-publisher/is-in-fixed-container.js \
node_modules/react-beautiful-dnd/src/view/window/get-window-scroll.js \
node_modules/react-beautiful-dnd/src/view/window/scroll-window.js


## Results

node_modules/react-beautiful-dnd/dist/react-beautiful-dnd.js:   var global = module.exports = typeof window != 'undefined' && window.Math == Math
node_modules/react-beautiful-dnd/dist/react-beautiful-dnd.js:       x: window.pageXOffset,
node_modules/react-beautiful-dnd/dist/react-beautiful-dnd.js:       y: window.pageYOffset
node_modules/react-beautiful-dnd/dist/react-beautiful-dnd.js:     var styles = window.getComputedStyle(el);
node_modules/react-beautiful-dnd/dist/react-beautiful-dnd.js:   var composeEnhancers = typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;
node_modules/react-beautiful-dnd/dist/react-beautiful-dnd.js:       x: window.pageXOffset,
node_modules/react-beautiful-dnd/dist/react-beautiful-dnd.js:       y: window.pageYOffset
node_modules/react-beautiful-dnd/dist/react-beautiful-dnd.js:     window.scrollBy(change.x, change.y);
node_modules/react-beautiful-dnd/dist/react-beautiful-dnd.js:     var style = window.getComputedStyle(el);
node_modules/react-beautiful-dnd/dist/react-beautiful-dnd.js:     var style = window.getComputedStyle(el);
node_modules/react-beautiful-dnd/dist/react-beautiful-dnd.js:         var computedStyles = window.getComputedStyle(targetRef);
node_modules/react-beautiful-dnd/src/view/droppable-dimension-publisher/get-closest-scrollable.js:  const style = window.getComputedStyle(el);
node_modules/react-beautiful-dnd/src/view/droppable-dimension-publisher/get-env.js:  const style: CSSStyleDeclaration = window.getComputedStyle(el);
node_modules/react-beautiful-dnd/src/view/droppable-dimension-publisher/is-in-fixed-container.js:  window.getComputedStyle(el).position === 'fixed';
node_modules/react-beautiful-dnd/src/view/window/get-window-scroll.js:  x: window.pageXOffset,
node_modules/react-beautiful-dnd/src/view/window/get-window-scroll.js:  y: window.pageYOffset,
node_modules/react-beautiful-dnd/src/view/window/scroll-window.js:  window.scrollBy(change.x, change.y);

// returns all zeros when Jest/Ezyme 
  window.getComputedStyle(el)

// Harmless ???? 
  window.scrollBy(change.x, change.y);
  window.pageXOffset,
  window.pageYOffset


