import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginReact from 'eslint-plugin-react';
import pluginPrettier from 'eslint-plugin-prettier';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ['**/*.{js,mjs,cjs,jsx}'],
    languageOptions: {
      globals: globals.browser, // Asegura que las variables globales del navegador estén disponibles
      parserOptions: {
        ecmaFeatures: {
          jsx: true, // Habilita el soporte para JSX
        },
      },
    },
    settings: {
      react: { version: 'detect' }, // Detecta automáticamente la versión de React
    },
    rules: {
      'react/react-in-jsx-scope': 'off', // No es necesario importar React en React 17+
      'prettier/prettier': ['error'], // Asegura que Prettier sea una regla de error
      'no-console': 'warn', // Agregar cualquier otra regla personalizada si lo necesitas
    },
  },
  pluginJs.configs.recommended, // Reglas recomendadas para JavaScript
  pluginReact.configs.flat.recommended, // Reglas recomendadas para React
  {
    plugins: {
      prettier: pluginPrettier, // Integra el plugin Prettier
    },
    rules: {
      'prettier/prettier': ['error'], // Hacemos de Prettier una regla de error
    },
  },
];
