import { Card, CardHeader } from "@/components/ui/card";
import { Counter } from "./Counter";

interface FeatureCounterCardProps {
  featureName: string;
  question: string;
  counterInputName: string;
}

export function FeatureCounterCard({
  featureName,
  question,
  counterInputName,
}: FeatureCounterCardProps) {
  return (
    <CardHeader className="flex flex-col gap-y-5">
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <h3 className="font-medium underline">{featureName}</h3>
          <p className="text-muted-foreground text-sm">{question}</p>
        </div>
        <Counter name={counterInputName} />
      </div>
    </CardHeader>
  );
}
