
// ZenCoder prompt "write a unit test for src/Accordion.js"

// src/__tests__/Accordion.test.js

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Accordion } from '../Accordion';
import { AccordionSingle } from '../index.js';

jest.mock('../index.js', () => ({
  AccordionSingle: jest.fn(() => <div>Mocked AccordionSingle</div>),
}));

describe('Accordion Component', () => {
  it('renders correctly with given props', () => {
    const props = {
      display: [
        { button: 'Button 1', text: 'Text 1' },
        { button: 'Button 2', text: 'Text 2' },
      ],
      type: 'customType',
      number: '5',
    };

    render(<Accordion {...props} />);

    // Check if AccordionSingle is called with correct props
    expect(AccordionSingle).toHaveBeenCalledTimes(2);
    expect(AccordionSingle).toHaveBeenCalledWith(
      expect.objectContaining({
        number: 5,
        button: 'Button 1',
        text: 'Text 1',
        type: 'customType',
      }),
      expect.anything()
    );
    expect(AccordionSingle).toHaveBeenCalledWith(
      expect.objectContaining({
        number: 5,
        button: 'Button 2',
        text: 'Text 2',
        type: 'customType',
      }),
      expect.anything()
    );

    // Check if the mocked AccordionSingle component is rendered
    expect(screen.getAllByText('Mocked AccordionSingle')).toHaveLength(2);
  });
});

