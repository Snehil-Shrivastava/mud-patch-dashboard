// components/collection-units-chart.tsx
import CollectionVolumeRow from "./collection-volume-row";
import { mockCategoryVolumeProductData } from "@/lib/data"; // Import the data

const CollectionVolumeProductChart = () => {
  return (
    <div className="bg-white text-brand w-[48%] rounded-xl p-6">
      <div className="flex flex-col gap-1">
        <h3 className="font-gilroy-bold text-2xl">
          Collection volume by segment
        </h3>
        <p className="text-[#7A5C51]/60 font-gilroy-light text-sm">
          Units & weight ranked by segment
        </p>
      </div>
      <div className="flex flex-col items-center mt-8">
        {/* Dynamic Progress Bars List */}
        <div className="w-full mt-8 flex flex-col gap-10 px-4 h-145 overflow-y-auto">
          {mockCategoryVolumeProductData.map((category) => (
            <CollectionVolumeRow
              key={category.id}
              label={category.label}
              percentage={category.percentage}
              kgs={category.kgs}
              iconSrc={category.iconSrc}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CollectionVolumeProductChart;
