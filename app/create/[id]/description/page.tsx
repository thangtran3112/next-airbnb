import { createDescription } from "@/app/actions";
import { Counter } from "@/app/components/Counter";
import { CreationBottomBar } from "@/app/components/CreationButtomBar";
import { FeatureCounterCard } from "@/app/components/FeatureCounterCard";
import { Card, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function DescriptionPage({
  params,
}: {
  params: { id: string };
}) {
  return (
    <>
      <div className="w-3/5 mx-auto">
        <h2 className="text-3xl font-semibold tracking-tight transition-colors">
          Please describe your home as good as you can!
        </h2>
      </div>

      <form action={createDescription}>
        <input type="hidden" name="homeId" value={params.id} />
        <div className="mx-auto w-3/5 mt-10 flex flex-col gap-y-5 mb-36">
          <div className="flex flex-col gap-y-2">
            <Label>Title</Label>
            <Input
              type="text"
              name="title"
              required
              placeholder="Short and simple ..."
            />
          </div>
          <div className="flex flex-col gap-y-2">
            <Label>Description</Label>
            <Textarea
              name="description"
              required
              placeholder="Please describe your home ..."
            />
          </div>

          <div className="flex flex-col gap-y-2">
            <Label>Price</Label>
            <Input
              name="price"
              required
              type="number"
              placeholder="Price per night in USD"
              min={10}
            />
          </div>

          <div className="flex flex-col gap-y-2">
            <Label>Image</Label>
            <Input name="image" type="file" required></Input>
          </div>

          {/* Guest Cards */}
          <Card>
            <FeatureCounterCard
              featureName="Guests"
              question="How many guests do you want?"
              counterInputName="guest"
            />
          </Card>

          {/* Room Cards */}
          <Card>
            <FeatureCounterCard
              featureName="Rooms"
              question="How many rooms do you have?"
              counterInputName="room"
            />
          </Card>

          {/* Bathroom Cards */}
          <Card>
            <FeatureCounterCard
              featureName="Bathrooms"
              question="How many bathrooms do you want?"
              counterInputName="bathroom"
            />
          </Card>
        </div>

        <CreationBottomBar />
      </form>
    </>
  );
}
