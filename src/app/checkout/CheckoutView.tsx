'use client';
import { PaymentForm } from '@/components/PaymentForm';
import { useLang } from '@/contexts/langContext';

export const CheckoutView = () => {
  const {
    lang: { checkoutPage },
  } = useLang();

  return (
    <>
      <section>
        <h2>{checkoutPage.paymentDataSection.heading}</h2>
        <p>{checkoutPage.paymentDataSection.description}</p>
        <PaymentForm onSubmit={() => console.log('pamentForm')} />
      </section>
      <section>
        <h2>{checkoutPage.plansSection.heading}</h2>
        <span>{checkoutPage.plansSection.info}</span>
      </section>
    </>
  );
};
