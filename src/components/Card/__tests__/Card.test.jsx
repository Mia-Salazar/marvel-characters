import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import {
  FavoritesContext,
  FavoritesProvider,
} from '../../../context/FavoritesContext'; // Importa el contexto
import { MemoryRouter } from 'react-router-dom';
import Card from '../Card';

describe('Card Component', () => {
  test('show card data', () => {
    render(
      <MemoryRouter>
        <FavoritesProvider>
          <Card
            name="Goku"
            id={1}
            image="http://example.com"
            description="A super sayian"
          />
        </FavoritesProvider>
      </MemoryRouter>
    );

    const cardName = screen.getByText(/goku/i);
    expect(cardName).toBeVisible();
  });
});
