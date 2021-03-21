import React from 'react';

export interface ICurrentUser {
  id: number;
}
const CurrentUserContext = React.createContext<ICurrentUser>({ id: 0 });

export default CurrentUserContext;