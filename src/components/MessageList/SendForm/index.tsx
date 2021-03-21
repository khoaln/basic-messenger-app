import React, { ChangeEvent, useState } from 'react';
import './SendForm.css';

type Props = {
  onClick: (text: string) => void;
}

function SendForm({ onClick }: Props): JSX.Element {
  const [message, setMessage] = useState('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setMessage(event.target.value);
  };

  const handleKeyUp = (event: React.KeyboardEvent<HTMLInputElement>): void => {
    if (event.key === 'Enter') {
      handleButtonClick();
    }
  }

  const handleButtonClick = (): void => {
    onClick(message);
    setMessage('');
  }

  return (
    <div className="send-form">
      <input
        onChange={handleChange}
        onKeyUp={handleKeyUp}
        value={message}
        placeholder="Type a message..."
        type="text"
        data-testid="message-input"
      />
      <button
        onClick={handleButtonClick}
        disabled={message === ''}
        data-testid="message-button"
      >
        Send
      </button>
    </div>
  );
}

export default SendForm;