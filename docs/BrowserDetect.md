# Browser Detect

Use one of the following boolean variables to detect the browser used:
1.  isOpera
2.  isFirefox
3.  isSafari
4.  isIE Internet Explorer 6-11
5.  isEdge
6.  isChrome
7.  isEdgeChromium
8.  isBlink

Only one variable will be true, all others will be false.

### Example

```js
import { isChrome, isEdgeChromium, isIE } from 'simple-widgets';
...
if (isIE) {
    alert ('DO NOT USE THIS BROWSER ANY MORE.')
} else if (isChrome) {
    console.log ('Browser is Chrome');
} else if (isEdgeChromium) {
    console.log ('Browser is Edge Chromium');
} else {
    console.log ('Browser is not Chrome or Edge Chromium');
}
```


