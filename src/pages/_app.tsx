import { AppProps } from 'next/app';
import { LangProvider } from '@/contexts/langContext';
import '@/styles/index.scss';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LangProvider>
      <Component {...pageProps} />;
    </LangProvider>
  );
}
