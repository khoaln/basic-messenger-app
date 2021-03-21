import { fireEvent, screen } from '@testing-library/dom';
import React from 'react';
import MessageList from '.';
import renderWithCurrentUserContext from '../../helpers/renderWithCurrentUserContext';

test('renders messages', () => {
  renderWithCurrentUserContext(<MessageList chatId={1} />);
  expect(screen.getAllByTestId('message')).toHaveLength(4);
})

test('renders new message', () => {
  renderWithCurrentUserContext(<MessageList chatId={1} />);
  fireEvent.change(screen.getByTestId('message-input'), { target: { value: 'Hello' } });
  fireEvent.click(screen.getByTestId('message-button'));

  const messages = screen.getAllByTestId('message');
  expect(messages).toHaveLength(5);
  expect(messages[messages.length - 1]).toHaveTextContent('Hello');
})