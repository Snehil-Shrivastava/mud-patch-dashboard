import Image from "next/image";

interface CollectionVolumeRowProps {
  label: string;
  iconSrc: string;
  iconColor?: string;
  outgrownPercent: { value: number; color: string; label?: string };
  repairPercent: { value: number; color: string; label?: string };
  stainedPercent: { value: number; color: string; label?: string };
  resalePercent: { value: number; color: string; label?: string };
  wornPercent: { value: number; color: string; label?: string };
  uncomfortablePercent: { value: number; color: string; label?: string };
  stretchedPercent: { value: number; color: string; label?: string };
  otherPercent: { value: number; color: string; label?: string };
}

const LineSegmentChart = ({
  label,
  iconSrc,
  iconColor,
  outgrownPercent,
  repairPercent,
  stainedPercent,
  resalePercent,
  wornPercent,
  uncomfortablePercent,
  stretchedPercent,
  otherPercent,
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
          className="rounded-sm flex items-center justify-center py-2"
          style={{
            // height: "35px",
            width: `${outgrownPercent.value}%`,
            backgroundColor: `${outgrownPercent.color}`,
          }}
        >
          {outgrownPercent.label && (
            <p className="text-sm font-gilroy-bold">{outgrownPercent.value}%</p>
          )}
        </div>
        <div
          className="rounded-sm flex items-center justify-center py-2"
          style={{
            // height: "35px",
            width: `${repairPercent.value}%`,
            backgroundColor: `${repairPercent.color}`,
          }}
        >
          {repairPercent.label && (
            <p className="text-sm font-gilroy-bold">{repairPercent.value}%</p>
          )}
        </div>
        <div
          className="rounded-sm flex items-center justify-center py-2"
          style={{
            // height: "35px",
            width: `${stainedPercent.value}%`,
            backgroundColor: `${stainedPercent.color}`,
          }}
        >
          {stainedPercent.label && (
            <p className="text-sm font-gilroy-bold">{stainedPercent.value}%</p>
          )}
        </div>
        <div
          className="rounded-sm flex items-center justify-center py-2"
          style={{
            // height: "35px",
            width: `${resalePercent.value}%`,
            backgroundColor: `${resalePercent.color}`,
          }}
        >
          {resalePercent.label && (
            <p className="text-sm font-gilroy-bold">{resalePercent.value}%</p>
          )}
        </div>
        <div
          className="rounded-sm flex items-center justify-center py-2"
          style={{
            // height: "35px",
            width: `${wornPercent.value}%`,
            backgroundColor: `${wornPercent.color}`,
          }}
        >
          {wornPercent.label && (
            <p className="text-sm font-gilroy-bold">{wornPercent.value}%</p>
          )}
        </div>
        <div
          className="rounded-sm flex items-center justify-center py-2"
          style={{
            // height: "35px",
            width: `${uncomfortablePercent.value}%`,
            backgroundColor: `${uncomfortablePercent.color}`,
          }}
        >
          {uncomfortablePercent.label && (
            <p className="text-sm font-gilroy-bold">
              {uncomfortablePercent.value}%
            </p>
          )}
        </div>
        <div
          className="rounded-sm flex items-center justify-center py-2"
          style={{
            // height: "35px",
            width: `${stretchedPercent.value}%`,
            backgroundColor: `${stretchedPercent.color}`,
          }}
        >
          {stretchedPercent.label && (
            <p className="text-sm font-gilroy-bold">
              {stretchedPercent.value}%
            </p>
          )}
        </div>
        <div
          className="rounded-sm flex items-center justify-center py-2"
          style={{
            // height: "35px",
            width: `${otherPercent.value}%`,
            backgroundColor: `${otherPercent.color}`,
          }}
        >
          {otherPercent.label && (
            <p className="text-sm font-gilroy-bold">{otherPercent.value}%</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default LineSegmentChart;
