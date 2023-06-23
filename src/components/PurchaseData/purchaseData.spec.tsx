import { render, screen } from '@testing-library/react';
import { LangProvider } from '@/contexts/langContext';
import { purchaseDataMock } from '@/mock/purchase';
import { availablePlansMock } from '@/mock/availablePlans';
import { userDataMock } from '@/mock/userData';
import { formatCpf, formatPlanTitle } from '@/utils/formatters';
import { PurchaseData } from './';

const contractedPlan = availablePlansMock[0];

describe('PurchaseData', () => {
  it('should render data of purchase', () => {
    const contractedPlanDescQuery = 'contracted plan';

    render(
      <LangProvider>
        <PurchaseData purchase={purchaseDataMock} userData={userDataMock} />
      </LangProvider>,
    );

    expect(screen.getByRole('img', { name: /star icon/i })).toBeInTheDocument();

    expect(
      screen.getByRole('heading', {
        name: new RegExp(formatPlanTitle(contractedPlan), 'i'),
      }),
    ).toBeInTheDocument();

    expect(screen.getByTestId(contractedPlanDescQuery)).toBeInTheDocument();

    expect(screen.getByText(userDataMock.email)).toBeInTheDocument();

    expect(screen.getByText(formatCpf(userDataMock.cpf))).toBeInTheDocument();
  });

  it('not should render component if purchase.id is not found', () => {
    render(
      <LangProvider>
        <PurchaseData
          purchase={{ ...purchaseDataMock, offerId: 230 }}
          userData={userDataMock}
        />
      </LangProvider>,
    );

    expect(
      screen.queryByRole('heading', {
        name: new RegExp(formatPlanTitle(contractedPlan), 'i'),
      }),
    ).not.toBeInTheDocument();
  });
});
