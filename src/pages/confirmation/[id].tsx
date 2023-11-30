import { GetServerSideProps } from 'next';
import { getPurchaseData } from '@/api/purchase';
import { bootStrapReactQuery } from '@/api/clients/bootStrapReactQuery';
import { QueriesKey } from '@/api/constants/queries';

export { ConfirmationView as default } from '@/views/ConfirmationView';

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const id = params?.id;
  const { queryClient, addQueriesToPrefetch, getDehydratedState } =
    bootStrapReactQuery();

  if (id) {
    const prefetchPurchaseData = () => {
      return queryClient.prefetchQuery({
        queryKey: [QueriesKey.purchase],
        queryFn: () => getPurchaseData(id as string),
      });
    };

    addQueriesToPrefetch(prefetchPurchaseData);
  }

  const dehydratedState = await getDehydratedState();

  return {
    props: {
      dehydratedState,
    },
  };
};
