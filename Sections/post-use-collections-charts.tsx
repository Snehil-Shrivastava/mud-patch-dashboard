import { CollectionWeightChart } from "@/components/collection-weight-chart";
import { CollectionRateChart } from "@/components/collections-rate-chart";
import { GarmentSoldChart } from "@/components/garment-sold-chart";
import React from "react";

const PostUseChartsSection = () => {
  return (
    <div className="mt-35">
      <div className="flex bg-[#3F5E3E] text-white items-center p-4 rounded-xl gap-10 justify-between">
        <div className="flex gap-8 items-center">
          <div className="w-15 h-15 bg-white rounded-md" />
          <div>
            <h2 className="text-2xl font-bold">Hello, Little Green</h2>
            <span className="font-light text-lg">Welcome Back</span>
          </div>
        </div>
        <div className="flex gap-10 items-center">
          <div>Report View</div>
          <div>Current Month</div>
        </div>
      </div>
      <div className="mt-20">
        <div className="flex gap-5">
          <GarmentSoldChart />
          <CollectionRateChart />
          <CollectionWeightChart />
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default PostUseChartsSection;
