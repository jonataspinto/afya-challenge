import { GetServerSideProps } from 'next';
import { getPurchaseData } from '@/api/purchase';
import { bootStrapReactQuery } from '@/api/clients/bootStrapReactQuery';
import { QueriesKey } from '@/api/constants/queries';

export { ConfirmationView as default } from '@/views/ConfirmationView';

export const getServerSideProps: GetServerSideProps = async () => {
  const { queryClient, addQueriesToPrefetch, getDehydratedState } =
    bootStrapReactQuery();

  const prefetchPurchaseData = () => {
    return queryClient.prefetchQuery({
      queryKey: [QueriesKey.purchase],
      queryFn: getPurchaseData,
    });
  };

  addQueriesToPrefetch(prefetchPurchaseData);

  const dehydratedState = await getDehydratedState();

  return {
    props: {
      dehydratedState,
    },
  };
};
