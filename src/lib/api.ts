// API helper for calling the ka26.shop backend
const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'https://ka26.shop';

interface FetchOptions {
  method?: string;
  body?: Record<string, unknown>;
}

export async function apiFetch<T>(endpoint: string, options?: FetchOptions): Promise<T> {
  const res = await fetch(`${API_BASE}${endpoint}`, {
    method: options?.method || 'GET',
    headers: options?.body ? { 'Content-Type': 'application/json' } : undefined,
    body: options?.body ? JSON.stringify(options.body) : undefined,
  });

  if (!res.ok) {
    const data = await res.json().catch(() => ({ error: 'Request failed' }));
    throw new Error(data.error || `API error: ${res.status}`);
  }

  return res.json();
}

// Types for website data
export interface Job {
  id: number;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  requirements: string | null;
  salary: string | null;
  createdAt: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  type: 'general' | 'support' | 'partnership' | 'feedback';
}

export interface JobApplicationData {
  name: string;
  email: string;
  phone: string;
  coverLetter?: string;
  jobId: number;
}
