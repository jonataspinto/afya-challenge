import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import { Header } from '.';
import { LangProvider, ptBR } from '@/contexts/langContext';

const mockBack = jest.fn().mockName('back');

jest.mock('next/router', () => ({
  useRouter: () => ({
    back: mockBack,
  }),
}));

describe('Header', () => {
  it('should render Header', async () => {
    render(
      <LangProvider>
        <Header />
      </LangProvider>,
    );

    const goBackButton = screen.getByRole('button', {
      name: new RegExp(ptBR.goToBackButtonLabel, 'i'),
    });

    const goBackButtonIcon = screen.getByTitle(
      new RegExp(`${ptBR.goToBackButtonLabel}: icon`, 'i'),
    );

    const logo = screen.getByTitle(new RegExp(ptBR.logoAltText, 'i'));

    expect(goBackButton).toBeInTheDocument();
    expect(goBackButtonIcon).toBeInTheDocument();
    expect(logo).toBeInTheDocument();

    await userEvent.click(goBackButton);

    expect(mockBack).toBeCalled();
  });
});
