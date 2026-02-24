// components/collection-units-chart.tsx
import { ProgressWithLabel } from "./progress-bar";
import { mockCollectionUnitsData } from "@/lib/data"; // Import the data

const CollectionUnitsChart = () => {
  // Dynamically calculate the totals so the header always matches the data!
  const totalUnits = mockCollectionUnitsData.reduce(
    (acc, curr) => acc + curr.units,
    0,
  );
  const totalKgs = mockCollectionUnitsData.reduce(
    (acc, curr) => acc + curr.kgs,
    0,
  );

  return (
    <div className="bg-white text-brand w-[48%] rounded-xl p-6">
      <div className="flex flex-col gap-1">
        <h3 className="font-gilroy-bold text-2xl">Collection Units</h3>
        <p className="text-[#7A5C51]/60 font-gilroy-light text-sm">
          Post-use garment returns by sources
        </p>
      </div>
      <div className="flex flex-col items-center mt-8">
        {/* Dynamic Totals Header */}
        <div className="flex justify-center bg-[#3F5E3E] p-4 text-white rounded-xl text-4xl font-gilroy-bold">
          <h2 className="inline-block tracking-wide">
            {totalUnits.toLocaleString()} Units | {totalKgs.toLocaleString()}{" "}
            Kgs
          </h2>
        </div>

        {/* Dynamic Progress Bars List */}
        <div className="w-full mt-8 flex flex-col gap-5 px-4">
          {mockCollectionUnitsData.map((data) => (
            <ProgressWithLabel
              key={data.id}
              units={data.units}
              kgs={data.kgs}
              source={data.source}
              value={data.percentage}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CollectionUnitsChart;
