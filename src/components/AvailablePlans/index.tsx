import { HtmlHTMLAttributes } from 'react';
import { AvailablePlanItem } from './AvailablePlanItem';
import styles from './availablePlans.module.scss';
interface AvailablePlansProps extends HtmlHTMLAttributes<HTMLUListElement> {
  plans: PlanDTO[];
}

export const AvailablePlans = ({
  plans,
  className,
  ...restProps
}: AvailablePlansProps) => {
  return (
    <ul
      {...restProps}
      className={`${styles.container} ${className ? className : ''}`}
    >
      {plans?.map((planData) => (
        <AvailablePlanItem key={planData.id} planData={planData} />
      ))}
    </ul>
  );
};
