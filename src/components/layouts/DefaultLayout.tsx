import { AppHeader } from "components/shared/AppHeader";

export function DefaultLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AppHeader />
      <main className="">
        {children}
      </main>
    </>
  );
}
