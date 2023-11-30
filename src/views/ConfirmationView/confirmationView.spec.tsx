import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import { LangProvider, ptBR } from '@/contexts/langContext';
import { ConfirmationView } from './index';

const mockRouterPush = jest.fn().mockName('push');

jest.mock('next/router', () => ({
  useRouter: () => ({
    push: mockRouterPush,
    query: { id: 1 },
  }),
}));

describe('ConfirmationView', () => {
  it('should render Confirmation View', async () => {
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

    const goToHomeButton = screen.getByRole('button', {
      name: new RegExp(ptBR.confirmationPage.goToHome.label),
    });

    await userEvent.click(goToHomeButton);

    expect(mockRouterPush).toHaveBeenCalledWith(
      ptBR.confirmationPage.goToHome.path,
    );
  });
});
