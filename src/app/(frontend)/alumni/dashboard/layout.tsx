"use client"

import type React from "react"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Award, Briefcase, MessageSquare, User } from "lucide-react"
import { cn } from "@/lib/utils"

const sidebarItems = [
  {
    title: "Overview",
    href: "/alumni/dashboard",
    icon: Award,
  },
  {
    title: "Profile",
    href: "/alumni/dashboard/profile",
    icon: User,
  },
  {
    title: "Professional Info",
    href: "/alumni/dashboard/professional",
    icon: Briefcase,
  },
  {
    title: "Reference Requests",
    href: "/alumni/dashboard/references",
    icon: MessageSquare,
  },
]

export default function AlumniDashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  return (
    <div className="flex min-h-screen flex-col">
      <div className="container mx-auto flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
        <aside className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block">
          <div className="h-full py-6 pr-6 lg:py-8">
            <nav className="flex flex-col space-y-2">
              {sidebarItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center rounded-md px-3 py-2 text-sm font-medium",
                    pathname === item.href
                      ? "bg-muted text-primary"
                      : "text-muted-foreground hover:bg-muted hover:text-primary",
                  )}
                >
                  <item.icon className="mr-2 h-4 w-4" />
                  <span>{item.title}</span>
                </Link>
              ))}
            </nav>
          </div>
        </aside>
        <main className="flex w-full flex-col overflow-hidden">{children}</main>
      </div>
    </div>
  )
}

