"use client";

import { useRouter, useSearchParams } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function MonthFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Get the current month from the URL, default to "current"
  const currentMonth = searchParams.get("month") || "current";

  const handleValueChange = (value: string) => {
    // Create a new URLSearchParams object so we don't wipe out other params
    const params = new URLSearchParams(searchParams.toString());
    params.set("month", value);

    // Push the new URL without scrolling to the top
    router.push(`?${params.toString()}`, { scroll: false });
  };

  return (
    <Select value={currentMonth} onValueChange={handleValueChange}>
      <SelectTrigger className="w-40 bg-transparent border border-white/20 text-[#7A5C51] hover:bg-white/10 focus:ring-0 focus:ring-offset-0">
        <SelectValue placeholder="Select timeframe" />
      </SelectTrigger>
      <SelectContent className="border-none">
        <SelectItem value="current">Current Month</SelectItem>
        <SelectItem value="last-month">Last Month</SelectItem>
        <SelectItem value="two-months-ago">Two Months Ago</SelectItem>
        <SelectItem value="last-3-months">Last 3 Months</SelectItem>
      </SelectContent>
    </Select>
  );
}
