// mocks/server.js
import { setupServer } from 'msw/node'; // Para usar MSW en Node
import { http } from 'msw'; // Usamos http en lugar de rest
import { handlers } from './handlers'; // Importamos los handlers

// Configuramos el servidor con los handlers
export const server = setupServer(...handlers);
