import { JSX } from "react";
import { useInfiniteBooks } from "../api/books-list";



export function BooksList(): JSX.Element {
  const booksQuery = useInfiniteBooks();

  if (booksQuery.isLoading) {
    return (
      <div>
        Loading...
      </div>
    );
  }


  const books = booksQuery.data?.pages.flatMap((page) => page.data);

  if (!books?.length) {
    return (
      <div
        role="list"
        aria-label="books"
      >
        <h4>No Books Found</h4>
      </div>
    );
  }

  console.log('books', books);

  return (
    <>
    </>
  );
}