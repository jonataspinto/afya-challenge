import { render, screen } from '@testing-library/react';
import { Header } from '.';
import { LangProvider, ptBR } from '@/contexts/langContext';

describe('Header', () => {
  fit('should render Header', async () => {
    render(
      <LangProvider>
        <Header />
      </LangProvider>,
    );

    const goBackButton = screen.getByRole('button', {
      name: new RegExp(ptBR.goToBackButtonLabel, 'i'),
    });

    const logo = screen.getByTitle(new RegExp(ptBR.logoAltText, 'i'));

    expect(goBackButton).toBeInTheDocument();

    expect(logo).toBeInTheDocument();
  });
});
