import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

import Image from "next/image";

import mudpatchLogo from "@/public/mudpatch_logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear, faUser } from "@fortawesome/free-solid-svg-icons";
import SidebarTabs from "./sidebar-tabs";
import { ChevronDown, Home, Plus } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const Projects = [
  {
    name: "Project 1",
    url: "#",
  },
  {
    name: "Project 2",
    url: "#",
  },
  {
    name: "Project 3",
    url: "#",
  },
];

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
        <SidebarContent className="px-10 mt-20 overflow-x-hidden">
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
              {/* <SidebarMenuButton className="gap-5"> */}
              {/* <FontAwesomeIcon icon={faGear} style={{ color: "#7A5C51" }} />
                <span>Settings</span> */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <SidebarMenuButton className="flex gap-5 outline-none border-none">
                    <FontAwesomeIcon
                      icon={faGear}
                      style={{ color: "#7A5C51" }}
                    />
                    <span>Settings</span>
                  </SidebarMenuButton>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-[--radix-popper-anchor-width]">
                  <DropdownMenuItem>
                    <span>Dashboad Settings</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              {/* </SidebarMenuButton> */}
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
      </SidebarInset>
    </Sidebar>
  );
}
