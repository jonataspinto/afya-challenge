import { useLang } from '@/contexts/langContext';

export const PaymentForm = () => {
  const { lang } = useLang();

  return (
    <form name={lang.paymentForm.title} title={lang.paymentForm.title}>
      Payment form
    </form>
  );
};
