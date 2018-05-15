// This is the JSON way to define React Router rules in a Rekit app.
// Learn more from: http://rekit.js.org/docs/routing.html

// This is the JSON way to define React Router rules in a Rekit app.
// Learn more from: http://rekit.js.org/docs/routing.html
import {
  Users,
} from './';

export default {
  path: 'users',
  name: 'Users',
  childRoutes: [
    { path: 'users',
      name: 'Users',
      component: Users,
      isIndex: true,
    },
  ],
};
