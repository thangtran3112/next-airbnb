/* eslint-disable @next/next/no-img-element */
import { createReservation } from "@/app/actions";
import { CategoryShowcase } from "@/app/components/CategoryShowcase";
import { HomeMap } from "@/app/components/HomeMap";
import { SelectCalendar } from "@/app/components/SelectCalendar";
import { ReservationSubmitButton } from "@/app/components/SubmitButton";
import { PlaceholderAvatarSrc } from "@/app/components/UserNav";
import prisma from "@/app/lib/db";
import { useCountries } from "@/app/lib/getCountries";
import { getImageFullUrl } from "@/app/lib/supabase";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Image from "next/image";
import Link from "next/link";
import { unstable_noStore as noStore } from "next/cache";

async function getData(homeId: string) {
  noStore();
  const data = await prisma.home.findUnique({
    where: {
      id: homeId,
    },
    select: {
      photo: true,
      description: true,
      bathrooms: true,
      bedrooms: true,
      guests: true,
      categoryName: true,
      price: true,
      title: true,
      country: true,
      Reservation: {
        where: {
          homeId: homeId,
        },
      },
      User: {
        select: {
          profileImage: true,
          firstName: true,
        },
      },
    },
  });
  return data;
}

export default async function HomeRoute({
  params,
}: {
  params: { id: string };
}) {
  const data = await getData(params.id);
  const { getCountryByValue } = useCountries();
  const country = getCountryByValue(data?.country as string);
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  function FormCreateReservation() {
    return (
      <form
        action={createReservation}
        className="flex flex-col max-w-[400px] lg:scale-[1.2] lg:mt-6"
      >
        <input type="hidden" name="homeId" value={params.id} />
        <input type="hidden" name="userId" value={user?.id} />
        <SelectCalendar reservations={data?.Reservation} />

        {user?.id ? (
          <ReservationSubmitButton />
        ) : (
          <Button className="w-full lg:scale-90" asChild>
            <Link href="/api/auth/login">Login to Book</Link>
          </Button>
        )}
      </form>
    );
  }

  return (
    <div className="w-[75%] mx-auto mt-10 mb-12">
      <h1 className="font-medium text-2xl mb-5">{data?.title}</h1>
      <div className="relative h-[550px] max-w-5xl">
        {/* you can only use `fill` Image attribute in next/image with a relative parent element */}
        <Image
          alt="Image of Home"
          src={getImageFullUrl(data?.photo)}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 90vw"
          className="rounded-lg h-full object-cover w-full lg:w-3/4"
        />
      </div>

      <div className="flex justify-between gap-x-24 mt-8">
        <div className="w-full lg:w-2/3">
          <h3 className="text-xl font-medium">
            {country?.flag} {country?.label} / {country?.region}
          </h3>
          <div className="flex text-sm text-muted-foreground gap-x-2">
            <p>{data?.guests} Guests</p> * <p>{data?.bedrooms} Beds</p> *{" "}
            <p>{data?.bathrooms} Baths</p>
          </div>
          <div className="flex item-centers mt-6">
            <img
              src={data?.User?.profileImage ?? PlaceholderAvatarSrc}
              alt="User Profile Image"
              className="w-10 h-10 rounded-full"
            />
            <div className="flex flex-col ml-4">
              <h3 className="font-medium">
                Hosted by{" "}
                <span className="font-medium capitalize">
                  {data?.User?.firstName}
                </span>
              </h3>
              <p className="text-muted-foreground text-sm">Host since 2016</p>
            </div>
          </div>

          <Separator className="my-7" />

          <CategoryShowcase categoryName={data?.categoryName as string} />

          <Separator className="my-7" />

          <p className="text-muted-foreground">{data?.description}</p>

          <Separator className="my-7" />

          <div className="block md:hidden lg:hidden">
            <FormCreateReservation />
          </div>

          <Separator className="my-7" />

          <HomeMap locationValue={country?.value as string} />
        </div>
        <div className="w-full hidden md:block lg:block">
          <FormCreateReservation />
        </div>
      </div>
    </div>
  );
}
