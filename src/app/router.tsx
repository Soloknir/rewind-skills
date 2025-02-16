import { useMemo } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router';

import { paths } from 'config/paths';

import { default as AppRoot } from './routes/app/root';
import { default as BooksRoute } from './routes/app/books/books';
import { default as BookRoute } from './routes/app/books/book';

export const createAppRouter = () =>
  createBrowserRouter([
    {
      path: paths.app.root.path,
      element: (
        <AppRoot />
      ),
      children: [
        {
          path: paths.app.books.path,
          element: (<BooksRoute />)
        },
        {
          path: paths.app.book.path,
          element: (<BookRoute />)
        },
      ],
    },
    // {
    //   path: '*',
    //   lazy: () => import('./routes/not-found').then(convert(queryClient)),
    // },
  ]);

export const AppRouter = () => {
  const router = useMemo(() => createAppRouter(), []);

  return <RouterProvider router={router} />;
};