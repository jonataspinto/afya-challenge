import { HTMLAttributes } from 'react';
import { availablePlansMock } from '@/mock/availablePlans';
import {
  formatPlanInstallment,
  formatPlanPrice,
  formatPlanTitle,
  formatCpf,
} from '@/utils/formatters';
import { Star } from '../icons/Star';
import styles from './purchaseData.module.scss';

interface PurchaseDataProps extends HTMLAttributes<HTMLDivElement> {
  purchase?: PurchaseResponse;
  userData: {
    email: string;
    cpf: string;
  };
}

export const PurchaseData = ({
  purchase,
  userData,
  className,
  ...restProps
}: PurchaseDataProps) => {
  const contractedPlan = availablePlansMock.find(
    ({ id }) => id === purchase?.offerId,
  );

  if (!contractedPlan) {
    return null;
  }

  return (
    <div {...restProps} className={`${styles.container} ${className}`}>
      <div className={styles.contractedPlan}>
        <span className={styles.contractedPlan_starIcon}>
          <Star ariaLabel="star icon" />
        </span>
        <div>
          <h3 className={styles.contractedPlan_title}>
            {formatPlanTitle(contractedPlan)}
          </h3>
          <span
            className={styles.contractedPlan_condition}
            data-testid="contracted plan"
          >
            {`${formatPlanPrice(
              contractedPlan.fullPrice,
            )} | ${formatPlanInstallment(contractedPlan, 'clean')}`}
          </span>
        </div>
      </div>

      <div className={styles.userData}>
        <span
          className={`${styles.userData_label} ${styles.userData_emailLabel}`}
        >
          E-mail
        </span>
        <span
          className={`${styles.userData_label} ${styles.userData_cpfLabel}`}
        >
          CPF
        </span>
        <span
          className={`${styles.userData_value} ${styles.userData_emailValue}`}
        >
          {userData?.email}
        </span>
        <span
          className={`${styles.userData_value} ${styles.userData_cpfValue}`}
        >
          {formatCpf(userData?.cpf)}
        </span>
      </div>
    </div>
  );
};
