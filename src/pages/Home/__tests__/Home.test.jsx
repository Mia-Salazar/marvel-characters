import { screen, fireEvent, waitFor } from '@testing-library/react';
import { vi } from 'vitest';
import Home from '../Home'; // Asegúrate de que la ruta sea correcta
import { useSearchCharacterQuery } from '../../../services/hooks/character'; // Importar el hook

// Importamos el helper para envolver en QueryClientProvider
import { renderWithQueryClient } from '../../../mocks/test-utils';

// Mockeamos el hook de la API
vi.mock('../../services/hooks/character', () => ({
  useSearchCharacterQuery: vi.fn(),
}));

describe.skip('Home Component', () => {
  test('muestra los personajes después de la petición', async () => {
    // Simulando los datos de la API
    const mockData = {
      items: [
        { id: 1, name: 'Goku' },
        { id: 2, name: 'Vegeta' },
      ],
    };

    // Mockeamos la respuesta de la API
    useSearchCharacterQuery.mockReturnValue({
      data: mockData,
      isLoading: false,
    });

    // Renderizamos el componente envuelto en QueryClientProvider
    renderWithQueryClient(<Home />);

    // Verificamos si "Goku" y "Vegeta" están en la UI
    expect(screen.getByText('Goku')).toBeInTheDocument();
    expect(screen.getByText('Vegeta')).toBeInTheDocument();
  });

  test('muestra el estado de carga mientras se obtienen los personajes', () => {
    // Mockeamos el estado de carga
    useSearchCharacterQuery.mockReturnValue({
      data: null,
      isLoading: true,
    });

    // Renderizamos el componente envuelto en QueryClientProvider
    renderWithQueryClient(<Home />);

    // Verificamos si el texto de "loading" está presente
    expect(screen.getByText('...Loading')).toBeInTheDocument();
  });

  test('filtra los personajes por nombre', async () => {
    const mockData = {
      items: [
        { id: 1, name: 'Goku' },
        { id: 2, name: 'Vegeta' },
      ],
    };

    // Mockeamos la respuesta inicial de la API
    useSearchCharacterQuery.mockReturnValue({
      data: mockData,
      isLoading: false,
    });

    // Renderizamos el componente
    renderWithQueryClient(<Home />);

    // Simulamos escribir un nombre en el campo de búsqueda
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'Vegeta' } });

    // Esperamos a que los personajes se filtren y se actualicen
    await waitFor(() => expect(screen.getByText('Vegeta')).toBeInTheDocument());
    expect(screen.queryByText('Goku')).toBeNull(); // Goku no debería estar ahora
  });
});
