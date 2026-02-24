"use client";

import {
  Label,
  PolarGrid,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart,
} from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChartContainer, type ChartConfig } from "@/components/ui/chart";

export const description = "A radial chart with text";

const VALUE = 3;
const MAX = 5;

const chartData = [{ browser: "safari", visitors: VALUE, fill: "#3F5E3E" }];

const chartConfig = {
  visitors: {
    label: "units",
  },
  safari: {
    label: "Safari",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig;

export function IntegrationNumberChart() {
  const endAngle = 90 + (VALUE / MAX) * 360;
  return (
    <Card className="grid grid-cols-2 w-80 shadow-none border-none px-5 gap-4">
      <CardHeader className="pb-0 px-0 gap-0 inline-block text-[#7A5C51]">
        <CardTitle className="font-gilroy-bold text-lg leading-6">
          Number of integrations
        </CardTitle>
        <CardDescription className="text-sm">
          Active Brand channels
        </CardDescription>
      </CardHeader>
      <CardContent className="pb-0 px-0 w-30">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-62.5"
        >
          <RadialBarChart
            data={chartData}
            startAngle={90}
            endAngle={endAngle}
            innerRadius={50}
            outerRadius={90}
          >
            <PolarGrid
              gridType="circle"
              radialLines={false}
              stroke="none"
              className="first:fill-muted last:fill-background"
              polarRadius={[60, 42]}
            />
            <RadialBar dataKey="visitors" background cornerRadius={10} />
            <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="text-[28px] font-gilroy-bold"
                          fill="#7A5C51"
                        >
                          {chartData[0].visitors}
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </PolarRadiusAxis>
          </RadialBarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
