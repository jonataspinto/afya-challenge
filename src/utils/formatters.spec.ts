import { userDataMock } from '@/mock/userData';
import {
  formatCpf,
  formatPlanCondition,
  formatPlanInstallment,
  formatPlanPrice,
  formatPlanTitle,
  percentFormatter,
} from './formatters';
import { purchaseDataMock } from '@/mock/purchase';
import { availablePlansMock } from '@/mock/availablePlans';

describe('General formatters', () => {
  it('Percent - should to return value formatted as percentage', () => {
    const percentage = 0.1;

    expect(percentFormatter(percentage)).toBe('10%');
  });

  it('CPF - should return value formatted with dot and dashes', () => {
    const cpf = userDataMock.cpf;

    expect(formatCpf(cpf)).toBe('000.000.000-00');
  });
});

describe('Specific use case formatters', () => {
  it('Plan title', () => {
    const planData = availablePlansMock[0];

    expect(formatPlanTitle(planData)).toBe(
      `${planData.title} | ${planData.description}`,
    );
  });

  it('Plan price', () => {
    const planData = availablePlansMock[0];

    expect(formatPlanPrice(planData.fullPrice)).toMatchInlineSnapshot(
      `"R$ 600,00"`,
    );
  });

  it('Plan condition', () => {
    const planData = availablePlansMock[0];

    expect(formatPlanCondition(planData)).toMatchInlineSnapshot(
      `"De R$ 600,00 Por R$ 540,00"`,
    );
  });

  it('Plan installment - ', () => {
    const planData = availablePlansMock[0];

    expect(formatPlanInstallment(planData)).toMatchInlineSnapshot(
      `"12x de R$ 50,00"`,
    );
  });
});
