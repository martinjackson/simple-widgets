
import React, { useState } from 'react';

import { CheckBox, Choice, List, Radio, DateInput, DoubleListBox } from '../src/index'
     // from 'simple-widgets'  if a stand alone app

const fullList = ['apple', 'bannana', 'blackberry', 'blueberry', 'peach', 'strawberry', ]
const preSelected = fullList.filter( item => item.startsWith('b') )
const lang = ["java", "javascript", "jsx", "markdown", "bash"]
const shoppingChoices = ["bannana", 'bread', 'milk']

const initialState = {
  name: "",
  lang: "",
  preview: "",
  funny: "",
  year: "",
  shop: ["bread","milk"],
  date_of_install: "1963-04-04",
  fruitChoice: preSelected,
};

const App = () => {

  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    if (typeof e.preventDefault === "function") {
      e.preventDefault();
    }

    setFormData({ ...formData, [e.target.name]: e.target.value });  // value can be an array
  }

  const dlbSt = {
    display: "inline-block",
    verticalAlign: 'middle'
  }

  const appSt = {}

  const shopSt = {
    verticalAlign: 'middle'
  }

  return (
      <div id="AppDiv" style={appSt}>
        <h1>A Title</h1>

        <label>Name:</label> <input name="name" value={formData.name} onChange={handleChange} />
        <label>Language of Choice:</label>
        <Choice id="ch1" choices={lang} name="lang" value={formData.lang} onChange={handleChange} />

        <CheckBox id="cb1" selectedValue="Preview" text="Preview" name="preview" value={formData.preview} onChange={handleChange} />
        <CheckBox id="cb2" selectedValue="Help"    text="Help"    name="preview" value={formData.preview} onChange={handleChange} />
        <CheckBox id="cb3" selectedValue="Funny"   text="Funny"   name="funny"   value={formData.funny}   onChange={handleChange} color="green" />
        <CheckBox id="cb4" selectedValue="NotFunny" text="NotFunny" name="funny" value={formData.funny}   onChange={handleChange} color="red" disabled />

        <Radio id="rd1" selectedValue="1" name="year" text="Year 1" value={formData.year} onChange={handleChange} />
        <Radio id="rd2" selectedValue="2" name="year" text="Year 2" value={formData.year} onChange={handleChange} />
        <Radio id="rd3" selectedValue="3" name="year" text="Year 3" value={formData.year} onChange={handleChange} disabled />

        <br />
        <label>Shopping List: </label>
        <List style={shopSt} id="lt1" choices={shoppingChoices} name="shop" value={formData.shop} onChange={handleChange} />

        <label>Date Of Installation: </label>
        <DateInput name="date_of_install" value={formData.date_of_install} onChange={handleChange} format='yyyy-MM-dd' />

        <label>Fruit Selection: </label>
        <DoubleListBox choices={fullList} name="fruitChoice" value={formData.fruitChoice} onChange={handleChange} style={dlbSt} />
        <hr />

        <br />
        <pre>{JSON.stringify({formData}, null, 2)}</pre>
        <br />
        <hr />


      </div>
    )

}

export default App;
