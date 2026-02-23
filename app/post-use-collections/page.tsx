import PostUseChartsSection from "@/Sections/post-use-collections-charts";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Page = () => {
  return (
    <div className="w-full h-full py-10 px-15 text-[#7A5C51]">
      <div className="flex justify-between items-end">
        <h1 className="text-[32px] font-bold">Circular Intelligence Portal</h1>
        <div className="flex gap-12 items-center">
          <div>
            <span className="text-sm">Member ID</span>
            <h4 className="uppercase font-bold text-lg">patch1103</h4>
          </div>
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="bg-white px-5 py-3 w-75 rounded-[32px] text-lg text-[#CACACA] font-semibold"
            />
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              style={{ color: "#CACACA" }}
              className="absolute right-5 top-1/2 -translate-y-1/2 w-5"
            />
          </div>
          <div>
            <button className="w-7">
              <FontAwesomeIcon icon={faBell} style={{ color: "#7A5C51" }} />
            </button>
          </div>
        </div>
      </div>
      <PostUseChartsSection />
    </div>
  );
};

export default Page;
