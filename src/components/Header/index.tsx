'use client';
import { useCallback } from 'react';
import { useRouter } from 'next/router';
import { Logo } from '@/components/icons/Logo';
import { ChevronLeft } from '@/components/icons/ChevronLeft';
import { useLang } from '@/contexts/langContext';
import styles from './header.module.scss';

export const Header = () => {
  const { lang } = useLang();
  const router = useRouter();
  const handleClick = useCallback(() => {
    router.back();
  }, [router]);

  return (
    <header className={styles.container}>
      <button
        className={styles.goBackButton}
        aria-label={lang.goToBackButtonLabel}
        onClick={handleClick}
      >
        <ChevronLeft ariaLabel={`${lang.goToBackButtonLabel}: icon`} />
      </button>
      <Logo ariaLabel={lang.logoAltText} />
    </header>
  );
};
