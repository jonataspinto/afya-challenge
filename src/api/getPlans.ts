import { HttpClient } from './clients/httpClient';
import { pebMed } from './constants/urls';

export const getPLans = async () => {
  const requester = new HttpClient(pebMed);

  return requester.get<PlanDTO[]>('/offer');
};
