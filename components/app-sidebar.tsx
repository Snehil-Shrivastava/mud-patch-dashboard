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
import {
  faGear,
  faUser,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import SidebarTabs from "./sidebar-tabs";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

import { signOut } from "@/auth";

export function AppSidebar() {
  return (
    <Sidebar variant="inset" className="select-none">
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
          <SidebarMenu className="border-t border-t-[#7A5C51]/50 pt-5">
            <SidebarMenuItem className="flex flex-col gap-3">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <SidebarMenuButton className="flex gap-5 outline-none border-none">
                    <FontAwesomeIcon
                      icon={faUser}
                      style={{ color: "#7A5C51" }}
                    />
                    <span>Profile</span>
                  </SidebarMenuButton>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-[--radix-popper-anchor-width]">
                  <DropdownMenuItem>
                    <span>View Profile</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <form
                      action={async () => {
                        "use server";
                        await signOut({ redirectTo: "/sign-in" });
                      }}
                    >
                      <button
                        type="submit"
                        className="flex items-center gap-2 w-full text-red-500"
                      >
                        <FontAwesomeIcon icon={faRightFromBracket} />
                        <span>Sign out</span>
                      </button>
                    </form>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

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
                    <span>Dashboard Settings</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
      </SidebarInset>
    </Sidebar>
  );
}
