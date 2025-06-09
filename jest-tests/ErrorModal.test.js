// ZenCoder prompt: write a unit test for src/ErrorModal.js and create a bash shell script that creates it.
// The test should achieve >80% code coverage

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ErrorModal } from '../src/ErrorModal.js';

describe('ErrorModal Component', () => {
  const mockCloseFunct = jest.fn();

  it('should be defined', () => {
    expect(ErrorModal).toBeDefined();
  });

  it('should render without crashing when show is true', () => {
    render(<ErrorModal show={true} closeFunct={mockCloseFunct} message="Error Message" />);
    expect(screen.getByText('Error Message')).toBeInTheDocument();
  });

  it('should not render when show is false', () => {
    const { container } = render(<ErrorModal show={false} closeFunct={mockCloseFunct} />);
    expect(container.firstChild).toBeNull();
  });

  it('should call closeFunct when OK button is clicked', () => {
    render(<ErrorModal show={true} closeFunct={mockCloseFunct} />);
    fireEvent.click(screen.getByRole('button', { name: /ok/i }));
    expect(mockCloseFunct).toHaveBeenCalledWith(false);
  });

  it('should display default message if message prop is empty', () => {
    render(<ErrorModal show={true} closeFunct={mockCloseFunct} message="" />);
    expect(screen.getByText('No Error message given')).toBeInTheDocument();
  });

  it('should log error if show prop is missing', () => {
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
    render(<ErrorModal closeFunct={mockCloseFunct} />);
    expect(consoleSpy).toHaveBeenCalledWith('ErrorModal: The show property is not present');
    consoleSpy.mockRestore();
  });

  it('should log error if closeFunct prop is missing', () => {
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
    render(<ErrorModal show={true} />);
    expect(consoleSpy).toHaveBeenCalledWith('ErrorModal: The closeFunct property is not present');
    consoleSpy.mockRestore();
  });

  it('should not display XButton if nodisplayX prop is true', () => {
    render(<ErrorModal show={true} closeFunct={mockCloseFunct} nodisplayX={true} />);
    expect(screen.queryByRole('button', { name: /x/i })).not.toBeInTheDocument();
  });
});
