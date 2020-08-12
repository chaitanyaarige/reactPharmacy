import React from 'react';

const Dashboard = React.lazy(() => import('./components/HomePage'));
const Page404 = React.lazy(() => import('./components/Page404'));



const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/404', exact: true, name: 'Page404' },
//   { path: '/users', exact: true,  name: 'Users', component: Users },
//   { path: '/users/:id', exact: true, name: 'User Details', component: User }
]

export default routes;
