import React from 'react';
import classNames from 'classnames';
import { IUser } from '../../../types/User';
import './Contact.css';

type Props = {
  contact: IUser,
  onClick: () => void;
  selected?: boolean;
}

function Contact({ contact, onClick, selected = false }: Props): JSX.Element {
  const { name, username, avatar } = contact;
  return (
    <li onClick={onClick} className={classNames("contact", { selected })} data-testid="contact">
      <picture className="contact-avatar">
        <img src={avatar} alt={`${username}`} />
      </picture>
      <div>
        <h5>{name}</h5>
      </div>
    </li>
  );
}

export default React.memo(Contact);