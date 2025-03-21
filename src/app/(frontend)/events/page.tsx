"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, Clock, MapPin, Search, Users, Filter } from "lucide-react"

// Mock data for events
const events = {
  sports: [
    {
      id: "cricket-tournament-2023",
      title: "Inter-Department Cricket Tournament",
      date: "2023-12-10",
      endDate: "2023-12-15",
      time: "9:00 AM - 5:00 PM",
      location: "University Cricket Ground",
      participants: 120,
      image: "/placeholder.svg?height=400&width=600",
      description: "Annual cricket tournament between departments featuring teams from all faculties.",
      category: "cricket",
      status: "upcoming",
    },
    {
      id: "badminton-championship-2023",
      title: "ECE Badminton Championship",
      date: "2023-12-20",
      endDate: "2023-12-22",
      time: "2:00 PM - 6:00 PM",
      location: "Indoor Sports Complex",
      participants: 48,
      image: "/placeholder.svg?height=400&width=600",
      description: "Badminton championship for ECE students and faculty with singles and doubles categories.",
      category: "badminton",
      status: "upcoming",
    },
    {
      id: "football-tournament-2023",
      title: "ECE Football Tournament",
      date: "2024-01-05",
      endDate: "2024-01-10",
      time: "3:00 PM - 6:00 PM",
      location: "University Football Ground",
      participants: 88,
      image: "/placeholder.svg?height=400&width=600",
      description: "Annual football tournament organized by the ECE department with teams from different batches.",
      category: "football",
      status: "upcoming",
    },
    {
      id: "chess-competition-2023",
      title: "Inter-University Chess Competition",
      date: "2023-09-15",
      endDate: "2023-09-16",
      time: "10:00 AM - 4:00 PM",
      location: "ECE Seminar Hall",
      participants: 32,
      image: "/placeholder.svg?height=400&width=600",
      description: "Chess competition featuring participants from universities across the country.",
      category: "chess",
      status: "past",
    },
    {
      id: "table-tennis-tournament-2023",
      title: "Table Tennis Tournament",
      date: "2023-08-20",
      endDate: "2023-08-21",
      time: "1:00 PM - 5:00 PM",
      location: "Indoor Sports Complex",
      participants: 24,
      image: "/placeholder.svg?height=400&width=600",
      description: "Table tennis tournament for students and faculty members with exciting prizes.",
      category: "table-tennis",
      status: "past",
    },
  ],
  cultural: [
    {
      id: "cultural-night-2023",
      title: "Annual Cultural Night",
      date: "2023-12-25",
      time: "6:00 PM - 10:00 PM",
      location: "University Auditorium",
      participants: 200,
      image: "/placeholder.svg?height=400&width=600",
      description: "A night of music, dance, and drama performances by ECE students.",
      category: "performance",
      status: "upcoming",
    },
    {
      id: "photography-exhibition-2023",
      title: "Photography Exhibition",
      date: "2024-01-15",
      endDate: "2024-01-20",
      time: "10:00 AM - 5:00 PM",
      location: "ECE Gallery",
      participants: 35,
      image: "/placeholder.svg?height=400&width=600",
      description: "Exhibition of photographs taken by ECE students and faculty on various themes.",
      category: "exhibition",
      status: "upcoming",
    },
    {
      id: "debate-competition-2023",
      title: "Inter-Department Debate Competition",
      date: "2024-02-05",
      endDate: "2024-02-06",
      time: "2:00 PM - 5:00 PM",
      location: "University Auditorium",
      participants: 48,
      image: "/placeholder.svg?height=400&width=600",
      description: "Debate competition on contemporary issues with teams from all departments.",
      category: "debate",
      status: "upcoming",
    },
    {
      id: "music-festival-2023",
      title: "ECE Music Festival",
      date: "2023-07-10",
      time: "5:00 PM - 9:00 PM",
      location: "University Open Air Theater",
      participants: 150,
      image: "/placeholder.svg?height=400&width=600",
      description: "Music festival featuring performances by talented students and alumni.",
      category: "music",
      status: "past",
    },
    {
      id: "art-competition-2023",
      title: "Art Competition",
      date: "2023-06-15",
      time: "10:00 AM - 3:00 PM",
      location: "ECE Building",
      participants: 40,
      image: "/placeholder.svg?height=400&width=600",
      description: "Art competition for students to showcase their creativity and artistic skills.",
      category: "art",
      status: "past",
    },
  ],
}

export default function EventsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("all")
  const [statusFilter, setStatusFilter] = useState("all")
  const [activeTab, setActiveTab] = useState("sports")

  // Get categories based on active tab
  const getCategories = () => {
    const categories = new Set()
    events[activeTab as keyof typeof events].forEach((event) => {
      categories.add(event.category)
    })
    return Array.from(categories) as string[]
  }

  // Filter events based on search query and filters
  const filteredEvents = events[activeTab as keyof typeof events].filter((event) => {
    const matchesSearch =
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.description.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesCategory = categoryFilter === "all" || event.category === categoryFilter
    const matchesStatus = statusFilter === "all" || event.status === statusFilter

    return matchesSearch && matchesCategory && matchesStatus
  })

  const upcomingEvents = filteredEvents.filter((event) => event.status === "upcoming")
  const pastEvents = filteredEvents.filter((event) => event.status === "past")

  const formatDate = (dateString: string, endDateString?: string) => {
    const options: Intl.DateTimeFormatOptions = { year: "numeric", month: "long", day: "numeric" }
    const startDate = new Date(dateString).toLocaleDateString("en-US", options)

    if (endDateString) {
      const endDate = new Date(endDateString).toLocaleDateString("en-US", options)
      return `${startDate} - ${endDate}`
    }

    return startDate
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Events</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore our upcoming and past events organized by the ECE Club, including sports competitions, cultural
            programs, and more.
          </p>
        </div>

        <Tabs
          defaultValue="sports"
          className="space-y-8"
          onValueChange={(value) => {
            setActiveTab(value)
            setCategoryFilter("all") // Reset category filter when changing tabs
          }}
        >
          <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto">
            <TabsTrigger value="sports">Sports Events</TabsTrigger>
            <TabsTrigger value="cultural">Cultural Events</TabsTrigger>
          </TabsList>

          {["sports", "cultural"].map((eventType) => (
            <TabsContent key={eventType} value={eventType} className="mt-0">
              <Card className="mb-8">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1 relative">
                      <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        placeholder="Search events..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-9"
                      />
                    </div>
                    <div className="flex flex-wrap gap-3">
                      <div className="flex items-center gap-2">
                        <Filter className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm whitespace-nowrap">Filters:</span>
                      </div>
                      <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                        <SelectTrigger className="w-[130px]">
                          <SelectValue placeholder="Category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Categories</SelectItem>
                          {getCategories().map((category) => (
                            <SelectItem key={category} value={category}>
                              {category.charAt(0).toUpperCase() + category.slice(1)}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <Select value={statusFilter} onValueChange={setStatusFilter}>
                        <SelectTrigger className="w-[120px]">
                          <SelectValue placeholder="Status" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Status</SelectItem>
                          <SelectItem value="upcoming">Upcoming</SelectItem>
                          <SelectItem value="past">Past</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="space-y-8">
                {upcomingEvents.length > 0 && (
                  <div>
                    <h2 className="text-2xl font-bold mb-6">Upcoming Events</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {upcomingEvents.map((event) => (
                        <Card key={event.id} className="overflow-hidden flex flex-col">
                          <div className="h-48 relative">
                            <img
                              src={event.image || "/placeholder.svg"}
                              alt={event.title}
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute top-2 right-2">
                              <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">
                                {event.category.charAt(0).toUpperCase() + event.category.slice(1)}
                              </Badge>
                            </div>
                          </div>
                          <CardHeader className="pb-2">
                            <CardTitle className="text-lg">{event.title}</CardTitle>
                          </CardHeader>
                          <CardContent className="pb-2 flex-grow">
                            <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{event.description}</p>
                            <div className="space-y-2 text-sm">
                              <div className="flex items-center">
                                <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                                <span>{formatDate(event.date, event.endDate)}</span>
                              </div>
                              <div className="flex items-center">
                                <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                                <span>{event.time}</span>
                              </div>
                              <div className="flex items-center">
                                <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
                                <span>{event.location}</span>
                              </div>
                              <div className="flex items-center">
                                <Users className="h-4 w-4 mr-2 text-muted-foreground" />
                                <span>{event.participants} participants</span>
                              </div>
                            </div>
                          </CardContent>
                          <CardFooter>
                            <Button asChild className="w-full">
                              <Link href={`/events/${event.id}`}>View Details</Link>
                            </Button>
                          </CardFooter>
                        </Card>
                      ))}
                    </div>
                  </div>
                )}

                {pastEvents.length > 0 && (
                  <div>
                    <h2 className="text-2xl font-bold mb-6">Past Events</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {pastEvents.map((event) => (
                        <Card key={event.id} className="overflow-hidden flex flex-col">
                          <div className="h-48 relative">
                            <img
                              src={event.image || "/placeholder.svg"}
                              alt={event.title}
                              className="w-full h-full object-cover filter grayscale opacity-80"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                            <div className="absolute top-2 right-2">
                              <Badge variant="outline">Past</Badge>
                            </div>
                          </div>
                          <CardHeader className="pb-2">
                            <CardTitle className="text-lg">{event.title}</CardTitle>
                          </CardHeader>
                          <CardContent className="pb-2 flex-grow">
                            <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{event.description}</p>
                            <div className="space-y-2 text-sm">
                              <div className="flex items-center">
                                <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                                <span>{formatDate(event.date, event.endDate)}</span>
                              </div>
                              <div className="flex items-center">
                                <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
                                <span>{event.location}</span>
                              </div>
                            </div>
                          </CardContent>
                          <CardFooter>
                            <Button asChild variant="outline" className="w-full">
                              <Link href={`/events/${event.id}`}>View Details</Link>
                            </Button>
                          </CardFooter>
                        </Card>
                      ))}
                    </div>
                  </div>
                )}

                {filteredEvents.length === 0 && (
                  <div className="text-center py-12">
                    <p className="text-muted-foreground">No events found matching your criteria.</p>
                  </div>
                )}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  )
}

