/**
 * Sends a POST to /update-section to log inline edits.
 * Replace window.location.origin if your backend is elsewhere.
 */
export async function updateSection({ component, field, value }) {
  const res = await fetch(`${window.location.origin}/update-section`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ component, field, value })
  });
  if (!res.ok) {
    throw new Error(`Status ${res.status}`);
  }
  return res.json();
}
