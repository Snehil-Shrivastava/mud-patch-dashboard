"use client";

import { EPRComplianceRadialChartData } from "@/lib/data";
import {
  DiversionAssessmentRadialChartBig,
  DiversionAssessmentRadialChartSmall,
} from "./diversion-assessment-radial-chart";

const ComplianceTrackerRadialChart = ({
  bigRadialChartData,
  SmallRadialChartDart,
}: EPRComplianceRadialChartData) => {
  return (
    <div className="rounded-xl bg-[#394C5C] text-white p-6 flex">
      <div className="flex-1 border-r border-r-white/30">
        <DiversionAssessmentRadialChartBig
          title={bigRadialChartData.label}
          description={bigRadialChartData.description}
          value={bigRadialChartData.value}
          max={bigRadialChartData.max}
          unit={bigRadialChartData.unit}
          PS={bigRadialChartData.ps}
          footerLable={bigRadialChartData.footerLable}
        />
      </div>
      <div className="flex-1 flex flex-col gap-5">
        {SmallRadialChartDart.map((data, index) => (
          <DiversionAssessmentRadialChartSmall
            key={index}
            value={data.value}
            max={100}
            title={data.label}
            description={data.description}
          />
        ))}
      </div>
    </div>
  );
};

export default ComplianceTrackerRadialChart;
