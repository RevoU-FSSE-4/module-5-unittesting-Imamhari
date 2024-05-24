import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Search from './search'; // Adjust the path as necessary

describe('Search Component', () => {
  test('renders the input and button', () => {
    const mockSetSearch = jest.fn();
    const mockHandleSearch = jest.fn();

    render(<Search search="" setSearch={mockSetSearch} handleSearch={mockHandleSearch} />);

    // Check if the input and button are rendered
    const inputElement = screen.getByPlaceholderText(/Enter City Name/i);
    const buttonElement = screen.getByText(/Search/i);

    expect(inputElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
  });

  test('calls setSearch on input change', () => {
    const mockSetSearch = jest.fn();
    const mockHandleSearch = jest.fn();

    render(<Search search="" setSearch={mockSetSearch} handleSearch={mockHandleSearch} />);

    const inputElement = screen.getByPlaceholderText(/Enter City Name/i);
    fireEvent.change(inputElement, { target: { value: 'New York' } });

    expect(mockSetSearch).toHaveBeenCalledTimes(1);
    expect(mockSetSearch).toHaveBeenCalledWith('New York');
  });

  test('calls handleSearch on button click', () => {
    const mockSetSearch = jest.fn();
    const mockHandleSearch = jest.fn();

    render(<Search search="" setSearch={mockSetSearch} handleSearch={mockHandleSearch} />);

    const buttonElement = screen.getByText(/Search/i);
    fireEvent.click(buttonElement);

    expect(mockHandleSearch).toHaveBeenCalledTimes(1);
  });
});