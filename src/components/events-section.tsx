import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, MapPin, Users } from "lucide-react"
import Link from "next/link"

// Mock data for events
const events = {
  sports: [
    {
      id: 1,
      title: "Inter-Department Cricket Tournament",
      date: "2023-07-05",
      location: "University Cricket Ground",
      participants: 120,
      image: "/placeholder.svg?height=200&width=350",
      description: "Annual cricket tournament between departments.",
    },
    {
      id: 2,
      title: "ECE Badminton Championship",
      date: "2023-07-12",
      location: "Indoor Sports Complex",
      participants: 48,
      image: "/placeholder.svg?height=200&width=350",
      description: "Badminton championship for ECE students and faculty.",
    },
  ],
  cultural: [
    {
      id: 3,
      title: "Annual Cultural Night",
      date: "2023-08-10",
      location: "University Auditorium",
      participants: 200,
      image: "/placeholder.svg?height=200&width=350",
      description: "A night of music, dance, and drama performances by ECE students.",
    },
    {
      id: 4,
      title: "Photography Exhibition",
      date: "2023-08-15",
      location: "ECE Gallery",
      participants: 35,
      image: "/placeholder.svg?height=200&width=350",
      description: "Exhibition of photographs taken by ECE students and faculty.",
    },
  ],
}

export function EventsSection() {
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" }
    return new Date(dateString).toLocaleDateString("en-US", options)
  }

  return (
    <section className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold">Events</h2>
        <Button asChild variant="outline">
          <Link href="/events">View All Events</Link>
        </Button>
      </div>

      <Tabs defaultValue="sports">
        <TabsList className="grid w-full grid-cols-2 mb-8 max-w-md mx-auto">
          <TabsTrigger value="sports">Sports Events</TabsTrigger>
          <TabsTrigger value="cultural">Cultural Events</TabsTrigger>
        </TabsList>

        <TabsContent value="sports" className="mt-0">
          <div className="grid md:grid-cols-2 gap-6">
            {events.sports.map((event) => (
              <Card key={event.id} className="overflow-hidden">
                <div className="h-48">
                  <img
                    src={event.image || "/placeholder.svg"}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader className="pb-2">
                  <CardTitle>{event.title}</CardTitle>
                  <CardDescription>{event.description}</CardDescription>
                </CardHeader>
                <CardContent className="pb-2">
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span>{formatDate(event.date)}</span>
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
                  <Button asChild variant="outline" size="sm" className="w-full">
                    <Link href={`/events/${event.id}`}>View Details</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="cultural" className="mt-0">
          <div className="grid md:grid-cols-2 gap-6">
            {events.cultural.map((event) => (
              <Card key={event.id} className="overflow-hidden">
                <div className="h-48">
                  <img
                    src={event.image || "/placeholder.svg"}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader className="pb-2">
                  <CardTitle>{event.title}</CardTitle>
                  <CardDescription>{event.description}</CardDescription>
                </CardHeader>
                <CardContent className="pb-2">
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span>{formatDate(event.date)}</span>
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
                  <Button asChild variant="outline" size="sm" className="w-full">
                    <Link href={`/events/${event.id}`}>View Details</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </section>
  )
}

