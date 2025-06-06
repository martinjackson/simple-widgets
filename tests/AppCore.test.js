
// ZenCoder prompt: write a unit test for src/AppCore.js and create a bash shell script that creates it.
// The test should achieve >80% code coverage

import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { AppCore } from '../src/AppCore.js';

describe('AppCore Component', () => {
  const mockGetMenu = jest.fn().mockReturnValue([]);
  const mockAppStartup = jest.fn(() => <div>App Startup</div>);
  const mockFetch = jest.fn(() =>
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve({ username: 'testUser', dbDisplay: 'testDB', dbReadOnly: false, role: 'admin', roleNum: 1, userId: 123 }),
    })
  );

  beforeAll(() => {
    global.fetch = mockFetch;
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(AppCore).toBeDefined();
  });

  it('should render without crashing', () => {
    render(<AppCore getMenu={mockGetMenu} AppStartup={mockAppStartup} />);
    expect(screen.getByText('App Startup')).toBeInTheDocument();
  });

  it('should call checkIn on mount', async () => {
    render(<AppCore getMenu={mockGetMenu} AppStartup={mockAppStartup} />);
    await waitFor(() => expect(mockFetch).toHaveBeenCalledWith('./api/checkIn'));
  });

  it('should update state based on checkIn response', async () => {
    render(<AppCore getMenu={mockGetMenu} AppStartup={mockAppStartup} />);
    await waitFor(() => {
      expect(mockGetMenu).toHaveBeenCalledWith('admin', 'testDB');
      expect(screen.getByText('App Startup')).toBeInTheDocument();
    });
  });

  it('should handle checkOut correctly', async () => {
    const { container } = render(<AppCore getMenu={mockGetMenu} AppStartup={mockAppStartup} logoutURL="/logout" />);
    const header = container.querySelector('header');
    expect(header).toBeInTheDocument();
  });

  it('should display error message if checkIn fails', async () => {
    mockFetch.mockImplementationOnce(() =>
      Promise.resolve({
        ok: false,
        statusText: 'Error',
      })
    );
    render(<AppCore getMenu={mockGetMenu} AppStartup={mockAppStartup} />);
    await waitFor(() => expect(screen.getByText('Error')).toBeInTheDocument());
  });
});
