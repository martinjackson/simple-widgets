
import React, { Component } from 'react';
import autoBind from 'react-autobind';    // Not needed by simple-widgets, but used in this example

// if this was a stand alone app
// import {CheckBox, Choice, Radio, DatePicker, makeChangeHandler} from 'simple-widgets';

// testing harness
import { CheckBox, Choice, Radio, DatePicker, makeChangeHandler, DoubleListBox, SelectionPanel1, SelectionPanel2 } from '../src/index'

class App extends Component {

  constructor(props) {
        super(props);
        autoBind(this);
    
        this.state = {
          'name': '', 
          'ex2_mode': '', 
          'preview':'', 
          'funny': '', 
          'year':'', 
          'date_of_install': '1963-04-04'
        };
        this.modes = ["java", "javascript", "jsx", "markdown", "bash"];  
        this.handleChange = makeChangeHandler(this);   
    }

  render() {

    return (
      <div id="AppDiv">
        <h1>A title</h1>

        <label>Name:</label> <input name="name" value={this.state.name} onChange={this.handleChange} /> <br/>
        <label>Language of Choice:</label> 
        <Choice id="ch1" choices={this.modes} name="ex2_mode" value={this.state.ex2_mode} onChange={this.handleChange} />

        <CheckBox id="cb1" selectedValue="Preview" text="Preview" name="preview" value={this.state.preview} onChange={this.handleChange} />
        <CheckBox id="cb2" selectedValue="Help"    text="Help"    name="preview" value={this.state.preview} onChange={this.handleChange} />
        <CheckBox id="cb3" selectedValue="Funny"   text="Funny"   name="funny"   value={this.state.funny}   onChange={this.handleChange} color="green" />
        <CheckBox id="cb4" selectedValue="NotFunny" text="NotFunny" name="funny" value={this.state.funny}   onChange={this.handleChange} color="red" disabled />

        <Radio id="rd1" selectedValue="1" name="year" text="Year 1" value={this.state.year} onChange={this.handleChange} />
        <Radio id="rd2" selectedValue="2" name="year" text="Year 2" value={this.state.year} onChange={this.handleChange} />
        <Radio id="rd3" selectedValue="3" name="year" text="Year 3" value={this.state.year} onChange={this.handleChange} disabled />

        <br />
        <label>Date Of Installation: </label><DatePicker name="date_of_install" value={this.state.date_of_install} onChange={this.handleChange} format='YYYY-MM-DD'/><br />
        <hr />

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        name: <span>{this.state.name}</span> <br />
        ex2_mode: <span id="answer1">{this.state.ex2_mode}</span> <br />
        preview: <span id="answer2">{this.state.preview}</span> <br />
        funny: <span id="answer3">{this.state.funny}</span> <br />
        year: <span id="answer4">{this.state.year}</span> <br />
        date_of_install: <span id="answer5">{this.state.date_of_install}</span> <br />

      </div>
    );
  }
}

export default App;
