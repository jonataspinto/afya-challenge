import { HtmlHTMLAttributes } from 'react';

type PlanDTO = {
  id: string | number;
  title: string;
  description: string;
  order: number;
  discountPercentage: number;
};

interface AvailablePlansProps extends HtmlHTMLAttributes<HTMLUListElement> {
  plans: PlanDTO[];
}

export const AvailablePlans = ({
  plans,
  ...restProps
}: AvailablePlansProps) => {
  return (
    <ul {...restProps}>
      {plans?.map((planData) => (
        <li key={planData.id}>{planData.title}</li>
      ))}
    </ul>
  );
};
