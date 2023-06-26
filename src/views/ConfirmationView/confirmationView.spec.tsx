import { render, screen } from '@testing-library/react';
import { LangProvider, ptBR } from '@/contexts/langContext';
import { ConfirmationView } from './index';

describe('ConfirmationView', () => {
  it('should render Confirmation View', () => {
    render(
      <LangProvider>
        <ConfirmationView />
      </LangProvider>,
    );

    expect(
      screen.getByRole('img', { name: /check success icon/i }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', {
        name: new RegExp(ptBR.confirmationPage.heading, 'i'),
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByText(new RegExp(ptBR.confirmationPage.description, 'i')),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('link', {
        name: new RegExp(ptBR.confirmationPage.manageSubscription.label, 'i'),
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('button', {
        name: new RegExp(ptBR.confirmationPage.goToHome.label, 'i'),
      }),
    ).toBeInTheDocument();
  });
});
