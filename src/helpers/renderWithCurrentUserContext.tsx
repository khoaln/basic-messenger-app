import { render, RenderResult } from '@testing-library/react';
import React from 'react';
import CurrentUserContext from '../contexts/CurrentUserContext';

export default function renderWithCurrentUserContext(element: JSX.Element): RenderResult {
  return render(
    <CurrentUserContext.Provider value={{ id: 1 }}>
      {element}
    </CurrentUserContext.Provider>
  )
}