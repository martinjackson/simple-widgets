
import React, { Component } from 'react';
import autoBind from 'react-autobind';    // Not needed by simple-widgets, but used in this example

import {CheckBox, Choice, Radio, makeChangeHandler} from '../src/index.js'    // 'simple-widgets';

// someday
// import simpleWidgets from 'simple-widgets'; 
// currently wallaby doesn't know about npm link simple-widgets

import simpleWidgets from '../src/index.js'


class App extends Component {

  constructor(props) {
        super(props);
        autoBind(this);
    
        this.state = {};
        this.modes = ["java", "javascript", "jsx", "markdown", "sh"];  
        this.handleChange = makeChangeHandler(this);   
    }

  render() {

    return (
      <div>
        <h1>A title</h1>

        <Choice id="ch1" choices={this.modes} name="ex2_mode" value={this.state.ex2_mode} onChange={this.handleChange} />

        <CheckBox id="cb1" value="Preview" name="preview" text="Preview" match={this.state.preview} onChange={this.handleChange} />
        <CheckBox id="cb2" value="Help"    name="preview" text="Help"    match={this.state.preview} onChange={this.handleChange} />
        <CheckBox id="cb3" value="Funny" color="blue" name="funny" text="Funny" match={this.state.funny} onChange={this.handleChange} />

        <Radio id="rd1" value="1" name="year" match={this.state.year} onChange={this.handleChange} />Year 1
        <Radio id="rd2" value="2" name="year" match={this.state.year} onChange={this.handleChange} />Year 2

        <hr />

        ex2_mode: <span id="answer1">{this.state.ex2_mode}</span> <br />
        preview: <span id="answer2">{this.state.preview}</span> <br />
        funny: <span id="answer3">{this.state.funny}</span> <br />
        year: <span id="answer4">{this.state.year}</span> <br />

      </div>
    );
  }
}

export default App;