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

const VALUE = 68; // percentage (0–100)

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

export function CollectionRateChart() {
  // 360 degrees = 100%. Calculate how far around the arc to go.
  const endAngle = (VALUE / 100) * 360;

  return (
    <Card className="grid grid-cols-2 w-80 shadow-none border-none px-5 gap-4">
      <CardHeader className="pb-0 px-0 gap-0 inline-block text-[#7A5C51]">
        <CardTitle className="font-bold text-lg">Collection Rate</CardTitle>
        <CardDescription className="text-sm">
          Post-use collections via Mud Patch marketplace
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
            endAngle={90 + endAngle}
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
                          className="text-[28px] font-bold"
                          fill="#7A5C51"
                        >
                          {VALUE}%
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
