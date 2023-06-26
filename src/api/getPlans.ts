import { pebMed } from './constants/urls';
import { requester } from './requester';

export const getPLans = async () => {
  const response = await requester(`${pebMed}/offer`);

  if (!response.ok) {
    throw new Error('Failed to fetch offers data');
  }

  return response.json() as unknown as PlanDTO[];
};
