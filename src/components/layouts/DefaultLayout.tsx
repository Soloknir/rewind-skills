export function DefaultLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className="">
        header
      </header>
      <main className="">
        {children}
      </main>
    </>
  );
}
