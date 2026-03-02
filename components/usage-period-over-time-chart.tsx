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
  { year: "2024", usage: 0 },
  { year: "2025", usage: 2 },
  { year: "2026", usage: 15 },
  { year: "2027", usage: 9 },
  { year: "2028", usage: 21 },
  { year: "2029", usage: 37 },
  { year: "2030", usage: 28 },
  { year: "2031", usage: 35 },
];

const chartConfig = {
  usage: {
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
            {/* <XAxis
              dataKey="year"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 4)}
            /> */}
            <XAxis
  dataKey="year"
  tickLine={false}
  axisLine={false}
  tickMargin={8}
  padding={{ left: 20, right: 20 }} // ✅ adds gap from the axis edges
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
            {/* <Area
              dataKey="desktop"
              type="linear"
              fill="var(--color-desktop)"
              fillOpacity={0.4}
              stroke="#CE9643"
            /> */}
            <Area
  dataKey="usage"                   // ✅ fix: was "desktop"
  type="linear"
  fill="var(--color-usage)"
  fillOpacity={0.4}
  stroke="#CE9643"
  dot={{                            // ✅ always-visible dots
    r: 4,
    fill: "#CE9643",
    stroke: "#ffffff",
    strokeWidth: 2,
  }}
  activeDot={{                      // slightly larger on hover
    r: 6,
    fill: "#CE9643",
    stroke: "#ffffff",
    strokeWidth: 2,
  }}
/>
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
