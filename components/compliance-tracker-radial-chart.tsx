"use client";

import {
  DiversionAssessmentRadialChartBig,
  DiversionAssessmentRadialChartSmall,
} from "./diversion-assessment-radial-chart";

const ComplianceTrackerRadialChart = () => {
  return (
    <div className="rounded-xl bg-[#394C5C] text-white p-6 flex">
      <div className="flex-1 border-r border-r-white/30">
        <DiversionAssessmentRadialChartBig
          title="Garment Diversion"
          description="Units/Kgs"
          value={1410}
          max={1410}
          unit="units"
        />
      </div>
      <div className="flex-1 flex flex-col gap-5">
        <DiversionAssessmentRadialChartSmall
          value={35}
          max={100}
          title="Reusable quantity"
          description="493 units/148 Kgs"
        />

        <DiversionAssessmentRadialChartSmall
          value={65}
          max={100}
          title="Non-Reusable quantity"
          description="917 units/284 Kgs"
        />
      </div>
    </div>
  );
};

export default ComplianceTrackerRadialChart;
