import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { PropsWithChildren } from 'react';

const queryClientTests = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      networkMode: 'always',
    },
    mutations: {
      networkMode: 'always',
    },
  },
});

export default function ReactQueryTestWrapper({ children }: PropsWithChildren) {
  return <QueryClientProvider client={queryClientTests}>{children}</QueryClientProvider>;
}

export const reactQueryWrapper = (props: any) => (
  <QueryClientProvider client={queryClientTests} {...props} />
);
