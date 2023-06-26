export const percentFormatter = (percentage: number) => {
  const config = {
    style: 'percent',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  };

  const { format } = Intl.NumberFormat('en-US', config);

  return format(percentage);
};

export const formatCpf = (cpf: string) => {
  const draft = cpf.replace(/\D/g, '');

  return draft.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4');
};

export const formatPlanTitle = ({ title, description }: PlanDTO) => {
  return `${title} | ${description}`;
};

export const formatPlanPrice = (price: number) => {
  const { format } = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  return format(price);
};

export const formatPlanCondition = ({
  fullPrice,
  discountAmmount,
}: PlanDTO) => {
  return `De ${formatPlanPrice(fullPrice)} Por ${formatPlanPrice(
    fullPrice - discountAmmount,
  )}`;
};

export const formatPlanInstallment = (
  { fullPrice, discountAmmount, installments }: PlanDTO,
  style: 'clean' | 'large' = 'large',
) => {
  const installment = (fullPrice - discountAmmount) / installments;
  const formattedInstallment = formatPlanPrice(installment);

  if (style === 'large') {
    return `${installments}x de ${formattedInstallment}`;
  }

  return `${installments}x ${formattedInstallment}`;
};
