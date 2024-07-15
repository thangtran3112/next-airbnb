import { type ClassValue, clsx } from "clsx";
import { Metadata } from "next";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function constructMetadata({
  title = "Next Airbnb - best place for your next trip",
  description = "Next Airbnb is an open-source Airbnb web app",
  image = "/airbnb-mobile.webp",
  icons = "/airbnb.svg",
  noIndex = false,
}: {
  title?: string;
  description?: string;
  image?: string;
  icons?: string;
  noIndex?: boolean;
} = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: image,
        },
      ],
    },
    icons,
    metadataBase: new URL(process.env.NEXT_PUBLIC_URL as string),
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}
