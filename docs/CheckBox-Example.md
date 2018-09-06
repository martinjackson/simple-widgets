# CheckBox

CheckBox is simple [React] component to with CheckBox Button behavior.

[![Codecov][codecov-badge]][codecov]
[![Discord][discord-badge]][discord]


**Older Versions:**

none yet...

For questions and support, please visit [Stack Overflow](http://stackoverflow.com/questions/tagged/CheckBox).

### Browser Support

We support all browsers and environments where React runs.

### Installation

Using [npm](https://www.npmjs.com/):
```
    $ npm install --save CheckBox
```
   or [yarn](https://yarnpkg.com/en/docs/migrating-from-npm):
```
    $ yarn add CheckBox
```

Then with a module bundler like [webpack](https://webpack.github.io/) that supports either CommonJS or ES2015 modules, use as you would anything else:

```
// using an ES6 transpiler, like babel
import CheckBox from 'CheckBox';

export default class YourComponent extends Component {

constructor(props) {
    super(props);
    autoBind(this);

    this.state = {};
  }

handleChange(e) {
       if (typeof e === 'string')
          return;   // passed in by CheckBox, can be ignored, next event has target.name

       if (typeof e.preventDefault === 'function') {
           e.preventDefault();

           var name = e.target.name;
           var value = e.target.value;

           // console.log({name,value});

           var stateChange = {};
           stateChange[name] = value;
           this.setState(stateChange);
           }
         else {
           console.log(typeof e);  // something unusual, lets find out
           console.log(e);
         }
   }

 render() {

    return <div>
              <Choice choices={this.modes} name="ex2_mode" value={this.state.ex2_mode} onChange={this.handleChange} style={transparent}/>
              &nbsp;

              <CheckBox value="Preview" name="preview" text="Preview" match={this.state.preview} onChange={this.handleChange} />
              <CheckBox value="Help"    name="preview" text="Help"    match={this.state.preview} onChange={this.handleChange} />
           </div>
}
```


### Versioning and Stability

We want CheckBox to be a stable dependency that’s easy to keep current. We take the same approach to versioning as React.js itself: [React Versioning Scheme](https://facebook.github.io/react/blog/2016/02/19/new-versioning-scheme.html).

### Thanks

To CPC project team where this was developed.

[React]: https://facebook.github.io/react
[build-badge]: https://img.shields.io/travis/ReactTraining/react-router/master.svg?style=flat-square
[build]: https://travis-ci.org/ReactTraining/react-router

[npm-badge]: https://img.shields.io/npm/v/react-router.svg?style=flat-square
[npm]: https://www.npmjs.org/package/react-router

[codecov-badge]: https://img.shields.io/codecov/c/github/ReactTraining/react-router/master.svg?style=flat-square
[codecov]: https://codecov.io/gh/ReactTraining/react-router

[discord-badge]: https://img.shields.io/badge/Discord-join%20chat%20%E2%86%92-738bd7.svg?style=flat-square
[discord]: https://discord.gg/0ZcbPKXt5bYaNQ46
