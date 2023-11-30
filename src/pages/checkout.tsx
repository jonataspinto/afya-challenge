import { GetServerSideProps } from 'next';
import { getPlansServer } from '@/api/getPlans';
import { bootStrapReactQuery } from '@/api/clients/bootStrapReactQuery';
import { QueriesKey } from '@/api/constants/queries';

export { CheckoutView as default } from '@/views/Checkout';

export const getServerSideProps: GetServerSideProps = async (pageContext) => {
  const { queryClient, addQueriesToPrefetch, getDehydratedState } =
    bootStrapReactQuery();

  const prefetchPlans = () => {
    return queryClient.prefetchQuery({
      queryKey: [QueriesKey.plans],
      queryFn: () => getPlansServer({ pageContext }),
    });
  };

  addQueriesToPrefetch(prefetchPlans);

  const dehydratedState = await getDehydratedState();

  return {
    props: {
      dehydratedState,
    },
  };
};
