import CollectionVolumeChart from "@/components/collection-volume-chart";
import {
  mockCategoryVolumeProductData,
  mockCategoryVolumeSegmentData,
} from "@/lib/data";
import PostUseChartsSection from "@/Sections/post-use-collections-charts";

const Page = async ({
  searchParams,
}: {
  // If you are using Next.js 15, searchParams is a Promise. If Next.js 14, it's a sync object.
  // We'll await it to be safe for both versions.
  searchParams:
    | Promise<{ [key: string]: string | string[] | undefined }>
    | { [key: string]: string | string[] | undefined };
}) => {
  // 2. Resolve the searchParams
  const params = await searchParams;

  // 3. Extract the 'month' parameter (defaulting to undefined if not present)
  const month = typeof params.month === "string" ? params.month : "current";
  return (
    <>
      <PostUseChartsSection month={month} />
      <div className="h-[85vh] flex justify-between items-start">
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
    // </div>
  );
};

export default Page;
