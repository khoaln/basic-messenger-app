import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import SendForm from '.';

test('enable button only when there is input text', () => {
  render(<SendForm onClick={() => ({})} />);
  expect(screen.getByTestId('message-button').getAttribute('disabled')).toEqual("");
  fireEvent.change(screen.getByTestId('message-input'), { target: { value: 'Hello' } });
  expect(screen.getByTestId('message-button').getAttribute('disabled')).toEqual(null);
})