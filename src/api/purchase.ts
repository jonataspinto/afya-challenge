import { HttpClient } from './clients/httpClient';
import { pebMed } from './constants/urls';

export const purchase = async (body: PurchaseBody) => {
  const requester = new HttpClient('/api');

  return requester.post<PurchaseResponse>('/subscription', body);
};

export const getPurchaseData = async (id: string) => {
  const requester = new HttpClient('/api');

  return requester.get<PurchaseResponse>(`/subscription/${id}`);
};
