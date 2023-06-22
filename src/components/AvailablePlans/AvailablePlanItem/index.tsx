import { HtmlHTMLAttributes, useCallback } from 'react';
import styles from './availablePlanItem.module.scss';

type PlanDTO = {
  id: string | number;
  title: string;
  description: string;
  order: number;
  discountPercentage: number;
  fullPrice: number;
  discountAmmount: number;
  installments: number;
};

interface AvailablePlanItemProps extends HtmlHTMLAttributes<HTMLUListElement> {
  planData: PlanDTO;
}

export const AvailablePlanItem = ({ planData }: AvailablePlanItemProps) => {
  const percentFormatter = useCallback((percentage: number) => {
    const config = {
      style: 'percent',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    };

    const { format } = Intl.NumberFormat('en-US', config);

    return format(percentage);
  }, []);

  const formatTitle = useCallback(({ title, description }: PlanDTO) => {
    return `${title} | ${description}`;
  }, []);

  const formatCondition = useCallback(
    ({ fullPrice, discountAmmount }: PlanDTO) => {
      const { format } = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      });

      return `De ${format(fullPrice)} Por ${format(
        fullPrice - discountAmmount,
      )}`;
    },
    [],
  );

  const formatInstallment = useCallback(
    ({ fullPrice, discountAmmount, installments }: PlanDTO) => {
      const installment = fullPrice / installments;
      const formattedInstallment = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(installment);

      return `${installments}x de ${formattedInstallment}`;
    },
    [],
  );

  return (
    <li
      key={planData.id}
      title={`${planData.title} | ${planData.description}`}
      className={styles.container}
    >
      <label
        htmlFor={String(planData.id)}
        className={styles.planDetails}
        title={String(planData.id)}
        aria-label={String(planData.id)}
      >
        <div className={styles.planDetails_group}>
          <h3 className={styles.planDetails_title}>{formatTitle(planData)}</h3>
          <p className={styles.planDetails_condition}>
            {formatCondition(planData)}
          </p>
          <span className={styles.planDetails_installment}>
            {formatInstallment(planData)}
          </span>
        </div>
        <span
          data-testid={`discount plan #ID ${planData.id}`}
          className={styles.planDetails_discountBadge}
        >
          {`-${percentFormatter(planData.discountPercentage)}`}
        </span>
      </label>
      <input
        type="radio"
        name={String(planData.id)}
        value={String(planData.id)}
        id={String(planData.id)}
      />
    </li>
  );
};
