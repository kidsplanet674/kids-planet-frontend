const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost/backend-cms/api';

export async function serverFetch(endpoint, revalidate = 60) {
  try {
    const res = await fetch(`${API_BASE}${endpoint}`, {
      next: { revalidate }
    });
    if (!res.ok) return null;
    return res.json();
  } catch (e) {
    console.error(`serverFetch error for ${endpoint}:`, e);
    return null;
  }
}
