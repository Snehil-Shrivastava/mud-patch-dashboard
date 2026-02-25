import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { TooltipProvider } from "@/components/ui/tooltip";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <TooltipProvider>
        <SidebarProvider
          style={
            {
              "--sidebar-width": "19.5rem",
            } as React.CSSProperties
          }
        >
          <AppSidebar />
          <div className="flex flex-col gap-20 w-full min-h-screen py-10 px-15 text-[#7A5C51] relative bg-[#f8f8f8]">
            <div className="sticky top-0 z-50 bg-[#f8f8f8] py-4">
              <div className="flex justify-between items-end">
                <h1 className="text-[32px] font-gilroy-bold">
                  Circular Intelligence Portal
                </h1>
                <div className="flex gap-12 items-center">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search"
                      className="bg-white px-5 py-3 w-100 rounded-[32px] text-lg text-[#CACACA] font-semibold"
                    />
                    <div className="absolute right-1 top-1/2 -translate-y-1/2 px-5 py-3 bg-white rounded-r-[32px]">
                      <FontAwesomeIcon
                        icon={faMagnifyingGlass}
                        style={{ color: "#CACACA" }}
                        className="w-5"
                      />
                    </div>
                  </div>
                  <div>
                    <button className="w-7">
                      <FontAwesomeIcon
                        icon={faBell}
                        style={{ color: "#7A5C51" }}
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {children}
          </div>
        </SidebarProvider>
      </TooltipProvider>
    </>
  );
};

export default AdminLayout;
