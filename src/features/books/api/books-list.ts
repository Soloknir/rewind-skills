import { infiniteQueryOptions, useInfiniteQuery } from '@tanstack/react-query';

import { api } from 'lib/api';
import { Book, Meta } from 'types/api';

export const getBooks = ({
  page = 1,
}: {
  page?: number;
}): Promise<{ data: Book[]; meta: Meta }> => {
  return api.get(`/books`, {
    params: {
      page,
    },
  });
};

export const getInfiniteBooksQueryOptions = () => {
  return infiniteQueryOptions({
    queryKey: [],
    queryFn: ({ pageParam = 1 }) => {
      return getBooks({ page: pageParam });
    },
    getNextPageParam: (lastPage: { meta: Meta }) => {
      if (lastPage?.meta?.page === lastPage?.meta?.totalPages) return undefined;
      const nextPage = lastPage.meta.page + 1;
      return nextPage;
    },
    initialPageParam: 1,
  });
};

export const useInfiniteBooks = () => {
  return useInfiniteQuery({
    ...getInfiniteBooksQueryOptions(),
  });
};