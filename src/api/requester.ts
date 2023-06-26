export const requester = async <B = XMLHttpRequestBodyInit>(
  requestApi: RequestInfo,
  body?: B,
  requestInit?: RequestInit,
) => {
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
    ...requestInit?.headers,
  };

  const defaultRequestInit = body
    ? {
        body: JSON.stringify(body),
        method: 'POST',
      }
    : undefined;

  const mergedRequestInit = {
    ...defaultRequestInit,
    ...requestInit,
    headers,
  };

  return fetch(requestApi, mergedRequestInit);
};
