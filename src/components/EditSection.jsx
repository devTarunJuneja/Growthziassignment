// src/components/EditSection.jsx
import React, { useState } from 'react';
import { FiCheck, FiX } from 'react-icons/fi';
import '../styles/EditSection.css';
import { updateSection } from '../utils/api';

export default function EditSection({ component, field, value, onSave, children }) {
  const [text, setText] = useState(value);
  const [busy, setBusy] = useState(false);

  const handleSave = async () => {
    setBusy(true);
    try {
      await updateSection({ component, field, value: text });
      if (onSave) onSave(text);
    } catch {
      // swallow error and still save locally
      if (onSave) onSave(text);
    } finally {
      setBusy(false);
    }
  };

  return busy ? null : (
    <span className="edit-section-wrapper">
      <textarea
        className="edit-section-input"
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button onClick={handleSave} className="edit-section-btn save"><FiCheck /></button>
      <button onClick={() => setText(value)} className="edit-section-btn cancel"><FiX /></button>
    </span>
  );
}
