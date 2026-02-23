"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import postUseCollection from "@/public/post-use-collection.svg";
import lifeCycleMetrics from "@/public/life-cycle-metrics.svg";

const tabs = [
  {
    label: "Post-use garment collections",
    href: "/post-use-collections",
    icon: postUseCollection,
    color: "#3F5E3E",
  },
  {
    label: "Garment life-cycle metrics",
    href: "/garment-lifecycle-metrics",
    icon: lifeCycleMetrics,
    color: "#CF9645",
  },
];

function hexToFilter(hex: string): string {
  const filters: Record<string, string> = {
    "#3F5E3E":
      "invert(32%) sepia(18%) saturate(637%) hue-rotate(80deg) brightness(94%) contrast(89%)",
    "#CF9645":
      "invert(62%) sepia(48%) saturate(507%) hue-rotate(3deg) brightness(98%) contrast(89%)",
  };
  return filters[hex] ?? "";
}

const SidebarTabs = () => {
  const pathname = usePathname();

  return (
    <>
      <style>{`
        .active-tab {
          position: relative;
          background-color: #fafafa;
          /* Extend the tab to the RIGHT edge of the sidebar, flush with content area */
          margin-right: -2.5rem; /* match your sidebar px-10 padding */
          padding-right: 2.5rem;
          border-radius: 24px 0 0 24px;
        }
      `}</style>

      <div className="text-lg leading-5.75 flex flex-col gap-10">
        {tabs.map((tab) => {
          const isActive = pathname.startsWith(tab.href);

          return (
            <Link href={tab.href} key={tab.href} style={{ display: "block" }}>
              <div
                className={`py-4 px-7 transition-all duration-200 cursor-pointer ${
                  isActive ? "active-tab" : "rounded-[24px]"
                }`}
                style={{
                  backgroundColor: isActive ? "#fafafa" : tab.color,
                  color: isActive ? tab.color : "white",
                  width: isActive ? "300px" : "auto",
                }}
              >
                <div className="flex gap-7.5 items-center">
                  <Image
                    src={tab.icon}
                    alt=""
                    width={49}
                    height={49}
                    style={{
                      filter: isActive
                        ? `brightness(0) saturate(100%) ${hexToFilter(tab.color)}`
                        : "brightness(0) invert(1)",
                    }}
                  />
                  <span className={isActive ? "font-semibold" : "font-normal"}>
                    {tab.label}
                  </span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default SidebarTabs;
