"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Calendar, Clock, MapPin, Users, ChevronLeft, Camera, Download, Share2, ChevronRight } from "lucide-react"

// Mock data for events
const allEvents = {
  "cricket-tournament-2023": {
    id: "cricket-tournament-2023",
    title: "Inter-Department Cricket Tournament",
    date: "2023-12-10",
    endDate: "2023-12-15",
    time: "9:00 AM - 5:00 PM",
    location: "University Cricket Ground",
    participants: 120,
    image: "/placeholder.svg?height=800&width=1200",
    description: "Annual cricket tournament between departments featuring teams from all faculties.",
    longDescription: `
      The Inter-Department Cricket Tournament is one of the most anticipated sporting events of the year at HSTU. Teams from all departments compete in this week-long tournament to claim the championship title.
      
      The tournament follows a group stage and knockout format, with teams divided into groups for the initial matches. The top teams from each group advance to the quarter-finals, followed by semi-finals and the grand finale.
      
      Matches are played according to T20 format with some modifications to accommodate time constraints. Each team consists of 11 players with 3 substitutes allowed.
      
      This tournament not only promotes sportsmanship and healthy competition but also strengthens inter-departmental relationships and provides a platform for students to showcase their cricketing talents.
    `,
    category: "cricket",
    status: "upcoming",
    type: "sports",
    organizers: [
      {
        name: "Md. Kamal Hossain",
        role: "Tournament Director",
        contact: "01756789012",
      },
      {
        name: "Nusrat Jahan",
        role: "Logistics Coordinator",
        contact: "01745678901",
      },
    ],
    schedule: [
      {
        date: "2023-12-10",
        events: [
          {
            time: "9:00 AM",
            description: "Opening Ceremony",
          },
          {
            time: "10:00 AM",
            description: "Match 1: ECE vs CSE",
          },
          {
            time: "2:00 PM",
            description: "Match 2: EEE vs Civil",
          },
        ],
      },
      {
        date: "2023-12-11",
        events: [
          {
            time: "10:00 AM",
            description: "Match 3: Agri vs BAF",
          },
          {
            time: "2:00 PM",
            description: "Match 4: Fisheries vs DVM",
          },
        ],
      },
      {
        date: "2023-12-12",
        events: [
          {
            time: "10:00 AM",
            description: "Match 5: Winner of Match 1 vs Winner of Match 2",
          },
          {
            time: "2:00 PM",
            description: "Match 6: Winner of Match 3 vs Winner of Match 4",
          },
        ],
      },
      {
        date: "2023-12-15",
        events: [
          {
            time: "2:00 PM",
            description: "Final Match",
          },
          {
            time: "5:00 PM",
            description: "Prize Distribution Ceremony",
          },
        ],
      },
    ],
    rules: [
      "Each team must consist of students from the same department.",
      "Matches will be played according to T20 format with 20 overs per side.",
      "In case of rain, matches may be reduced to 10 overs per side.",
      "The tournament will follow ICC rules with some modifications.",
      "Each team must report 30 minutes before their scheduled match time.",
      "The decision of the umpires and tournament committee will be final.",
    ],
    registration: {
      deadline: "2023-12-05",
      fee: "1000 BDT per team",
      contact: "Md. Kamal Hossain (01756789012)",
    },
    gallery: null,
  },
  "cultural-night-2023": {
    id: "cultural-night-2023",
    title: "Annual Cultural Night",
    date: "2023-12-25",
    time: "6:00 PM - 10:00 PM",
    location: "University Auditorium",
    participants: 200,
    image: "/placeholder.svg?height=800&width=1200",
    description: "A night of music, dance, and drama performances by ECE students.",
    longDescription: `
      The Annual Cultural Night is a flagship event of the ECE Club that showcases the artistic talents of our students. This event features a variety of performances including music, dance, drama, poetry recitation, and more.
      
      The event provides a platform for students to express their creativity and cultural heritage. It's a celebration of art and culture that brings together students, faculty, and alumni for an evening of entertainment and camaraderie.
      
      This year's theme is "Unity in Diversity," celebrating the rich cultural tapestry of our university community. The event will feature performances representing various cultural traditions from across Bangladesh and beyond.
      
      The night will conclude with a special alumni performance and a grand finale featuring all participants.
    `,
    category: "performance",
    status: "upcoming",
    type: "cultural",
    organizers: [
      {
        name: "Sabrina Akter",
        role: "Event Coordinator",
        contact: "01767890123",
      },
      {
        name: "Md. Rakibul Hasan",
        role: "Stage Manager",
        contact: "01778901234",
      },
    ],
    schedule: [
      {
        time: "6:00 PM",
        description: "Doors Open",
      },
      {
        time: "6:30 PM",
        description: "Welcome Speech by ECE Club President",
      },
      {
        time: "6:45 PM",
        description: "Opening Performance: Traditional Dance",
      },
      {
        time: "7:15 PM",
        description: "Musical Performances",
      },
      {
        time: "8:00 PM",
        description: "Drama Presentation: 'The Digital Age'",
      },
      {
        time: "8:45 PM",
        description: "Intermission & Refreshments",
      },
      {
        time: "9:15 PM",
        description: "Modern Dance Performances",
      },
      {
        time: "9:45 PM",
        description: "Alumni Performance",
      },
      {
        time: "10:00 PM",
        description: "Grand Finale & Closing Remarks",
      },
    ],
    registration: {
      deadline: "2023-12-15",
      fee: "Free for ECE students, 100 BDT for others",
      contact: "Sabrina Akter (01767890123)",
    },
    gallery: null,
  },
  "chess-competition-2023": {
    id: "chess-competition-2023",
    title: "Inter-University Chess Competition",
    date: "2023-09-15",
    endDate: "2023-09-16",
    time: "10:00 AM - 4:00 PM",
    location: "ECE Seminar Hall",
    participants: 32,
    image: "/placeholder.svg?height=800&width=1200",
    description: "Chess competition featuring participants from universities across the country.",
    longDescription: `
      The Inter-University Chess Competition was a prestigious event that brought together chess enthusiasts from various universities across Bangladesh. The two-day tournament featured intense matches, strategic gameplay, and impressive displays of intellectual prowess.
      
      The competition followed a Swiss-system tournament format with 5 rounds. Players had 30 minutes per side with an increment of 10 seconds per move. The tournament was FIDE-rated, adding to its significance.
      
      Participants represented their respective universities and competed both individually and for team honors. The event aimed to promote chess as an intellectual sport and foster inter-university relationships.
      
      The competition was a great success, with participants demonstrating exceptional chess skills and sportsmanship throughout the tournament.
    `,
    category: "chess",
    status: "past",
    type: "sports",
    results: {
      individual: [
        {
          position: "Champion",
          name: "Md. Tanvir Ahmed",
          university: "BUET",
        },
        {
          position: "1st Runner-up",
          name: "Fatema Khatun",
          university: "HSTU",
        },
        {
          position: "2nd Runner-up",
          name: "Arif Hossain",
          university: "DU",
        },
      ],
      team: [
        {
          position: "Champion",
          university: "BUET",
        },
        {
          position: "1st Runner-up",
          university: "HSTU",
        },
        {
          position: "2nd Runner-up",
          university: "DU",
        },
      ],
    },
    gallery: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    writeup: `
      The Inter-University Chess Competition 2023 was successfully held on September 15-16 at the ECE Seminar Hall. The event saw participation from 32 players representing 8 universities across Bangladesh.
      
      The tournament began with an opening ceremony attended by the Vice-Chancellor and other university officials. The competition was intense from the very first round, with players demonstrating exceptional chess skills and strategic thinking.
      
      After five rounds of competitive play, Md. Tanvir Ahmed from BUET emerged as the individual champion, while BUET also claimed the team championship. Our own Fatema Khatun made us proud by securing the 1st runner-up position in the individual category.
      
      The event concluded with a prize-giving ceremony where winners received trophies, certificates, and cash prizes. The feedback from participants was overwhelmingly positive, with many expressing interest in participating in future editions of the tournament.
      
      The success of this event has established HSTU as a prominent venue for chess competitions and has inspired many students to take up the game.
    `,
  },
  "music-festival-2023": {
    id: "music-festival-2023",
    title: "ECE Music Festival",
    date: "2023-07-10",
    time: "5:00 PM - 9:00 PM",
    location: "University Open Air Theater",
    participants: 150,
    image: "/placeholder.svg?height=800&width=1200",
    description: "Music festival featuring performances by talented students and alumni.",
    longDescription: `
      The ECE Music Festival was a celebration of musical talent within our department. The event featured performances by current students, faculty members, and alumni, showcasing a wide range of musical genres and styles.
      
      From classical to contemporary, from folk to fusion, the festival was a testament to the diverse musical interests and abilities of the ECE community. Solo performances, duets, and band performances kept the audience entertained throughout the evening.
      
      The festival also featured a special segment dedicated to traditional Bengali music, highlighting our rich cultural heritage. The alumni band's performance was a highlight of the event, bringing together different generations of ECE graduates.
      
      The open-air setting under the stars created a magical atmosphere for this musical extravaganza, making it a memorable experience for performers and audience alike.
    `,
    category: "music",
    status: "past",
    type: "cultural",
    performers: [
      {
        name: "Rhythm Makers",
        type: "Band",
        members: "Current Students",
        performance: "Contemporary Hits",
      },
      {
        name: "Dr. Aminul Islam",
        type: "Solo",
        members: "Faculty",
        performance: "Classical Vocal",
      },
      {
        name: "ECE Alumni Band",
        type: "Band",
        members: "Alumni",
        performance: "Rock & Roll Classics",
      },
      {
        name: "Baul Fusion Group",
        type: "Group",
        members: "Current Students",
        performance: "Bengali Folk Fusion",
      },
    ],
    gallery: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    writeup: `
      The ECE Music Festival held on July 10, 2023, was a resounding success, attracting over 300 attendees from across the university. The event transformed the Open Air Theater into a vibrant venue for musical expression and enjoyment.
      
      The festival began at 5:00 PM with an opening performance by the ECE Department's own Rhythm Makers band, setting an energetic tone for the evening. Throughout the next four hours, the audience was treated to a diverse range of musical performances spanning various genres and styles.
      
      One of the highlights of the evening was Dr. Aminul Islam's classical vocal performance, which showcased the rich tradition of classical music. The ECE Alumni Band's performance was another crowd-pleaser, bringing together graduates from different batches who reunited for this special occasion.
      
      The Baul Fusion Group's innovative blend of traditional Bengali folk music with contemporary elements received particular acclaim, highlighting the creative talent within our department.
      
      The festival concluded with a collaborative performance featuring all participants, symbolizing the unity and camaraderie within the ECE community. The event not only entertained but also strengthened the bonds between current students, faculty, and alumni.
      
      Based on the overwhelmingly positive feedback, the ECE Club plans to make this an annual event, potentially expanding its scope to include more performers and genres in the coming years.
    `,
  },
}

export default function EventDetailPage({ params }: { params: { id: string } }) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Get event data based on ID
  const event = allEvents[params.id as keyof typeof allEvents]

  if (!event) {
    return (
      <div className="container mx-auto py-16 px-4 text-center">
        <h1 className="text-2xl font-bold mb-4">Event not found</h1>
        <p className="text-muted-foreground mb-8">The event you are looking for does not exist or has been removed.</p>
        <Button asChild>
          <Link href="/events">Back to Events</Link>
        </Button>
      </div>
    )
  }

  const formatDate = (dateString: string, endDateString?: string) => {
    const options: Intl.DateTimeFormatOptions = { year: "numeric", month: "long", day: "numeric" }
    const startDate = new Date(dateString).toLocaleDateString("en-US", options)

    if (endDateString) {
      const endDate = new Date(endDateString).toLocaleDateString("en-US", options)
      return `${startDate} - ${endDate}`
    }

    return startDate
  }

  const handleImageClick = (image: string, index: number) => {
    setSelectedImage(image)
    setCurrentImageIndex(index)
  }

  const nextImage = () => {
    if (event.gallery && currentImageIndex < event.gallery.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1)
      setSelectedImage(event.gallery[currentImageIndex + 1])
    }
  }

  const prevImage = () => {
    if (event.gallery && currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1)
      setSelectedImage(event.gallery[currentImageIndex - 1])
    }
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <Button variant="outline" asChild className="mb-4">
            <Link href="/events">
              <ChevronLeft className="h-4 w-4 mr-2" />
              Back to Events
            </Link>
          </Button>

          <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden mb-8">
            <img
              src={event.image || "/placeholder.svg"}
              alt={event.title}
              className={`w-full h-full object-cover ${event.status === "past" ? "filter grayscale opacity-80" : ""}`}
            />
            {event.status === "past" && (
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                <Badge className="text-lg py-2 px-4">Past Event</Badge>
              </div>
            )}
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-8">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">{event.title}</h1>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">
                  {event.category.charAt(0).toUpperCase() + event.category.slice(1)}
                </Badge>
                <Badge className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300">
                  {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                </Badge>
                {event.status === "upcoming" ? (
                  <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">Upcoming</Badge>
                ) : (
                  <Badge variant="outline">Past</Badge>
                )}
              </div>
            </div>

            {event.status === "upcoming" && (
              <Button asChild>
                <Link href={`/events/${event.id}/register`}>Register Now</Link>
              </Button>
            )}

            {event.status === "past" && event.gallery && (
              <Button asChild variant="outline">
                <Link href="#gallery">
                  <Camera className="h-4 w-4 mr-2" />
                  View Gallery
                </Link>
              </Button>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>About This Event</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="whitespace-pre-line">{event.longDescription}</p>
                  </div>
                </CardContent>
              </Card>

              {event.schedule && Array.isArray(event.schedule[0]?.events) && (
                <Card>
                  <CardHeader>
                    <CardTitle>Event Schedule</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {event.schedule.map((day, index) => (
                        <div key={index} className="space-y-3">
                          <h3 className="font-semibold text-lg">{formatDate(day.date)}</h3>
                          <div className="space-y-2">
                            {day.events.map((item, idx) => (
                              <div key={idx} className="flex">
                                <div className="w-24 font-medium">{item.time}</div>
                                <div>{item.description}</div>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}

              {event.schedule && !Array.isArray(event.schedule[0]?.events) && (
                <Card>
                  <CardHeader>
                    <CardTitle>Event Schedule</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {event.schedule.map((item: any, index: number) => (
                        <div key={index} className="flex">
                          <div className="w-24 font-medium">{item.time}</div>
                          <div>{item.description}</div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}

              {event.rules && (
                <Card>
                  <CardHeader>
                    <CardTitle>Rules & Guidelines</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc list-inside space-y-2">
                      {event.rules.map((rule, index) => (
                        <li key={index}>{rule}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )}

              {event.performers && (
                <Card>
                  <CardHeader>
                    <CardTitle>Performers</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {event.performers.map((performer, index) => (
                        <div key={index} className="border rounded-md p-4">
                          <h3 className="font-semibold text-lg">{performer.name}</h3>
                          <p className="text-sm text-muted-foreground">Type: {performer.type}</p>
                          <p className="text-sm text-muted-foreground">Members: {performer.members}</p>
                          <p className="text-sm">Performance: {performer.performance}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}

              {event.results && (
                <Card>
                  <CardHeader>
                    <CardTitle>Results</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {event.results.individual && (
                        <div>
                          <h3 className="font-semibold text-lg mb-3">Individual Category</h3>
                          <div className="space-y-2">
                            {event.results.individual.map((result, index) => (
                              <div key={index} className="flex items-center border-b pb-2">
                                <div className="w-32 font-medium">{result.position}</div>
                                <div className="flex-1">{result.name}</div>
                                <div className="text-sm text-muted-foreground">{result.university}</div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {event.results.team && (
                        <div>
                          <h3 className="font-semibold text-lg mb-3">Team Category</h3>
                          <div className="space-y-2">
                            {event.results.team.map((result, index) => (
                              <div key={index} className="flex items-center border-b pb-2">
                                <div className="w-32 font-medium">{result.position}</div>
                                <div>{result.university}</div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              )}

              {event.status === "past" && event.writeup && (
                <Card>
                  <CardHeader>
                    <CardTitle>Event Summary</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p className="whitespace-pre-line">{event.writeup}</p>
                    </div>
                  </CardContent>
                </Card>
              )}

              {event.status === "past" && event.gallery && (
                <Card id="gallery">
                  <CardHeader>
                    <CardTitle>Event Gallery</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {event.gallery.map((image, index) => (
                        <Dialog key={index}>
                          <DialogTrigger asChild>
                            <div
                              className="aspect-video rounded-md overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
                              onClick={() => handleImageClick(image, index)}
                            >
                              <img
                                src={image || "/placeholder.svg"}
                                alt={`Event gallery ${index + 1}`}
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </DialogTrigger>
                          <DialogContent className="max-w-4xl w-[90vw]">
                            <DialogHeader>
                              <DialogTitle>{event.title} - Gallery</DialogTitle>
                              <DialogDescription>
                                Image {index + 1} of {event.gallery.length}
                              </DialogDescription>
                            </DialogHeader>
                            <div className="relative">
                              <img
                                src={selectedImage || image}
                                alt={`Event gallery ${currentImageIndex + 1}`}
                                className="w-full rounded-md"
                              />
                              <div className="absolute top-1/2 left-0 transform -translate-y-1/2 flex justify-between w-full px-4">
                                <Button
                                  variant="outline"
                                  size="icon"
                                  className="bg-background/80 rounded-full"
                                  onClick={prevImage}
                                  disabled={currentImageIndex === 0}
                                >
                                  <ChevronLeft className="h-6 w-6" />
                                </Button>
                                <Button
                                  variant="outline"
                                  size="icon"
                                  className="bg-background/80 rounded-full"
                                  onClick={nextImage}
                                  disabled={currentImageIndex === (event.gallery?.length || 0) - 1}
                                >
                                  <ChevronRight className="h-6 w-6" />
                                </Button>
                              </div>
                            </div>
                            <div className="flex justify-end gap-2">
                              <Button variant="outline" size="sm">
                                <Download className="h-4 w-4 mr-2" />
                                Download
                              </Button>
                              <Button variant="outline" size="sm">
                                <Share2 className="h-4 w-4 mr-2" />
                                Share
                              </Button>
                            </div>
                          </DialogContent>
                        </Dialog>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Event Details</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Calendar className="h-5 w-5 mr-3 text-primary mt-0.5" />
                      <div>
                        <h3 className="font-medium">Date</h3>
                        <p className="text-muted-foreground">{formatDate(event.date, event.endDate)}</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Clock className="h-5 w-5 mr-3 text-primary mt-0.5" />
                      <div>
                        <h3 className="font-medium">Time</h3>
                        <p className="text-muted-foreground">{event.time}</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 mr-3 text-primary mt-0.5" />
                      <div>
                        <h3 className="font-medium">Location</h3>
                        <p className="text-muted-foreground">{event.location}</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Users className="h-5 w-5 mr-3 text-primary mt-0.5" />
                      <div>
                        <h3 className="font-medium">Participants</h3>
                        <p className="text-muted-foreground">{event.participants} participants</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {event.organizers && (
                <Card>
                  <CardHeader>
                    <CardTitle>Organizers</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {event.organizers.map((organizer, index) => (
                        <div key={index} className="flex flex-col">
                          <h3 className="font-medium">{organizer.name}</h3>
                          <p className="text-sm text-muted-foreground">{organizer.role}</p>
                          <p className="text-sm">Contact: {organizer.contact}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}

              {event.registration && event.status === "upcoming" && (
                <Card>
                  <CardHeader>
                    <CardTitle>Registration</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <h3 className="font-medium">Deadline</h3>
                        <p className="text-sm">{event.registration.deadline}</p>
                      </div>
                      <div>
                        <h3 className="font-medium">Fee</h3>
                        <p className="text-sm">{event.registration.fee}</p>
                      </div>
                      <div>
                        <h3 className="font-medium">Contact</h3>
                        <p className="text-sm">{event.registration.contact}</p>
                      </div>
                      <div className="pt-4">
                        <Button asChild className="w-full">
                          <Link href={`/events/${event.id}/register`}>Register Now</Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

              <Card>
                <CardHeader>
                  <CardTitle>Share Event</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      Facebook
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      Twitter
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      WhatsApp
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

