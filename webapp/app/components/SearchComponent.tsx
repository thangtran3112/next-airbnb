"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Cross, CrossIcon, SearchIcon } from "lucide-react";
import { ChangeEvent, useState } from "react";
import { useCountries } from "../lib/getCountries";
import { HomeMap } from "./HomeMap";
import { Button } from "@/components/ui/button";
import { CreationSubmit } from "./SubmitButton";
import { FeatureCounterCard } from "./FeatureCounterCard";
import { Card } from "@/components/ui/card";
import { QueryParams } from "../lib/constant";
import {
  redirect,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";
import { revalidatePath } from "next/cache";

interface SearchModalProps {
  countryDesc?: string;
  guests?: number;
}

export function SearchModalComponent() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { getAllCountries, getCountryByValue } = useCountries();

  const guests = searchParams.get(QueryParams.guests);
  const countryValue = searchParams.get(QueryParams.country);
  const country = countryValue ? getCountryByValue(countryValue) : undefined;
  const rooms = searchParams.get(QueryParams.rooms);
  const bathrooms = searchParams.get(QueryParams.bathrooms);
  const isFiltersPresented = country || guests || rooms || bathrooms;

  const [step, setStep] = useState(1);
  const [locationValue, setLocationValue] = useState("");

  function SubmitButtonLocal() {
    if (step === 1) {
      return (
        <Button onClick={() => setStep(2)} type="button">
          Next
        </Button>
      );
    } else if (step === 2) {
      return <CreationSubmit />;
    }
  }

  //see more here https://github.com/vercel/next.js/discussions/47583
  //this does not refresh the page somehow
  function clearAllSearchParams(event: any) {
    event.preventDefault();
    const currentParams = new URLSearchParams(
      Array.from(searchParams.entries())
    ); // -> has to use this form

    currentParams.delete(QueryParams.country);
    currentParams.delete(QueryParams.guests);
    currentParams.delete(QueryParams.rooms);
    currentParams.delete(QueryParams.bathrooms);

    // we can also remove or manipulate the query string here
    const query = "";
    const fullPath = `${pathname}${query}`;
    router.push(fullPath);
    router.refresh();
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="flex flex-col">
          <div className="rounded-full py-1 px-2 border flex items-center cursor-pointer">
            <div className="flex h-full divide-x font-medium text-base sm:text-xl">
              <p className="px-2">
                {country ? `${country.value} ${country.flag}` : "Any where"}
              </p>
              <p className="px-2">Any Week</p>
              <p className="px-2">
                {guests && Number(guests) > 0
                  ? `${guests} Guests+`
                  : "Add guests"}
              </p>
            </div>
            <SearchIcon className="bg-primary text-white p-1 h-6 w-6 sm:h-8 sm:w-8 rounded-full" />
            {isFiltersPresented && (
              // We need to use the form to load the url with no params
              <form>
                <Button
                  variant="link"
                  size="sm"
                  onClick={(e) => clearAllSearchParams(e)}
                >
                  <span className="text-sm underline">Clear</span>
                </Button>
              </form>
            )}
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form className="gap-4 flex flex-col">
          <input type="hidden" name="country" value={locationValue}></input>
          {step === 1 ? (
            <>
              <DialogHeader>
                <DialogTitle>Select a Country</DialogTitle>
                <DialogDescription>
                  Please choose a country, that you want:
                </DialogDescription>
              </DialogHeader>

              <Select
                required
                onValueChange={(value) => setLocationValue(value)}
                value={locationValue}
              >
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
              <HomeMap locationValue={locationValue} />
            </>
          ) : (
            <>
              <DialogHeader>
                <DialogTitle>Select all the info you need</DialogTitle>
                <DialogDescription>
                  Please select the features that you want:
                </DialogDescription>
              </DialogHeader>
              <Card>
                {/* Guest Cards */}
                <FeatureCounterCard
                  featureName="Guests"
                  question="How many guests do you have?"
                  counterInputName={QueryParams.guests}
                />

                {/* Room Cards */}
                <FeatureCounterCard
                  featureName="Rooms"
                  question="Minimum number of bedrooms?"
                  counterInputName={QueryParams.rooms}
                />

                {/* Bathroom Cards */}
                <FeatureCounterCard
                  featureName="Bathrooms"
                  question="Minimum number of bathrooms?"
                  counterInputName={QueryParams.bathrooms}
                />
              </Card>
            </>
          )}

          <DialogFooter>
            <SubmitButtonLocal />
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
