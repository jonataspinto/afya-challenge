import { useQuery } from '@tanstack/react-query';
import { getPurchaseData } from '../purchase';
import { QueriesKey } from '../constants/queries';

export const usePurchaseQuery = () => {
  return useQuery({
    queryKey: [QueriesKey.purchase],
    queryFn: getPurchaseData,
  });
};
