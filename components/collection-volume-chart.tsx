// components/collection-units-chart.tsx
import CollectionVolumeRow from "./collection-volume-row";
import { CategoryVolumeData } from "@/lib/data"; // Import the data

const CollectionVolumeChart = ({
  title,
  description,
  data,
  iconColor,
}: {
  title: string;
  description: string;
  data: CategoryVolumeData[];
  iconColor?: string;
}) => {
  return (
    <div className="bg-white text-brand w-[48%] rounded-xl">
      <div className="flex flex-col gap-1 px-6 pt-6 border-b pb-4">
        <h3 className="font-gilroy-bold text-2xl">{title}</h3>
        <p className="text-[#7A5C51]/60 font-gilroy-light text-sm">
          {description}
        </p>
      </div>
      <div className="flex flex-col items-center px-6 pb-6">
        {/* Dynamic Progress Bars List */}
        <div className="w-full mt-8 flex flex-col gap-10 px-4 h-145 overflow-y-auto">
          {data.map((category) => (
            <CollectionVolumeRow
              key={category.id}
              label={category.label}
              percentage={category.percentage}
              kgs={category.kgs}
              iconSrc={category.iconSrc}
              iconColor={iconColor}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CollectionVolumeChart;
