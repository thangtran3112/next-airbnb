/* eslint-disable @next/next/no-img-element */
import { CategoryShowcase } from "@/app/components/CategoryShowcase";
import { PlaceholderAvatarSrc } from "@/app/components/UserNav";
import prisma from "@/app/lib/db";
import { useCountries } from "@/app/lib/getCountries";
import { getImageFullUrl } from "@/app/lib/supabase";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

async function getData(homeId: string) {
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
  return (
    <div className="w-[75%] mx-auto mt-10 mb-12">
      <h1 className="font-medium text-2xl mb-5">{data?.title}</h1>
      <div className="relative h-[550px]">
        {/* you can only use `fill` Image attribute in next/image with a relative parent element */}
        <Image
          alt="Image of Home"
          src={getImageFullUrl(data?.photo)}
          fill
          className="rounded-lg h-full object-cover w-full"
        />
      </div>

      <div className="flex justify-between gap-x-24 mt-8">
        <div className="w-2/3">
          <h3 className="text-xl font-medium">
            {country?.flag} {country?.label} / {country?.region}
          </h3>
          <div className="flex text-muted-foreground gap-x-2">
            <p>{data?.guests}-Guests</p> * <p>{data?.bedrooms}-Bedrooms</p> *{" "}
            <p>{data?.bathrooms}-Bathrooms</p>
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
        </div>
      </div>
    </div>
  );
}
