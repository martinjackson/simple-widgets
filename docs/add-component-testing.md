
# Add Component Testing to and existing project

```bash
npm init playwright@latest -- --ct
```


[https://playwright.dev/docs/test-components](https://playwright.dev/docs/test-components)

## Example

Here is what a typical component test looks like:

```js
test('event should work', async ({ mount }) => {
  let clicked = false;

  // Mount a component. Returns locator pointing to the component.
  const component = await mount(
    <Button title="Submit" onClick={() => { clicked = true }}></Button>
  );

  // As with any Playwright test, assert locator text.
  await expect(component).toContainText('Submit');

  // Perform locator click. This will trigger the event.
  await component.click();

  // Assert that respective events have been fired.
  expect(clicked).toBeTruthy();
});
```
