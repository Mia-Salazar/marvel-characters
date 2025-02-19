import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';

vi.mock('../../../context/FavoritesContext', () => ({
  useFavorites: vi.fn(),
}));

import Header from '../Header';
import { useFavorites } from '../../../context/FavoritesContext';

test('Muestra el botón de favorito correctamente', () => {
  useFavorites.mockReturnValue({
    favorites: [{ id: 1, name: 'Goku' }],
    toggleFavorite: vi.fn(),
  });

  render(<Header hasNumber />);

  expect(screen.getByText('1')).toBeInTheDocument();
});
