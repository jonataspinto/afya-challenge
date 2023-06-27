import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import { LangProvider, ptBR } from '@/contexts/langContext';
import { HomeView } from './index';

const mockRouterPush = jest.fn().mockName('push');

jest.mock('next/router', () => ({
  useRouter: () => ({
    push: mockRouterPush,
  }),
}));

describe('HomeView', () => {
  it('should render Home View', async () => {
    render(
      <LangProvider>
        <HomeView />
      </LangProvider>,
    );

    expect(
      screen.getByRole('heading', {
        name: new RegExp(ptBR.homePage.heading, 'i'),
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByText(new RegExp(ptBR.homePage.subheading, 'i')),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', {
        name: new RegExp(ptBR.homePage.reasonsToChooseSection.heading, 'i'),
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', {
        name: new RegExp(ptBR.homePage.reasonsToChooseSection.subheading, 'i'),
      }),
    ).toBeInTheDocument();

    ptBR.homePage.reasonsToChooseSection.reasons.forEach((item) => {
      expect(
        screen.getByRole('listitem', { name: new RegExp(item, 'i') }),
      ).toBeInTheDocument();
    });

    const ctaButton = screen.getByRole('button', {
      name: new RegExp(ptBR.homePage.reasonsToChooseSection.seePlansCTA.label),
    });

    await userEvent.click(ctaButton);

    expect(mockRouterPush).toHaveBeenCalledWith(
      ptBR.homePage.reasonsToChooseSection.seePlansCTA.path,
    );
  });
});
