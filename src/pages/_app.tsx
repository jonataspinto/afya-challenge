import NextNProgress from 'nextjs-progressbar';
import { AppProps } from 'next/app';
import { Toaster } from 'react-hot-toast';
import { LangProvider } from '@/contexts/langContext';
import '@/styles/index.scss';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LangProvider>
      <Toaster />
      <NextNProgress color="#f5850b" height={4} />
      <Component {...pageProps} />;
    </LangProvider>
  );
}
