import { ComponentType, lazy } from 'react'
import { RouterItemProps } from './type'

const Home = lazy(() => import('../views/Home/index'))
const Login = lazy(() => import('../views/Login/index'))
const NotFound = lazy(() => import('../views/NotFound/index'))

export const commonRouter: RouterItemProps<ComponentType>[] = [
  {
    path: '',
    // roles: [USER_ROLES.ADMIN, USER_ROLES.TEST],
    element: Home,
    name: 'routers.home',
    children: [],
  },
  {
    path: '*',
    // roles: [USER_ROLES.ADMIN, USER_ROLES.TEST],
    element: NotFound,
    name: 'routers.notFound',
    children: [],
  },
  {
    path: '/login',
    // roles: [USER_ROLES.ADMIN, USER_ROLES.TEST],
    element: Login,
    name: 'routers.login',
    children: [],
  },
]
