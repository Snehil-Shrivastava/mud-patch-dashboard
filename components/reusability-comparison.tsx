import ReusabilityComaparisonRow from "./reusability-comparison-bar-row";

const ReusabilityComparision = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="bg-white p-7.5 rounded-xl flex flex-col gap-10">
      <div>
        <h3 className="font-gilroy-bold text-2xl">{title}</h3>
        <span className="text-[#7A5C51]/60 font-gilroy-light text-sm">
          {description}
        </span>
      </div>
      <div className="flex flex-col gap-8">
        <ReusabilityComaparisonRow
          iconSrc="/brand.svg"
          label="Brand"
          iconColor="bg-[#394C5C]"
          reusablePercent={60}
        />
        <ReusabilityComaparisonRow
          iconSrc="/peer-index.svg"
          label="Peer Index"
          iconColor="bg-[#394C5C]"
          reusablePercent={50}
        />
      </div>
      <div className="flex justify-center items-center gap-10 py-4 bg-[#B78969]/20 text-black rounded-lg">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-[100px] bg-[#748695]" />
          <span>Reusable</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-[100px] bg-[#394C5C]" />
          <span>Non-Reusable</span>
        </div>
      </div>
    </div>
  );
};

export default ReusabilityComparision;
