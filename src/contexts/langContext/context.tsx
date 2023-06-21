import { createContext } from 'react';
import { ptBR } from './constants';

type LangContextState = {
  lang: typeof ptBR;
};

type LangProviderProps = {
  children: React.ReactNode;
};

export const LangContext = createContext<LangContextState>({
  lang: {} as typeof ptBR,
});

export const LangProvider = ({ children }: LangProviderProps) => {
  return (
    <LangContext.Provider value={{ lang: ptBR }}>
      {children}
    </LangContext.Provider>
  );
};
