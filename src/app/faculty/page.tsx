import type { Metadata } from "next"
import { FacultyDirectory } from "@/components/faculty-directory"

export const metadata: Metadata = {
  title: "Faculty Directory | ECE Club",
  description: "Browse our distinguished faculty members and their research interests, publications, and achievements.",
}

export default function FacultyPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Faculty Directory</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our distinguished faculty members, their research interests, publications, and academic
            achievements.
          </p>
        </div>

        <FacultyDirectory />
      </div>
    </main>
  )
}

