import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, MapPin, Clock } from "lucide-react"
import Link from "next/link"

// Mock data for upcoming events
const upcomingEvents = {
  workshops: [
    {
      id: 1,
      title: "Introduction to IoT",
      date: "2023-06-15",
      time: "10:00 AM - 4:00 PM",
      location: "ECE Building, Room 101",
      description: "Learn the basics of Internet of Things and how to build your first IoT project.",
      type: "workshop",
    },
    {
      id: 2,
      title: "PCB Design Workshop",
      date: "2023-06-22",
      time: "9:00 AM - 1:00 PM",
      location: "ECE Lab, Room 203",
      description: "Hands-on workshop on PCB design using industry-standard tools.",
      type: "workshop",
    },
  ],
  sports: [
    {
      id: 3,
      title: "Inter-Department Cricket Tournament",
      date: "2023-07-05",
      time: "9:00 AM - 5:00 PM",
      location: "University Cricket Ground",
      description: "Annual cricket tournament between departments.",
      type: "sports",
    },
    {
      id: 4,
      title: "ECE Badminton Championship",
      date: "2023-07-12",
      time: "2:00 PM - 6:00 PM",
      location: "Indoor Sports Complex",
      description: "Badminton championship for ECE students and faculty.",
      type: "sports",
    },
  ],
  cultural: [
    {
      id: 5,
      title: "Annual Cultural Night",
      date: "2023-08-10",
      time: "6:00 PM - 10:00 PM",
      location: "University Auditorium",
      description: "A night of music, dance, and drama performances by ECE students.",
      type: "cultural",
    },
    {
      id: 6,
      title: "Photography Exhibition",
      date: "2023-08-15",
      time: "10:00 AM - 5:00 PM",
      location: "ECE Gallery",
      description: "Exhibition of photographs taken by ECE students and faculty.",
      type: "cultural",
    },
  ],
}

export function UpcomingEvents() {
  return (
    <section className="container mx-auto px-4 py-8 bg-muted/30 rounded-lg">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold">Upcoming Events</h2>
        <Button asChild variant="outline">
          <Link href="/events">View All Events</Link>
        </Button>
      </div>

      <Tabs defaultValue="workshops">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="workshops">Workshops & Seminars</TabsTrigger>
          <TabsTrigger value="sports">Sports</TabsTrigger>
          <TabsTrigger value="cultural">Cultural</TabsTrigger>
        </TabsList>

        <TabsContent value="workshops" className="mt-0">
          <div className="grid md:grid-cols-2 gap-6">
            {upcomingEvents.workshops.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="sports" className="mt-0">
          <div className="grid md:grid-cols-2 gap-6">
            {upcomingEvents.sports.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="cultural" className="mt-0">
          <div className="grid md:grid-cols-2 gap-6">
            {upcomingEvents.cultural.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </section>
  )
}

function EventCard({ event }) {
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" }
    return new Date(dateString).toLocaleDateString("en-US", options)
  }

  const getBadgeColor = (type) => {
    switch (type) {
      case "workshop":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
      case "sports":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
      case "cultural":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300"
      default:
        return ""
    }
  }

  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle>{event.title}</CardTitle>
            <CardDescription className="mt-1">{event.description}</CardDescription>
          </div>
          <Badge className={getBadgeColor(event.type)}>
            {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="pb-2">
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
        <Button asChild variant="outline" size="sm" className="w-full">
          <Link href={`/events/${event.id}`}>View Details</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

