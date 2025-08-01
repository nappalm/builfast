/* eslint-disable react-refresh/only-export-components */
import { QueryClientProvider, QueryClientProviderProps } from '@tanstack/react-query';
import { PropsWithChildren } from 'react';
import { queryClientTests } from '../../react-query/query-client';

export default function ReactQueryTestWrapper({ children }: PropsWithChildren) {
  return <QueryClientProvider client={queryClientTests}>{children}</QueryClientProvider>;
}

export const reactQueryWrapper = (props: Omit<QueryClientProviderProps, 'client'>) => (
  <QueryClientProvider client={queryClientTests} {...props} />
);
