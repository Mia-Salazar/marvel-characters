import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import Header from '../Header'; // Asegúrate de que la ruta sea correcta
import {
  FavoritesContext,
  FavoritesProvider,
} from '../../../context/FavoritesContext'; // Importa el contexto
import { MemoryRouter } from 'react-router-dom';

const customRender = (ui, { providerProps, ...renderOptions }) => {
  return render(
    <FavoritesProvider {...providerProps}>{ui}</FavoritesProvider>,
    renderOptions
  );
};

test('show number of favorites when there is nothing in the store', () => {
  render(
    <MemoryRouter>
      <FavoritesProvider>
        <Header />
      </FavoritesProvider>
    </MemoryRouter>
  );

  const cardName = screen.getByText(/0/i);
  expect(cardName).toBeInTheDocument();
});
