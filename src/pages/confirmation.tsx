import { GetServerSideProps } from 'next';
import { getPurchaseData } from '@/api/purchase';

export { ConfirmationView as default } from '@/views/ConfirmationView';

export const getServerSideProps: GetServerSideProps = async () => {
  const purchase = await getPurchaseData();

  return {
    props: {
      purchase,
    },
  };
};
