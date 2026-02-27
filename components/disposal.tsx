import { DisposalDataType, DisposalLabelDataType } from "@/lib/data";
import LineSegmentChart from "./line-segment-chart";

const Disposal = ({
  title,
  description,
  chartData,
  labelData,
}: {
  title: string;
  description: string;
  chartData: DisposalDataType[];
  labelData: DisposalLabelDataType[];
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
        {chartData.map((data, index) => (
          <LineSegmentChart
            key={index}
            iconSrc={data.iconSrc}
            label={data.label}
            iconColor="bg-[#CF9645]"
            outgrownPercent={data.outgrownPercent}
            repairPercent={data.repairPercent}
            stainedPercent={data.stainedPercent}
            resalePercent={data.resalePercent}
            wornPercent={data.wornPercent}
            uncomfortablePercent={data.uncomfortablePercent}
            stretchedPercent={data.stretchedPercent}
            otherPercent={data.otherPercent}
          />
        ))}
      </div>
      <div className="flex justify-center items-center gap-10 py-4 bg-[#B78969]/20 text-black rounded-lg text-[10px]">
        {labelData.map((data, index) => (
          <div className="flex items-center gap-2" key={index}>
            <div
              className="w-2 h-2 rounded-[100px]"
              style={{ backgroundColor: `${data.color}` }}
            />
            <span>{data.label}</span>
          </div>
        ))}
        {/* <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-[100px] bg-[#748695]" />
            <span>Reusable</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-[100px] bg-[#394C5C]" />
            <span>Non-Reusable</span>
          </div> */}
      </div>
    </div>
  );
};

export default Disposal;
