import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { TooltipProvider } from "@/components/ui/tooltip";

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
          {children}
        </SidebarProvider>
      </TooltipProvider>
    </>
  );
};

export default AdminLayout;
