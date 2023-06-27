import { creditCardBrandMapper, creditCardsName } from './creditCard';

const numbers = {
  [creditCardsName.VISA]: '4929854236171955',
  [creditCardsName.MASTERCARD]: '5580371274986399',
  [creditCardsName.AMERICANEXPRESS]: '371449635398431',
  [creditCardsName.DIBBERSCLUB]: '30063601231816',
  [creditCardsName.ELO]: '5066991111111118',
};

describe('Credit card Brand validator', () => {
  it('should to return true for each', () => {
    expect(
      creditCardBrandMapper.some(({ pattern }) =>
        new RegExp(pattern).test(numbers.visa),
      ),
    ).toBe(true);
    expect(
      creditCardBrandMapper.some(({ pattern }) =>
        new RegExp(pattern).test(numbers.mastercard),
      ),
    ).toBe(true);
    expect(
      creditCardBrandMapper.some(({ pattern }) =>
        new RegExp(pattern).test(numbers.americanexpress),
      ),
    ).toBe(true);
    expect(
      creditCardBrandMapper.some(({ pattern }) =>
        new RegExp(pattern).test(numbers.dinnersclub),
      ),
    ).toBe(true);
    expect(
      creditCardBrandMapper.some(({ pattern }) =>
        new RegExp(pattern).test(numbers.elo),
      ),
    ).toBe(true);
  });
});
