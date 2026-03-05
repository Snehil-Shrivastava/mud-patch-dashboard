"use client";

import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
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
  // { year: "2024", usage: 0 },
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

export function UsageOverTimeChart() {
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
            height={200}
            margin={{
              left: 0,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <defs>
              <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#CE9643" stopOpacity={1} />
                <stop offset="64%" stopColor="#D19D4F" stopOpacity={1} />
                <stop offset="100%" stopColor="#CE9643" stopOpacity={0.1} />
              </linearGradient>
            </defs>
            <XAxis
              dataKey="year"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              padding={{ left: 50, right: 20 }}
              tickFormatter={(value) => value.slice(0, 4)}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              domain={[0, 60]}
              ticks={[0, 10, 20, 30, 40, 50, 60]}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dot" hideLabel />}
            />
            <Area
              dataKey="usage"
              type="linear"
              fill="url(#areaGradient)"
              fillOpacity={0.4}
              stroke="#CE9643"
              dot={{
                fill: "#ffffff",
                r: 5,
                fillOpacity: 1,
              }}
              activeDot={{
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
