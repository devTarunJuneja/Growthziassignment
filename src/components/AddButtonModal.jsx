import React, { useState } from 'react';
import '../styles/AddButtonModal.css';

const PAGES = [
  { label: 'Home', url: '/' },
  { label: 'About', url: '/about' },
  { label: 'Service', url: '/service' },
  { label: 'Contact', url: '/contact' },
];

export default function AddButtonModal({ isOpen, close, onAdd }) {
  const [linkType, setLinkType] = useState('page');
  const [pageUrl, setPageUrl]   = useState(PAGES[0].url);
  const [customUrl, setCustomUrl] = useState('');
  const [style, setStyle]       = useState('fill');
  const [text, setText]         = useState('Button');
  const [color, setColor]       = useState('#fbbf24'); // default gold
  const [size, setSize]         = useState('medium');
  const [error, setError]       = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    setError('');
    const url = linkType === 'page' ? pageUrl : customUrl.trim();
    if (!url || !text.trim()) {
      setError('Please enter both URL and text.');
      return;
    }
    onAdd({ url, text: text.trim(), style, color, size });
    close();
    // reset to defaults
    setLinkType('page');
    setPageUrl(PAGES[0].url);
    setCustomUrl('');
    setStyle('fill');
    setText('Button');
    setColor('#fbbf24');
    setSize('medium');
  };

  if (!isOpen) return null;
  return (
    <div className="modal-backdrop">
      <div className="modal-card wide">
        <button className="modal-close" onClick={close}>&times;</button>
        <h3>Link Button to page or URL</h3>
        <p className="modal-sub">
          You can select any specific page or paste URL
        </p>
        {error && <p className="modal-error">{error}</p>}
        <form onSubmit={handleSubmit} className="modal-form">
          <div className="modal-row">
            <label>Link Button To</label>
            <select
              value={linkType}
              onChange={e => setLinkType(e.target.value)}
            >
              <option value="page">Select Page</option>
              <option value="url">Custom URL</option>
            </select>
          </div>
          {linkType === 'page' ? (
            <div className="modal-row">
              <label>Page</label>
              <select
                value={pageUrl}
                onChange={e => setPageUrl(e.target.value)}
              >
                {PAGES.map(p => (
                  <option key={p.url} value={p.url}>{p.label}</option>
                ))}
              </select>
            </div>
          ) : (
            <div className="modal-row">
              <label>URL</label>
              <input
                type="text"
                placeholder="https://example.com"
                value={customUrl}
                onChange={e => setCustomUrl(e.target.value)}
              />
            </div>
          )}

          <div className="modal-row">
            <label>Button Style</label>
            <select value={style} onChange={e => setStyle(e.target.value)}>
              <option value="fill">Fill</option>
              <option value="outline">Outline</option>
            </select>
          </div>

          <div className="modal-row">
            <label>Button Text</label>
            <input
              type="text"
              value={text}
              onChange={e => setText(e.target.value)}
            />
          </div>

          <div className="modal-row">
            <label>Color</label>
            <input
              type="color"
              value={color}
              onChange={e => setColor(e.target.value)}
            />
          </div>

          <div className="modal-row">
            <label>Button Size</label>
            <select value={size} onChange={e => setSize(e.target.value)}>
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
            </select>
          </div>

          <button type="submit" className="modal-submit">
            Save Button
          </button>
        </form>
      </div>
    </div>
  );
}
