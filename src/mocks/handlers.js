import { http } from 'msw';

export const handlers = [
  http.get('https://dragonball-api.com/api/characters', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([{ id: 1, name: 'Goku', image: 'goku.jpg' }])
    );
  }),
];
