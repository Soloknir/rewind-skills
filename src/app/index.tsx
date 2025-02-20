
import { AppProvider } from './provider';
import { AppRouter } from './router';
import React from 'react';

export const App = () => {
  return (
    <React.StrictMode>
      <AppProvider>
        <AppRouter />
      </AppProvider>
    </React.StrictMode>
  );
};