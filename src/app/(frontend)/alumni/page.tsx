"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AlumniDirectory } from "@/components/alumni-directory"
import { AlumniAchievements } from "@/components/alumni-achievements"
import { AlumniEvents } from "@/components/alumni-events"
import { Search } from "lucide-react"

export default function AlumniPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [batchFilter, setBatchFilter] = useState("all")

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Alumni Network</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Connect with graduates from the Department of Electronics and Communication Engineering and explore their
            achievements and contributions.
          </p>
        </div>

        <Tabs defaultValue="directory" className="mb-12">
          <TabsList className="grid w-full grid-cols-3 mb-8 max-w-md mx-auto">
            <TabsTrigger value="directory">Directory</TabsTrigger>
            <TabsTrigger value="achievements">Achievements</TabsTrigger>
            <TabsTrigger value="events">Alumni Events</TabsTrigger>
          </TabsList>

          <TabsContent value="directory">
            <Card className="mb-8">
              <CardContent className="p-4">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search alumni by name, company, designation or skills..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-9"
                  />
                </div>
              </CardContent>
            </Card>

            <AlumniDirectory searchQuery={searchQuery} batchFilter={batchFilter} />
          </TabsContent>

          <TabsContent value="achievements">
            <AlumniAchievements />
          </TabsContent>

          <TabsContent value="events">
            <AlumniEvents />
          </TabsContent>
        </Tabs>

        <div className="bg-muted/30 rounded-lg p-6 mb-12">
          <h2 className="text-2xl font-bold mb-4">Join Our Alumni Network</h2>
          <p className="mb-6">
            Are you a graduate of the Department of Electronics and Communication Engineering? Join our alumni network
            to stay connected, attend exclusive events, and contribute to the growth of our department.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild>
              <a href="/auth/register">Register as Alumni</a>
            </Button>
            <Button variant="outline" asChild>
              <a href="/contact">Contact Alumni Office</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

