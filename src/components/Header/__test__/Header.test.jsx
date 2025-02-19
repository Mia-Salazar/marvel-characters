import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { vi } from 'vitest';

import Header from '../Header';
import {
  FavoritesContext,
  FavoritesProvider,
} from '../../../context/FavoritesContext';

describe('Header Component', () => {
  test('show number of favorites when there is nothing in the store', () => {
    render(
      <MemoryRouter>
        <FavoritesProvider>
          <Header />
        </FavoritesProvider>
      </MemoryRouter>
    );

    const favoriteNumber = screen.getByText(/0/i);
    expect(favoriteNumber).toBeVisible();
  });

  test('show number of favorites when there is an element in the store', () => {
    const mockFavorites = [{ id: 1, name: 'Goku' }];
    const mockToggleFavorite = vi.fn();

    render(
      <MemoryRouter>
        <FavoritesContext.Provider
          value={{
            favorites: mockFavorites,
            toggleFavorite: mockToggleFavorite,
          }}
        >
          <Header />
        </FavoritesContext.Provider>
      </MemoryRouter>
    );

    const favoriteNumber = screen.getByText(/1/i);
    expect(favoriteNumber).toBeVisible();
  });
});
