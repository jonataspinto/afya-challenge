'use client';
import { useLang } from '@/contexts/langContext';
import { PaymentForm } from '@/components/PaymentForm';
import { EmailTag } from '@/components/EmailTag';
import { Tooltip } from '@/components/Tooltip';
import { CreditCards } from '@/components/CreditCards';
import { AvailablePlans } from '@/components/AvailablePlans';
import { availablePlansMock } from '@/mock/availablePlans';

import styles from './page.module.scss';

export const CheckoutView = () => {
  const {
    lang: { checkoutPage },
  } = useLang();

  return (
    <>
      <section className={styles.paymentDataSection}>
        <div>
          <h2 className={styles.paymentDataSection_heading}>
            {checkoutPage.paymentDataSection.heading}
          </h2>
          <p className={styles.paymentDataSection_description}>
            {checkoutPage.paymentDataSection.description}
          </p>
        </div>
        <CreditCards />
        <PaymentForm onSubmit={() => {}} />
      </section>

      <section className={styles.plansSection}>
        <div>
          <h2 className={styles.plansSection_heading}>
            {checkoutPage.plansSection.heading}
          </h2>
          <EmailTag
            email="fulano@cicrano.com.br"
            className={styles.plansSection_tag}
          />
        </div>
        <AvailablePlans plans={availablePlansMock} />
        <Tooltip label={checkoutPage.plansSection.info} />
      </section>
    </>
  );
};
