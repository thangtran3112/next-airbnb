"use client";
import dynamic from "next/dynamic";
import { useState } from "react";
import { createLocation } from "@/app/actions";
import { CreationBottomBar } from "@/app/components/CreationButtomBar";
import { useCountries } from "@/app/lib/getCountries";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectTrigger,
  SelectValue,
  SelectLabel,
  SelectItem,
} from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";

export default function AddressRoute({ params }: { params: { id: string } }) {
  const { getAllCountries } = useCountries();
  const [locationValue, setLocationValue] = useState("");

  const LazyMap = dynamic(() => import("@/app/components/Map"), {
    ssr: false,
    loading: () => <Skeleton className="h-[50vh] w-full" />,
  });
  return (
    <>
      <div className="w-3/5 mx-auto">
        <h2 className="text-3xl font-semibold tracking-tight transition-colors mb-10">
          Where is your home located?
        </h2>
      </div>

      <form action={createLocation}>
        <input type="hidden" name="homeId" value={params.id} />
        <input type="hidden" name="countryValue" value={locationValue} />
        <div className="w-3/5 mx-auto mb-36">
          {/* Country select */}
          <div className="mb-5">
            <Select required onValueChange={(value) => setLocationValue(value)}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a country" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Countries</SelectLabel>
                  {getAllCountries().map((item) => (
                    <SelectItem key={item.value} value={item.value}>
                      {item.flag} {item.label} / {item.region}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          {/* Map area */}
          <LazyMap locationValue={locationValue} />
        </div>
        <CreationBottomBar />
      </form>
    </>
  );
}
