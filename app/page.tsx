import { Suspense } from "react";
import ListingCard from "./components/ListingCard";
import { MapFilterItems } from "./components/MapFilterItems";
import prisma from "./lib/db";
import { SkeletonCard } from "./components/SkeletonCard";
import { NoItems } from "./components/NoItem";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

interface SearchParamsProps {
  searchParams?: {
    filter?: string;
    country?: string;
    guests?: string; // as QueryParams
    rooms?: string; // as QueryParams
    bathrooms?: string; // as QueryParams
  };
}

interface UserIdSearchParamsProps extends SearchParamsProps {
  userId: string | undefined;
}

async function getHomeData({ userId, searchParams }: UserIdSearchParamsProps) {
  const data = await prisma.home.findMany({
    where: {
      addedCategory: true,
      addedDescription: true,
      addedLocation: true,
      categoryName: searchParams?.filter ?? undefined, //if filter is not given
      country: searchParams?.country ?? undefined,
      guests: searchParams?.guests ?? undefined,
      bathrooms: searchParams?.bathrooms ?? undefined,
      bedrooms: searchParams?.rooms ?? undefined,
    },
    select: {
      photo: true,
      id: true,
      price: true,
      description: true,
      country: true,
      Favorite: {
        where: {
          userId: userId ?? undefined,
        },
      },
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
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  const data = await getHomeData({
    searchParams: searchParams,
    userId: user?.id,
  });

  return (
    <>
      {data.length === 0 ? (
        <NoItems
          description="Please check another category or create your own listing!"
          title="Sorry no listings found for this category ..."
        />
      ) : (
        <div className={ListItemClassName}>
          {data.map((home) => (
            <ListingCard
              key={home.id}
              description={home.description as string}
              imagePath={home.photo as string}
              price={home.price as number}
              location={home.country as string}
              userId={user?.id}
              favoriteId={home.Favorite[0]?.id}
              isInFavoriteList={home.Favorite.length > 0 ? true : false}
              homeId={home.id}
              pathName="/"
            />
          ))}
        </div>
      )}
    </>
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
