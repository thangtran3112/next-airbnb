export function ListingCardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-8 mt-8">
      {children}
    </div>
  );
}
