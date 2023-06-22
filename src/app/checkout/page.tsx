import { Metadata } from 'next';
import { ptBR } from '@/contexts/langContext';
import { CheckoutView } from './CheckoutView';
import styles from './page.module.scss';

export default function Checkout() {
  return (
    <div className={styles.container}>
      <CheckoutView />
    </div>
  );
}

export async function generateMetadata(): Promise<Metadata> {
 const lang = ptBR;

  return {
    title: `${lang.checkoutPage.seo.title}${lang.app.seo.title}`,
    description: `${lang.checkoutPage.seo.description}`,
  }
}

