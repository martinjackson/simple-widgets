
// ZenCoder prompt AppCore.test.js

import React from 'react';
import { render } from '@testing-library/react';
import { AppCore } from '../src/AppCore.js';

describe('AppCore Component', () => {
  it('should be defined', () => {
    expect(AppCore).toBeDefined();
  });

  it('should render without crashing', () => {
    const mockGetMenu = jest.fn().mockReturnValue([]);
    const { container } = render(<AppCore getMenu={mockGetMenu} />);
    expect(container).toBeInTheDocument();
  });

  // Add more tests here as needed
});
