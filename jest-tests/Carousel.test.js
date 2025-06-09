// ZenCoder prompt: write a unit test for src/Carousel.js and create a bash shell script that creates it.
// The test should achieve >80% code coverage

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Carousel } from '../src/Carousel.js';

describe('Carousel Component', () => {
  const mockDisplay = [
    { image: 'image1.jpg', alt: 'Image 1' },
    { image: 'image2.jpg', alt: 'Image 2' },
    { image: 'image3.jpg', alt: 'Image 3' },
  ];

  it('should be defined', () => {
    expect(Carousel).toBeDefined();
  });

  it('should render without crashing', () => {
    render(<Carousel display={mockDisplay} />);
    expect(screen.getByAltText('Image 1')).toBeInTheDocument();
  });

  it('should navigate to the next image when Next button is clicked', () => {
    render(<Carousel display={mockDisplay} />);
    fireEvent.click(screen.getByRole('button', { name: /next/i }));
    expect(screen.getByAltText('Image 2')).toBeInTheDocument();
  });

  it('should navigate to the previous image when Previous button is clicked', () => {
    render(<Carousel display={mockDisplay} />);
    fireEvent.click(screen.getByRole('button', { name: /previous/i }));
    expect(screen.getByAltText('Image 3')).toBeInTheDocument();
  });

  it('should loop back to the first image after the last image', () => {
    render(<Carousel display={mockDisplay} />);
    fireEvent.click(screen.getByRole('button', { name: /next/i }));
    fireEvent.click(screen.getByRole('button', { name: /next/i }));
    fireEvent.click(screen.getByRole('button', { name: /next/i }));
    expect(screen.getByAltText('Image 1')).toBeInTheDocument();
  });

  it('should loop back to the last image when navigating previous from the first image', () => {
    render(<Carousel display={mockDisplay} />);
    fireEvent.click(screen.getByRole('button', { name: /previous/i }));
    expect(screen.getByAltText('Image 3')).toBeInTheDocument();
  });

  it('should apply custom width and height if provided', () => {
    render(<Carousel display={mockDisplay} width="200px" height="100px" />);
    const img = screen.getByAltText('Image 1');
    expect(img).toHaveAttribute('width', '200px');
    expect(img).toHaveAttribute('height', '100px');
  });

  it('should use custom button labels if provided', () => {
    render(<Carousel display={mockDisplay} previous="Prev" next="Next" />);
    expect(screen.getByRole('button', { name: /prev/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /next/i })).toBeInTheDocument();
  });
});
