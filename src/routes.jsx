import App from './App';
import Home from './pages/Home';
import Team from './pages/Team';
import About from './pages/About';
import Contact from './pages/Contact';
import Donate from './pages/Donate';
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
        path: '/about',
        element: <About />,
      },
      {
        path: '/team',
        element: <Team />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/donate',
        element: <Donate />,
      },
    ],
  },
];

export default routes;
