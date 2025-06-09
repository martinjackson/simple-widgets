// ZenCoder prompt: create a test for Accordion using Playwright and create a bash shell script that creates it.
// include this prompt as a comment. The test should achieve >80% code coverage

import { test, expect } from '@playwright/experimental-ct-react';
import { Accordion } from '../src/Accordion.js';

test.describe('Accordion Component', () => {

  test('should render with the correct number of sections', async ({ mount }) => {
    const sections = [
      { title: 'Section 1', content: 'Content 1' },
      { title: 'Section 2', content: 'Content 2' },
    ];
    const component = await mount(<Accordion sections={sections} />);
    console.log('Accordion Component:', component);
    const sect = component.locator('.accordion-section')
    console.log('Accordion Component section:', sect);
    expect(sect).toContainText('Section 1');
    expect(sect).toContainText('Section 2');

    await expect(sect).toHaveCount(sections.length);
  });

  test('should expand and collapse sections correctly', async ({ mount }) => {
    const sections = [
      { title: 'Section 1', content: 'Content 1' },
      { title: 'Section 2', content: 'Content 2' },
    ];
    const component = await mount(<Accordion sections={sections} />);
    const firstSection = component.locator('.accordion-section').first();

    // Initially collapsed
    await expect(firstSection.locator('.content')).not.toBeVisible();

    // Expand first section
    await firstSection.locator('.title').click();
    await expect(firstSection.locator('.content')).toBeVisible();

    // Collapse first section
    await firstSection.locator('.title').click();
    await expect(firstSection.locator('.content')).not.toBeVisible();
  });

  test('should display correct content for each section', async ({ mount }) => {
    const sections = [
      { title: 'Section 1', content: 'Content 1' },
      { title: 'Section 2', content: 'Content 2' },
    ];
    const component = await mount(<Accordion sections={sections} />);
    const firstSection = component.locator('.accordion-section').first();

    // Expand first section
    await firstSection.locator('.title').click();
    await expect(firstSection.locator('.content')).toContainText('Content 1');
  });
});
