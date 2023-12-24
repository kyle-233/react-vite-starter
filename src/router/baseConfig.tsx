import { ComponentType, ReactNode, Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
import { Loading } from '../components';
import { AuthRouter } from './AuthConfig';
import { RouterItemProps } from './type';
import { commonRouter, outerRouter } from './commonRouter';
// import { roleRouter } from './roleRouter';

const packingRouter = (routers: RouterItemProps<ComponentType>[], isRoleRouter: boolean) => {
  const newArr: RouterItemProps<ReactNode>[] = [];
  routers.map((routerItem) => {
    const { path, roles, element: Element, children } = routerItem;
    newArr.push({
      path,
      roles,
      element: isRoleRouter ? (
        <Suspense fallback={<Loading />}>
          <AuthRouter roles={roles} redirce={routerItem}>
            <Element />
          </AuthRouter>
        </Suspense>
      ) : (
        <Suspense fallback={<Loading />}>
          <Element />
        </Suspense>
      ),
      children: packingRouter(children ?? [], isRoleRouter),
    });
  });
  return newArr;
};

export const routerMenus = [
  // ...packingRouter(roleRouter, true),
  ...packingRouter(commonRouter, false),
];

export const RouterViews = () => useRoutes(routerMenus);

export const OuterViews = () => useRoutes([...packingRouter(outerRouter, false)])
