import { Dispatch, HtmlHTMLAttributes, SetStateAction } from 'react';
import { AvailablePlanItem } from './AvailablePlanItem';
import styles from './availablePlans.module.scss';
import { usePlansQuery } from '@/api/hooks/usePlansQuery';
interface AvailablePlansProps extends HtmlHTMLAttributes<HTMLUListElement> {
  selectedPlanId?: string;
  setSelectedPlanId: Dispatch<SetStateAction<string | undefined>>;
}

export const AvailablePlans = ({
  className,
  selectedPlanId,
  setSelectedPlanId,
  ...restProps
}: AvailablePlansProps) => {
  const { data: plans } = usePlansQuery();

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
