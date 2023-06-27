import { removeMasks } from './removeMasks';

const payloadMock = {
  installments: 1,
  creditCardNumber: '5162 3070 9082 6118',
  creditCardHolder: 'Kent C. Dodds',
  creditCardExpirationDate: '12/12',
  creditCardCVV: '123',
  creditCardCPF: '124.523.537-99',
  couponCode: '',
};

describe('removeMasks', () => {
  it('should remove masks of values', () => {
    expect(removeMasks(payloadMock, ['.', '-', ' '], ['creditCardHolder']))
      .toMatchInlineSnapshot(`
      {
        "couponCode": "",
        "creditCardCPF": "12452353799",
        "creditCardCVV": "123",
        "creditCardExpirationDate": "12/12",
        "creditCardHolder": "Kent C. Dodds",
        "creditCardNumber": "5162 3070 9082 6118",
        "installments": 1,
      }
    `);
  });
});
