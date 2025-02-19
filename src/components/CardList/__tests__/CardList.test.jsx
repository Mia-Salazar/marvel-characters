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
    description:
      'El protagonista de la serie, conocido por su gran poder y personalidad amigable. Originalmente enviado a la Tierra como un infante volador con la misión de conquistarla. Sin embargo, el caer por un barranco le proporcionó un brutal golpe que si bien casi lo mata, este alteró su memoria y anuló todos los instintos violentos de su especie, lo que lo hizo crecer con un corazón puro y bondadoso, pero conservando todos los poderes de su raza. No obstante, en la nueva continuidad de Dragon Ball se establece que él fue enviado por sus padres a la Tierra con el objetivo de sobrevivir a toda costa a la destrucción de su planeta por parte de Freeza. Más tarde, Kakarot, ahora conocido como Son Goku, se convertiría en el príncipe consorte del monte Fry-pan y líder de los Guerreros Z, así como el mayor defensor de la Tierra y del Universo 7, logrando mantenerlos a salvo de la destrucción en innumerables ocasiones, a pesar de no considerarse a sí mismo como un héroe o salvador.',
    image: 'https://dragonball-api.com/characters/goku_normal.webp',
  },
  {
    id: 2,
    name: 'Vegeta',
    ki: '60.000.000',
    description:
      'El segundo protagonista de la serie, conocido por su gran poder y personalidad amigable. Originalmente enviado a la Tierra como un infante volador con la misión de conquistarla. Sin embargo, el caer por un barranco le proporcionó un brutal golpe que si bien casi lo mata, este alteró su memoria y anuló todos los instintos violentos de su especie, lo que lo hizo crecer con un corazón puro y bondadoso, pero conservando todos los poderes de su raza. No obstante, en la nueva continuidad de Dragon Ball se establece que él fue enviado por sus padres a la Tierra con el objetivo de sobrevivir a toda costa a la destrucción de su planeta por parte de Freeza. Más tarde, Kakarot, ahora conocido como Son Goku, se convertiría en el príncipe consorte del monte Fry-pan y líder de los Guerreros Z, así como el mayor defensor de la Tierra y del Universo 7, logrando mantenerlos a salvo de la destrucción en innumerables ocasiones, a pesar de no considerarse a sí mismo como un héroe o salvador.',
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
