import NextNProgress from 'nextjs-progressbar';
import { AppProps } from 'next/app';
import { Toaster } from 'react-hot-toast';
import { LangProvider } from '@/contexts/langContext';
import { Header } from '@/components/Header';

import '@/styles/index.scss';
import { useRouter } from 'next/router';
import { useMemo, useState } from 'react';
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const showGoBackButton = useMemo(
    () => router.pathname !== '/',
    [router.pathname],
  );

  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <LangProvider>
          <Toaster />
          <NextNProgress color="#f5850b" height={4} />
          <Header showGoBackButton={showGoBackButton} />
          <Component {...pageProps} />;
        </LangProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </Hydrate>
    </QueryClientProvider>
  );
}
