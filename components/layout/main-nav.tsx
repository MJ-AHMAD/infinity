"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import {
  LayoutDashboard,
  Users,
  FileText,
  Settings,
  HelpCircle,
  BarChart3,
  Layers,
  CheckSquare,
  Crown,
  Users2,
} from "lucide-react"
import { useSidebar } from "./sidebar-context"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export function MainNav() {
  const pathname = usePathname()
  const { collapsed } = useSidebar()

  const routes = [
    {
      href: "/",
      label: "Dashboard",
      icon: LayoutDashboard,
      active: pathname === "/",
    },
    {
      href: "/hub-management",
      label: "Hub Management",
      icon: Layers,
      active: pathname === "/hub-management" || pathname.startsWith("/hub-management/"),
    },
    {
      href: "/content-manager",
      label: "Content Manager",
      icon: FileText,
      active: pathname === "/content-manager" || pathname.startsWith("/content-manager/"),
    },
    {
      href: "/user-management",
      label: "User Management",
      icon: Users,
      active: pathname === "/user-management" || pathname.startsWith("/user-management/"),
    },
    {
      href: "/task-management",
      label: "Task Management",
      icon: CheckSquare,
      active: pathname === "/task-management" || pathname.startsWith("/task-management/"),
    },
    {
      href: "/analytics",
      label: "Analytics",
      icon: BarChart3,
      active: pathname === "/analytics" || pathname.startsWith("/analytics/"),
    },
    {
      href: "/director-general",
      label: "Director General",
      icon: Crown,
      active: pathname === "/director-general" || pathname.startsWith("/director-general/"),
    },
    {
      href: "/core-team",
      label: "Core Team",
      icon: Users2,
      active: pathname === "/core-team" || pathname.startsWith("/core-team/"),
    },
    {
      href: "/settings",
      label: "Settings",
      icon: Settings,
      active: pathname === "/settings" || pathname.startsWith("/settings/"),
    },
    {
      href: "/help",
      label: "Help & Support",
      icon: HelpCircle,
      active: pathname === "/help" || pathname.startsWith("/help/"),
    },
  ]

  if (collapsed) {
    return (
      <TooltipProvider>
        <nav className="flex flex-col gap-4 items-center">
          {routes.map((route) => (
            <Tooltip key={route.href} delayDuration={0}>
              <TooltipTrigger asChild>
                <Link
                  href={route.href}
                  className={cn(
                    "flex h-9 w-9 items-center justify-center rounded-md transition-colors hover:text-primary",
                    route.active ? "bg-primary/10 text-primary" : "text-muted-foreground",
                  )}
                >
                  <route.icon className="h-5 w-5" />
                  <span className="sr-only">{route.label}</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">{route.label}</TooltipContent>
            </Tooltip>
          ))}
        </nav>
      </TooltipProvider>
    )
  }

  return (
    <nav className="flex flex-col gap-1">
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            "flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors hover:text-primary",
            route.active ? "bg-primary/10 text-primary" : "text-muted-foreground",
          )}
        >
          <route.icon className="h-4 w-4" />
          {route.label}
        </Link>
      ))}
    </nav>
  )
}

