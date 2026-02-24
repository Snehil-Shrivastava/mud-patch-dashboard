// components/progress-bar.tsx
import { Field, FieldLabel } from "@/components/ui/field";
import { Progress } from "@/components/ui/progress";

// 1. Define the props interface
interface ProgressWithLabelProps {
  units: number;
  kgs: number;
  source: string;
  value: number;
}

export function ProgressWithLabel({
  units,
  kgs,
  source,
  value,
}: ProgressWithLabelProps) {
  // We use the source name to generate a unique ID for accessibility (htmlFor)
  const elementId = `progress-${source.replace(/\s+/g, "-").toLowerCase()}`;

  return (
    <Field className="w-full max-w-sm">
      <FieldLabel htmlFor={elementId}>
        <span className="text-black font-gilroy-medium">
          {/* Dynamically insert units and kgs with comma formatting */}
          {units.toLocaleString()} Units | {kgs.toLocaleString()} Kgs
        </span>
        <span className="ml-auto font-gilroy-bold text-black/40">
          {/* Dynamically insert source name */}
          {source}
        </span>
      </FieldLabel>
      {/* Dynamically bind the progress value */}
      <Progress value={value} id={elementId} />
    </Field>
  );
}
