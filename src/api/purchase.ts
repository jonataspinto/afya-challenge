import { pebMed } from './constants/urls';
import { requester } from './requester';

export const purchase = async (body: PurchaseBody) => {
  const response = await requester(`${pebMed}/subscription`, body);

  if (!response.ok) {
    throw new Error('Failed to fetch offers data');
  }

  return response.json() as unknown as PurchaseResponse;
};
