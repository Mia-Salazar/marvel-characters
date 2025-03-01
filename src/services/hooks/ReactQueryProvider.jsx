import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

export function ReactQueryProvider({ children }) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
