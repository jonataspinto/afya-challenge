import { HttpClient } from './clients/httpClient';

export const getPLans = async () => {
  const requester = new HttpClient('/api');

  return requester.get<PlanDTO[]>('/offer');
};
