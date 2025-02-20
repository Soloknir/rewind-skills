import { JSX } from 'react';

import './AppHeader.scss';

export function AppHeader(): JSX.Element {
  return (
    <>
      <header className="header">
        <div className="container">
          <h1>Rewind Skills</h1>
        </div>
      </header>
    </>
  );
}
