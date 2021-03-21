import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import Layout from '.';
import renderWithCurrentUserContext from '../../helpers/renderWithCurrentUserContext';

test('renders contact list only as default', () => {
  render(<Layout />);
  expect(screen.getByTestId('contact-list')).toBeInTheDocument();
  expect(screen.queryByTestId('message-list')).toBeNull();
});

test('renders message list when choosing a contact', () => {
  renderWithCurrentUserContext(<Layout />)
  expect(screen.getByTestId('contact-list')).toBeInTheDocument();
  fireEvent.click(screen.getAllByTestId('contact')[0]);
  expect(screen.getByTestId('message-list')).toBeInTheDocument();
});