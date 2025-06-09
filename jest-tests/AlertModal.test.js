// ZenCoder prompt: write a unit test for src/AlertModal.js and create a bash shell script that creates it.
// The test should achieve >80% code coverage

// ZenCoder prompt: create a test for AlertModal using Playwright and create a bash shell script that creates it.
// include this prompt as a comment. The test should achieve >80% code coverage

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { AlertModal } from '../src/AlertModal.js';

describe('AlertModal Component', () => {
  const mockCloseFunct = jest.fn();

  it('should be defined', () => {
    expect(AlertModal).toBeDefined();
  });

  it('should render without crashing when show is true', () => {
    render(<AlertModal show={true} closeFunct={mockCloseFunct} message="Test Message" />);
    expect(screen.getByText('Test Message')).toBeInTheDocument();
  });

  it('should not render when show is false', () => {
    const { container } = render(<AlertModal show={false} closeFunct={mockCloseFunct} />);
    expect(container.firstChild).toBeNull();
  });

  it('should call closeFunct when OK button is clicked', () => {
    render(<AlertModal show={true} closeFunct={mockCloseFunct} />);
    fireEvent.click(screen.getByRole('button', { name: /ok/i }));
    expect(mockCloseFunct).toHaveBeenCalledWith(false);
  });

  it('should display default message if message prop is empty', () => {
    render(<AlertModal show={true} closeFunct={mockCloseFunct} message="" />);
    expect(screen.getByText('Alert')).toBeInTheDocument(); // Assuming 'Alert' is the default message
  });

  it('should log error if show prop is missing', () => {
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
    render(<AlertModal closeFunct={mockCloseFunct} />);
    expect(consoleSpy).toHaveBeenCalledWith('AlertModal: The show property is not present');
    consoleSpy.mockRestore();
  });

  it('should log error if closeFunct prop is missing', () => {
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
    render(<AlertModal show={true} />);
    expect(consoleSpy).toHaveBeenCalledWith('AlertModal: The closeFunct property is not present');
    consoleSpy.mockRestore();
  });
});
