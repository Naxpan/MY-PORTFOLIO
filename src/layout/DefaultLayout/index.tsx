import Header from "./Header";

const DefaultLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div className="w-full min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 w-full md:bg-slate-950/50 md:backdrop-blur-xl md:border-b md:border-slate-400/10 md:shadow-[0_8px_30px_rgba(15,23,42,0.1)]">
        <div className="w-full max-w-[1200px] mx-auto h-[60px]">
          <Header />
        </div>
      </header>
      <main className="flex-1 flex flex-col items-center justify-center">
        {children}
      </main>
    </div>
  );
};

export default DefaultLayout;
