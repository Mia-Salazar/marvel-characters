import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

import { FavoritesProvider } from '../../../context/FavoritesContext';
import TransformationList from '../TransformationList';

const TRANSFORMATIONS = [
  {
    id: 2,
    name: 'Goku SSJ2',
    image: 'https://dragonball-api.com/transformaciones/goku_ssj2.webp',
    ki: '6 Billion',
  },
  {
    id: 1,
    name: 'Goku SSJ',
    image: 'https://dragonball-api.com/transformaciones/goku_ssj.webp',
    ki: '3 Billion',
  },
];

describe('TransformationList', () => {
  test('show list data', () => {
    render(
      <MemoryRouter>
        <FavoritesProvider>
          <TransformationList transformations={TRANSFORMATIONS} />
        </FavoritesProvider>
      </MemoryRouter>
    );

    const transformationName = screen.getByText('Goku SSJ');
    expect(transformationName).toBeVisible();

    const transformationNameBis = screen.getByText('Goku SSJ2');
    expect(transformationNameBis).toBeVisible();
  });
});
