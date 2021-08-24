import AboutPage from '../containers/about-page';
import HomePage from '../containers/home-page';
import NotFoundPage from '../containers/not-found-page';

const routesConfig = [
  {
    path: '/',
    exact: true,
    component: HomePage,
  },
  {
    path: '/about',
    exact: true,
    component: AboutPage,
  },
  // {
  //   path: '/details/:id',
  //   exact: true,
  //   // component: DetailsPage,
  // },
  {
    path: '*',
    exact: false,
    component: NotFoundPage,
  },
];

export default routesConfig;
