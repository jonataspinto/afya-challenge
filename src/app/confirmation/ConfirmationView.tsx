'use client';
import { useLang } from '@/contexts/langContext';
import { CheckIcon } from '@/components/icons/CheckIcon';

import styles from './page.module.scss';
import Link from 'next/link';
import { Button } from '@/components/Button';

export const ConfirmationView = () => {
  const {
    lang: { confirmationPage },
  } = useLang();

  return (
    <main className={styles.container}>
      <div className={styles.confirmationHead}>
        <CheckIcon ariaLabel="check success icon" role="img" />
        <h1 className={styles.confirmationHead_heading}>
          {confirmationPage.heading}
        </h1>
        <p className={styles.confirmationHead_description}>
          {confirmationPage.description}
        </p>
      </div>

      <footer className={styles.actions}>
        <Link
          className={styles.actions_manageSubscription}
          href={confirmationPage.manageSubscription.path}
        >
          {confirmationPage.manageSubscription.label}
        </Link>
        <Button className={styles.actions_goToHome}>
          {confirmationPage.goToHome.label}
        </Button>
      </footer>
    </main>
  );
};
