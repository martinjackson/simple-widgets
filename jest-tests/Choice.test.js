
// ZenCoder prompt "write a unit test for src/Choice.js and create a bash shell script that creates it."
// Note: make sure you are in the ~/projects/simple-widgets before you run the bash shell script

import React from 'react';
import { render } from '@testing-library/react';
import { Choice } from '../src/Choice.js';

describe('Choice Component', () => {
  it('should render without crashing', () => {
    const { container } = render(<Choice />);
    expect(container).toBeDefined();
  });

  it('should render options based on the list prop', () => {
    const list = ['Option 1', 'Option 2', 'Option 3'];
    const { getByText } = render(<Choice list={list} />);
    list.forEach(option => {
      expect(getByText(option)).toBeInTheDocument();
    });
  });

  it('should render a placeholder if provided', () => {
    const placeholder = 'Select an option';
    const { getByText } = render(<Choice placeholder={placeholder} />);
    expect(getByText(placeholder)).toBeInTheDocument();
  });

  it('should handle multiple selections if multiple prop is true', () => {
    const list = ['Option 1', 'Option 2'];
    const { container } = render(<Choice list={list} multiple />);
    const selectElement = container.querySelector('select');
    expect(selectElement).toHaveAttribute('multiple');
  });
});
