import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Users, ExternalLink } from "lucide-react"
import Link from "next/link"

// Mock data for featured events
const featuredEvents = [
  {
    id: 1,
    title: "ECE Tech Fest 2023",
    date: "2023-09-15",
    endDate: "2023-09-17",
    location: "University Main Campus",
    participants: 500,
    image: "/placeholder.svg?height=400&width=800",
    description:
      "The biggest technical festival organized by the Department of Electronics and Communication Engineering featuring workshops, competitions, exhibitions, and guest lectures from industry experts.",
    highlights: [
      "Project Exhibition",
      "Hackathon",
      "Technical Paper Presentation",
      "Industry Expert Talks",
      "Job Fair",
    ],
  },
  {
    id: 2,
    title: "Alumni Reunion 2023",
    date: "2023-10-20",
    endDate: "2023-10-21",
    location: "ECE Building and University Auditorium",
    participants: 300,
    image: "/placeholder.svg?height=400&width=800",
    description:
      "Annual reunion of ECE alumni to connect current students with graduates, featuring networking sessions, panel discussions, and cultural programs.",
    highlights: [
      "Alumni-Student Interaction",
      "Career Guidance Sessions",
      "Networking Dinner",
      "Cultural Night",
      "Awards Ceremony",
    ],
  },
]

export function FeaturedEvents() {
  const formatDateRange = (startDate, endDate) => {
    const options = { year: "numeric", month: "long", day: "numeric" }
    const start = new Date(startDate).toLocaleDateString("en-US", options)
    const end = new Date(endDate).toLocaleDateString("en-US", options)
    return `${start} - ${end}`
  }

  return (
    <section className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-12">Featured Events</h2>

      <div className="space-y-12">
        {featuredEvents.map((event) => (
          <Card key={event.id} className="overflow-hidden">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="h-64 md:h-auto">
                <img src={event.image || "/placeholder.svg"} alt={event.title} className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col p-6">
                <div className="mb-2">
                  <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">Featured</Badge>
                </div>
                <h3 className="text-2xl font-bold mb-2">{event.title}</h3>
                <p className="text-muted-foreground mb-4">{event.description}</p>

                <div className="space-y-2 text-sm mb-4">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span>{formatDateRange(event.date, event.endDate)}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span>{event.participants}+ expected participants</span>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-medium mb-2">Event Highlights:</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    {event.highlights.map((highlight, index) => (
                      <li key={index}>{highlight}</li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto">
                  <Button asChild className="w-full">
                    <Link href={`/events/${event.id}`}>
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Event Details
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}

