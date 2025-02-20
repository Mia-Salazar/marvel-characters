import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';

import { FavoritesProvider } from '../../../context/FavoritesContext';
import CardList from '../CardList';

const CHARACTERS = [
  {
    id: 1,
    name: 'Goku',
    ki: '60.000.000',
    description: 'El protagonista de la serie',
    image: 'https://dragonball-api.com/characters/goku_normal.webp',
  },
  {
    id: 2,
    name: 'Vegeta',
    ki: '60.000.000',
    description: 'El segundo protagonista de la serie',
    image: 'https://dragonball-api.com/characters/goku_normal.webp',
  },
];

describe('CardList Component', () => {
  test('show card data', () => {
    render(
      <MemoryRouter>
        <FavoritesProvider>
          <CardList
            characters={CHARACTERS}
            name=""
            onChangeName={vi.fn()}
            isFavorite
          />
        </FavoritesProvider>
      </MemoryRouter>
    );

    const cardName = screen.getByText(/goku/i);
    expect(cardName).toBeVisible();

    const cardNameBis = screen.getByText(/vegeta/i);
    expect(cardNameBis).toBeVisible();
  });

  test('show change filter name', async () => {
    const mockOnChangeName = vi.fn();
    render(
      <MemoryRouter>
        <FavoritesProvider>
          <CardList
            characters={CHARACTERS}
            name=""
            onChangeName={mockOnChangeName}
            isFavorite
          />
        </FavoritesProvider>
      </MemoryRouter>
    );

    const input = screen.getByRole('textbox');
    await userEvent.type(input, 'Bulma');

    expect(mockOnChangeName).toHaveBeenCalled();
  });
});
