import { QueryKey, UseQueryOptions, useQuery } from '@tanstack/react-query';
import { getPlans } from '../getPlans';
import { QueriesKey } from '../constants/queries';

export const usePlansQuery = (
  queryOptions?: Omit<
    UseQueryOptions<
      PlanDTO[] | undefined,
      unknown,
      PlanDTO[] | undefined,
      QueryKey
    >,
    'queryFn'
  >,
) => {
  return useQuery({
    queryKey: [QueriesKey.plans],
    queryFn: getPlans,
    ...queryOptions,
  });
};
