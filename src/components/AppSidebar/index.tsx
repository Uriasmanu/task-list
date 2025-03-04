'use client'

import { DiamondPlus, Home, LogOut, Settings } from "lucide-react";
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "../ui/sidebar";
import { useRouter } from "next/navigation";


// Menu items

const items = [
    {
        title: "Home",
        url: "/",
        icon: Home
    },

    {
        title: "Task",
        url: "/TaskForm",
        icon: DiamondPlus
    },
]

const itemsFooter = [
    {
        title: "Configuration",
        url: "/Configuration",
        icon: Settings
    },

    {
        title: "Log Out",
        url: "/Login",
        icon: LogOut
    }
]

export default function AppSidebar() {
    const router = useRouter()

    return (
        <Sidebar className="h-[100vh] py-10">
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Application</SidebarGroupLabel>
                </SidebarGroup>

                <SidebarMenu>
                    {items.map((item) => (
                        <SidebarMenuItem key={item.title}>
                            <SidebarMenuButton asChild>
                                <a href={item.url}>
                                    <item.icon />
                                    <span>{item.title}</span>
                                </a>

                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    ))}
                </SidebarMenu>
            </SidebarContent>
            <SidebarFooter>
                <SidebarMenu>
                    {itemsFooter.map((item) => (
                        <SidebarMenuItem key={item.title}>
                            <SidebarMenuButton asChild onClick={() => router.push(item.url)}>
                                <a href="#">
                                    <item.icon />
                                    <span>{item.title}</span>
                                </a>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    ))}
                </SidebarMenu>

            </SidebarFooter>
        </Sidebar>
    )
}