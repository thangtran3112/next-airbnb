import Image from "next/image";
import Link from "next/link";
import { useCountries } from "../lib/getCountries";
import { AddToFavoriteButton, DeleteFromFavoriteButton } from "./SubmitButton";
import { addToFavorite, deleteFromFavorite } from "../actions";
import { getImageFullUrl } from "../lib/supabase";
interface iAppProps {
  imagePath: string;
  description: string;
  price: number;
  location: string;
  userId: string | undefined;
  isInFavoriteList: boolean;
  favoriteId: string;
  homeId: string;
  pathName: string;
}

export default function ListingCard({
  imagePath,
  location,
  description,
  price,
  userId,
  isInFavoriteList,
  favoriteId,
  homeId,
  pathName,
}: iAppProps) {
  const { getCountryByValue } = useCountries();
  const country = getCountryByValue(location);

  return (
    <div className="flex flex-col">
      <div className="relative h-72">
        <Link href={`/home/${homeId}`}>
          <Image
            src={getImageFullUrl(imagePath)}
            alt="Image of House"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="rounded-lg h-full object-cover"
          />
        </Link>
        {userId && (
          <div className="z-10 absolute top-2 right-2">
            {isInFavoriteList ? (
              <form action={deleteFromFavorite}>
                <input type="hidden" name="userId" value={userId} />
                <input type="hidden" name="favoriteId" value={favoriteId} />
                <input type="hidden" name="pathName" value={pathName} />
                <DeleteFromFavoriteButton />
              </form>
            ) : (
              <form action={addToFavorite}>
                <input type="hidden" name="userId" value={userId} />
                <input type="hidden" name="homeId" value={homeId} />
                <input type="hidden" name="pathName" value={pathName} />
                <AddToFavoriteButton />
              </form>
            )}
          </div>
        )}
      </div>
      <Link href={`/home/${homeId}`} className="mt-2">
        <h3 className="font-medium text-base">
          {country?.flag} {country?.label} /{country?.region}
        </h3>
        <p className="text-muted-foreground text-sm line-clamp-2">
          {description}
        </p>
        <p className="text-muted-foreground pt-2">
          <span className="font-medium text-black">${price}</span> Night
        </p>
      </Link>
    </div>
  );
}
