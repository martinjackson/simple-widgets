// ZenCoder prompt: write a unit test for src/Modal.js and create a bash shell script that creates it.
// The test should achieve >80% code coverage

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Modal, XButton } from '../src/Modal.js';

describe('Modal Component', () => {
  beforeEach(() => {
    const modalRoot = document.createElement('div');
    modalRoot.setAttribute('id', 'sw-modal');
    document.body.appendChild(modalRoot);
  });

  afterEach(() => {
    const modalRoot = document.getElementById('sw-modal');
    if (modalRoot) {
      document.body.removeChild(modalRoot);
    }
  });

  it('should be defined', () => {
    expect(Modal).toBeDefined();
  });

  it('should render children inside the modal', () => {
    render(<Modal><div>Modal Content</div></Modal>);
    expect(screen.getByText('Modal Content')).toBeInTheDocument();
  });

  it('should append modal to the modal root', () => {
    render(<Modal><div>Modal Content</div></Modal>);
    const modalRoot = document.getElementById('sw-modal');
    expect(modalRoot).toContainElement(screen.getByText('Modal Content'));
  });

  it('should log error if modal root is not found', () => {
    document.body.removeChild(document.getElementById('sw-modal'));
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    render(<Modal><div>Modal Content</div></Modal>);
    expect(consoleSpy).toHaveBeenCalledWith('Can not find DOM element ID: sw-modal, Modal widget will not pop up.');
    consoleSpy.mockRestore();
  });
});

describe('XButton Component', () => {
  const mockCloseFunct = jest.fn();

  it('should be defined', () => {
    expect(XButton).toBeDefined();
  });

  it('should render without crashing', () => {
    render(<XButton closeFunct={mockCloseFunct} />);
    expect(screen.getByRole('button', { name: /x/i })).toBeInTheDocument();
  });

  it('should call closeFunct when button is clicked', () => {
    render(<XButton closeFunct={mockCloseFunct} />);
    fireEvent.click(screen.getByRole('button', { name: /x/i }));
    expect(mockCloseFunct).toHaveBeenCalledWith(false);
  });

  it('should render hr element if nounder prop is not provided', () => {
    render(<XButton closeFunct={mockCloseFunct} />);
    expect(screen.getByRole('button', { name: /x/i }).nextSibling).toBeInTheDocument();
  });

  it('should not render hr element if nounder prop is provided', () => {
    render(<XButton closeFunct={mockCloseFunct} nounder />);
    expect(screen.getByRole('button', { name: /x/i }).nextSibling).toBeEmptyDOMElement();
  });
});
