import { HtmlHTMLAttributes } from 'react';
import { formatPlanCondition, formatPlanInstallment, formatPlanTitle, percentFormatter } from '@/utils/formatters';
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
          <h3 className={styles.planDetails_title}>{formatPlanTitle(planData)}</h3>
          <p className={styles.planDetails_condition}>
            {formatPlanCondition(planData)}
          </p>
          <span className={styles.planDetails_installment}>
            {formatPlanInstallment(planData)}
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
