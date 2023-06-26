'use client';
import Head from 'next/head';
import { useLang } from '@/contexts/langContext';
import { PaymentForm } from '@/components/PaymentForm';
import { EmailTag } from '@/components/EmailTag';
import { Tooltip } from '@/components/Tooltip';
import { CreditCards } from '@/components/CreditCards';
import { AvailablePlans } from '@/components/AvailablePlans';

import styles from './checkoutView.module.scss';

export type CheckoutViewProps = { plans: PlanDTO[] };

export const CheckoutView = ({ plans }: CheckoutViewProps) => {
  const {
    lang: { checkoutPage, app },
  } = useLang();

  return (
    <div className={styles.container}>
      <Head>
        <title>{`${checkoutPage.seo.title}${app.seo.title}`}</title>
        <meta
          key="description"
          name="description"
          content={checkoutPage.seo.description}
        />
      </Head>
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
        <AvailablePlans plans={plans} />
        <Tooltip label={checkoutPage.plansSection.info} />
      </section>
    </div>
  );
};
