'use client';
import { useLang } from '@/contexts/langContext';
import { PaymentForm } from '@/components/PaymentForm';
import { EmailTag } from '@/components/EmailTag';
import { Tooltip } from '@/components/Tooltip';
import styles from './page.module.scss';

export const CheckoutView = () => {
  const {
    lang: { checkoutPage },
  } = useLang();

  return (
    <>
      <section className={styles.paymentDataSection}>
        <h2 className={styles.paymentDataSection_heading}>
          {checkoutPage.paymentDataSection.heading}
        </h2>
        <p className={styles.paymentDataSection_description}>
          {checkoutPage.paymentDataSection.description}
        </p>
        <PaymentForm onSubmit={() => {}} />
      </section>

      <section className={styles.plansSection}>
        <h2 className={styles.plansSection_heading}>
          {checkoutPage.plansSection.heading}
        </h2>
        <EmailTag
          email="fulano@cicrano.com.br"
          className={styles.plansSection_tag}
        />
        <Tooltip
          className={styles.plansSection_info}
          label={checkoutPage.plansSection.info}
        />
      </section>
    </>
  );
};
