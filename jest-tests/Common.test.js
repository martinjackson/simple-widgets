// ZenCoder prompt: write a unit test for src/Common.js and create a bash shell script that creates it.
// The test should achieve >80% code coverage

import { sanitize, formatMoney } from '../src/Common.js';

describe('Common Utility Functions', () => {
  describe('sanitize', () => {
    it('should be defined', () => {
      expect(sanitize).toBeDefined();
    });

    it('should return valid for null or empty text', () => {
      expect(sanitize(null, 'Test')).toEqual({ valid: true, message: '' });
      expect(sanitize('', 'Test')).toEqual({ valid: true, message: '' });
    });

    it('should return invalid if text starts with a colon', () => {
      expect(sanitize(':test', 'Test')).toEqual({ valid: false, message: 'Test can not start with a colon (:)' });
    });

    it('should return invalid if text starts with SQL keywords', () => {
      const keywords = ['SELECT', 'DELETE', 'INSERT', 'UPDATE', 'ALTER'];
      keywords.forEach(keyword => {
        expect(sanitize(keyword + ' something', 'Test')).toEqual({ valid: false, message: `Test can not start with the word ${keyword}` });
      });
    });

    it('should return valid for normal text', () => {
      expect(sanitize('normal text', 'Test')).toEqual({ valid: true, message: '' });
    });
  });

  describe('formatMoney', () => {
    it('should be defined', () => {
      expect(formatMoney).toBeDefined();
    });

    it('should format positive numbers correctly', () => {
      expect(formatMoney(1234567.89)).toBe('$1,234,567.89');
    });

    it('should format negative numbers correctly', () => {
      expect(formatMoney(-1234567.89)).toBe('$-1,234,567.89');
    });

    it('should handle zero correctly', () => {
      expect(formatMoney(0)).toBe('$0.00');
    });

    it('should handle custom decimal and thousand separators', () => {
      expect(formatMoney(1234567.89, 2, ',', '.')).toBe('$1.234.567,89');
    });

    it('should handle custom dollar sign', () => {
      expect(formatMoney(1234567.89, 2, '.', ',', '€')).toBe('€1,234,567.89');
    });

    it('should handle invalid input gracefully', () => {
      expect(formatMoney('invalid')).toBe('$0.00');
    });
  });
});
