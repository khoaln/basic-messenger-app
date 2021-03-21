import React, { useContext } from 'react';
import classNames from 'classnames';
import { IMessage } from '../../../types/Message';
import './Message.css';
import CurrentUserContext from '../../../contexts/CurrentUserContext';

type Props = {
  message: IMessage,
}

function Message({ message }: Props): JSX.Element {
  const currentUser = useContext(CurrentUserContext);
  const mine = message.userId === currentUser.id;

  return (
    <div className={classNames('message', { mine })} data-testid="message">
      <span className={classNames('message-text', { mine })}>{message.text}</span>
    </div>
  );
}

export default Message;