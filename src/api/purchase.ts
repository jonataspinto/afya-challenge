import { HttpClient } from './clients/httpClient';
import { pebMed } from './constants/urls';

export const purchase = async (body: PurchaseBody) => {
  const requester = new HttpClient(pebMed);

  return requester.post<PurchaseResponse>('/subscription', body);
};

export const getPurchaseData = async () => {
  const requester = new HttpClient(pebMed);

  return requester.get<PurchaseResponse>('/subscription');
};
