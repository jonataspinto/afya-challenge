import { useQuery } from '@tanstack/react-query';
import { getPlans } from '../getPlans';
import { QueriesKey } from '../constants/queries';

export const usePlansQuery = () => {
  return useQuery({ queryKey: [QueriesKey.plans], queryFn: getPlans });
};
