import { render } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export const createQueryClient = () => {
  return new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        refetchOnWindowFocus: false,
        staleTime: Infinity, // Evita que las consultas sean refetch automáticamente
        cacheTime: Infinity, // Evita que los datos mockeados se eliminen antes de ser usados
      },
    },
  });
};

export const renderWithQueryClient = (ui) => {
  const queryClient = createQueryClient();
  return render(
    <QueryClientProvider client={queryClient}>{ui}</QueryClientProvider>
  );
};
