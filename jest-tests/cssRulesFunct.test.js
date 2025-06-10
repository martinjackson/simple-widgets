// ZenCoder prompt: write a unit test for src/cssRulesFunct.js and create a bash shell script that creates it.
// The test should achieve >80% code coverage

import { findCssRule, deleteCssRule, findStyleSheet, insertCssRule, printCssRules } from '../src/cssRulesFunct.js';

describe('cssRulesFunct', () => {
  beforeEach(() => {
    document.head.innerHTML = `
      <style title="testStyle">
        .testClass { color: red; }
      </style>
    `;
  });

  it('should be defined', () => {
    expect(findCssRule).toBeDefined();
    expect(deleteCssRule).toBeDefined();
    expect(findStyleSheet).toBeDefined();
    expect(insertCssRule).toBeDefined();
    expect(printCssRules).toBeDefined();
  });

  it('should find a CSS rule', () => {
    const result = findCssRule('.testClass');
    expect(result.length).toBeGreaterThan(0);
    expect(result[0]).toHaveProperty('sheetIndex');
    expect(result[0]).toHaveProperty('index');
  });

  it('should delete a CSS rule', () => {
    deleteCssRule('.testClass');
    const result = findCssRule('.testClass');
    expect(result.length).toBe(0);
  });

  it('should find a stylesheet by title', () => {
    const index = findStyleSheet('testStyle');
    expect(index).toBeGreaterThanOrEqual(0);
  });

  it('should insert a new CSS rule', () => {
    insertCssRule('testStyle', '.newClass { color: blue; }');
    const result = findCssRule('.newClass');
    expect(result.length).toBeGreaterThan(0);
  });

  it('should print CSS rules without errors', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    printCssRules();
    expect(consoleSpy).toHaveBeenCalled();
    consoleSpy.mockRestore();
  });
});
