import { ComponentType, lazy } from 'react'
import { RouterItemProps } from './type'

const Home = lazy(() => import('../views/Home/index'))
const Knowledge = lazy(() => import('../views/Knowledge/index'))
const Login = lazy(() => import('../views/Login/index'))
const Register = lazy(() => import('../views/Register/index'))
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
    path: '/knowledge',
    // roles: [USER_ROLES.ADMIN, USER_ROLES.TEST],
    element: Knowledge,
    name: 'routers.knowledge',
    children: [],
  },
  {
    path: '/login',
    // roles: [USER_ROLES.ADMIN, USER_ROLES.TEST],
    element: Login,
    name: 'routers.login',
    children: [],
  },
  {
    path: '/register',
    // roles: [USER_ROLES.ADMIN, USER_ROLES.TEST],
    element: Register,
    name: 'routers.register',
    children: [],
  },
  {
    path: '*',
    // roles: [USER_ROLES.ADMIN, USER_ROLES.TEST],
    element: NotFound,
    name: 'routers.notFound',
    children: [],
  },
]

export const outerRouter: RouterItemProps<ComponentType>[] = [
  {
    path: '/login',
    // roles: [USER_ROLES.ADMIN, USER_ROLES.TEST],
    element: Login,
    name: 'routers.login',
    children: [],
  },
  {
    path: '*',
    // roles: [USER_ROLES.ADMIN, USER_ROLES.TEST],
    element: NotFound,
    name: 'routers.notFound',
    children: [],
  },
]
