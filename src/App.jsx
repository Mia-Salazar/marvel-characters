import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
  Outlet,
} from 'react-router-dom';
import { Header } from './components';
import { Detail, Home } from './pages';

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
    ],
  },
];

function App() {
  return <RouterProvider router={createBrowserRouter(routes)} />;
}

export default App;
