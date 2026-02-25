import DiversionAssessment from "@/components/garment-diversion-assessment";
import ReusabilityComparision from "@/components/reusability-comparison";

const Page = () => {
  return (
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
  );
};

export default Page;
