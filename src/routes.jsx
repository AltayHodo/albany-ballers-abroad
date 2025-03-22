import App from './App';
import Home from './pages/Home';
import Team from './pages/Team';
import Contact from './pages/Contact';
import ErrorPage from './pages/ErrorPage';

const routes = [
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/home',
        element: <Home />,
      },
      {
        path: '/team',
        element: <Team />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
    ],
  },
];

export default routes;
