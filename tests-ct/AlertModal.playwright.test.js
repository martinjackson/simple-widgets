// ZenCoder prompt: create a test for AlertModal using Playwright and create a bash shell script that creates it.
// include this prompt as a comment. The test should achieve >80% code coverage

import { test, expect } from '@playwright/experimental-ct-react';
import { AlertModal } from '../src/AlertModal.js';

test.describe('AlertModal Component', () => {
  test('should render with the provided message', async ({ mount }) => {
    const component = await mount(<AlertModal show={true} closeFunct={() => {}} message="Test Message" />);
    await expect(component).toContainText('Test Message');
  });

  test('should not render when show is false', async ({ mount }) => {
    const component = await mount(<AlertModal show={false} closeFunct={() => {}} />);
    await expect(component).not.toBeVisible();
  });

  test('should call closeFunct when OK button is clicked', async ({ mount }) => {
    let closed = false;
    const component = await mount(<AlertModal show={true} closeFunct={() => { closed = true; }} />);
    const okButton = component.locator('button', { hasText: 'OK' });
    await okButton.click();
    expect(closed).toBeTruthy();
  });

  test('should display default message if message prop is empty', async ({ mount }) => {
    const component = await mount(<AlertModal show={true} closeFunct={() => {}} message="" />);
    await expect(component).toContainText('Alert'); // Assuming 'Alert' is the default message
  });
});
