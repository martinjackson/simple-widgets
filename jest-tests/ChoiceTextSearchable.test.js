// ZenCoder prompt: write a unit test for src/ChoiceTextSearchable.js and create a bash shell script that creates it.
// The test should achieve >80% code coverage

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ChoiceTextSearchable } from '../src/ChoiceTextSearchable.js';

describe('ChoiceTextSearchable Component', () => {
  const mockOnChange = jest.fn();

  it('should be defined', () => {
    expect(ChoiceTextSearchable).toBeDefined();
  });

  it('should render without crashing', () => {
    render(<ChoiceTextSearchable value="test" onChange={mockOnChange} name="testName" />);
    expect(screen.getByDisplayValue('test')).toBeInTheDocument();
  });

  it('should update value on props change', () => {
    const { rerender } = render(<ChoiceTextSearchable value="initial" onChange={mockOnChange} name="testName" />);
    expect(screen.getByDisplayValue('initial')).toBeInTheDocument();
    rerender(<ChoiceTextSearchable value="updated" onChange={mockOnChange} name="testName" />);
    expect(screen.getByDisplayValue('updated')).toBeInTheDocument();
  });

  it('should call onChange prop when input changes', () => {
    render(<ChoiceTextSearchable value="test" onChange={mockOnChange} name="testName" />);
    const input = screen.getByDisplayValue('test');
    fireEvent.change(input, { target: { value: 'new value' } });
    expect(mockOnChange).toHaveBeenCalled();
  });

  it('should pass correct list prop to ChoiceText', () => {
    render(<ChoiceTextSearchable value="test" onChange={mockOnChange} name="testName" />);
    const input = screen.getByDisplayValue('test');
    expect(input).toHaveAttribute('list', 'testName-List');
  });
});
