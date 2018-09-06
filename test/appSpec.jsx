import React from 'react';
import ReactDom from 'react-dom';
import TestUtils from 'react-dom/test-utils';
import App from '../src/App.js'

function findReactById(tree, id) {
  return TestUtils.findAllInRenderedTree(tree, function(inst) {
    return TestUtils.isDOMComponent(inst) && inst.id === id;
  });
}

function findDomById(tree, id) {
  const Component = findReactById(tree, id)  
  var domNode = ReactDom.findDOMNode(Component[0]);
  return domNode
}

describe('App', function () {

  it('should not be undefined', function () {
      var tree = TestUtils.renderIntoDocument(<App />);
      var element = TestUtils.findRenderedDOMComponentWithTag(tree, 'div');
      expect(element).toBeTruthy();
  });
  
  it('should have a title', function () {
  
      let component = TestUtils.renderIntoDocument(<App />);
      let h1 = TestUtils.findRenderedDOMComponentWithTag(component, 'h1');    // ​​​​​HTMLHeadingElement

      expect(h1.textContent).toEqual("A title");
  });

  it('tickle Choice', function () {
    var tree = TestUtils.renderIntoDocument(<App />);

    // let select = TestUtils.findRenderedDOMComponentWithTag(tree, 'select'); 
    let select = findDomById(tree, 'ch1'); 
    TestUtils.Simulate.change(select, {"target": {name: select.name, value: 'java'}}); 

    // let output = TestUtils.scryRenderedDOMComponentsWithTag(tree, 'span')[1];    
    let output = findDomById(tree, 'answer1')

    // on <span>   output.innerHTML and output.textContent are the same

    expect(output.textContent).toBe('java');
  });

  it('tickle Checkbox 1', function () {
    var tree = TestUtils.renderIntoDocument(<App />);

    let cbox = findDomById(tree, 'cb1'); 
    TestUtils.Simulate.change(cbox, {"target": {name: cbox.name, value: 'java'}}); 

    let output = findDomById(tree, 'answer2')

    expect(output.textContent).toBe('java');
  });



});