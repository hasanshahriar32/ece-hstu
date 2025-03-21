"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Clock, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"

// Mock data for alumni events
const events = [
  {
    id: 1,
    title: "Annual Alumni Reunion 2023",
    date: "2023-12-15",
    time: "6:00 PM - 10:00 PM",
    location: "HSTU Campus, Dinajpur",
    description:
      "Join us for the annual reunion of ECE alumni. Connect with old friends, make new connections, and celebrate the achievements of our department.",
    image: "/placeholder.svg?height=300&width=600",
    status: "upcoming",
    registrationLink: "/events/alumni-reunion-2023",
  },
  {
    id: 2,
    title: "Alumni Career Fair",
    date: "2024-01-20",
    time: "10:00 AM - 4:00 PM",
    location: "ECE Building, HSTU",
    description:
      "A career fair exclusively for ECE students, with alumni representing various companies and industries. Great opportunity for networking and job hunting.",
    image: "/placeholder.svg?height=300&width=600",
    status: "upcoming",
    registrationLink: "/events/career-fair-2024",
  },
  {
    id: 3,
    title: "Alumni Mentorship Program Launch",
    date: "2024-02-10",
    time: "3:00 PM - 5:00 PM",
    location: "Online (Zoom)",
    description:
      "Launch of our new mentorship program connecting current students with successful alumni. Learn how you can participate as a mentor or mentee.",
    image: "/placeholder.svg?height=300&width=600",
    status: "upcoming",
    registrationLink: "/events/mentorship-program",
  },
  {
    id: 4,
    title: "Alumni Guest Lecture Series",
    date: "2023-10-05",
    time: "2:00 PM - 4:00 PM",
    location: "ECE Seminar Hall, HSTU",
    description:
      "A series of guest lectures by distinguished alumni sharing their expertise and experiences in various fields of electronics and communication engineering.",
    image: "/placeholder.svg?height=300&width=600",
    status: "past",
    registrationLink: "",
  },
  {
    id: 5,
    title: "Alumni Fundraising Gala",
    date: "2023-08-25",
    time: "7:00 PM - 11:00 PM",
    location: "Grand Hotel, Dhaka",
    description:
      "A formal gala dinner to raise funds for the ECE department's new research lab. Join us for an evening of fine dining, entertainment, and giving back.",
    image: "/placeholder.svg?height=300&width=600",
    status: "past",
    registrationLink: "",
  },
  {
    id: 6,
    title: "Alumni Industry Visit",
    date: "2023-07-15",
    time: "9:00 AM - 3:00 PM",
    location: "Samsung R&D Institute, Dhaka",
    description:
      "A special visit to Samsung R&D Institute organized for alumni and current students to learn about industry practices and career opportunities.",
    image: "/placeholder.svg?height=300&width=600",
    status: "past",
    registrationLink: "",
  },
  {
    id: 7,
    title: "Alumni Networking Dinner",
    date: "2023-06-30",
    time: "7:00 PM - 10:00 PM",
    location: "Hotel Sonargaon, Dhaka",
    description:
      "An evening of networking and socializing with fellow alumni from various batches working in different industries.",
    image: "/placeholder.svg?height=300&width=600",
    status: "past",
    registrationLink: "",
  },
  {
    id: 8,
    title: "Alumni Technical Workshop",
    date: "2023-05-20",
    time: "10:00 AM - 4:00 PM",
    location: "ECE Building, HSTU",
    description:
      "A hands-on technical workshop conducted by alumni experts on emerging technologies in electronics and communication.",
    image: "/placeholder.svg?height=300&width=600",
    status: "past",
    registrationLink: "",
  },
]

export function AlumniEvents() {
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 4

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: "numeric", month: "long", day: "numeric" }
    return new Date(dateString).toLocaleDateString("en-US", options)
  }

  const upcomingEvents = events.filter((event) => event.status === "upcoming")
  const pastEvents = events.filter((event) => event.status === "past")

  // Determine which set of events to display based on pagination
  const totalUpcomingPages = Math.ceil(upcomingEvents.length / itemsPerPage)
  const totalPastPages = Math.ceil(pastEvents.length / itemsPerPage)

  const currentUpcomingEvents = upcomingEvents.slice(0, itemsPerPage)
  const currentPastEvents = pastEvents.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)

  const nextPage = () => {
    if (currentPage < totalPastPages) {
      setCurrentPage(currentPage + 1)
    }
  }

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-6">Upcoming Alumni Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {currentUpcomingEvents.map((event) => (
            <Card key={event.id} className="overflow-hidden">
              <div className="h-48">
                <img src={event.image || "/placeholder.svg"} alt={event.title} className="w-full h-full object-cover" />
              </div>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-xl">{event.title}</CardTitle>
                  <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">Upcoming</Badge>
                </div>
              </CardHeader>
              <CardContent className="pb-2">
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{event.description}</p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span>{formatDate(event.date)}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span>{event.location}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href={event.registrationLink}>
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Register Now
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {upcomingEvents.length > itemsPerPage && (
          <div className="flex justify-center mt-4">
            <Button asChild variant="outline">
              <Link href="/alumni/events">View All Upcoming Events</Link>
            </Button>
          </div>
        )}
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-6">Past Alumni Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {currentPastEvents.map((event) => (
            <Card key={event.id} className="overflow-hidden">
              <div className="h-48 relative">
                <img
                  src={event.image || "/placeholder.svg"}
                  alt={event.title}
                  className="w-full h-full object-cover filter grayscale opacity-80"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30"></div>
              </div>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-xl">{event.title}</CardTitle>
                  <Badge variant="outline">Past Event</Badge>
                </div>
              </CardHeader>
              <CardContent className="pb-2">
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{event.description}</p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span>{formatDate(event.date)}</span>
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

        {/* Pagination for past events */}
        {totalPastPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-8">
            <Button variant="outline" size="icon" onClick={prevPage} disabled={currentPage === 1}>
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <span className="text-sm">
              Page {currentPage} of {totalPastPages}
            </span>
            <Button variant="outline" size="icon" onClick={nextPage} disabled={currentPage === totalPastPages}>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        )}
      </div>

      <div className="bg-muted/30 rounded-lg p-6 mt-12">
        <h3 className="text-xl font-bold mb-4">Organize an Alumni Event</h3>
        <p className="mb-4">
          Interested in organizing an event for ECE alumni? We welcome your initiatives and can provide support in
          planning and promotion.
        </p>
        <Button asChild>
          <Link href="/contact">Contact Alumni Coordinator</Link>
        </Button>
      </div>
    </div>
  )
}

