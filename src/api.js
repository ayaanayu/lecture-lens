const base = (import.meta.env.VITE_API_BASE_URL || '').replace(/\/$/, '');

export async function apiPost(path, payload) {
  if (!base) return { ok: false, mode: 'demo', message: 'No API base URL configured.' };
  try {
    const response = await fetch(`${base}${path}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify(payload)
    });
    const data = await response.json().catch(() => ({}));
    if (!response.ok) throw new Error(data.message || `Request failed (${response.status})`);
    return { ok: true, data };
  } catch (error) {
    return { ok: false, mode: 'demo', message: error.message || 'API unavailable.' };
  }
}

export function loadLocal(key, fallback) {
  try {
    const value = localStorage.getItem(`lecturelens:${key}`);
    return value ? JSON.parse(value) : fallback;
  } catch {
    return fallback;
  }
}

export function saveLocal(key, value) {
  try { localStorage.setItem(`lecturelens:${key}`, JSON.stringify(value)); } catch { /* private mode / quota */ }
}
