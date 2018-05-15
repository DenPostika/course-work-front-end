import { Scan } from './';

export default {
  path: '/',
  name: 'Home',
  childRoutes: [
    { path: 'scan', name: 'Scan', component: Scan, isIndex: true },
  ],
};
