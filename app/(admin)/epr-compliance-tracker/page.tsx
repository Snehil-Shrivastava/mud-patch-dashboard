import DiversionAssessment from "@/components/garment-diversion-assessment";
import ReusabilityBySegment from "@/components/reusability-by-segment";
import ReusabilityComparision from "@/components/reusability-comparison";

import {
  mockReusabilityByProductData,
  mockReusabilityBySegmentData,
} from "@/lib/data";

const Page = () => {
  return (
    <>
      <div className="flex flex-col gap-10 w-full">
        <DiversionAssessment
          title="Garment Diversion Assessment"
          description="Reusability Vs Non-Reusability: Across all integrations or sources"
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
      <DiversionAssessment title="Reuse pathways" description="" />
    </>
  );
};

export default Page;
