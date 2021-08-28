import AboutPage from '../containers/about-page';
import DetailsPage from '../containers/details-page';
import HomePage from '../containers/home-page';
import NotFoundPage from '../containers/not-found-page';
import { ApiItem } from '../types/form-api';

const routesConfig = [
  {
    path: '/',
    exact: true,
    component: HomePage,
  },
  {
    path: `/details/${ApiItem.CHARACTER}/:id`,
    exact: true,
    component: DetailsPage,
  },
  {
    path: `/details/${ApiItem.LOCATION}/:id`,
    exact: true,
    component: DetailsPage,
  },
  {
    path: `/details/${ApiItem.EPISODE}/:id`,
    exact: true,
    component: DetailsPage,
  },
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
