import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

export function ReactQueryClient({ children }) {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}
