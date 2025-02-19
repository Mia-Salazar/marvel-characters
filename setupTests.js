import { server } from './src/mocks/server';
import { beforeAll, afterEach, afterAll } from 'vitest'; // Importar desde Vitest

// Antes de todas las pruebas, arrancamos el servidor
beforeAll(() => server.listen());

// Después de cada prueba, reseteamos los handlers
afterEach(() => server.resetHandlers());

// Después de todas las pruebas, cerramos el servidor
afterAll(() => server.close());
