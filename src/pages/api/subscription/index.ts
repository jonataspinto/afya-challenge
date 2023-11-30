import { purchaseDataMock } from '@/mock/purchase';
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  if (request.method === 'POST') {
    const { creditCardCPF, creditCardExpirationDate, offerId, couponCode } =
      request.body;

    // simulate error
    if (couponCode === 'mock') {
      return response.status(400).send({ message: 'coupon invalid.' });
    }

    return response.json({
      ...purchaseDataMock,
      creditCardCPF,
      creditCardExpirationDate,
      offerId,
    });
  }

  return response.status(500).send({ message: 'invalid method.' });
}
