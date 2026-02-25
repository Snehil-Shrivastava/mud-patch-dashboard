import { Spinner } from "@/components/ui/spinner";

const Loading = () => {
  return (
    <div className="flex items-center justify-center w-full gap-6 bg-[#f8f8f8]">
      <Spinner className="size-8" />
    </div>
  );
};

export default Loading;
