import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import userEvent from '@testing-library/user-event';

import Home from '../Home';
import { FavoritesProvider } from '../../../context/FavoritesContext';

const createTestQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });

vi.mock('../../../services/hooks/character', () => ({
  useSearchCharacterQuery: () => {
    return {
      data: {
        items: [
          {
            id: 1,
            name: 'Goku',
            description: 'El protagonista de la serie',
            image: 'https://dragonball-api.com/characters/goku_normal.webp',
          },
        ],
      },
      isLoading: false,
      isError: false,
    };
  },
}));

vi.mock('../../../services/character', () => ({
  findCharacters: vi.fn().mockResolvedValue([
    {
      id: '1',
      name: 'Bulma',
      image: 'http://example.com/goku.jpg',
      description: 'A female human',
    },
  ]),
}));

describe('Home Page Component', () => {
  test('show first characters', async () => {
    render(
      <QueryClientProvider client={createTestQueryClient()}>
        <MemoryRouter>
          <FavoritesProvider>
            <Home />
          </FavoritesProvider>
        </MemoryRouter>
      </QueryClientProvider>
    );

    const name = await screen.findByText(/Goku/i);
    expect(name).toBeVisible();
  });

  test('show filteres characters', async () => {
    render(
      <QueryClientProvider client={createTestQueryClient()}>
        <MemoryRouter>
          <FavoritesProvider>
            <Home />
          </FavoritesProvider>
        </MemoryRouter>
      </QueryClientProvider>
    );

    const firstName = await screen.findByText(/Goku/i);
    expect(firstName).toBeVisible();

    const input = screen.getByRole('textbox');
    await userEvent.type(input, 'Bulma');

    const secondName = await screen.findByText(/Bulma/i);
    expect(secondName).toBeVisible();
  });
});
