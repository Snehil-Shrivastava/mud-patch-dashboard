import Image from "next/image";

import postUseCollection from "@/public/post-use-collection.svg";
import lifeCycleMetrics from "@/public/life-cycle-metrics.svg";

const SidebarTabs = () => {
  return (
    <div className="text-white text-lg leading-5.75 flex flex-col gap-10">
      <div className="bg-[#3F5E3E] py-4 px-7 rounded-[24px]">
        <div className="flex gap-7.5">
          <Image
            src={postUseCollection}
            alt=""
            width={49}
            height={49}
            style={{ color: "white" }}
          />
          <span>Post-use garment collections</span>
        </div>
      </div>
      <div className="bg-[#CF9645] py-4 px-7 rounded-[24px]">
        <div className="flex gap-7.5">
          <Image
            src={lifeCycleMetrics}
            alt=""
            width={49}
            height={49}
            style={{ color: "white" }}
          />
          <span>Garment life-cycle metrics</span>
        </div>
      </div>
    </div>
  );
};

export default SidebarTabs;
