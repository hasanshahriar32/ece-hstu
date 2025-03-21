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

// Mock data for workshops
const workshops = [
  {
    id: "iot-workshop-2023",
    title: "Introduction to IoT",
    date: "2023-12-15",
    time: "10:00 AM - 4:00 PM",
    location: "ECE Building, Room 101",
    instructor: "Dr. Aminul Islam",
    participants: 30,
    image: "/placeholder.svg?height=200&width=350",
    description: "Learn the basics of Internet of Things and how to build your first IoT project.",
    status: "upcoming",
    price: 0, // Free
    category: "technical",
  },
  {
    id: "pcb-design-workshop-2023",
    title: "PCB Design Workshop",
    date: "2023-12-22",
    time: "9:00 AM - 1:00 PM",
    location: "ECE Lab, Room 203",
    instructor: "Md. Rafiqul Islam",
    participants: 25,
    image: "/placeholder.svg?height=200&width=350",
    description: "Hands-on workshop on PCB design using industry-standard tools.",
    status: "upcoming",
    price: 500, // 500 BDT
    category: "technical",
  },
  {
    id: "machine-learning-workshop-2023",
    title: "Machine Learning Fundamentals",
    date: "2024-01-10",
    time: "10:00 AM - 5:00 PM",
    location: "CSE Building, Room 302",
    instructor: "Dr. Fatema Khatun",
    participants: 40,
    image: "/placeholder.svg?height=200&width=350",
    description: "Introduction to machine learning concepts and practical applications.",
    status: "upcoming",
    price: 1000, // 1000 BDT
    category: "technical",
  },
  {
    id: "career-development-seminar-2023",
    title: "Career Development in Tech",
    date: "2024-01-20",
    time: "2:00 PM - 5:00 PM",
    location: "University Auditorium",
    instructor: "Sabrina Akter",
    participants: 100,
    image: "/placeholder.svg?height=200&width=350",
    description: "Learn how to build a successful career in the tech industry from industry experts.",
    status: "upcoming",
    price: 0, // Free
    category: "career",
  },
  {
    id: "embedded-systems-workshop-2023",
    title: "Embedded Systems Programming",
    date: "2023-05-18",
    time: "9:00 AM - 4:00 PM",
    location: "ECE Lab, Room 205",
    instructor: "Prof. Md. Mehedi Islam",
    participants: 35,
    image: "/placeholder.svg?height=200&width=350",
    description: "Programming microcontrollers and embedded systems for real-world applications.",
    status: "past",
    price: 800, // 800 BDT
    category: "technical",
  },
  {
    id: "wireless-communication-workshop-2023",
    title: "Wireless Communication Systems",
    date: "2023-03-22",
    time: "10:00 AM - 3:00 PM",
    location: "ECE Seminar Hall",
    instructor: "Dr. Aminul Islam",
    participants: 30,
    image: "/placeholder.svg?height=200&width=350",
    description: "Understanding modern wireless communication technologies and standards.",
    status: "past",
    price: 500, // 500 BDT
    category: "technical",
  },
]

export default function WorkshopsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("all")
  const [priceFilter, setPriceFilter] = useState("all")
  const [statusFilter, setStatusFilter] = useState("all")

  // Filter workshops based on search query and filters
  const filteredWorkshops = workshops.filter((workshop) => {
    const matchesSearch =
      workshop.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      workshop.instructor.toLowerCase().includes(searchQuery.toLowerCase()) ||
      workshop.description.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesCategory = categoryFilter === "all" || workshop.category === categoryFilter

    const matchesPrice =
      priceFilter === "all" ||
      (priceFilter === "free" && workshop.price === 0) ||
      (priceFilter === "paid" && workshop.price > 0)

    const matchesStatus = statusFilter === "all" || workshop.status === statusFilter

    return matchesSearch && matchesCategory && matchesPrice && matchesStatus
  })

  const upcomingWorkshops = filteredWorkshops.filter((workshop) => workshop.status === "upcoming")
  const pastWorkshops = filteredWorkshops.filter((workshop) => workshop.status === "past")

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: "numeric", month: "long", day: "numeric" }
    return new Date(dateString).toLocaleDateString("en-US", options)
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Workshops & Seminars</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Enhance your skills and knowledge through our workshops and seminars conducted by industry experts and
            faculty members.
          </p>
        </div>

        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search workshops by title, instructor, or description..."
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
                    <SelectItem value="technical">Technical</SelectItem>
                    <SelectItem value="career">Career</SelectItem>
                    <SelectItem value="soft-skills">Soft Skills</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={priceFilter} onValueChange={setPriceFilter}>
                  <SelectTrigger className="w-[100px]">
                    <SelectValue placeholder="Price" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Prices</SelectItem>
                    <SelectItem value="free">Free</SelectItem>
                    <SelectItem value="paid">Paid</SelectItem>
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

        <Tabs defaultValue="upcoming" className="space-y-8">
          <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto">
            <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
            <TabsTrigger value="past">Past</TabsTrigger>
          </TabsList>

          <TabsContent value="upcoming" className="mt-0">
            {upcomingWorkshops.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No upcoming workshops found matching your criteria.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {upcomingWorkshops.map((workshop) => (
                  <Card key={workshop.id} className="overflow-hidden flex flex-col">
                    <div className="h-48 relative">
                      <img
                        src={workshop.image || "/placeholder.svg"}
                        alt={workshop.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-2 right-2">
                        {workshop.price === 0 ? (
                          <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
                            Free
                          </Badge>
                        ) : (
                          <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">
                            {workshop.price} BDT
                          </Badge>
                        )}
                      </div>
                    </div>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">{workshop.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="pb-2 flex-grow">
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{workshop.description}</p>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                          <span>{formatDate(workshop.date)}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                          <span>{workshop.time}</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
                          <span>{workshop.location}</span>
                        </div>
                        <div className="flex items-center">
                          <Users className="h-4 w-4 mr-2 text-muted-foreground" />
                          <span>{workshop.participants} participants</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button asChild className="w-full">
                        <Link href={`/workshops/${workshop.id}`}>View Details</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>

          <TabsContent value="past" className="mt-0">
            {pastWorkshops.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No past workshops found matching your criteria.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {pastWorkshops.map((workshop) => (
                  <Card key={workshop.id} className="overflow-hidden flex flex-col">
                    <div className="h-48 relative">
                      <img
                        src={workshop.image || "/placeholder.svg"}
                        alt={workshop.title}
                        className="w-full h-full object-cover filter grayscale opacity-80"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                      <div className="absolute top-2 right-2">
                        <Badge variant="outline">Past</Badge>
                      </div>
                    </div>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">{workshop.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="pb-2 flex-grow">
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{workshop.description}</p>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                          <span>{formatDate(workshop.date)}</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
                          <span>{workshop.location}</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button asChild variant="outline" className="w-full">
                        <Link href={`/workshops/${workshop.id}`}>View Details</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

