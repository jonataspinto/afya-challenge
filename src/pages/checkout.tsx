import { GetServerSideProps } from 'next';
import { getPLans } from '@/api/getPlans';
import { LangProvider } from '@/contexts/langContext';
import { CheckoutView, CheckoutViewProps } from '@/views/Checkout';

export const getServerSideProps: GetServerSideProps = async () => {
  const plans = await getPLans();

  return {
    props: {
      plans,
    },
  };
};

export default function View({ ...props }: CheckoutViewProps) {
  return (
    <LangProvider>
      <CheckoutView {...props} />
    </LangProvider>
  );
}
