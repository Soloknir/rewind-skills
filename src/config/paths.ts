export const paths = {
  app: {
    root: {
      path: '/app',
      getHref: () => '/app',
    },
    books: {
      path: 'books',
      getHref: () => '/app/books',
    },
    book: {
      path: 'books/:bookId',
      getHref: (id: string) => `/app/books/${id}`,
    },
  },
} as const;