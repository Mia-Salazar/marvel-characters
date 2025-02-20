import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';

import { FavoritesProvider } from '../../../context/FavoritesContext';
import Search from '../Search';

describe('Search Component', () => {
  test('show results and filter name', async () => {
    render(
      <MemoryRouter>
        <FavoritesProvider>
          <Search number={1} onChangeName={vi.fn()} value="Goku" />
        </FavoritesProvider>
      </MemoryRouter>
    );

    const results = screen.getByText(/1 Results/i);
    expect(results).toBeVisible();

    const input = screen.getByRole('textbox', { name: 'search' });
    expect(input).toHaveValue(/goku/i);
  });

  test('show change filter name', async () => {
    const mockOnChangeName = vi.fn();
    render(
      <MemoryRouter>
        <FavoritesProvider>
          <Search number={1} onChangeName={mockOnChangeName} name="Goku" />
        </FavoritesProvider>
      </MemoryRouter>
    );

    const input = screen.getByRole('textbox');
    await userEvent.type(input, 'Bulma');

    expect(mockOnChangeName).toHaveBeenCalled();
  });
});
