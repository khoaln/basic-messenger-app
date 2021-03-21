import { screen } from '@testing-library/react';
import React from 'react';
import ContactList from '.';
import renderWithCurrentUserContext from '../../helpers/renderWithCurrentUserContext';

test('renders contacts', async () => {
  renderWithCurrentUserContext(<ContactList onContactClick={() => ({})} />)
  expect(screen.getAllByTestId('contact')).toHaveLength(3);
});