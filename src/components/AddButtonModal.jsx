// src/components/AddButtonModal.jsx
import React, { useState } from 'react';
import '../styles/AddButtonModal.css';

export default function AddButtonModal({ isOpen, close, onAdd }) {
  const [text, setText] = useState('');
  const [url, setUrl]   = useState('');
  const [error, setError] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    setError('');
    if (!text.trim() || !url.trim()) {
      setError('Both fields are required.');
      return;
    }
    onAdd({ text: text.trim(), url: url.trim() });
    setText('');
    setUrl('');
    close();
  };

  if (!isOpen) return null;
  return (
    <div className="modal-backdrop">
      <div className="modal-card">
        <button className="modal-close" onClick={close}>&times;</button>
        <h3>Add a New Button</h3>
        {error && <div className="modal-error">{error}</div>}
        <form onSubmit={handleSubmit}>
          <label>
            Button Text
            <input
              type="text"
              value={text}
              onChange={e => setText(e.target.value)}
              placeholder="e.g. Book a Tour"
            />
          </label>
          <label>
            URL (relative or absolute)
            <input
              type="text"
              value={url}
              onChange={e => setUrl(e.target.value)}
              placeholder="/tour or https://…"
            />
          </label>
          <button type="submit" className="modal-submit">Add</button>
        </form>
      </div>
    </div>
  );
}
