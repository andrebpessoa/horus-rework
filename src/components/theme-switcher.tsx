import { GalleryVerticalEnd, Moon, Sun } from "lucide-react";

import { SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import { useTheme } from "./theme-provider";

export function ThemeSwitcher() {
	const { theme, setTheme } = useTheme();

	return (
		<SidebarMenu>
			<SidebarMenuItem>
				<SidebarMenuButton
					size="lg"
					className="hover:cursor-pointer data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
				>
					<div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
						<GalleryVerticalEnd className="size-4" />
					</div>
					<div className="grid flex-1 text-left text-sm leading-tight">
						<span className="truncate font-semibold">Horus Rework</span>
						<span className="truncate text-xs">Description</span>
					</div>
					<div onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
						{theme === "dark" ? <Sun className="ml-auto size-5" /> : <Moon className="ml-auto size-5" />}
					</div>
				</SidebarMenuButton>
			</SidebarMenuItem>
		</SidebarMenu>
	);
}
