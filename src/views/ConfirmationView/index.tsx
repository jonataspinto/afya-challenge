'use client';
import Link from 'next/link';
import Head from 'next/head';
import { CheckIcon } from '@/components/icons/CheckIcon';
import { Button } from '@/components/Button';
import { PurchaseData } from '@/components/PurchaseData';
import { userDataMock } from '@/mock/userData';

import { useConfirmationView } from './useConfirmationView';
import { Sad } from '@/components/icons/Sad';
import { ConfirmationSkeleton } from './ConfirmationSkeleton';
import styles from './confirmationView.module.scss';

export const ConfirmationView = () => {
  const { goToHome, purchase, app, confirmationPage, error, isLoading } =
    useConfirmationView();

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
      {isLoading && <ConfirmationSkeleton />}

      {!isLoading && !!error && (
        <div className={styles.confirmationHead}>
          <Sad />
          <p className={styles.confirmationHead_heading}>
            {confirmationPage.errorTitle}
          </p>
          <p className={styles.confirmationHead_description}>
            {confirmationPage.errorDescription}
          </p>
        </div>
      )}

      {!isLoading && purchase && (
        <>
          <div className={styles.confirmationHead}>
            <CheckIcon ariaLabel="check success icon" role="img" />
            <h1 className={styles.confirmationHead_heading}>
              {confirmationPage.heading}
            </h1>
            <p className={styles.confirmationHead_description}>
              {confirmationPage.description}
            </p>
          </div>

          <PurchaseData purchase={purchase} userData={userDataMock} />
        </>
      )}

      <footer className={styles.actions}>
        {!isLoading && purchase && (
          <Link
            className={styles.actions_manageSubscription}
            href={confirmationPage.manageSubscription.path}
          >
            {confirmationPage.manageSubscription.label}
          </Link>
        )}
        <Button className={styles.actions_goToHome} onClick={goToHome}>
          {confirmationPage.goToHome.label}
        </Button>
      </footer>
    </main>
  );
};
