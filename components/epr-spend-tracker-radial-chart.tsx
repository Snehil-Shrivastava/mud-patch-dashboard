"use client";

import {
  Label,
  PolarGrid,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart,
} from "recharts";

import { Card, CardContent } from "@/components/ui/card";
import { ChartContainer, type ChartConfig } from "@/components/ui/chart";

interface PostUseRadialChartProps {
  value: number;
  max: number;
  unit: string;
  footerLable?: string;
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

const EPRSpendRadialChart = ({
  value,
  max,
  unit,
  footerLable,
}: PostUseRadialChartProps) => {
  const endAngle = 90 + (value / max) * 360;

  // Format chart data based on the passed value
  const chartData = [{ browser: "safari", visitors: value, fill: "#ffffff" }];
  return (
    <Card className="flex flex-row shadow-none border-none gap-4 bg-transparent text-white py-0 mx-auto flex-1">
      <CardContent className="pb-0 px-0 flex-[1.3]">
        <ChartContainer
          config={chartConfig}
          className="mx-auto h-50 max-w-52.5 max-h-62.5"
        >
          <RadialBarChart
            data={chartData}
            startAngle={90}
            endAngle={endAngle}
            innerRadius={70}
            outerRadius={130}
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
              polarRadius={[82, 58]}
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
                          y={(viewBox.cy as number) + 5}
                          className="text-[26px] font-gilroy-bold"
                          fill="#ffffff"
                        >
                          {unit}
                          {value}
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
        <p className="text-center pt-4 text-xl font-gilroy-bold">
          {footerLable}
        </p>
      </CardContent>
    </Card>
  );
};

export default EPRSpendRadialChart;
