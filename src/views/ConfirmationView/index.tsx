'use client';
import Link from 'next/link';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useCallback } from 'react';
import { useLang } from '@/contexts/langContext';
import { CheckIcon } from '@/components/icons/CheckIcon';
import { Button } from '@/components/Button';
import { PurchaseData } from '@/components/PurchaseData';
import { purchaseDataMock } from '@/mock/purchase';
import { userDataMock } from '@/mock/userData';

import styles from './confirmationView.module.scss';

export const ConfirmationView = () => {
  const {
    lang: { confirmationPage, app },
  } = useLang();
  const router = useRouter();

  const goToHome = useCallback(() => {
    router.push(confirmationPage.goToHome.path);
  }, [router, confirmationPage]);

  return (
    <main className={styles.container}>
      <Head>
        <title>{`${confirmationPage.seo.title}${app.seo.title}`}</title>
        <meta
          key="description"
          name="description"
          content={confirmationPage.seo.description}
        />
      </Head>
      <div className={styles.confirmationHead}>
        <CheckIcon ariaLabel="check success icon" role="img" />
        <h1 className={styles.confirmationHead_heading}>
          {confirmationPage.heading}
        </h1>
        <p className={styles.confirmationHead_description}>
          {confirmationPage.description}
        </p>
      </div>

      <PurchaseData purchase={purchaseDataMock} userData={userDataMock} />

      <footer className={styles.actions}>
        <Link
          className={styles.actions_manageSubscription}
          href={confirmationPage.manageSubscription.path}
        >
          {confirmationPage.manageSubscription.label}
        </Link>
        <Button className={styles.actions_goToHome} onClick={goToHome}>
          {confirmationPage.goToHome.label}
        </Button>
      </footer>
    </main>
  );
};
