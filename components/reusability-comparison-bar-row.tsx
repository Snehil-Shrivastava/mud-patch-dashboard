import Image from "next/image";

interface CollectionVolumeRowProps {
  label: string;
  iconSrc: string;
  iconColor?: string;
  reusablePercent: number;
}

const ReusabilityComaparisonRow = ({
  label,
  iconSrc,
  iconColor,
  reusablePercent,
}: CollectionVolumeRowProps) => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-5 items-center w-50">
        {/* Category Icon */}
        <div
          className={`w-15 h-15 rounded-full flex items-center justify-center ${iconColor ? iconColor : "bg-[#3F5E3E]"}`}
        >
          <Image
            src={iconSrc}
            alt={`${label} icon`}
            width={30}
            height={30}
            className={`${label === "Dresses" ? "scale-50" : ""}`}
          />
        </div>

        {/* Category Label */}
        <h4 className="text-black font-gilroy-semibold text-lg">{label}</h4>
      </div>
      <div className="w-170 flex gap-2 text-white text-center">
        <div
          className="bg-[#748695] rounded-sm flex items-center justify-center"
          style={{
            height: "35px",
            width: `${reusablePercent}%`,
          }}
        >
          <p>{reusablePercent}%</p>
        </div>
        <div
          className="bg-[#394C5C] rounded-sm flex items-center justify-center"
          style={{
            height: "35px",
            width: `${100 - reusablePercent}%`,
          }}
        >
          <p>{100 - reusablePercent}%</p>
        </div>
      </div>
    </div>
  );
};

export default ReusabilityComaparisonRow;
