import { RouteObject } from 'react-router';
import { BaseLayout } from '@components/index';
import { HomePage, NotFoundPage } from '@pages/index';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <BaseLayout />,
    children: [{ index: true, element: <HomePage /> }],
  },
  { path: '*', element: <NotFoundPage /> },
];
