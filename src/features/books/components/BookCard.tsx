import { JSX } from "react";

import { AppCard } from "components/shared/AppCard";

import './BookCard.scss'

export function BookCard(): JSX.Element {
  return (
    <AppCard>
      <div className="book__title">Название книги</div>
      <div className="book__subtitle">Название цикла</div>
      <div className="book__autor">
        Автор: Известный писатель
      </div>
    </AppCard>
  );
}
