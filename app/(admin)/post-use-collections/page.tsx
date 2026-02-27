import CollectionVolumeChart from "@/components/collection-volume-chart";
import {
  mockCategoryVolumeProductData,
  mockCategoryVolumeSegmentData,
} from "@/lib/data";
import PostUseChartsSection from "@/Sections/post-use-collections-charts";

const Page = async ({
  searchParams,
}: {
  searchParams:
    | Promise<{ [key: string]: string | string[] | undefined }>
    | { [key: string]: string | string[] | undefined };
}) => {
  const params = await searchParams;
  const month = typeof params.month === "string" ? params.month : "current";
  return (
    <>
      <PostUseChartsSection month={month} />
      <div className="flex justify-between items-start w-full">
        <CollectionVolumeChart
          title="Collection volume by segment"
          description="Units & weight ranked by segment"
          data={mockCategoryVolumeSegmentData}
        />
        <CollectionVolumeChart
          title="Collection volume by product"
          description="Units & weight ranked by product"
          data={mockCategoryVolumeProductData}
        />
      </div>
    </>
  );
};

export default Page;
