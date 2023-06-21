import { useContext } from 'react';
import { LangContext } from './context';

export const useLang = () => {
  const context = useContext(LangContext);

  if (!context) throw new Error('useLang must be within a LangProvider');

  return context;
};
