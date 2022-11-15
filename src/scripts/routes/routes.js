import ActiveRestaurants from '../views/pages/active-restaurants';
import Detail from '../views/pages/detail';

const routes = {
  '/': ActiveRestaurants, // default page
  '/active-restaurants': ActiveRestaurants,
  '/detail/:id': Detail,
};

export default routes;
