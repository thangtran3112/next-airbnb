import { Suspense } from "react";
import ListingCard from "./components/ListingCard";
import { MapFilterItems } from "./components/MapFilterItems";
import prisma from "./lib/db";
import { SkeletonCard } from "./components/SkeletonCard";

type SearchParamsProps = {
  searchParams?: { filter?: string };
};
async function getData({ searchParams }: SearchParamsProps) {
  const data = await prisma.home.findMany({
    where: {
      addedCategory: true,
      addedDescription: true,
      addedLocation: true,
      categoryName: searchParams?.filter ?? undefined, //if filter is not given
    },
    select: {
      photo: true,
      id: true,
      price: true,
      description: true,
      country: true,
    },
  });

  return data;
}

export default function Home({ searchParams }: SearchParamsProps) {
  return (
    <div className="container mx-auto px-5 lg:px-10">
      <MapFilterItems />
      {/* Use searchParams.filter as unique key to identify when Loading is shown */}
      {/* Without a key/dependency, React will only show loading on initial render. */}
      <Suspense key={searchParams?.filter} fallback={<SkeletonLoading />}>
        <ShowItems searchParams={searchParams} />
      </Suspense>
    </div>
  );
}

const ListItemClassName =
  "grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8";

async function ShowItems({ searchParams }: SearchParamsProps) {
  const data = await getData({ searchParams });

  return (
    <div className={ListItemClassName}>
      {data.map((item) => (
        <ListingCard
          key={item.id}
          description={item.description as string}
          imagePath={item.photo as string}
          price={item.price as number}
          location={item.country as string}
        />
      ))}
    </div>
  );
}

function SkeletonLoading() {
  return (
    <div className={ListItemClassName}>
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
    </div>
  );
}
