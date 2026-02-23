import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

import Image from "next/image";

import mudpatchLogo from "@/public/mudpatch_logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear, faUser } from "@fortawesome/free-solid-svg-icons";
import SidebarTabs from "./sidebar-tabs";

export function AppSidebar() {
  return (
    <Sidebar variant="inset">
      <SidebarInset className="py-8.25">
        <SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem className="flex justify-center">
              <Image src={mudpatchLogo} alt="Mud Patch Logo" />
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>
        <SidebarContent className="px-10 mt-20">
          <SidebarGroup className="p-0">
            <SidebarGroupContent>
              <SidebarTabs />
            </SidebarGroupContent>
          </SidebarGroup>
          <SidebarGroup />
        </SidebarContent>
        <SidebarFooter className="px-10 text-[#7A5C51]">
          <SidebarMenu className=" border-t border-t-[#7A5C51]/50 pt-5">
            <SidebarMenuItem className="flex flex-col gap-3">
              <SidebarMenuButton className="gap-5">
                <FontAwesomeIcon icon={faUser} style={{ color: "#7A5C51" }} />
                <span>Profile</span>
              </SidebarMenuButton>
              <SidebarMenuButton className="gap-5">
                <FontAwesomeIcon icon={faGear} style={{ color: "#7A5C51" }} />
                <span>Settings</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
      </SidebarInset>
    </Sidebar>
  );
}
