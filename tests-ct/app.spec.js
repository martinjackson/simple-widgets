import { test, expect } from '@playwright/experimental-ct-react';
import { App } from '../src/App.js';

test('should work', async ({ mount }) => {
  const component = await mount(<App />)
  await expect(component).toContainText('Welcome: JABELE');
});