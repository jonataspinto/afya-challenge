import { render, screen } from '@testing-library/react';
import { Header } from '.';
import { LangProvider, ptBR } from '@/contexts/langContext';

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
  });
});
