import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
  Outlet,
} from 'react-router-dom';

import { Header } from './components';
import { Detail, Favorites, Home } from './pages';
import { FavoritesProvider } from './context/FavoritesContext';

import './App.css';

const Layout = () => (
  <>
    <Header />
    <Outlet />
  </>
);

const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Navigate to="/characters" />,
      },
      {
        path: '/characters',
        element: <Home />,
      },
      {
        path: '/characters/:id',
        element: <Detail />,
      },
      {
        path: '/favorites',
        element: <Favorites />,
      },
    ],
  },
];

function App() {
  return (
    <FavoritesProvider>
      <RouterProvider router={createBrowserRouter(routes)} />
    </FavoritesProvider>
  );
}

export default App;
