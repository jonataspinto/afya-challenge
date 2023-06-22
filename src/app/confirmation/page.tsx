import { Metadata } from 'next';
import { ptBR } from '@/contexts/langContext';
import { ConfirmationView } from './ConfirmationView';

export default function Checkout() {
  return <ConfirmationView />;
}

export async function generateMetadata(): Promise<Metadata> {
  const lang = ptBR;

  return {
    title: `${lang.confirmationPage.seo.title}${lang.app.seo.title}`,
    description: `${lang.confirmationPage.seo.description}`,
  };
}
