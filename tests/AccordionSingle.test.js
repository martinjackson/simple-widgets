import React from 'react';
import { render, screen } from '@testing-library/react';
import AccordionSingle from '../src/AccordionSingle';

describe('AccordionSingle Component', () => {
  test('renders without crashing', () => {
    render(<AccordionSingle />);
    const accordionElement = screen.getByTestId('accordion-single');
    expect(accordionElement).toBeInTheDocument();
  });

  // Add more tests here
});
