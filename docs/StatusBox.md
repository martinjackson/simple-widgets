# Status Box

This is used to display an error on the browser page.

Props:

1.  **status** = the error object that might be returned from a promise

### Example

```js
import { StatusBox } from 'simple-widgets';

try {
    ...
} catch (err) {
    <StatusBox status={err} />
}
```

