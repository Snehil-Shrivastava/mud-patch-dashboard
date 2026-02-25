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

import Image, { StaticImageData } from "next/image";

interface PostUseRadialChartProps {
  title: string;
  description: string;
  value: number;
  max: number;
  unit: string;
  iconSrc: string | StaticImageData;
  trend?: "up" | "down";
  footerLabel?: string;
  footerStatus?: string;
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

const GarmentLifeCycleRadialChart = ({
  title,
  description,
  value,
  max,
  unit,
  iconSrc,
  trend,
  footerLabel,
  footerStatus,
}: PostUseRadialChartProps) => {
  // Calculate how far around the arc to go based on the max value
  const endAngle = 90 + (value / max) * 360;

  // Format chart data based on the passed value
  const chartData = [{ browser: "safari", visitors: value, fill: "#ce9643" }];
  return (
    <>
      <Card className="flex flex-row w-full shadow-none border-none px-5 gap-4">
        <CardHeader className="pb-0 px-0 gap-4 flex flex-col text-[#7A5C51] flex-1">
          <div>
            <Image src={iconSrc} alt="" width={58} height={58} />
          </div>
          <CardTitle className="font-gilroy-bold text-2xl leading-7">
            {title}
          </CardTitle>
          <CardDescription className="text-sm opacity-70">
            {description}
          </CardDescription>
        </CardHeader>
        <CardContent className="pb-0 px-0 flex-[1.3]">
          <ChartContainer
            config={chartConfig}
            className="mx-auto aspect-square max-h-62.5"
          >
            <RadialBarChart
              data={chartData}
              startAngle={90}
              endAngle={endAngle}
              innerRadius={80}
              outerRadius={160}
            >
              <PolarGrid
                gridType="circle"
                radialLines={false}
                stroke="none"
                className="first:fill-muted last:fill-background"
                polarRadius={[96, 64]}
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
                            y={(viewBox.cy as number) - 10}
                            className="text-[42px] font-gilroy-bold"
                            fill="#7A5C51"
                          >
                            {value}
                          </tspan>
                          {unit && (
                            <tspan
                              x={viewBox.cx}
                              y={(viewBox.cy || 0) + 24}
                              fill="#7A5C51"
                              className="text-[26px]"
                            >
                              {unit}
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
      {trend && (
        <div className="flex gap-3 items-center px-5 text-sm font-gilroy-bold">
          <span className="text-black">{footerLabel}</span>
          <span
            className={`${trend === "up" ? "text-[#008001]" : "text-[#CC0001]"}`}
          >
            {footerStatus}
          </span>
        </div>
      )}
    </>
  );
};

export default GarmentLifeCycleRadialChart;
