import { GetServerSideProps } from 'next';
import { getPurchaseDataServer } from '@/api/purchase';
import { bootStrapReactQuery } from '@/api/clients/bootStrapReactQuery';
import { QueriesKey } from '@/api/constants/queries';

export { ConfirmationView as default } from '@/views/ConfirmationView';

export const getServerSideProps: GetServerSideProps = async (pageContext) => {
  const { params } = pageContext;
  const id = params?.id;
  const { queryClient, addQueriesToPrefetch, getDehydratedState } =
    bootStrapReactQuery();

  if (id) {
    const prefetchPurchaseData = () => {
      return queryClient.prefetchQuery({
        queryKey: [QueriesKey.purchase],
        queryFn: () => getPurchaseDataServer({ id, pageContext }),
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
