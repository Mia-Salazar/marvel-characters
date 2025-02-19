import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

import { FavoritesProvider } from '../../../context/FavoritesContext';
import DetailCard from '../DetailCard';

describe('DetailCard Component', () => {
  test('show card data', () => {
    render(
      <MemoryRouter>
        <FavoritesProvider>
          <DetailCard
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

    const cardDescription = screen.getByText(/a super sayian/i);
    expect(cardDescription).toBeVisible();
  });
});
