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
} from "@/components/ui/chart";
import { VolumeData } from "@/lib/data";

export const description = "A multiple line chart";

export function CollectionVolumeComparisonChart({
  data,
  title,
  description,
  label1,
  label2,
  color1,
  color2,
  width,
}: {
  data: VolumeData[];
  title: string;
  description: string;
  label1: string;
  label2: string;
  color1: string;
  color2: string;
  width?: string;
}) {
  return (
    <Card
      className={`shadow-none border-none text-[#7A5C51] ${width ? width : "w-[48%]"}`}
    >
      <CardHeader className="gap-1">
        <CardTitle className="text-2xl font-gilroy-bold">{title}</CardTitle>
        <CardDescription className="text-[#7A5C51]/60">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={{
            greenBrand: {
              label: label1,
              color: color1,
            },
            peerIndex: {
              label: label2,
              color: color2,
            },
          }}
        >
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
            <div
              className={`w-5 h-1 rounded`}
              style={{
                backgroundColor: color1,
              }}
            />
            <span>{label1}</span>
          </div>
          <div className="flex items-center gap-2">
            <div
              className={`w-5 h-1 rounded`}
              style={{
                backgroundColor: color2,
              }}
            />
            <span>{label2}</span>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
