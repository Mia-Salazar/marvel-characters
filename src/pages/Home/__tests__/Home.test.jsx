import {
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import { server } from '../../../mocks/server';
import { http } from 'msw';
import { renderWithQueryClient } from '../../../mocks/test-utils'; // El helper para renderizar con React Query
import Home from '../Home'; // Ruta a tu componente

beforeEach(() => {
  server.resetHandlers(); // Resetea cualquier handler modificado en tests anteriores
});

test.skip('Muestra los personajes después de la petición', async () => {
  server.use(
    http.get('https://dragonball-api.com/api/characters', (req, res, ctx) => {
      return res(ctx.status(200), ctx.json([{ id: 1, name: 'Goku' }]));
    })
  );

  renderWithQueryClient(<Home />);

  await waitFor(() => {
    expect(screen.getByText('Goku')).toBeVisible();
  });
});
