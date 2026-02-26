import { EPRComplianceRadialChartData } from "@/lib/data";
import ComplianceTrackerRadialChart from "./compliance-tracker-radial-chart";

const DiversionAssessment = ({
  title,
  description,
  data,
}: {
  title: string;
  description?: string;
  data: EPRComplianceRadialChartData;
}) => {
  return (
    <div className="bg-white p-7.5 rounded-xl flex flex-col gap-6">
      <div>
        <h3 className="font-gilroy-bold text-2xl">{title}</h3>
        {description && (
          <span className="text-[#7A5C51]/60 font-gilroy-light text-sm">
            {description}
          </span>
        )}
      </div>
      <ComplianceTrackerRadialChart
        bigRadialChartData={data.bigRadialChartData}
        SmallRadialChartDart={data.SmallRadialChartDart}
      />
    </div>
  );
};

export default DiversionAssessment;
