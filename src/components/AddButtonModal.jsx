import React, { useState } from 'react';
import '../styles/AddButtonModal.css'; // Assuming you have a CSS file for styles
import { FiX } from 'react-icons/fi';

export default function AddButtonModal({ isOpen, close, onAdd }) {
  const [text, setText] = useState('');
  const [url, setUrl]   = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    onAdd({ text, url });
    setText('');
    setUrl('');
    close();
  }

  if (!isOpen) return null;
  return (
    <div className="modal-backdrop">
      <div className="modal-card">
        <button className="modal-close" onClick={close}>
          <FiX size={20} />
        </button>
        <h3>Add a New Button</h3>
        <form onSubmit={handleSubmit}>
          <label>
            Button Text
            <input
              value={text}
              onChange={e => setText(e.target.value)}
              required
            />
          </label>
          <label>
            URL
            <input
              type="url"
              value={url}
              onChange={e => setUrl(e.target.value)}
              required
            />
          </label>
          <button type="submit" className="submit-btn">
            Add
          </button>
        </form>
      </div>
    </div>
  );
}
