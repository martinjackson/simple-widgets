
// ZenCoder prompt: write a unit test for src/ChoiceText.js and create a bash shell script that creates it.

import React from 'react';
import { render } from '@testing-library/react';
import { ChoiceText } from '../src/ChoiceText.js';

describe('ChoiceText Component', () => {
  it('should be defined', () => {
    expect(ChoiceText).toBeDefined();
  });

  it('should render an input and datalist', () => {
    const choices = ['Option 1', 'Option 2'];
    const { container } = render(<ChoiceText choices={choices} list="testList" />);
    const inputElement = container.querySelector('input[type="text"]');
    const datalistElement = container.querySelector('datalist');

    expect(inputElement).toBeInTheDocument();
    expect(datalistElement).toBeInTheDocument();
    choices.forEach(choice => {
      expect(datalistElement).toHaveTextContent(choice);
    });
  });
});
