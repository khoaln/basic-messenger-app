import React, { useContext, useEffect, useState } from 'react';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import users from '../../dummy-data/users';
import chats from '../../dummy-data/chats';
import { IUser } from '../../types/User';
import Contact from './Contact';
import './ContactList.css';

type Props = {
  onContactClick: (id: number) => void;
}

function ContactList({ onContactClick }: Props): JSX.Element {
  const [contacts, setContacts] = useState<Array<IUser>>([]);
  const [selectedContactId, setSelectedContactId] = useState(0);
  const currentUser = useContext(CurrentUserContext);

  const handleClick = (contactId: number): void => {
    setSelectedContactId(contactId);
    const chatList = chats.filter((chat) => chat.userIds.includes(currentUser.id) && chat.userIds.includes(contactId));
    if (chatList.length > 0) {
      onContactClick(chatList[0].id);
    }
  };

  useEffect(() => {
    setContacts(users.filter((contact) => contact.id !== currentUser.id));
  }, [users, currentUser]);

  return (
    <div className="contacts" data-testid="contact-list">
      <ul>
        {contacts.map((contact, i) => (
          <Contact
            key={i}
            contact={contact} 
            onClick={() => handleClick(contact.id)}
            selected={contact.id === selectedContactId}
          />
        ))}
      </ul>
    </div>
  );
}

export default ContactList;