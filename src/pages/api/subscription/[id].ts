import { purchaseDataMock } from '@/mock/purchase';
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  if (request.method === 'GET') {
    const { id } = request.query;

    if (typeof id === 'string' && Number(id) === purchaseDataMock.id) {
      return response.json(purchaseDataMock);
    } else {
      return response.status(404).send({ message: 'not found' });
    }
  }

  return response.status(500).send({ message: 'invalid method.' });
}
