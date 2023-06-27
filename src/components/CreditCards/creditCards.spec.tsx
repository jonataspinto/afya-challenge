import { render, screen } from '@testing-library/react';
import { CreditCards } from '.';
import { creditCardsName } from '@/utils/creditCard';

const creditCardList = [
  'americanexpress',
  'visa',
  'mastercard',
  'elo',
  'dinnersclub',
];

describe('CreditCards', () => {
  it('should render a list of accepted credit cards', () => {
    render(<CreditCards selectedCard={creditCardsName.AMERICANEXPRESS} />);

    creditCardList.forEach((item) => {
      expect(
        screen.getByRole('img', { name: new RegExp(`${item} logo`, 'i') }),
      ).toBeInTheDocument();
    });

    expect(
      screen.getByRole('listitem', {
        name: new RegExp(creditCardList[0], 'i'),
      }),
    ).toHaveClass('isSelected');
  });

  it('should render an image from the payment provider', () => {
    render(<CreditCards selectedCard={creditCardsName.AMERICANEXPRESS} />);

    expect(
      screen.getByRole('img', {
        name: /iugu logo/i,
      }),
    ).toBeInTheDocument();
  });
});
