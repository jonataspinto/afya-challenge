'use client';

import Head from 'next/head';
import { useLang } from '@/contexts/langContext';
import { Button } from '@/components/Button';

import { useRouter } from 'next/router';
import { useCallback } from 'react';
import styles from './homeView.module.scss';

export const HomeView = () => {
  const {
    lang: { app, homePage },
  } = useLang();

  const router = useRouter();

  const goToCheckout = useCallback(() => {
    router.push(homePage.reasonsToChooseSection.seePlansCTA.path);
  }, [router, homePage]);

  return (
    <>
      <Head>
        <title>{`${app.seo.title.replace('|', '').trim()}`}</title>
        <meta
          key="description"
          name="description"
          content={app.seo.description}
        />
        <link
          rel="preload"
          as="image"
          href="https://whitebook.pebmed.com.br/images/bg-home.png)"
        />
      </Head>
      <main className={styles.container}>
        <div className={styles.presentationSection}>
          <h1>{homePage.heading}</h1>
          <p>{homePage.subheading}</p>

          <h3>{homePage.reasonsToChooseSection.subheading}</h3>
          <Button onClick={goToCheckout}>
            {homePage.reasonsToChooseSection.seePlansCTA.label}
          </Button>
        </div>

        <aside className={styles.reasonsToChose}>
          <h2>{homePage.reasonsToChooseSection.heading}</h2>
          <ol>
            {homePage.reasonsToChooseSection.reasons.map((text) => (
              <li key={text} title={text}>
                {text}
              </li>
            ))}
          </ol>
        </aside>
      </main>
    </>
  );
};
