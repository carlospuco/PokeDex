import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import InputNew from './inputnew';

describe('InputNew', () => {
  test('renders with placeholder text', () => {
    const { getByPlaceholderText } = render(
      <InputNew placeholder="Search..." />
    );
    const inputElement = getByPlaceholderText('Search...');

    expect(inputElement).toBeInTheDocument();
  });

  test('renders as search input', () => {
    const { container } = render(
      <InputNew size="search" />
    );
    const inputElement = container.querySelector('input');

    expect(inputElement).toHaveClass('input__inputStyle');
  });

  test('calls onChange callback on input change', () => {
    const handleChange = jest.fn();
    const { getByRole } = render(
      <InputNew onChange={handleChange} />
    );
    const inputElement = getByRole('textbox');

    fireEvent.change(inputElement, { target: { value: 'hello' } });

    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledWith(expect.any(Object));
  });

  test('renders with initial value', () => {
    const { getByDisplayValue } = render(
      <InputNew value="initial value" />
    );
    const inputElement = getByDisplayValue('initial value');
    expect(inputElement).toBeInTheDocument();
  });
});