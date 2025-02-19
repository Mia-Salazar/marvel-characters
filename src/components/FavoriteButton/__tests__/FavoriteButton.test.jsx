import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { FavoritesProvider } from '../../../context/FavoritesContext';
import FavoriteButton from '../FavoriteButton';

describe('FavoriteButton Component', () => {
  test('show be a link', () => {
    render(
      <MemoryRouter>
        <FavoritesProvider>
          <FavoriteButton hasNumber />
        </FavoritesProvider>
      </MemoryRouter>
    );

    const button = screen.getByRole('link');
    expect(button).toBeVisible();
  });

  test('show be a button', () => {
    render(
      <MemoryRouter>
        <FavoritesProvider>
          <FavoriteButton />
        </FavoritesProvider>
      </MemoryRouter>
    );

    const button = screen.getByRole('button');
    expect(button).toBeVisible();
  });
});
