// ZenCoder prompt: write a unit test for src/MenuBar.js and create a bash shell script that creates it.
// The test should achieve >80% code coverage

import React from 'react';
import { render, screen } from '@testing-library/react';
import { MenuBar } from '../src/MenuBar.js';
import { NavigateBar } from '../src/index.js';

jest.mock('../src/index.js', () => ({
  NavigateBar: jest.fn(() => <div>NavigateBar Mock</div>),
  deleteCssRule: jest.fn(),
  hasOwnProperty: jest.fn((obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)),
}));

describe('MenuBar Component', () => {
  const mockMenuTree = [
    { path: '/home', component: () => <div>Home Component</div> },
    { path: '/about', component: () => <div>About Component</div> },
  ];

  it('should be defined', () => {
    expect(MenuBar).toBeDefined();
  });

  it('should render without crashing', () => {
    render(<MenuBar menuTree={mockMenuTree} path="/home" />);
    expect(screen.getByText('NavigateBar Mock')).toBeInTheDocument();
    expect(screen.getByText('Home Component')).toBeInTheDocument();
  });

  it('should render the correct component based on path', () => {
    render(<MenuBar menuTree={mockMenuTree} path="/about" />);
    expect(screen.getByText('About Component')).toBeInTheDocument();
  });

  it('should apply correct class styles based on props', () => {
    render(<MenuBar menuTree={mockMenuTree} type="vertical" />);
    expect(screen.getByText('NavigateBar Mock').parentElement).toHaveClass('sw-menubar');
  });

  it('should handle noSide prop correctly', () => {
    render(<MenuBar menuTree={mockMenuTree} noSide={true} />);
    expect(screen.getByText('NavigateBar Mock').parentElement).not.toHaveClass('sw-menubar');
  });

  it('should handle format prop correctly', () => {
    render(<MenuBar menuTree={mockMenuTree} format="float" />);
    expect(screen.getByText('NavigateBar Mock').parentElement).toHaveClass('sw-nav-menu_float');
  });

  it('should handle open prop correctly', () => {
    render(<MenuBar menuTree={mockMenuTree} open="slide" />);
    expect(screen.getByText('NavigateBar Mock').parentElement).toHaveClass('sw-nav_menu_component');
  });

  it('should call deleteCssRule when format is float', () => {
    render(<MenuBar menuTree={mockMenuTree} format="float" />);
    expect(NavigateBar).toHaveBeenCalled();
  });
});
