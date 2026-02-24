"use client";

import { CartesianGrid, Line, LineChart, XAxis } from "recharts";

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
import { VolumeData } from "@/lib/data";

export const description = "A multiple line chart";

const chartConfig = {
  greenBrand: {
    label: "Green brand",
    color: "var(--chart-1)",
  },
  peerIndex: {
    label: "Peer Index",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig;

export function CollectionVolumeChart({ data }: { data: VolumeData[] }) {
  return (
    <Card className="shadow-none border-none w-[48%] text-[#7A5C51]">
      <CardHeader className="gap-1">
        <CardTitle className="text-2xl font-gilroy-bold">
          Collection volume comparison
        </CardTitle>
        <CardDescription className="text-[#7A5C51]/60">
          Monthly collection volume relative to peer brands
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={data}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid horizontal={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent className="w-40" />}
            />
            <Line
              dataKey="greenBrand"
              type="monotone"
              stroke="var(--color-greenBrand)"
              strokeWidth={4}
              dot={false}
            />
            <Line
              dataKey="peerIndex"
              type="monotone"
              stroke="var(--color-peerIndex)"
              strokeWidth={4}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="text-xs flex justify-between w-full">
          <div className="flex items-center gap-2">
            <div className="w-5 h-1 bg-[#C0E2C1] rounded" />
            <span>Green brand</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-5 h-1 bg-[#9D8982] rounded" />
            <span>Peer Index</span>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
