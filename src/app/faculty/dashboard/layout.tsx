import type React from "react"
import type { Metadata } from "next"
import Link from "next/link"
import { BookOpen, FileText, Home, Settings, Trophy, User } from "lucide-react"

export const metadata: Metadata = {
  title: "Faculty Dashboard | ECE Club",
  description: "Manage your faculty profile, research interests, publications, and achievements.",
}

export default function FacultyDashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Sidebar */}
        <div className="md:col-span-1">
          <div className="space-y-1">
            <h2 className="text-xl font-bold mb-4">Faculty Dashboard</h2>
            <nav className="flex flex-col space-y-1">
              <Link href="/faculty/dashboard" className="flex items-center gap-2 p-2 rounded-md hover:bg-muted">
                <Home className="h-4 w-4" />
                <span>Overview</span>
              </Link>
              <Link href="/faculty/dashboard/profile" className="flex items-center gap-2 p-2 rounded-md hover:bg-muted">
                <User className="h-4 w-4" />
                <span>Profile</span>
              </Link>
              <Link
                href="/faculty/dashboard/research"
                className="flex items-center gap-2 p-2 rounded-md hover:bg-muted"
              >
                <BookOpen className="h-4 w-4" />
                <span>Research</span>
              </Link>
              <Link
                href="/faculty/dashboard/publications"
                className="flex items-center gap-2 p-2 rounded-md hover:bg-muted"
              >
                <FileText className="h-4 w-4" />
                <span>Publications</span>
              </Link>
              <Link
                href="/faculty/dashboard/achievements"
                className="flex items-center gap-2 p-2 rounded-md hover:bg-muted"
              >
                <Trophy className="h-4 w-4" />
                <span>Achievements</span>
              </Link>
              <Link
                href="/faculty/dashboard/settings"
                className="flex items-center gap-2 p-2 rounded-md hover:bg-muted"
              >
                <Settings className="h-4 w-4" />
                <span>Settings</span>
              </Link>
            </nav>
          </div>
        </div>

        {/* Main content */}
        <div className="md:col-span-3">{children}</div>
      </div>
    </div>
  )
}

