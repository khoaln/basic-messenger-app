import { screen } from '@testing-library/dom';
import React from 'react';
import Message from '.';
import messages from '../../../dummy-data/messages';
import renderWithCurrentUserContext from '../../../helpers/renderWithCurrentUserContext';

test("current user's messages have extra style class", () => {
  renderWithCurrentUserContext(<Message message={messages[0]} />);
  expect(screen.getByTestId('message')).toHaveClass('mine');
})