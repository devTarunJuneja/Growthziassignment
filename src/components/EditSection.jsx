// src/components/EditSection.jsx
import React, { useState } from 'react';
import { FiEdit2, FiCheck, FiX } from 'react-icons/fi';
import { updateSection } from '../utils/api';
import '../styles/EditSection.css'; // Assuming you have a CSS file for styles

export default function EditSection({
  component,
  field,
  value: initialValue,
  children,       // a render‑prop function for custom rendering
}) {
  const [editing, setEditing] = useState(false);
  const [value, setValue]       = useState(initialValue);
  const [loading, setLoading]   = useState(false);
  const [error, setError]       = useState(null);

  const handleSave = async () => {
    setLoading(true);
    setError(null);
    try {
      await updateSection({ component, field, value });
      setEditing(false);
    } catch (e) {
      setError('Save failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (editing) {
    return (
      <div className="edit-section">
        <textarea
          className="edit-input"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
        <button
          className="edit-btn save"
          onClick={handleSave}
          disabled={loading}
          title="Save"
        >
          <FiCheck />
        </button>
        <button
          className="edit-btn cancel"
          onClick={() => {
            setValue(initialValue);
            setEditing(false);
          }}
          title="Cancel"
        >
          <FiX />
        </button>
        {error && <div className="edit-error">{error}</div>}
      </div>
    );
  }

  return (
    <div className="edit-section">
      {typeof children === 'function'
        ? children(value)
        : <span className="display-text">{value}</span>
      }
      <button
        className="edit-btn trigger"
        onClick={() => setEditing(true)}
        title="Edit"
      >
        <FiEdit2 />
      </button>
    </div>
  );
}
