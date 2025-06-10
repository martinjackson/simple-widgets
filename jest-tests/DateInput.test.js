// ZenCoder prompt: write a unit test for src/DateInput.js and create a bash shell script that creates it.
// The test should achieve >80% code coverage

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { DateInput } from '../src/DateInput.js';

describe('DateInput Component', () => {
  const mockOnChange = jest.fn();

  it('should be defined', () => {
    expect(DateInput).toBeDefined();
  });

  it('should render without crashing', () => {
    render(<DateInput name="testDate" value="2023-10-10" format="YYYY-MM-DD" onChange={mockOnChange} />);
    expect(screen.getByDisplayValue('2023-10-10')).toBeInTheDocument();
  });

  it('should handle date object as value', () => {
    const date = new Date(2023, 9, 10); // October 10, 2023
    render(<DateInput name="testDate" value={date} format="YYYY-MM-DD" onChange={mockOnChange} />);
    expect(screen.getByDisplayValue('2023-10-10')).toBeInTheDocument();
  });

  it('should call onChange when date is changed', () => {
    render(<DateInput name="testDate" value="2023-10-10" format="YYYY-MM-DD" onChange={mockOnChange} />);
    const input = screen.getByDisplayValue('2023-10-10');
    fireEvent.change(input, { target: { value: '2023-11-11' } });
    expect(mockOnChange).toHaveBeenCalled();
  });

  it('should use placeholder and data-date-format attributes', () => {
    render(<DateInput name="testDate" value="2023-10-10" format="YYYY-MM-DD" onChange={mockOnChange} />);
    const input = screen.getByPlaceholderText('YYYY-MM-DD');
    expect(input).toHaveAttribute('data-date-format', 'YYYY-MM-DD');
  });

  it('should handle empty value', () => {
    render(<DateInput name="testDate" value="" format="YYYY-MM-DD" onChange={mockOnChange} />);
    expect(screen.getByPlaceholderText('YYYY-MM-DD')).toBeInTheDocument();
  });
});
