"use client"

import { Button } from "@/components/ui/button"
import { MainNav } from "@/components/layout/main-nav"
import { ThemeToggle } from "@/components/theme-toggle"
import { ChevronLeft, ChevronRight, LogOut } from "lucide-react"
import { useSidebar } from "./sidebar-context"
import { cn } from "@/lib/utils"

export function Sidebar() {
  const { collapsed, toggleSidebar } = useSidebar()

  return (
    <div
      className={cn(
        "flex h-full min-h-screen flex-col border-r bg-muted/10 transition-all duration-300",
        collapsed ? "w-[70px]" : "w-[240px]",
      )}
    >
      <div className="flex h-14 items-center border-b px-4">
        <div className={cn("flex items-center gap-2 font-semibold", collapsed && "justify-center w-full")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6"
          >
            <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
            <line x1="3" x2="21" y1="9" y2="9" />
            <path d="m9 16 3-3 3 3" />
          </svg>
          {!collapsed && <span>Admin Panel</span>}
        </div>
        <Button
          variant="ghost"
          size="icon"
          className={cn("h-8 w-8", collapsed ? "ml-auto" : "ml-auto")}
          onClick={toggleSidebar}
        >
          {collapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
          <span className="sr-only">Toggle sidebar</span>
        </Button>
      </div>
      <div className="flex-1 overflow-auto py-4 px-4">
        <MainNav />
      </div>
      <div
        className={cn("mt-auto p-4 border-t", collapsed ? "flex justify-center" : "flex items-center justify-between")}
      >
        <ThemeToggle />
        {!collapsed && (
          <Button variant="ghost" size="icon">
            <LogOut className="h-5 w-5" />
            <span className="sr-only">Logout</span>
          </Button>
        )}
      </div>
    </div>
  )
}

