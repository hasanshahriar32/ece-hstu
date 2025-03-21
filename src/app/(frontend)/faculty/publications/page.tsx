import type { Metadata } from "next"
import Link from "next/link"
import { BookOpen, Download, ExternalLink, Filter, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata: Metadata = {
  title: "Faculty Publications | ECE Club",
  description: "Browse research publications by our faculty members.",
}

export default function FacultyPublicationsPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Faculty Publications</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Browse through the latest research publications by our faculty members.
          </p>
        </div>

        {/* Search and filter */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input placeholder="Search publications by title, author, or keywords..." className="pl-10" />
          </div>
          <Button variant="outline" className="flex items-center gap-2">
            <Filter className="h-4 w-4" />
            Filters
          </Button>
        </div>

        {/* Publication tabs */}
        <Tabs defaultValue="recent">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="recent">Recent</TabsTrigger>
            <TabsTrigger value="journals">Journals</TabsTrigger>
            <TabsTrigger value="conferences">Conferences</TabsTrigger>
            <TabsTrigger value="books">Books & Chapters</TabsTrigger>
          </TabsList>

          <TabsContent value="recent" className="space-y-6 mt-6">
            <div className="grid grid-cols-1 gap-6">
              {/* Sample publications */}
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex justify-between">
                    <Badge>Journal</Badge>
                    <span className="text-sm text-muted-foreground">2023</span>
                  </div>
                  <CardTitle className="text-xl mt-2">
                    Advanced VLSI Design Techniques for Low-Power Applications
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">
                      <span className="font-medium">Authors:</span> Dr. Sarah Johnson, Dr. Michael Chen, et al.
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <span className="font-medium">Journal:</span> IEEE Transactions on VLSI Systems
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <span className="font-medium">DOI:</span> 10.1109/TVLSI.2022.1234567
                    </p>
                    <p className="text-sm mt-4">
                      This paper presents novel VLSI design techniques that significantly reduce power consumption in
                      modern integrated circuits, enabling more energy-efficient electronic devices.
                    </p>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex items-center gap-1">
                      <ExternalLink className="h-3 w-3" />
                      View
                    </Button>
                    <Button variant="outline" size="sm" className="flex items-center gap-1">
                      <Download className="h-3 w-3" />
                      PDF
                    </Button>
                  </div>
                  <Link href="/faculty/1">
                    <Button variant="ghost" size="sm">
                      View Author
                    </Button>
                  </Link>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <div className="flex justify-between">
                    <Badge>Conference</Badge>
                    <span className="text-sm text-muted-foreground">2023</span>
                  </div>
                  <CardTitle className="text-xl mt-2">
                    Real-time Object Detection for Autonomous Robots Using Edge Computing
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">
                      <span className="font-medium">Authors:</span> Dr. Emily Rodriguez, Dr. James Wilson, et al.
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <span className="font-medium">Conference:</span> IEEE International Conference on Robotics and
                      Automation
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <span className="font-medium">DOI:</span> 10.1109/ICRA.2023.7654321
                    </p>
                    <p className="text-sm mt-4">
                      This paper introduces a novel approach to real-time object detection for autonomous robots that
                      leverages edge computing to reduce latency and improve performance in dynamic environments.
                    </p>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex items-center gap-1">
                      <ExternalLink className="h-3 w-3" />
                      View
                    </Button>
                    <Button variant="outline" size="sm" className="flex items-center gap-1">
                      <Download className="h-3 w-3" />
                      PDF
                    </Button>
                  </div>
                  <Link href="/faculty/3">
                    <Button variant="ghost" size="sm">
                      View Author
                    </Button>
                  </Link>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <div className="flex justify-between">
                    <Badge>Journal</Badge>
                    <span className="text-sm text-muted-foreground">2023</span>
                  </div>
                  <CardTitle className="text-xl mt-2">
                    Optimal Integration of Renewable Energy Sources in Smart Grids
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">
                      <span className="font-medium">Authors:</span> Dr. Robert Kim, Dr. Priya Sharma, et al.
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <span className="font-medium">Journal:</span> IEEE Transactions on Power Systems
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <span className="font-medium">DOI:</span> 10.1109/TPWRS.2023.4567890
                    </p>
                    <p className="text-sm mt-4">
                      This paper presents a comprehensive framework for optimally integrating various renewable energy
                      sources into smart grid systems, addressing challenges related to intermittency and grid
                      stability.
                    </p>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex items-center gap-1">
                      <ExternalLink className="h-3 w-3" />
                      View
                    </Button>
                    <Button variant="outline" size="sm" className="flex items-center gap-1">
                      <Download className="h-3 w-3" />
                      PDF
                    </Button>
                  </div>
                  <Link href="/faculty/4">
                    <Button variant="ghost" size="sm">
                      View Author
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </div>

            <div className="flex justify-center mt-8">
              <Button variant="outline">Load More</Button>
            </div>
          </TabsContent>

          <TabsContent value="journals" className="space-y-6 mt-6">
            {/* Journal publications content */}
            <div className="text-center py-12">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-4">
                <BookOpen className="h-8 w-8 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-medium">Journal Publications</h3>
              <p className="text-muted-foreground mt-2 max-w-md mx-auto">
                This tab will display all journal publications by faculty members.
              </p>
            </div>
          </TabsContent>

          <TabsContent value="conferences" className="space-y-6 mt-6">
            {/* Conference publications content */}
            <div className="text-center py-12">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-4">
                <BookOpen className="h-8 w-8 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-medium">Conference Publications</h3>
              <p className="text-muted-foreground mt-2 max-w-md mx-auto">
                This tab will display all conference publications by faculty members.
              </p>
            </div>
          </TabsContent>

          <TabsContent value="books" className="space-y-6 mt-6">
            {/* Books & chapters content */}
            <div className="text-center py-12">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-4">
                <BookOpen className="h-8 w-8 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-medium">Books & Chapters</h3>
              <p className="text-muted-foreground mt-2 max-w-md mx-auto">
                This tab will display all books and book chapters authored by faculty members.
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  )
}

