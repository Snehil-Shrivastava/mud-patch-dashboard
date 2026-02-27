"use client";

import { TrendingUp } from "lucide-react";
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";

export const description = "A linear area chart";

const chartData = [
  { year: "2024", desktop: 0 },
  { year: "2025", desktop: 2 },
  { year: "2026", desktop: 15 },
  { year: "2027", desktop: 9 },
  { year: "2028", desktop: 21 },
  { year: "2029", desktop: 37 },
  { year: "2030", desktop: 28 },
  { year: "2031", desktop: 35 },
];

const chartConfig = {
  desktop: {
    label: "Usage",
    color: "#CE9643",
  },
} satisfies ChartConfig;

export function UsageOverTImeChart() {
  return (
    <Card className="w-full shadow-none border-none text-[#7A5C51]">
      <CardHeader className="border-b py-0 px-8">
        <CardTitle className="text-2xl font-gilroy-bold">
          Avg usage period over time
        </CardTitle>
        <CardDescription className="text-[#7A5C51]/60">
          Measured in days for all products within brand portfolio
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-5">
        <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 0,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="year"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 4)}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickCount={5}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dot" hideLabel />}
            />
            <Area
              dataKey="desktop"
              type="linear"
              fill="var(--color-desktop)"
              fillOpacity={0.4}
              stroke="#CE9643"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
