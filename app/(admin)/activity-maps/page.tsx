import { auth } from "@/auth";
import GeographyChart from "@/components/geographic-chart";
import { MonthFilter } from "@/components/month-filter";

const Page = async () => {
  const session = await auth();

  const firstName = session?.user?.firstName || "Unknown";
  const lastName = session?.user?.lastName || "User";
  const memberId = session?.user?.id ?? "—";
  return (
    <>
      <div className="flex bg-[#584B42] text-white items-center p-4 rounded-xl gap-10 justify-between">
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
      <GeographyChart />
    </>
  );
};

export default Page;
