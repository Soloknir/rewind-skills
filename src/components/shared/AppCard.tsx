import { JSX } from "react";

import './AppCard.scss'

export function AppCard({ children }: React.PropsWithChildren): JSX.Element {
  return (
    <div className="card">
      { children }
    </div>
  );
}
