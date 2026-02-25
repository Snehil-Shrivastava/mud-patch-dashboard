import { auth } from "@/auth";
import { PostUseRadialChart } from "@/components/post-use-radial-chart";
import { getDashboardData, getYearlyVolumeData } from "@/lib/data";
import { MonthFilter } from "@/components/month-filter";
import { CollectionVolumeComparisonChart } from "@/components/collection-volume-comparison-chart";
import CollectionUnitsChart from "@/components/collection-units-chart";

const PostUseChartsSection = async ({
  month = "current",
}: {
  month?: string;
}) => {
  const session = await auth();

  const firstName = session?.user?.firstName || "Unknown";
  const lastName = session?.user?.lastName || "User";
  const memberId = session?.user?.id ?? "—";

  const dashboardData = await getDashboardData(month);

  const volumeData = await getYearlyVolumeData("this-year");

  return (
    <div className="flex flex-col gap-20 h-[75vh]">
      <div className="flex bg-[#3F5E3E] text-white items-center p-4 rounded-xl gap-10 justify-between">
        <div className="flex gap-8 items-center">
          <div className="w-15 h-15 bg-white rounded-md" />
          <div>
            <h2 className="text-3xl font-gilroy-bold">
              {firstName} {lastName}
            </h2>
            <div className="text-lg flex gap-2 items-center">
              <span className="font-gilroy-light">Member ID:</span>
              <span className="font-gilroy-bold">{memberId}</span>
            </div>
          </div>
        </div>
        <div className="flex gap-10 items-center">
          <div>Report View</div>
          <div className="bg-white rounded-md font-gilroy-bold text-[#7A5C51]">
            <MonthFilter />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-10">
        <div className="flex gap-5 justify-between">
          {dashboardData.metrics.map((metric) => (
            <PostUseRadialChart
              key={metric.id}
              title={metric.title}
              description={metric.description}
              value={metric.value}
              max={metric.max}
              format={metric.format}
            />
          ))}
        </div>
        <div className="flex justify-between">
          <CollectionUnitsChart />
          <CollectionVolumeComparisonChart
            data={volumeData.data}
            title="Collection volume comparison"
            description="Monthly collection volume relative to peer brands"
            label1="Green brand"
            label2="Peer Index"
            color1="#C0E2C1"
            color2="#9D8982"
          />
        </div>
      </div>
    </div>
  );
};

export default PostUseChartsSection;
