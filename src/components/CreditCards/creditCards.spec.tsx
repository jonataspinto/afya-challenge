import { render, screen } from '@testing-library/react';
import { CreditCards } from '.';

const creditCardList = [
  'americanexpress',
  'visa',
  'mastercard',
  'elo',
  'dinnersclub',
];

describe('CreditCards', () => {
  it('should render a list of accepted credit cards', () => {
    render(<CreditCards selectedCard="americanexpress" />);

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
    render(<CreditCards selectedCard="americanexpress" />);

    expect(
      screen.getByRole('img', {
        name: /iugu logo/i,
      }),
    ).toBeInTheDocument();
  });
});
