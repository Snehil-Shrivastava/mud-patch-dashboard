"use client";

import React, { useState } from "react";
import { PieChart, Pie, Cell, Sector, ResponsiveContainer } from "recharts";

import { Card } from "@/components/ui/card";

// Data & Color Configuration matching your brand design system
const data = [
  { name: "Outgrown", value: 30, color: "#78c5d4" },
  { name: "Repair", value: 25, color: "#297c82" },
  { name: "Stained", value: 30, color: "#164951" },
  { name: "Resale", value: 15, color: "#f7d575" },
];

// 1. Custom inner dotted track
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const DottedTrack = ({ width, height }: any) => {
  if (!width || !height) return null;

  // Align exactly with the PieChart's cx="50%" and cy="80%"
  const cx = width / 2;
  const cy = height * 0.8;
  const r = 90; // Slightly smaller than the Pie's innerRadius (110)

  return (
    <path
      d={`M ${cx - r},${cy} A ${r},${r} 0 0,1 ${cx + r},${cy}`}
      fill="none"
      stroke="#a39997" // Muted grey/brown for the dots
      strokeWidth="2.5"
      strokeDasharray="4 14"
      strokeLinecap="round"
      opacity={0.6}
    />
  );
};

// 2. Custom active marker (pill knob) & central text rendering
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const renderActiveShape = (props: any) => {
  const {
    cx,
    cy,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    midAngle,
  } = props;

  // Calculate coordinates for the center of the arc segment
  const RADIAN = Math.PI / 180;
  const midRadius = (innerRadius + outerRadius) / 2;
  const x = cx + midRadius * Math.cos(-midAngle * RADIAN);
  const y = cy + midRadius * Math.sin(-midAngle * RADIAN);

  return (
    <g className="outline-none">
      {/* Central bold text representing the selected category */}
      <text
        x={cx}
        y={cy - 20} // Push slightly above the baseline
        textAnchor="middle"
        fill={fill}
        className="text-[44px] font-bold tracking-tight transition-colors duration-500 outline-none"
      >
        {payload.name}
      </text>

      {/* Main highlighted segment */}
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
        cornerRadius={15}
        className="transition-all duration-500 outline-none"
      />

      {/* The overlapping interactive marker (pill shape) */}
      <g
        // Rotate the pill tangent to the arc angle
        transform={`translate(${x}, ${y}) rotate(${90 - midAngle})`}
        className="transition-all duration-500 outline-none"
      >
        {/* Outer glowing layers (simulating a soft drop shadow) */}
        <rect
          x={-14}
          y={-24}
          width={28}
          height={48}
          rx={14}
          fill={fill}
          opacity={0.15}
        />
        <rect
          x={-12}
          y={-22}
          width={24}
          height={44}
          rx={12}
          fill={fill}
          opacity={0.3}
        />

        {/* Solid center pill */}
        {/* <rect x={-9} y={-19} width={18} height={38} rx={9} fill={fill} /> */}
        <circle cx={0} cy={0} r={22} fill={fill} />
        {/* White center dot hole */}
        <circle cx={0} cy={0} r={10} fill="#ffffff" />
      </g>
    </g>
  );
};

export default function DisposalTriggersChart({
  title,
  description,
  start = 2,
}: {
  title: string;
  description: string;
  start?: number;
}) {
  const [activeIndex, setActiveIndex] = useState(start); // Default active is "Stained" (index 2)

  return (
    <Card className="flex w-full flex-col rounded-xl p-6 border-none shadow-none">
      {/* Header text */}
      <div className="mb-6 flex flex-col items-center sm:items-start text-center sm:text-left text-[#7A5C51]">
        <h2 className="text-2xl font-gilroy-bold">{title}</h2>
        <p className="mt-1 text-sm">{description}</p>
      </div>

      {/* Recharts Container */}
      <div className="relative h-60 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            {/* The background dotted tracking line */}
            <DottedTrack />

            <Pie
              data={data}
              cx="50%"
              cy="80%" // Anchors the half-circle to the bottom of the container
              startAngle={180}
              endAngle={0}
              innerRadius={150}
              outerRadius={170}
              paddingAngle={4}
              cornerRadius={15}
              dataKey="value"
              activeIndex={activeIndex}
              activeShape={renderActiveShape}
              onMouseEnter={(_, index) => setActiveIndex(index)}
              onClick={(_, index) => setActiveIndex(index)}
              className="outline-none"
              style={{ outline: "none" }}
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={entry.color}
                  className="cursor-pointer transition-colors duration-300 hover:opacity-90 outline-none"
                  style={{ outline: "none" }}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Custom Bottom Legend */}
      <div className="mt-6 flex flex-wrap items-center justify-center gap-6 sm:justify-between sm:gap-2 select-none">
        {data.map((item, index) => (
          <div
            key={item.name}
            onClick={() => setActiveIndex(index)}
            className="group flex cursor-pointer items-center gap-3 transition-opacity hover:opacity-80"
          >
            {/* Hollow Legend Circle */}
            <div
              className={`h-3 w-3 rounded-full transition-all duration-300 ${
                activeIndex === index ? "scale-110" : ""
              }`}
              style={{ backgroundColor: item.color }}
            />
            <span
              className={`text-sm font-medium transition-colors ${
                activeIndex === index
                  ? "text-[#4a3b38]"
                  : "text-muted-foreground"
              }`}
            >
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </Card>
  );
}
