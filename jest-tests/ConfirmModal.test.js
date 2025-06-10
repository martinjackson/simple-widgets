// ZenCoder prompt: write a unit test for src/ConfirmModal.js and create a bash shell script that creates it.
// The test should achieve >80% code coverage

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ConfirmModal from '../src/ConfirmModal.js';

describe('ConfirmModal Component', () => {
  const mockYesFunct = jest.fn();
  const mockNoFunct = jest.fn();
  const mockCloseFunct = jest.fn();

  it('should be defined', () => {
    expect(ConfirmModal).toBeDefined();
  });

  it('should render without crashing when show is true', () => {
    render(<ConfirmModal show={true} yesFunct={mockYesFunct} noFunct={mockNoFunct} closeFunct={mockCloseFunct} message="Confirm Action" />);
    expect(screen.getByText('Confirm Action')).toBeInTheDocument();
  });

  it('should not render when show is false', () => {
    const { container } = render(<ConfirmModal show={false} yesFunct={mockYesFunct} noFunct={mockNoFunct} closeFunct={mockCloseFunct} />);
    expect(container.firstChild).toBeNull();
  });

  it('should call yesFunct and closeFunct when Yes button is clicked', () => {
    render(<ConfirmModal show={true} yesFunct={mockYesFunct} noFunct={mockNoFunct} closeFunct={mockCloseFunct} />);
    fireEvent.click(screen.getByRole('button', { name: /yes/i }));
    expect(mockYesFunct).toHaveBeenCalled();
    expect(mockCloseFunct).toHaveBeenCalledWith(false);
  });

  it('should call noFunct and closeFunct when No button is clicked', () => {
    render(<ConfirmModal show={true} yesFunct={mockYesFunct} noFunct={mockNoFunct} closeFunct={mockCloseFunct} />);
    fireEvent.click(screen.getByRole('button', { name: /no/i }));
    expect(mockNoFunct).toHaveBeenCalled();
    expect(mockCloseFunct).toHaveBeenCalledWith(false);
  });

  it('should handle missing closeFunct by calling noFunct', () => {
    render(<ConfirmModal show={true} yesFunct={mockYesFunct} noFunct={mockNoFunct} />);
    fireEvent.click(screen.getByRole('button', { name: /no/i }));
    expect(mockNoFunct).toHaveBeenCalled();
  });
});
