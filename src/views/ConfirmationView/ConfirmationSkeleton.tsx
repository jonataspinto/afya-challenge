import styles from './confirmationView.module.scss';
import { Skeleton } from '@/components/Skeleton';

export const ConfirmationSkeleton = () => {
  return (
    <>
      <section className={styles.confirmationHead}>
        <Skeleton
          style={{
            height: '60px',
            maxWidth: '60px',
            width: '100%',
            borderRadius: '50%',
          }}
        />

        <Skeleton
          style={{
            height: '2.5rem',
            borderRadius: '0.8rem',
            maxWidth: '9.7rem',
            width: '100%',
          }}
          className={styles.confirmationHead_heading}
        />
        <Skeleton
          style={{
            height: '4rem',
            borderRadius: '0.8rem',
            maxWidth: '20rem',
            width: '100%',
          }}
          className={styles.confirmationHead_description}
        />
      </section>
      <Skeleton
        style={{
          height: '19.7rem',
          borderRadius: '0.8rem',
          maxWidth: '34.3rem',
          width: '100%',
        }}
        className={styles.confirmationHead_description}
      />
    </>
  );
};
