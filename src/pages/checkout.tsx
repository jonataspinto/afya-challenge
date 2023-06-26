import { GetServerSideProps } from 'next';
import { getPLans } from '@/api/getPlans';

export { CheckoutView as default } from '@/views/Checkout';

export const getServerSideProps: GetServerSideProps = async () => {
  const plans = await getPLans();

  return {
    props: {
      plans,
    },
  };
};
