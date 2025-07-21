import React, { useState } from 'react';
import { FiEdit2, FiCheck, FiX } from 'react-icons/fi';
import { updateSection } from '../utils/api';
import '../styles/EditSection.css';

export default function EditSection({ component, field, value, children }) {
  const [editing, setEditing] = useState(false);
  const [text, setText]       = useState(value);
  const [loading, setLoading] = useState(false);
  const [error, setError]     = useState(null);

  const handleSave = async () => {
    setLoading(true);
    setError(null);
    try {
      await updateSection({ component, field, value: text });
      setEditing(false);
    } catch (e) {
      console.warn(e);
      // degrade gracefully
      setEditing(false);
    } finally {
      setLoading(false);
    }
  };

  if (editing) {
    return (
      <span className="edit-inline">
        <textarea
          className="edit-input"
          value={text}
          onChange={e => setText(e.target.value)}
        />
        <button onClick={handleSave} disabled={loading} className="edit-btn save">
          <FiCheck />
        </button>
        <button onClick={() => setEditing(false)} className="edit-btn cancel">
          <FiX />
        </button>
      </span>
    );
  }

  return (
    <span className="edit-inline">
      {children(text)}
      <button onClick={() => setEditing(true)} className="edit-btn trigger">
        <FiEdit2 />
      </button>
    </span>
  );
}
