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

// Define the props to accept the data from our mock file
interface PostUseRadialChartProps {
  title: string;
  description: string;
  value: number;
  max: number;
  format: "units" | "percentage" | "number";
}

const chartConfig = {
  visitors: {
    label: "units",
  },
  safari: {
    label: "Safari",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig;

export function PostUseRadialChart({
  title,
  description,
  value,
  max,
  format,
}: PostUseRadialChartProps) {
  // Calculate how far around the arc to go based on the max value
  const endAngle = 90 + (value / max) * 360;

  // Format chart data based on the passed value
  const chartData = [{ browser: "safari", visitors: value, fill: "#3F5E3E" }];

  return (
    <Card className="grid grid-cols-2 w-80 shadow-none border-none px-5 gap-4">
      <CardHeader className="pb-0 px-0 gap-0 inline-block text-[#7A5C51]">
        <CardTitle className="font-gilroy-bold text-lg leading-6">
          {title}
        </CardTitle>
        <CardDescription className="text-sm">{description}</CardDescription>
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
                          className="text-[28px] font-gilroy-bold leading-7"
                          fill="#7A5C51"
                        >
                          {/* Dynamically format the center text */}
                          {format === "percentage" ? `${value}%` : value}
                        </tspan>
                        {/* Only show "units" text if format is strictly "units" */}
                        {format === "units" && (
                          <tspan
                            x={viewBox.cx}
                            y={(viewBox.cy || 0) + 24}
                            fill="#7A5C51"
                            className="text-base"
                          >
                            units
                          </tspan>
                        )}
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
