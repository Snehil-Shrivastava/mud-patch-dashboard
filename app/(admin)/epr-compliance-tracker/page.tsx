import EPRSpendRadialChart from "@/components/epr-spend-tracker-radial-chart";
import DiversionAssessment from "@/components/garment-diversion-assessment";
import ReusabilityBySegment from "@/components/reusability-by-segment";
import ReusabilityComparision from "@/components/reusability-comparison";

import {
  EPRSpendRadialChartData,
  GarmentDiversionData,
  mockReusabilityByProductData,
  mockReusabilityBySegmentData,
  ReusePathwaysData,
} from "@/lib/data";

const Page = () => {
  return (
    <>
      <div className="flex flex-col gap-10 w-full">
        <DiversionAssessment
          title="Garment Diversion Assessment"
          description="Reusability Vs Non-Reusability: Across all integrations or sources"
          data={GarmentDiversionData}
        />
        <ReusabilityComparision
          title="Reusability comparison against peers"
          description="Reusability Vs Non-Reusability relative to peer group (%)"
        />
      </div>
      <ReusabilityBySegment
        title="Reusability by segment"
        description="Reusability Vs Non-Reusability: Ranked by segment (%)"
        data={mockReusabilityBySegmentData}
      />
      <ReusabilityBySegment
        title="Reusability by product"
        description="Reusability Vs Non-Reusability: Ranked by product (%)"
        data={mockReusabilityByProductData}
      />
      <DiversionAssessment
        title="Reuse pathways"
        description=""
        data={ReusePathwaysData}
      />
      <div className="bg-white p-7.5 rounded-xl flex flex-col gap-6">
        <div>
          <h3 className="font-gilroy-bold text-2xl">
            Compliance spend tracker
          </h3>
        </div>
        <div className="rounded-xl bg-[#394C5C] text-white p-6 flex">
          {EPRSpendRadialChartData.map((data, index) => (
            <EPRSpendRadialChart
              key={index}
              value={data.value}
              max={data.max}
              unit={data.unit}
              footerLable={data.footerLable}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Page;
