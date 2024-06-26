import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import prisma from "../lib/db";
import { redirect } from "next/navigation";
import { NoItems } from "../components/NoItem";
import ListingCard from "../components/ListingCard";

async function getFavoritesData(userId: string) {
  const data = await prisma.favorite.findMany({
    where: {
      userId: userId,
    },
    select: {
      Home: {
        select: {
          id: true,
          photo: true,
          Favorite: true,
          price: true,
          description: true,
          country: true,
        },
      },
    },
  });
  return data;
}

export default async function FavoritesRoute() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  //if user is not logged in, redirect to login page
  if (!user || !user.id) {
    return redirect("/");
  }
  const data = await getFavoritesData(user.id);

  return (
    <section className="container mx-auto px-5 lg:px-10 mt-10">
      <h2 className="text-3xl font-semibold tracking-tight">Your Favorites</h2>
      {data.length === 0 ? (
        <NoItems
          title="Hey, you don't have any favorite yet..."
          description="Please add your favorites, so you can see them here!"
        />
      ) : (
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-8 mt-8">
          {data.map((item) => (
            <ListingCard
              key={item.Home?.id as string}
              imagePath={item.Home?.photo as string}
              description={item.Home?.description as string}
              price={item.Home?.price as number}
              location={item.Home?.country as string}
              userId={user.id}
              isInFavoriteList={
                (item.Home?.Favorite.length as number) > 0 ? true : false
              }
              favoriteId={item.Home?.Favorite[0]?.id as string}
              homeId={item.Home?.id as string}
              pathName="/favorites"
            />
          ))}
        </div>
      )}
    </section>
  );
}
