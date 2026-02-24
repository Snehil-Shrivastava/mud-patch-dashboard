import CollectionVolumeProductChart from "@/components/collection-volume-product";
import CollectionVolumeSegmentChart from "@/components/collection-volume-segment";
import PostUseChartsSection from "@/Sections/post-use-collections-charts";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
    <div className="flex flex-col gap-25 w-full h-full py-10 px-15 text-[#7A5C51] relative bg-[#f8f8f8]">
      <div className="sticky top-0 z-50 bg-[#f8f8f8] py-4">
        <div className="flex justify-between items-end">
          <h1 className="text-[32px] font-gilroy-bold">
            Circular Intelligence Portal
          </h1>
          <div className="flex gap-12 items-center">
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="bg-white px-5 py-3 w-100 rounded-[32px] text-lg text-[#CACACA] font-semibold"
              />
              <div className="absolute right-1 top-1/2 -translate-y-1/2 px-5 py-3 bg-white rounded-r-[32px]">
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  style={{ color: "#CACACA" }}
                  className="w-5"
                />
              </div>
            </div>
            <div>
              <button className="w-7">
                <FontAwesomeIcon icon={faBell} style={{ color: "#7A5C51" }} />
              </button>
            </div>
          </div>
        </div>
      </div>
      <PostUseChartsSection month={month} />
      <div className="h-[85vh] flex justify-between items-start">
        <CollectionVolumeSegmentChart />
        <CollectionVolumeProductChart />
      </div>
    </div>
  );
};

export default Page;
