import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { FavoritesProvider } from '../../../context/FavoritesContext';
import Detail from '../Detail';

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    useParams: () => ({ id: '1' }),
  };
});

vi.mock('../../../services/character', () => ({
  findCharacter: vi.fn().mockResolvedValue({
    id: '1',
    name: 'Goku',
    image: 'http://example.com/goku.jpg',
    description: 'A super Saiyan',
  }),
}));

describe('Detail Page Component', () => {
  test('should show character information', async () => {
    render(
      <MemoryRouter>
        <FavoritesProvider>
          <Detail />
        </FavoritesProvider>
      </MemoryRouter>
    );

    const name = await screen.findByText(/Goku/i);
    expect(name).toBeVisible();

    const description = await screen.findByText(/A super Saiyan/i);
    expect(description).toBeVisible();
  });
});
