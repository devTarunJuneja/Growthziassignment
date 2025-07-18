// src/utils/api.js

/**
 * Sends a POST request to update a section’s content.
 *
 * @param {Object} data
 * @param {string} data.component - The component name, e.g. "HeroSection"
 * @param {string} data.field     - The field identifier, e.g. "title"
 * @param {string} data.value     - The new text value
 *
 * @returns {Promise<Object>} The parsed JSON response.
 * @throws {Error} If the network request fails or returns a non-2xx status.
 */
export async function updateSection({ component, field, value }) {
  const payload = { component, field, value };

  const res = await fetch('/update-section', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const errBody = await res.text().catch(() => null);
    throw new Error(
      `updateSection failed: ${res.status} ${res.statusText}` +
      (errBody ? ` — ${errBody}` : '')
    );
  }

  return res.json();
}
