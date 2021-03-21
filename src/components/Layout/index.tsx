import React, { useState } from 'react';
import ContactList from '../ContactList';
import MessageList from '../MessageList';
import './Layout.css';

function Layout(): JSX.Element {
  const [currentChatId, setCurrentChatId] = useState<number>();

  const onContactClick = (id: number): void => setCurrentChatId(id);

  return (
    <div className="basic">
      <ContactList onContactClick={onContactClick} />
      {currentChatId && (<MessageList chatId={currentChatId} />)}
    </div>
  );
}

export default Layout;