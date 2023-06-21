import { Logo } from '@/components/icons/Logo';
import { ChevronLeft } from '@/components/icons/ChevronLeft';
import { useLang } from '@/contexts/langContext';
import styles from './header.module.scss';

export const Header = () => {
  const { lang } = useLang();

  return (
    <header className={styles.container}>
      <button
        className={styles.goBackButton}
        aria-label={lang.goToBackButtonLabel}
      >
        <ChevronLeft />
      </button>
      <Logo ariaLabel={lang.logoAltText} />
    </header>
  );
};
