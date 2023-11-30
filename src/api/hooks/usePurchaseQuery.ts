import { QueryKey, UseQueryOptions, useQuery } from '@tanstack/react-query';
import { getPurchaseData } from '../purchase';
import { QueriesKey } from '../constants/queries';

export const usePurchaseQuery = (
  id: string = '',
  queryOptions?: Omit<
    UseQueryOptions<
      PurchaseResponse | undefined,
      unknown,
      PurchaseResponse | undefined,
      QueryKey
    >,
    'queryFn'
  >,
) => {
  return useQuery({
    queryKey: [QueriesKey.purchase],
    queryFn: () => getPurchaseData(id),
    ...queryOptions,
  });
};
