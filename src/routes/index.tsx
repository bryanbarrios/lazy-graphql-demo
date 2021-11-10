import { lazy } from 'react';
import { RouteObject } from 'react-router';
import { BaseLayout } from '@components/index';
import { NotFoundPage } from '@pages/index';

const HomePage = lazy(() => import('@pages/home'));

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <BaseLayout />,
    children: [{ index: true, element: <HomePage /> }],
  },
  { path: '*', element: <NotFoundPage /> },
];
