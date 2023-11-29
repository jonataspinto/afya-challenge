import { APIError } from '../errors/ApiError';

export class HttpClient {
  baseUrl: string;
  headers: HeadersInit;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
    this.headers = {
      'Content-Type': 'application/json',
    };
  }

  async get<T = any>(path: string, headers?: HeadersInit) {
    let data = null;

    if (headers) {
      this.headers = {
        ...this.headers,
        ...headers,
      };
    }

    const response = await fetch(`${this.baseUrl}${path}`, {
      headers: this.headers,
    });

    const contentType = response.headers.get('content-type');

    if (contentType?.includes('application/json')) {
      data = await response.json();
    }

    if (response.ok) {
      return data as T;
    }

    throw new APIError(response);
  }

  async post<T = any, B = any>(path: string, body: B, headers?: HeadersInit) {
    let data = null;

    if (headers) {
      this.headers = {
        ...this.headers,
        ...headers,
      };
    }

    const response = await fetch(`${this.baseUrl}${path}`, {
      headers: this.headers,
      body: JSON.stringify(body),
      method: 'POST',
    });

    const contentType = response.headers.get('content-type');

    if (contentType?.includes('application/json')) {
      data = await response.json();
    }

    if (response.ok) {
      return data as T;
    }

    throw new APIError(response);
  }
}
