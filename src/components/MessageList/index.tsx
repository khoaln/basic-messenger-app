import React, { useContext, useEffect, useState } from 'react';
import { IMessage } from '../../types/Message';
import Message from './Message';
import messagesData from '../../dummy-data/messages';
import SendForm from './SendForm';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import './MessageList.css';

type Props = {
  chatId: number,
}

function MessageList({ chatId }: Props): JSX.Element {
  const [messages, setMessages] = useState<Array<IMessage>>([]);
  const currentUser = useContext(CurrentUserContext);

  const handleMessageSend = (text: string): void => {
    const newMessage: IMessage = {
      id: messages.length + 1,
      chatId,
      userId: currentUser.id,
      text
    }

    setMessages([...messages, newMessage]);
  }

  useEffect(() => {
    setMessages(messagesData.filter((message) => message.chatId === chatId));
  }, [chatId, messagesData]);

  return (
    <div className="messages" data-testid="message-list">
      <div className="messages-container">
        {messages.map((message, i) => (
          <Message key={i} message={message} />
        ))}
      </div>
      <SendForm onClick={handleMessageSend} />
    </div>
  )
}

export default MessageList;