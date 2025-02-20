import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { FavoritesContext } from '../../../context/FavoritesContext';

import Favorites from '../Favorites';

describe('Favorites Page Component', () => {
  test('show favorite character´s information', async () => {
    const mockFavorites = [
      { id: 1, name: 'Goku' },
      { id: 2, name: 'Vegeta' },
    ];
    const mockToggleFavorite = vi.fn();

    render(
      <MemoryRouter>
        <FavoritesContext.Provider
          value={{
            favorites: mockFavorites,
            toggleFavorite: mockToggleFavorite,
          }}
        >
          <Favorites />
        </FavoritesContext.Provider>
      </MemoryRouter>
    );

    const firstName = await screen.findByText(/Goku/i);
    expect(firstName).toBeVisible();

    const secondName = await screen.findByText(/Vegeta/i);
    expect(secondName).toBeVisible();
  });
});
