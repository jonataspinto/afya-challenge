import { render, screen } from '@testing-library/react';
import { CheckoutView } from '.';
import { LangProvider, ptBR } from '@/contexts/langContext';

describe('Checkout', () => {
  it('should render Checkout View', () => {
    render(
      <LangProvider>
        <CheckoutView />
      </LangProvider>,
    );

    expect(
      screen.getByRole('heading', {
        name: new RegExp(ptBR.checkoutPage.paymentDataSection.heading, 'i'),
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        new RegExp(ptBR.checkoutPage.paymentDataSection.description, 'i'),
      ),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', {
        name: new RegExp(ptBR.checkoutPage.plansSection.heading, 'i'),
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByText(new RegExp(ptBR.checkoutPage.plansSection.info, 'i')),
    ).toBeInTheDocument();
  });
});
