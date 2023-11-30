import { availablePlansMock } from '@/mock/availablePlans';
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  if (request.method === 'GET') {
    return response.json(availablePlansMock);
  }

  return response.status(500).send({ message: 'invalid method.' });
}
