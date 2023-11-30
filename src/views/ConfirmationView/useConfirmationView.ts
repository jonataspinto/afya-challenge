import { usePurchaseQuery } from '@/api/hooks/usePurchaseQuery';
import { useLang } from '@/contexts/langContext';
import { useRouter } from 'next/router';
import { useCallback } from 'react';
import toast from 'react-hot-toast';

export const useConfirmationView = () => {
  const {
    lang: { confirmationPage, app },
  } = useLang();
  const router = useRouter();

  const goToHome = useCallback(() => {
    router.push(confirmationPage.goToHome.path);
  }, [router, confirmationPage]);

  const { data: purchase, ...restQuery } = usePurchaseQuery(
    router.query.id as string,
    {
      onError: () => {
        toast.error(confirmationPage.errorMessage, {
          position: 'bottom-center',
          duration: 6000,
          style: { fontSize: '1.6rem' },
        });
      },
    },
  );

  return {
    goToHome,
    purchase,
    confirmationPage,
    app,
    ...restQuery,
  };
};
