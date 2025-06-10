// ZenCoder prompt: write a unit test for src/CheckBox.js and create a bash shell script that creates it.
// The test should achieve >80% code coverage

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { CheckBox } from '../src/CheckBox.js';

describe('CheckBox Component', () => {
  const mockOnChange = jest.fn();

  it('should be defined', () => {
    expect(CheckBox).toBeDefined();
  });

  it('should render without crashing', () => {
    render(<CheckBox name="testCheckBox" value="checked" onChange={mockOnChange} />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('should toggle value on click', () => {
    render(<CheckBox name="testCheckBox" value="checked" onChange={mockOnChange} />);
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(mockOnChange).toHaveBeenCalled();
  });

  it('should display correct symbol based on value', () => {
    render(<CheckBox name="testCheckBox" value="checked" onChange={mockOnChange} />);
    const button = screen.getByRole('button');
    expect(button).toHaveTextContent('✓'); // Assuming '✓' is the checked symbol
  });

  it('should apply custom className if provided', () => {
    render(<CheckBox name="testCheckBox" value="checked" onChange={mockOnChange} className="custom-class" />);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('custom-class');
  });

  it('should handle custom checked symbol', () => {
    render(<CheckBox name="testCheckBox" value="checked" onChange={mockOnChange} checkedsymbol="green" />);
    const button = screen.getByRole('button');
    expect(button).toHaveTextContent('✓'); // Assuming '✓' is the green checked symbol
  });

  it('should handle unichar prop', () => {
    render(<CheckBox name="testCheckBox" value="checked" onChange={mockOnChange} unichar={10003} />);
    const button = screen.getByRole('button');
    expect(button).toHaveTextContent(String.fromCharCode(10003));
  });
});
