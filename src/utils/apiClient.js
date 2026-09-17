const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost/backend-cms/api';

/**
 * Reusable fetch wrapper for API calls
 * @param {string} endpoint - API endpoint (e.g., '/contact.php')
 * @param {object} options - Fetch options (method, body, etc.)
 */
// In-memory cache for client-side navigation speedup
const cache = new Map();
const CACHE_DURATION = 60 * 1000; // 1 minute

export async function fetchApi(endpoint, options = {}) {
  const url = `${API_BASE_URL}${endpoint}`;
  
  // Use cache for GET requests
  const isGet = !options.method || options.method === 'GET';
  if (isGet && cache.has(endpoint)) {
    const cachedData = cache.get(endpoint);
    if (Date.now() - cachedData.timestamp < CACHE_DURATION) {
      return cachedData.data;
    }
  }

  const defaultHeaders = {
    'Accept': 'application/json',
  };

  // Only add Content-Type if we have a body and it's not FormData
  if (options.body && !(options.body instanceof FormData)) {
    defaultHeaders['Content-Type'] = 'application/json';
    if (typeof options.body === 'object') {
      options.body = JSON.stringify(options.body);
    }
  }

  const fetchOptions = {
    next: { revalidate: 60 }, // Cache for 60 seconds on server
    ...options,
    headers: {
      ...defaultHeaders,
      ...options.headers,
    },
  };

  try {
    const response = await fetch(url, fetchOptions);
    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.message || `API Error: ${response.status}`);
    }
    
    // Save to cache
    if (isGet) {
      cache.set(endpoint, { data, timestamp: Date.now() });
    }
    
    return data;
  } catch (error) {
    console.error(`Error fetching ${endpoint}:`, error);
    throw error;
  }
}
