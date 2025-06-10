// ZenCoder prompt: write a unit test for src/SearchSortTable.js and create a bash shell script that creates it.
// The test should achieve >80% code coverage

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SearchSortTable from '../src/SearchSortTable.js';

describe('SearchSortTable Component', () => {
  const mockData = [
    { id: 1, name: 'Alice', age: 30 },
    { id: 2, name: 'Bob', age: 25 },
    { id: 3, name: 'Charlie', age: 35 },
  ];

  const columns = [
    { header: 'Name', accessor: 'name' },
    { header: 'Age', accessor: 'age' },
  ];

  it('should be defined', () => {
    expect(SearchSortTable).toBeDefined();
  });

  it('should render without crashing', () => {
    render(<SearchSortTable data={mockData} columns={columns} />);
    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText('Age')).toBeInTheDocument();
  });

  it('should display all data rows', () => {
    render(<SearchSortTable data={mockData} columns={columns} />);
    expect(screen.getByText('Alice')).toBeInTheDocument();
    expect(screen.getByText('Bob')).toBeInTheDocument();
    expect(screen.getByText('Charlie')).toBeInTheDocument();
  });

  it('should sort data by column when header is clicked', () => {
    render(<SearchSortTable data={mockData} columns={columns} />);
    fireEvent.click(screen.getByText('Age'));
    const rows = screen.getAllByRole('row');
    expect(rows[1]).toHaveTextContent('Bob');
    expect(rows[2]).toHaveTextContent('Alice');
    expect(rows[3]).toHaveTextContent('Charlie');
  });

  it('should filter data based on search input', () => {
    render(<SearchSortTable data={mockData} columns={columns} />);
    fireEvent.change(screen.getByPlaceholderText('Search...'), { target: { value: 'Bob' } });
    expect(screen.getByText('Bob')).toBeInTheDocument();
    expect(screen.queryByText('Alice')).toBeNull();
    expect(screen.queryByText('Charlie')).toBeNull();
  });

  it('should display no data message when no data matches search', () => {
    render(<SearchSortTable data={mockData} columns={columns} />);
    fireEvent.change(screen.getByPlaceholderText('Search...'), { target: { value: 'Nonexistent' } });
    expect(screen.getByText('No data available')).toBeInTheDocument();
  });
});
