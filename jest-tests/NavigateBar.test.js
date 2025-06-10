// ZenCoder prompt: write a unit test for src/NavigateBar.js and create a bash shell script that creates it.
// The test should achieve >80% code coverage

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import NavigateBar from '../src/NavigateBar.js';

describe('NavigateBar Component', () => {
  const mockMenuTree = [
    { title: 'Home', path: '/' },
    { title: 'About', path: '/about', submenu: [{ title: 'Team', path: '/about/team' }] },
  ];

  it('should be defined', () => {
    expect(NavigateBar).toBeDefined();
  });

  it('should render without crashing', () => {
    render(<NavigateBar menuTree={mockMenuTree} type="horizontal" />);
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
  });

  it('should toggle menu on click', () => {
    render(<NavigateBar menuTree={mockMenuTree} type="horizontal" />);
    const menuIcon = screen.getByText('☰');
    fireEvent.click(menuIcon);
    expect(screen.getByRole('navigation')).toHaveClass('active');
  });

  it('should handle submenu mouse enter and leave', () => {
    render(<NavigateBar menuTree={mockMenuTree} type="horizontal" />);
    const aboutLink = screen.getByText('About');
    fireEvent.mouseEnter(aboutLink);
    expect(screen.getByText('Team')).toBeInTheDocument();
    fireEvent.mouseLeave(aboutLink);
    expect(screen.queryByText('Team')).not.toBeInTheDocument();
  });

  it('should apply correct classes based on props', () => {
    render(<NavigateBar menuTree={mockMenuTree} type="vertical" open="always" />);
    expect(screen.getByRole('navigation')).toHaveClass('sw-navbar_vertical');
  });

  it('should not render menu icon if open is always', () => {
    render(<NavigateBar menuTree={mockMenuTree} type="horizontal" open="always" />);
    expect(screen.queryByText('☰')).not.toBeInTheDocument();
  });
});
