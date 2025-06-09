// ZenCoder prompt: write a unit test for src/Link.js and create a bash shell script that creates it.
// The test should achieve >80% code coverage

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Link } from '../src/Link.js';
import { setMenuParms, setMenuPath } from '../src/index.js';

jest.mock('../src/index.js', () => ({
  setMenuParms: jest.fn(),
  setMenuPath: jest.fn(),
  dTS: jest.fn(() => 'timestamp'),
}));

describe('Link Component', () => {
  it('should be defined', () => {
    expect(Link).toBeDefined();
  });

  it('should render children inside a span when "to" prop is not provided', () => {
    render(<Link>Link Text</Link>);
    expect(screen.getByText('Link Text')).toBeInTheDocument();
    expect(screen.getByText('Link Text').tagName).toBe('SPAN');
  });

  it('should render with the correct className', () => {
    render(<Link className="custom-class">Link Text</Link>);
    expect(screen.getByText('Link Text')).toHaveClass('sw-nav-links custom-class');
  });

  it('should call setMenuParms and setMenuPath on click', () => {
    render(<Link to="/path" parms={{ key: 'value' }} title="Title">Link Text</Link>);
    fireEvent.click(screen.getByText('Link Text'));
    expect(setMenuParms).toHaveBeenCalledWith({ key: 'value' });
    expect(setMenuPath).toHaveBeenCalledWith('/path');
  });

  it('should prevent default event on click', () => {
    const preventDefault = jest.fn();
    render(<Link to="/path">Link Text</Link>);
    fireEvent.click(screen.getByText('Link Text'), { preventDefault });
    expect(preventDefault).toHaveBeenCalled();
  });

  it('should log the click event with timestamp', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    render(<Link to="/path">Link Text</Link>);
    fireEvent.click(screen.getByText('Link Text'));
    expect(consoleSpy).toHaveBeenCalledWith('timestamp', "You clicked '/path'");
    consoleSpy.mockRestore();
  });

  it('should set document title on click', () => {
    render(<Link to="/path" title="Title">Link Text</Link>);
    fireEvent.click(screen.getByText('Link Text'));
    expect(document.title).toBe('Title - /path');
  });
});
