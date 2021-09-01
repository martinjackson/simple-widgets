
import React, { useState } from 'react';

// if a stand alone app
// import {CheckBox, Choice, Radio, DateInput, DoubleListBox} from 'simple-widgets';

// testing harness
import { CheckBox, Choice, Radio, DateInput, DoubleListBox } from '../src/index'

const fullList = ['apple', 'bannana', 'blackberry', 'blueberry', 'peach', 'strawberry', ]
const preSelected = fullList.filter( item => item.startsWith('b') )
const modes = ["java", "javascript", "jsx", "markdown", "bash"];
const initialState = {
  name: "",
  ex2_mode: "",
  preview: "",
  funny: "",
  year: "",
  date_of_install: "1963-04-04",
  fruitChoice: preSelected,
};

const App = () => {

  const [formData, setFormData] = useState(initialState);
  const handleChange = (e) => {
    if (typeof e === "string") {
      console.log('encountered e typeof string');
      return; // passed in by Radio, can be ignored, next event has target.name
    }

    if (typeof e.preventDefault === "function") {
      e.preventDefault();
    }

    if ("target" in e && "name" in e.target && "value" in e.target) {
      var stateChange = {};
      stateChange[e.target.name] = e.target.value;

      // console.log(typeof e, e.target, ':', e.target.value, '->', e.target.name);
      setFormData({ ...formData, [e.target.name]: e.target.value });
    } else {
      // console.log('something unusual here, expecting e.target.name e.target.value e:', typeof e, e);
    }
  }

    return (
      <div id="AppDiv">
        <h1>A title</h1>

        <label>Name:</label> <input name="name" value={formData.name} onChange={handleChange} /> <br/>
        <label>Language of Choice:</label>
        <Choice id="ch1" choices={modes} name="ex2_mode" value={formData.ex2_mode} onChange={handleChange} />

        <CheckBox id="cb1" selectedValue="Preview" text="Preview" name="preview" value={formData.preview} onChange={handleChange} />
        <CheckBox id="cb2" selectedValue="Help"    text="Help"    name="preview" value={formData.preview} onChange={handleChange} />
        <CheckBox id="cb3" selectedValue="Funny"   text="Funny"   name="funny"   value={formData.funny}   onChange={handleChange} color="green" />
        <CheckBox id="cb4" selectedValue="NotFunny" text="NotFunny" name="funny" value={formData.funny}   onChange={handleChange} color="red" disabled />

        <Radio id="rd1" selectedValue="1" name="year" text="Year 1" value={formData.year} onChange={handleChange} />
        <Radio id="rd2" selectedValue="2" name="year" text="Year 2" value={formData.year} onChange={handleChange} />
        <Radio id="rd3" selectedValue="3" name="year" text="Year 3" value={formData.year} onChange={handleChange} disabled />

        <br />
        <label>Date Of Installation: </label><DateInput name="date_of_install" value={formData.date_of_install} onChange={handleChange} format='yyyy-MM-dd' />
        <br />
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

        name: <span>{formData.name}</span> <br />
        ex2_mode: <span id="answer1">{formData.ex2_mode}</span> <br />
        preview: <span id="answer2">{formData.preview}</span> <br />
        funny: <span id="answer3">{formData.funny}</span> <br />
        year: <span id="answer4">{formData.year}</span> <br />
        date_of_install: <span id="answer5">{formData.date_of_install}</span> <br />
        <hr />

        <DoubleListBox choices={fullList} name="fruitChoice" value={formData.fruitChoice} onChange={handleChange} />

      </div>
    )

}

export default App;
