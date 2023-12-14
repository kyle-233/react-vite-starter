import { ComponentType, lazy } from 'react';
import { RouterItemProps, USER_ROLES } from './type';

const Login = lazy(() => import('../views/Login/index'));
const NotFound = lazy(() => import('../views/NotFound/index'));

export const commonRouter: RouterItemProps<ComponentType>[] = [
  {
    path: '*',
    roles: [USER_ROLES.ADMIN, USER_ROLES.TEST],
    element: NotFound,
    name: 'routers.notFound',
    children: [],
  },
  {
    path: '/login',
    roles: [USER_ROLES.ADMIN, USER_ROLES.TEST],
    element: Login,
    name: 'routers.login',
    children: [],
  },
];
