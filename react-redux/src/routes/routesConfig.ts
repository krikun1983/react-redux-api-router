import AboutPage from '../containers/about-page';
import NotFoundPage from '../containers/not-found-page';

const routesConfig = [
  {
    path: '/about',
    exact: true,
    component: AboutPage,
  },
  {
    path: '*',
    exact: false,
    component: NotFoundPage,
  },
];

export default routesConfig;
