// components/collection-volume-row.tsx
import Image from "next/image";

// Define the properties this component will accept
interface CollectionVolumeRowProps {
  label: string;
  percentage: number;
  kgs: number;
  iconSrc: string;
}

const CollectionVolumeRow = ({
  label,
  percentage,
  kgs,
  iconSrc,
}: CollectionVolumeRowProps) => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-10 items-center">
        {/* Category Icon */}
        <div className="bg-[#3F5E3E] w-12 h-12 rounded-full flex items-center justify-center">
          <Image src={iconSrc} alt={`${label} icon`} width={24} height={24} />
        </div>

        {/* Category Label */}
        <h4 className="text-black font-gilroy-semibold text-lg">{label}</h4>
      </div>

      {/* Category Stats */}
      <div className="flex text-[#00a389] font-gilroy-semibold text-lg">
        <span className="pr-3 border-r border-r-black/40">{percentage}%</span>
        <span className="pl-3">{kgs} Kgs</span>
      </div>
    </div>
  );
};

export default CollectionVolumeRow;
