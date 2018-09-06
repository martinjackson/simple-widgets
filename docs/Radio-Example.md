# Radio

Radio is simple [React] component to with Radio Button behavior.

[![Codecov][codecov-badge]][codecov]
[![Discord][discord-badge]][discord]


**Older Versions:**

none yet...

For questions and support, please visit [Stack Overflow](http://stackoverflow.com/questions/tagged/Radio).

### Browser Support

We support all browsers and environments where React runs.

### Installation

Using [npm](https://www.npmjs.com/):
```
    $ npm install --save Radio
```
   or [yarn](https://yarnpkg.com/en/docs/migrating-from-npm):
```
    $ yarn add Radio
```

Then with a module bundler like [webpack](https://webpack.github.io/) that supports either CommonJS or ES2015 modules, use as you would anything else:

```
// using an ES6 transpiler, like babel
import Radio from 'Radio';

handleChange(e) {
       if (typeof e === 'string')
          return;   // passed in by Radio, can be ignored, next event has target.name

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
              <Radio value="1" name="year" match={this.state.year} onChange={this.handleChange} />Year 1
              <Radio value="2" name="year" match={this.state.year} onChange={this.handleChange} />Year 2
           </div>
}
```


### Versioning and Stability

We want Radio to be a stable dependency that’s easy to keep current. We take the same approach to versioning as React.js itself: [React Versioning Scheme](https://facebook.github.io/react/blog/2016/02/19/new-versioning-scheme.html).

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
