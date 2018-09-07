import React from 'react';
import ReactDom from 'react-dom';
import TestUtils from 'react-dom/test-utils';
import App from '../example/App.js'

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
    let display = findDomById(tree, 'answer2')

    TestUtils.Simulate.click(cbox);
    const value1 = display.textContent;
    TestUtils.Simulate.click(cbox);
    const value2 = display.textContent;

    expect(value1).toBe('Preview');
    expect(value2).toBe('');
  });

  it('tickle Checkbox 2', function () {
    var tree = TestUtils.renderIntoDocument(<App />);

    let cbox = findDomById(tree, 'cb2'); 
    let display = findDomById(tree, 'answer2')

    TestUtils.Simulate.click(cbox);
    const value1 = display.textContent;
    TestUtils.Simulate.click(cbox);
    const value2 = display.textContent;

    expect(value1).toBe('Help');
    expect(value2).toBe('');
  });

  it('tickle Radio 1', function () {
    var tree = TestUtils.renderIntoDocument(<App />);

    let radio = findDomById(tree, 'rd1'); 
    TestUtils.Simulate.click(radio);

    let output = findDomById(tree, 'answer4')

    expect(output.textContent).toBe('1');
  });

  it('tickle Radio 2', function () {
    var tree = TestUtils.renderIntoDocument(<App />);

    let radio = findDomById(tree, 'rd2'); 
    TestUtils.Simulate.click(radio);

    let output = findDomById(tree, 'answer4')

    expect(output.textContent).toBe('2');
  });


});