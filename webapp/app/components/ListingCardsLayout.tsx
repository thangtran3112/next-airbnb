export function ListingCardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-8 mt-8">
      {children}
    </div>
  );
}
