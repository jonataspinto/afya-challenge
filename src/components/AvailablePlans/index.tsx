import { Dispatch, HtmlHTMLAttributes, SetStateAction } from 'react';
import { AvailablePlanItem } from './AvailablePlanItem';
import styles from './availablePlans.module.scss';
interface AvailablePlansProps extends HtmlHTMLAttributes<HTMLUListElement> {
  plans: PlanDTO[];
  selectedPlanId?: string;
  setSelectedPlanId: Dispatch<SetStateAction<string | undefined>>;
}

export const AvailablePlans = ({
  plans,
  className,
  selectedPlanId,
  setSelectedPlanId,
  ...restProps
}: AvailablePlansProps) => {
  return (
    <ul {...restProps} className={`${styles.container} ${className}`}>
      {plans?.map((planData) => (
        <AvailablePlanItem
          key={planData.id}
          planData={planData}
          selectedPlanId={selectedPlanId}
          setSelectedPlanId={setSelectedPlanId}
        />
      ))}
    </ul>
  );
};
