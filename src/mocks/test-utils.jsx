import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render } from '@testing-library/react';

export const createQueryClient = () => {
  return new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        refetchOnWindowFocus: false,
        staleTime: Infinity, // ⬅️ Evita refetch automático
        cacheTime: Infinity, // ⬅️ Evita que se eliminen datos mockeados antes de usarse
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
