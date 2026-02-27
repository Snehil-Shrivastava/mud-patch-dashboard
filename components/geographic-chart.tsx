"use client";

import { useState } from "react";
import { ZoomIn, ZoomOut } from "lucide-react";

import { Card } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import UKIrelandVector from "./uk-irelad-vector";

// 1. Data configuration for the different dropdown filters
const MAP_VIEWS = {
  disposal: {
    label: "Disposal Triggers",
    legend: [
      { label: "Outgrown", color: "#78c5d4" },
      { label: "Repair", color: "#297c82" },
      { label: "Stained", color: "#164951" },
      { label: "Resale", color: "#f7d575" },
      { label: "Worn repeatedly", color: "#f0b429" },
      { label: "Uncomfortable", color: "#f69d7a" },
      { label: "Lost shape/Stretched", color: "#cd5b45" },
      { label: "Other", color: "#666666" },
    ],
    regions: {
      scotland: "#78c5d4",
      "northern-ireland": "#cd5b45",
      ireland: "#f7d575",
      north: "#297c82",
      midlands: "#164951",
      wales: "#f7d575",
      "south-west": "#f0b429",
      "south-east": "#f69d7a",
    },
  },
  usage: {
    label: "By usage period",
    legend: [
      { label: "<50 Days", color: "#c18e5c" },
      { label: ">180 Days", color: "#d2a880" },
      { label: "50-100 Days", color: "#bfa38b" },
      { label: "100-180 Days", color: "#f5cca6" },
      { label: ">+ 2 Years", color: "#ffa27a" },
    ],
    regions: {
      scotland: "#c18e5c",
      "northern-ireland": "#f5cca6",
      ireland: "#bfa38b",
      north: "#d2a880",
      midlands: "#bfa38b",
      wales: "#f5cca6",
      "south-west": "#d2a880",
      "south-east": "#ffa27a",
    },
  },
  collection: {
    label: "By Collection Rates",
    legend: [
      { label: "Top 3 Collections areas", color: "#365936" },
      { label: "Low Collection (5-8)", color: "#4d664d" },
      { label: "Mid-Tier Collection (3-5)", color: "#898C88" },
      { label: "No Collection", color: "#bebebe" },
    ],
    regions: {
      scotland: "#365936",
      "northern-ireland": "#898C88",
      ireland: "#898C88",
      north: "#4d664d",
      midlands: "#4d664d",
      wales: "#bebebe",
      "south-west": "#bebebe",
      "south-east": "#bebebe",
    },
  },
};

type ViewKey = keyof typeof MAP_VIEWS;

export default function GeographyChart() {
  const [activeView, setActiveView] = useState<ViewKey>("disposal");
  const currentData = MAP_VIEWS[activeView];

  return (
    <Card className="w-full max-w-5xl rounded-3xl p-8 border-none shadow-none">
      {/* Header Section */}
      <div className="mb-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center font-gilroy-bold text-[#7A5C51]">
        <h2 className="text-2xl">Geography comparison chart</h2>
        <Select
          value={activeView}
          onValueChange={(val) => setActiveView(val as ViewKey)}
        >
          <SelectTrigger className="w-50 border-none bg-muted/60 font-medium text-[#7A5C51] focus:ring-0 focus:ring-offset-0">
            <SelectValue placeholder="Select view" />
          </SelectTrigger>
          <SelectContent>
            {Object.entries(MAP_VIEWS).map(([key, view]) => (
              <SelectItem key={key} value={key}>
                {view.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Main Content Layout */}
      <div className="flex flex-col gap-8 md:flex-row">
        {/* Left: Map Area */}
        <div className="relative flex min-h-100 flex-1 items-center justify-center rounded-xl bg-white p-4">
          {/* 
            Placeholder Abstract Map SVG
            Replace the 'd' paths below with your actual UK/Ireland region TopoJSON or Map SVG vectors. 
            Keep the `id` attributes consistent so they map to the correct colors.
          */}
          {/* <svg
            viewBox="0 0 300 400"
            className="h-full max-h-125 w-full"
            stroke="white"
            strokeWidth="2"
            strokeLinejoin="round"
          > */}
          {/* Scotland */}
          {/* <path
              id="scotland"
              d="M130,20 Q170,10 180,50 Q190,90 160,110 Q140,120 120,90 Q110,50 130,20 Z"
              fill={currentData.regions.scotland}
              className="transition-colors duration-500"
            /> */}
          {/* North England */}
          {/* <path
              id="north"
              d="M160,110 Q190,130 180,180 Q150,190 140,150 Q130,120 160,110 Z"
              fill={currentData.regions.north}
              className="transition-colors duration-500"
            /> */}
          {/* Midlands */}
          {/* <path
              id="midlands"
              d="M180,180 Q210,210 190,260 Q150,270 140,220 Q130,190 180,180 Z"
              fill={currentData.regions.midlands}
              className="transition-colors duration-500"
            /> */}
          {/* Wales */}
          {/* <path
              id="wales"
              d="M140,220 Q110,230 115,280 Q140,290 150,260 Q155,230 140,220 Z"
              fill={currentData.regions.wales}
              className="transition-colors duration-500"
            /> */}
          {/* South East */}
          {/* <path
              id="south-east"
              d="M190,260 Q230,280 230,320 Q180,340 160,300 Q150,270 190,260 Z"
              fill={currentData.regions["south-east"]}
              className="transition-colors duration-500"
            /> */}
          {/* South West */}
          {/* <path
              id="south-west"
              d="M160,300 Q120,330 90,360 Q70,340 115,280 Q140,290 160,300 Z"
              fill={currentData.regions["south-west"]}
              className="transition-colors duration-500"
            /> */}
          {/* Northern Ireland */}
          {/* <path
              id="northern-ireland"
              d="M90,130 Q110,140 105,170 Q80,180 75,150 Z"
              fill={currentData.regions["northern-ireland"]}
              className="transition-colors duration-500"
            /> */}
          {/* Ireland */}
          {/* <path
              id="ireland"
              d="M105,170 Q110,210 90,260 Q40,250 50,190 Q60,140 90,130 Z"
              fill={currentData.regions.ireland}
              className="transition-colors duration-500"
            />
          </svg> */}

          <UKIrelandVector currentData={currentData} />

          {/* Zoom Controls */}
          <div className="absolute bottom-0 left-0 flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              className="h-10 w-10 rounded-full border-gray-300 text-gray-500 hover:bg-gray-100"
            >
              <ZoomIn className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="h-10 w-10 rounded-full border-gray-300 text-gray-500 hover:bg-gray-100"
            >
              <ZoomOut className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Divider */}
        <div className="hidden w-px bg-border md:block" />

        {/* Right: Legend Tags Area */}
        <div className="flex w-full flex-col justify-center gap-6 md:w-64 py-4">
          {currentData.legend.map((item, index) => (
            <div key={index} className="flex items-center gap-5">
              {/* Legend Ring Indicator */}
              <div
                className="h-6 w-6 shrink-0 rounded-full border-4 bg-transparent transition-colors duration-500"
                style={{ borderColor: item.color }}
              />
              <span className="text-[15px] font-medium text-muted-foreground transition-colors duration-500">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}
