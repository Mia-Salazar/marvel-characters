import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

import { FavoritesProvider } from '../../../context/FavoritesContext';
import TransformationCard from '../TransformationCard';

describe('TransformationCard', () => {
  test('show card data', () => {
    render(
      <MemoryRouter>
        <FavoritesProvider>
          <TransformationCard
            name="Goku"
            ki={10000}
            image="http://example.com"
          />
        </FavoritesProvider>
      </MemoryRouter>
    );

    const cardName = screen.getByText(/goku/i);
    expect(cardName).toBeVisible();
  });
});
