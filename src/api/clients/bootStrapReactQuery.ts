import { QueryClient, dehydrate } from '@tanstack/react-query';

type QueryToPrefetch = () => Promise<unknown>;

export const bootStrapReactQuery = () => {
  const queryClient = new QueryClient();
  const queriesToPrefetch: QueryToPrefetch[] = [];

  async function prefetchQueries() {
    return Promise.all(queriesToPrefetch.map((query) => query()));
  }

  async function getDehydratedState() {
    await prefetchQueries();
    const dehydratedState = dehydrate(queryClient);
    return dehydratedState;
  }

  function addQueriesToPrefetch(...nextQueriesToPrefetch: QueryToPrefetch[]) {
    queriesToPrefetch.push(...nextQueriesToPrefetch);
  }

  return {
    queryClient,
    getDehydratedState,
    addQueriesToPrefetch,
  };
};
