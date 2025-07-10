import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

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

export default function ReactQueryTestWrapper({ children }) {
  return <QueryClientProvider client={queryClientTests}>{children}</QueryClientProvider>;
}

export const reactQueryWrapper = (props) => (
  <QueryClientProvider client={queryClientTests} {...props} />
);
