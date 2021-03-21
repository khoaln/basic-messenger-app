import { render, screen } from '@testing-library/react';
import React from 'react';
import Contact from '.';
import users from '../../../dummy-data/users';

test('highlights the selected contact', () => {
  render(<Contact contact={users[1]} onClick={() => ({})} selected={true} />);
  expect(screen.getByTestId('contact')).toHaveClass('selected');
})