import React, { useState, useRef } from 'react';
import { FiEdit2 } from 'react-icons/fi';
import EditSection from './EditSection';
import '../styles/HoverEdit.css';

export default function HoverEdit({ component, field, value: initialValue, children }) {
  const [editing, setEditing] = useState(false);
  const childRef = useRef(initialValue);

  // Once saved, update our stored value so the hover sees the new text
  const handleSave = newValue => {
    childRef.current = newValue;
    setEditing(false);
  };

  if (editing) {
    return (
      <EditSection
        component={component}
        field={field}
        value={childRef.current}
        onSave={handleSave}
      >
        {val => children(val)}
      </EditSection>
    );
  }

  return (
    <span className="hover-edit">
      {children(childRef.current)}
      <button
        className="hover-edit__btn"
        onClick={() => setEditing(true)}
        aria-label="Edit"
      >
        <FiEdit2 size={16} />
      </button>
    </span>
  );
}
