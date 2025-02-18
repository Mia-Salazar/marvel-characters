import React from 'react';
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from 'react-router-dom';
import { useState } from 'react';

import { Header } from './components';
import { Home } from './pages';

import './App.css';

const routes = [
  {
    path: '/',
    element: <Home />,
    children: [
      {
        index: true,
        element: <Navigate to={'/character'} />,
      },
    ],
  },
];

function App() {
  return (
    <>
      <Header />
      <RouterProvider router={createBrowserRouter(routes)} />
    </>
  );
}

export default App;
