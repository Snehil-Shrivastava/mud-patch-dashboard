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

interface PostUseRadialChartProps {
  title: string;
  description: string;
  value: number;
  max: number;
  unit: string;
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

export const DiversionAssessmentRadialChartBig = ({
  title,
  description,
  value,
  max,
  unit,
}: PostUseRadialChartProps) => {
  const endAngle = 90 + (value / max) * 360;

  // Format chart data based on the passed value
  const chartData = [{ browser: "safari", visitors: value, fill: "#ffffff" }];
  return (
    <Card className="flex flex-row shadow-none border-none gap-4 bg-transparent text-white py-0 w-90 mx-auto">
      <CardHeader className="pb-0 px-0 gap-5 flex flex-col flex-1 justify-center">
        <div>
          <CardTitle className="font-gilroy-bold text-2xl leading-7">
            {title}
          </CardTitle>
          <CardDescription className="text-sm">{description}</CardDescription>
        </div>
        <div>
          <span className="text-sm">*Across all sources</span>
        </div>
      </CardHeader>
      <CardContent className="pb-0 px-0 flex-[1.3]">
        <ChartContainer
          config={chartConfig}
          className="mx-auto h-50 max-w-52.5 max-h-62.5"
        >
          <RadialBarChart
            data={chartData}
            startAngle={90}
            endAngle={endAngle}
            innerRadius={80}
            outerRadius={160}
            style={{
              height: "200px",
              maxHeight: "none",
            }}
          >
            <PolarGrid
              gridType="circle"
              radialLines={false}
              stroke="none"
              className="first:fill-[#ffffff33] last:fill-[#394C5C]"
              polarRadius={[96, 64]}
            />
            <RadialBar dataKey="visitors" cornerRadius={50} />
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
                          fill="#ffffff"
                        >
                          {value}
                        </tspan>
                        {unit && (
                          <tspan
                            x={viewBox.cx}
                            y={(viewBox.cy || 0) + 24}
                            fill="#ffffff"
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
        <p className="text-center py-1.5 text-lg">423 Kgs</p>
      </CardContent>
    </Card>
  );
};

export const DiversionAssessmentRadialChartSmall = ({
  value,
  max,
  title,
  description,
}: {
  value: number;
  max: number;
  title: string;
  description: string;
}) => {
  const endAngle = 90 + (value / max) * 360;

  // Format chart data based on the passed value
  const chartData = [{ browser: "safari", visitors: value, fill: "#ffffff" }];
  return (
    <Card className="flex flex-row shadow-none border-none gap-4 bg-transparent text-white py-0 w-auto mx-auto">
      <CardContent className="pb-0 px-0 flex-[1.3] flex gap-5 items-center w-90">
        <ChartContainer
          config={chartConfig}
          className="mx-auto max-w-25 h-25 max-h-62.5 flex-[0.7]"
        >
          <RadialBarChart
            data={chartData}
            startAngle={90}
            endAngle={endAngle}
            innerRadius={40}
            outerRadius={80}
            style={{
              maxHeight: "none",
            }}
          >
            <PolarGrid
              gridType="circle"
              radialLines={false}
              stroke="none"
              className="first:fill-[#ffffff33] last:fill-[#394C5C]"
              polarRadius={[48, 32]}
            />
            <RadialBar dataKey="visitors" cornerRadius={50} />
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
                          y={(viewBox.cy as number) + 2}
                          className="text-lg font-gilroy-bold"
                          fill="#ffffff"
                        >
                          {value}%
                        </tspan>
                        {/* {unit && (
                          <tspan
                            x={viewBox.cx}
                            y={(viewBox.cy || 0) + 24}
                            fill="#ffffff"
                            className="text-[26px]"
                          >
                            {unit}
                          </tspan>
                        )} */}
                      </text>
                    );
                  }
                }}
              />
            </PolarRadiusAxis>
          </RadialBarChart>
        </ChartContainer>
        <div className="flex flex-col flex-1">
          <p className="py-1.5 text-xl font-gilroy-bold">{title}</p>
          <span className="font-gilroy-light">{description}</span>
        </div>
      </CardContent>
    </Card>
  );
};
