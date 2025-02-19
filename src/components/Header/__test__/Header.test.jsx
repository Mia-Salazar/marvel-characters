import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import Header from '../Header'; // Asegúrate de que la ruta sea correcta
import {
  FavoritesContext,
  FavoritesProvider,
} from '../../../context/FavoritesContext'; // Importa el contexto
import { MemoryRouter } from 'react-router-dom';

const customRender = (ui, { providerProps, ...renderOptions }) => {
  return render(
    <FavoritesProvider {...providerProps}>{ui}</FavoritesProvider>,
    renderOptions
  );
};

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
  const mockToggleFavorite = vi.fn(); // Mock de la función

  render(
    <MemoryRouter>
      <FavoritesContext.Provider
        value={{ favorites: mockFavorites, toggleFavorite: mockToggleFavorite }}
      >
        <Header />
      </FavoritesContext.Provider>
    </MemoryRouter>
  );

  const favoriteNumber = screen.getByText(/1/i);
  expect(favoriteNumber).toBeVisible();
});
