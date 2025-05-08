import * as React from "react"
import { Command, LifeBuoy, Plus, Send } from "lucide-react"



import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  SidebarSeparator,
} from "@/components/ui/sidebar"
import { Calendar } from "../ui/calendar"
import Image from "next/image"
import { ProfileLink } from "../utils/ProfileLink"

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  calendars: [
    {
      name: "My Calendars",
      items: ["Personal", "Work", "Family"],
    },
    {
      name: "Favorites",
      items: ["Holidays", "Birthdays"],
    },
    {
      name: "Other",
      items: ["Travel", "Reminders", "Deadlines"],
    },
  ],
	navSecondary: [
    {
      title: "Support",
      url: "#",
      icon: LifeBuoy,
    },
    {
      title: "Feedback",
      url: "#",
      icon: Send,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      {/*<SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="#">
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold text-2xl">Hongju Yoon</span>
                  <span className="truncate text-xs">Tech Blog</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>*/}

      <SidebarContent>

				<SidebarGroup className="px-0 items-center">
					<Image src="/images/maggom.jpg" width={100} height={20} alt="망곰" className="rounded-3xl m-4 "/>
					<div className="grid flex-1 text-left text-sm leading-tight">
						<span className="truncate font-semibold text-2xl mb-5 text-center">Hongju Yoon</span>
						<span className="truncate text-xs">欢迎光临, 여기는 HJ's Tech Blog 입니다</span>
					</div>
				</SidebarGroup>
				<SidebarSeparator className="mx-0" />

				<SidebarGroup className="px-0">
					<SidebarGroupContent>
						<Calendar className="[&_[role=gridcell].bg-accent]:bg-sidebar-primary [&_[role=gridcell].bg-accent]:text-sidebar-primary-foreground [&_[role=gridcell]]:w-[33px]" />
					</SidebarGroupContent>
				</SidebarGroup>
        <SidebarSeparator className="mx-0" />

      </SidebarContent>
			
      <SidebarFooter>
				<ProfileLink items={data.navSecondary} className="px-0" />
      </SidebarFooter>
			
      <SidebarRail />
    </Sidebar>
  )
}
