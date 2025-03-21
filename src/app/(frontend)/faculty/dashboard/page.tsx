import Link from "next/link"
import { BookOpen, FileText, Trophy, User } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function FacultyDashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">Manage your faculty profile, research, publications, and achievements.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Profile Completeness</CardTitle>
            <CardDescription>Your public profile information</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="w-full bg-muted rounded-full h-2.5">
                <div className="bg-primary h-2.5 rounded-full w-[85%]"></div>
              </div>
              <div className="flex justify-between text-sm">
                <span>85% Complete</span>
                <Link href="/faculty/dashboard/profile">
                  <Button variant="link" size="sm" className="p-0 h-auto">
                    Complete Profile
                  </Button>
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Publications</CardTitle>
            <CardDescription>Your research publications</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center">
              <div className="text-3xl font-bold">12</div>
              <Link href="/faculty/dashboard/publications">
                <Button variant="outline" size="sm">
                  Manage
                </Button>
              </Link>
            </div>
            <div className="flex justify-between text-sm text-muted-foreground mt-2">
              <span>8 Journal Articles</span>
              <span>4 Conference Papers</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Research Interests</CardTitle>
            <CardDescription>Your areas of expertise</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex flex-wrap gap-2">
                <div className="bg-muted text-muted-foreground text-sm px-2 py-1 rounded-md">VLSI Design</div>
                <div className="bg-muted text-muted-foreground text-sm px-2 py-1 rounded-md">Embedded Systems</div>
                <div className="bg-muted text-muted-foreground text-sm px-2 py-1 rounded-md">IoT</div>
              </div>
              <div className="flex justify-end">
                <Link href="/faculty/dashboard/research">
                  <Button variant="link" size="sm" className="p-0 h-auto">
                    Update Interests
                  </Button>
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Achievements</CardTitle>
            <CardDescription>Your awards and recognitions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="text-sm">
                <div className="font-medium">IEEE Fellow (2020)</div>
                <div className="text-muted-foreground">
                  Best Paper Award, International Conference on VLSI Design (2019)
                </div>
              </div>
              <div className="flex justify-end">
                <Link href="/faculty/dashboard/achievements">
                  <Button variant="link" size="sm" className="p-0 h-auto">
                    Add Achievements
                  </Button>
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Common tasks and actions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Link href="/faculty/dashboard/profile">
                <Button variant="outline" className="w-full justify-start">
                  <User className="mr-2 h-4 w-4" />
                  Update Profile
                </Button>
              </Link>
              <Link href="/faculty/dashboard/research">
                <Button variant="outline" className="w-full justify-start">
                  <BookOpen className="mr-2 h-4 w-4" />
                  Add Research
                </Button>
              </Link>
              <Link href="/faculty/dashboard/publications">
                <Button variant="outline" className="w-full justify-start">
                  <FileText className="mr-2 h-4 w-4" />
                  Add Publication
                </Button>
              </Link>
              <Link href="/faculty/dashboard/achievements">
                <Button variant="outline" className="w-full justify-start">
                  <Trophy className="mr-2 h-4 w-4" />
                  Add Achievement
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

