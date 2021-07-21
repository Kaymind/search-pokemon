import React from 'react';
import { render, screen, fireEvent } from '../../test-utils/react';
import App from '../../App';

beforeEach(() => {
  render(<App />);
});

describe('HomePage', () => {
  test('1. search by not found keyword', async () => {
    const input = screen.getByPlaceholderText(
      'Search for your favorite pokemon'
    );
    fireEvent.change(input, { target: { value: 'not found' } });
    expect(input).toHaveValue('not found');
  });

  test('2. search by found keyword', async () => {
    const input = screen.getByPlaceholderText(
      'Search for your favorite pokemon'
    );
    fireEvent.change(input, { target: { value: 'pikachu' } });
    expect(input).toHaveValue('pikachu');
  });
});
