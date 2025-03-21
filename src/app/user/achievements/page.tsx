"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { UserNav } from "@/components/user-nav"
import { Award, Calendar, Download, ExternalLink, FileText, Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"

// Mock user data
const user = {
  name: "John Doe",
  email: "john.doe@example.com",
  image: "/placeholder.svg?height=200&width=200",
}

// Mock certificates data
const certificates = [
  {
    id: "CERT-ABC123XYZ",
    title: "Introduction to IoT",
    issueDate: "2023-06-15",
    organization: "ECE Club, HSTU",
    status: "pass",
    type: "workshop",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "CERT-DEF456UVW",
    title: "PCB Design Workshop",
    issueDate: "2023-06-22",
    organization: "ECE Club, HSTU",
    status: "pass",
    type: "workshop",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "CERT-GHI789RST",
    title: "Machine Learning Fundamentals",
    issueDate: "2023-05-10",
    organization: "ECE Club, HSTU",
    status: "pass",
    type: "workshop",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "CERT-JKL012MNO",
    title: "Annual Tech Fest 2023",
    issueDate: "2023-09-17",
    organization: "ECE Club, HSTU",
    status: "participation",
    type: "event",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "CERT-PQR345STU",
    title: "Hackathon 2023",
    issueDate: "2023-09-16",
    organization: "ECE Club, HSTU",
    status: "winner",
    type: "competition",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "CERT-VWX678YZA",
    title: "Technical Paper Presentation",
    issueDate: "2023-09-15",
    organization: "ECE Club, HSTU",
    status: "runner-up",
    type: "competition",
    image: "/placeholder.svg?height=400&width=600",
  },
]

export default function AchievementsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [typeFilter, setTypeFilter] = useState("all")

  // Filter certificates based on search query and type filter
  const filteredCertificates = certificates.filter((certificate) => {
    const matchesSearch = certificate.title.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesType = typeFilter === "all" || certificate.type === typeFilter

    return matchesSearch && matchesType
  })

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: "numeric", month: "long", day: "numeric" }
    return new Date(dateString).toLocaleDateString("en-US", options)
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "pass":
        return <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">Passed</Badge>
      case "participation":
        return <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">Participation</Badge>
      case "winner":
        return <Badge className="bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300">Winner</Badge>
      case "runner-up":
        return (
          <Badge className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300">Runner-up</Badge>
        )
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }

  const getTypeBadge = (type: string) => {
    switch (type) {
      case "workshop":
        return <Badge variant="outline">Workshop</Badge>
      case "event":
        return <Badge variant="outline">Event</Badge>
      case "competition":
        return <Badge variant="outline">Competition</Badge>
      default:
        return <Badge variant="outline">{type}</Badge>
    }
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">My Achievements</h1>
          <UserNav user={user} />
        </div>

        <Tabs defaultValue="certificates" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 max-w-md">
            <TabsTrigger value="certificates">Certificates</TabsTrigger>
            <TabsTrigger value="badges">Badges & Awards</TabsTrigger>
          </TabsList>

          <TabsContent value="certificates">
            <Card className="mb-6">
              <CardContent className="p-4">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search certificates..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-9"
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm whitespace-nowrap">Type:</span>
                    <Select value={typeFilter} onValueChange={setTypeFilter}>
                      <SelectTrigger className="w-[150px]">
                        <SelectValue placeholder="All Types" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Types</SelectItem>
                        <SelectItem value="workshop">Workshop</SelectItem>
                        <SelectItem value="event">Event</SelectItem>
                        <SelectItem value="competition">Competition</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>

            {filteredCertificates.length === 0 ? (
              <div className="text-center py-12">
                <Award className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                <h3 className="text-lg font-medium mb-2">No certificates found</h3>
                <p className="text-muted-foreground">
                  No certificates match your search criteria. Try adjusting your filters.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredCertificates.map((certificate) => (
                  <Card key={certificate.id} className="overflow-hidden">
                    <div className="aspect-[1.414/1] relative">
                      <img
                        src={certificate.image || "/placeholder.svg"}
                        alt={certificate.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-2 right-2 flex gap-2">
                        {getStatusBadge(certificate.status)}
                        {getTypeBadge(certificate.type)}
                      </div>
                    </div>
                    <CardHeader className="pb-2">
                      <CardTitle>{certificate.title}</CardTitle>
                      <CardDescription>{certificate.organization}</CardDescription>
                    </CardHeader>
                    <CardContent className="pb-2">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span>Issued on {formatDate(certificate.issueDate)}</span>
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground mt-1">
                        <FileText className="h-4 w-4 mr-2" />
                        <span>Certificate ID: {certificate.id}</span>
                      </div>
                    </CardContent>
                    <CardFooter className="flex gap-2">
                      <Button variant="outline" className="flex-1">
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </Button>
                      <Button asChild className="flex-1">
                        <Link href={`/verify?id=${certificate.id}`}>
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Verify
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>

          <TabsContent value="badges">
            <Card>
              <CardHeader>
                <CardTitle>Badges & Awards</CardTitle>
                <CardDescription>
                  View your earned badges and awards from various activities and competitions.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col items-center justify-center py-12">
                <Award className="h-16 w-16 text-muted-foreground mb-4" />
                <h3 className="text-lg font-medium mb-2">Coming Soon</h3>
                <p className="text-muted-foreground text-center max-w-md">
                  We're working on a new badge and award system to recognize your achievements. Check back soon!
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

