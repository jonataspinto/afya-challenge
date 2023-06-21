import { ReactNode } from 'react';
import { renderHook } from '@testing-library/react';
import { useLang } from './useLang';
import { ptBR } from './constants';
import { LangProvider } from './context';

describe('Lang context', () => {
  it('should use lang', () => {
    const wrapper = ({ children }: { children: ReactNode }) => (
      <LangProvider>{children}</LangProvider>
    );
    const { result } = renderHook(() => useLang(), { wrapper });

    expect(result.current.lang).toBe(ptBR);
  });
});
