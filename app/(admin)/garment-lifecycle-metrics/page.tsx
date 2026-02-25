import CollectionVolumeChart from "@/components/collection-volume-chart";
import { CollectionVolumeComparisonChart } from "@/components/collection-volume-comparison-chart";
import GarmentLifeCycleRadialChart from "@/components/garment-life-cycle-chart";
import { UsageOverTImeChart } from "@/components/usage-period-over-time-chart";
import {
  mockUsageComparisonData,
  mockUsageMetricsData,
  mockCategoryVolumeProductData,
  mockCategoryVolumeSegmentData,
} from "@/lib/data";

const Page = () => {
  return (
    <>
      <div className="">
        <div className="grid grid-cols-2 gap-10">
          {mockUsageMetricsData.map((data, index) => (
            <div className="bg-white rounded-xl p-6" key={index}>
              <GarmentLifeCycleRadialChart
                title={data.title}
                description={data.description}
                value={data.value}
                max={data.max}
                unit={data.unit}
                iconSrc={data.iconSrc}
                trend={data.trend}
                footerLabel={data.footerLabel}
                footerStatus={data.footerStatus}
              />
            </div>
          ))}
          <CollectionVolumeComparisonChart
            data={mockUsageComparisonData}
            title="Usage comparison"
            description="Monthly usage relative to peer brands"
            label1="Green brand"
            label2="Peer index"
            color1="#CE9643"
            color2="#9D8982"
            width="w-full"
          />
        </div>
      </div>
      <div className="flex justify-between items-start">
        <UsageOverTImeChart />
      </div>
      <div className="flex justify-between items-start">
        <CollectionVolumeChart
          title="Usage by segment"
          description="Duration of use (days): Ranked by segment"
          data={mockCategoryVolumeSegmentData}
          iconColor="bg-[#CF9645]"
        />
        <CollectionVolumeChart
          title="Usage by product"
          description="Duration of use (days): Ranked by product"
          data={mockCategoryVolumeProductData}
          iconColor="bg-[#CF9645]"
        />
      </div>
    </>
  );
};

export default Page;
