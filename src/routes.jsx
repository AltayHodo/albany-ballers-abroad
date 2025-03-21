import App from './App';
import Home from './pages/Home';
import Team from './pages/Team';
import Contact from './pages/Contact';

const routes = [
  {
    path: '/',
    element: <App />,
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
