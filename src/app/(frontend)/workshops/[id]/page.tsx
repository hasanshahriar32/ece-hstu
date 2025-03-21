"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { toast } from "@/hooks/use-toast"
import { Calendar, Clock, MapPin, Users, DollarSign, Award, QrCode, ChevronLeft } from "lucide-react"

// Mock workshop data
const workshops = {
  "iot-workshop-2023": {
    id: "iot-workshop-2023",
    title: "Introduction to IoT",
    date: "2023-12-15",
    time: "10:00 AM - 4:00 PM",
    location: "ECE Building, Room 101",
    instructor: {
      name: "Dr. Aminul Islam",
      designation: "Associate Professor",
      department: "Department of ECE",
      image: "/placeholder.svg?height=200&width=200",
      bio: "Dr. Aminul Islam is an Associate Professor in the Department of Electronics and Communication Engineering with expertise in IoT, embedded systems, and wireless communications. He has conducted numerous workshops and training sessions on IoT and related technologies.",
    },
    participants: 30,
    image: "/placeholder.svg?height=600&width=1200",
    description: "Learn the basics of Internet of Things and how to build your first IoT project.",
    longDescription: `
      This workshop will introduce you to the exciting world of Internet of Things (IoT). You will learn the fundamental concepts, architecture, and applications of IoT systems. The workshop will cover both theoretical aspects and practical implementations.

      Throughout the day, you will get hands-on experience with various IoT devices, sensors, and platforms. By the end of the workshop, you will have built your own simple IoT project that you can take home.

      This workshop is perfect for beginners who want to explore IoT and gain practical skills in this rapidly growing field.
    `,
    topics: [
      "Introduction to IoT concepts and architecture",
      "Overview of IoT hardware platforms (Arduino, ESP8266, Raspberry Pi)",
      "Sensors and actuators in IoT",
      "Connectivity options (Wi-Fi, Bluetooth, LoRa)",
      "IoT protocols (MQTT, HTTP)",
      "Cloud platforms for IoT",
      "Hands-on project: Building a simple IoT monitoring system",
    ],
    requirements: [
      "Basic knowledge of electronics",
      "Familiarity with programming concepts",
      "Laptop with Arduino IDE installed",
    ],
    materials: [
      "Arduino Uno board (provided)",
      "Sensors kit (provided)",
      "Breadboard and jumper wires (provided)",
      "USB cable (provided)",
    ],
    status: "upcoming",
    price: 0, // Free
    category: "technical",
    maxParticipants: 30,
    currentParticipants: 18,
    isRegistered: false,
  },
  "pcb-design-workshop-2023": {
    id: "pcb-design-workshop-2023",
    title: "PCB Design Workshop",
    date: "2023-12-22",
    time: "9:00 AM - 1:00 PM",
    location: "ECE Lab, Room 203",
    instructor: {
      name: "Md. Rafiqul Islam",
      designation: "Assistant Professor",
      department: "Department of ECE",
      image: "/placeholder.svg?height=200&width=200",
      bio: "Md. Rafiqul Islam is an Assistant Professor with extensive experience in PCB design and electronic circuit development. He has worked on numerous industry projects involving complex PCB designs and has been teaching PCB design courses for over 5 years.",
    },
    participants: 25,
    image: "/placeholder.svg?height=600&width=1200",
    description: "Hands-on workshop on PCB design using industry-standard tools.",
    longDescription: `
      This workshop will teach you the complete process of designing printed circuit boards (PCBs) from schematic capture to production-ready files. You will learn how to use industry-standard PCB design software to create professional-quality PCB layouts.

      The workshop will cover best practices for component placement, routing, and design for manufacturability. You will work on a real PCB project throughout the workshop and will have the opportunity to get your design manufactured.

      This is a hands-on workshop where you will gain practical skills that are highly valued in the electronics industry.
    `,
    topics: [
      "Introduction to PCB design process",
      "Schematic capture using EasyEDA",
      "Component selection and footprints",
      "PCB layout fundamentals",
      "Routing techniques and best practices",
      "Design for manufacturability",
      "Generating production files",
      "Hands-on project: Designing a simple Arduino shield",
    ],
    requirements: [
      "Basic knowledge of electronic circuits",
      "Laptop with EasyEDA installed (or account for web version)",
      "Mouse (recommended for easier design work)",
    ],
    materials: ["Workshop handouts (provided)", "Component libraries (provided)", "Reference designs (provided)"],
    status: "upcoming",
    price: 500, // 500 BDT
    category: "technical",
    maxParticipants: 25,
    currentParticipants: 15,
    isRegistered: false,
  },
  "embedded-systems-workshop-2023": {
    id: "embedded-systems-workshop-2023",
    title: "Embedded Systems Programming",
    date: "2023-05-18",
    time: "9:00 AM - 4:00 PM",
    location: "ECE Lab, Room 205",
    instructor: {
      name: "Prof. Md. Mehedi Islam",
      designation: "Professor",
      department: "Department of ECE",
      image: "/placeholder.svg?height=200&width=200",
      bio: "Prof. Md. Mehedi Islam is a Professor with over 15 years of experience in embedded systems design and programming. He has led numerous research projects in embedded systems and has published extensively in international journals and conferences.",
    },
    participants: 35,
    image: "/placeholder.svg?height=600&width=1200",
    description: "Programming microcontrollers and embedded systems for real-world applications.",
    longDescription: `
      This workshop provided a comprehensive introduction to embedded systems programming with a focus on ARM-based microcontrollers. Participants learned how to develop firmware for embedded systems, interface with various peripherals, and implement real-time applications.

      The workshop covered both theoretical concepts and practical implementation through hands-on exercises and projects. Participants gained valuable skills in embedded C programming, debugging techniques, and system optimization.

      This was an intermediate-level workshop designed for those with basic programming knowledge who wanted to delve into the world of embedded systems.
    `,
    topics: [
      "Introduction to embedded systems architecture",
      "ARM Cortex-M microcontrollers",
      "Embedded C programming",
      "GPIO and peripheral interfaces",
      "Interrupts and timers",
      "Communication protocols (UART, SPI, I2C)",
      "Real-time operating systems basics",
      "Hands-on project: Building a digital control system",
    ],
    gallery: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    writeup: `
      The Embedded Systems Programming Workshop was successfully conducted on May 18, 2023, with 35 participants from various departments. The workshop was led by Prof. Md. Mehedi Islam, who shared his extensive knowledge and experience in embedded systems.

      The day began with an introduction to embedded systems architecture and ARM Cortex-M microcontrollers. Participants then engaged in hands-on programming exercises using STM32 development boards. The afternoon session covered advanced topics such as interrupts, timers, and communication protocols.

      The highlight of the workshop was the final project, where participants worked in teams to build a digital control system. The teams demonstrated impressive creativity and technical skills in implementing their projects.

      Feedback from participants was overwhelmingly positive, with many expressing interest in advanced workshops on specific embedded systems topics. Certificates were awarded to all participants who successfully completed the workshop requirements.
    `,
    status: "past",
    price: 800, // 800 BDT
    category: "technical",
    certificateId: "CERT-EMB123456", // Only for past workshops where the user attended
    isAttended: true,
  },
}

export default function WorkshopDetailPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const [isBookingDialogOpen, setIsBookingDialogOpen] = useState(false)
  const [isConfirmationDialogOpen, setIsConfirmationDialogOpen] = useState(false)
  const [paymentMethod, setPaymentMethod] = useState("byHand")
  const [referenceInfo, setReferenceInfo] = useState("")
  const [transactionId, setTransactionId] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [bookingId, setBookingId] = useState("")

  // Get workshop data based on ID
  const workshop = workshops[params.id]

  if (!workshop) {
    return (
      <div className="container mx-auto py-16 px-4 text-center">
        <h1 className="text-2xl font-bold mb-4">Workshop not found</h1>
        <p className="text-muted-foreground mb-8">
          The workshop you are looking for does not exist or has been removed.
        </p>
        <Button asChild>
          <Link href="/workshops">Back to Workshops</Link>
        </Button>
      </div>
    )
  }

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: "numeric", month: "long", day: "numeric" }
    return new Date(dateString).toLocaleDateString("en-US", options)
  }

  const handleBookWorkshop = async () => {
    setIsLoading(true)

    // Simulate API call
    try {
      // In a real app, you would send the booking data to your API
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Generate a random booking ID
      const generatedBookingId = "BK" + Math.random().toString(36).substring(2, 10).toUpperCase()
      setBookingId(generatedBookingId)

      setIsBookingDialogOpen(false)
      setIsConfirmationDialogOpen(true)

      toast({
        title: "Booking successful!",
        description: `Your booking for ${workshop.title} has been confirmed.`,
      })
    } catch (error) {
      toast({
        title: "Booking failed",
        description: "There was a problem with your booking. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <Button variant="outline" asChild className="mb-4">
            <Link href="/workshops">
              <ChevronLeft className="h-4 w-4 mr-2" />
              Back to Workshops
            </Link>
          </Button>

          <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden mb-8">
            <img
              src={workshop.image || "/placeholder.svg"}
              alt={workshop.title}
              className={`w-full h-full object-cover ${workshop.status === "past" ? "filter grayscale opacity-80" : ""}`}
            />
            {workshop.status === "past" && (
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                <Badge className="text-lg py-2 px-4">Past Workshop</Badge>
              </div>
            )}
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-8">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">{workshop.title}</h1>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">
                  {workshop.category.charAt(0).toUpperCase() + workshop.category.slice(1)}
                </Badge>
                {workshop.price === 0 ? (
                  <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">Free</Badge>
                ) : (
                  <Badge className="bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300">
                    {workshop.price} BDT
                  </Badge>
                )}
                {workshop.status === "upcoming" && (
                  <Badge className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300">
                    {workshop.currentParticipants}/{workshop.maxParticipants} Registered
                  </Badge>
                )}
              </div>
            </div>

            {workshop.status === "upcoming" && !workshop.isRegistered && (
              <Dialog open={isBookingDialogOpen} onOpenChange={setIsBookingDialogOpen}>
                <DialogTrigger asChild>
                  <Button size="lg">Book This Workshop</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[500px]">
                  <DialogHeader>
                    <DialogTitle>Book Workshop</DialogTitle>
                    <DialogDescription>Complete the booking process for "{workshop.title}"</DialogDescription>
                  </DialogHeader>

                  {workshop.price > 0 ? (
                    <Tabs defaultValue="byHand" onValueChange={(value) => setPaymentMethod(value)}>
                      <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="byHand">By Hand Payment</TabsTrigger>
                        <TabsTrigger value="online">Online Payment</TabsTrigger>
                      </TabsList>
                      <TabsContent value="byHand" className="space-y-4 pt-4">
                        <div>
                          <p className="text-sm text-muted-foreground mb-4">
                            You can pay the workshop fee ({workshop.price} BDT) by hand to any of the committee members.
                            Please provide a reference information below.
                          </p>
                          <div className="space-y-2">
                            <label htmlFor="reference" className="text-sm font-medium">
                              Reference Information
                            </label>
                            <Textarea
                              id="reference"
                              placeholder="e.g., Will pay to Md. Kamal Hossain on Monday"
                              value={referenceInfo}
                              onChange={(e) => setReferenceInfo(e.target.value)}
                            />
                          </div>
                        </div>
                      </TabsContent>
                      <TabsContent value="online" className="space-y-4 pt-4">
                        <div>
                          <p className="text-sm text-muted-foreground mb-4">
                            Please send {workshop.price} BDT to the following mobile banking number and provide the
                            transaction ID below.
                          </p>
                          <div className="flex justify-center mb-4">
                            <div className="border p-4 rounded-lg bg-muted/30">
                              <div className="text-center mb-2">
                                <QrCode className="h-32 w-32 mx-auto mb-2" />
                                <p className="text-sm font-medium">Scan to Pay</p>
                              </div>
                              <div className="text-sm text-center">
                                <p>bKash/Nagad: 01712345678</p>
                                <p>Account Name: ECE Club, HSTU</p>
                              </div>
                            </div>
                          </div>
                          <div className="space-y-4">
                            <div className="space-y-2">
                              <label htmlFor="transactionId" className="text-sm font-medium">
                                Transaction ID
                              </label>
                              <Input
                                id="transactionId"
                                placeholder="e.g., TXN123456789"
                                value={transactionId}
                                onChange={(e) => setTransactionId(e.target.value)}
                              />
                            </div>
                            <div className="space-y-2">
                              <label htmlFor="referenceOnline" className="text-sm font-medium">
                                Reference Information (Optional)
                              </label>
                              <Textarea
                                id="referenceOnline"
                                placeholder="Any additional information"
                                value={referenceInfo}
                                onChange={(e) => setReferenceInfo(e.target.value)}
                              />
                            </div>
                          </div>
                        </div>
                      </TabsContent>
                    </Tabs>
                  ) : (
                    <div className="py-4">
                      <p className="text-sm text-muted-foreground mb-4">
                        This is a free workshop. Please confirm your booking to reserve your spot.
                      </p>
                      <div className="space-y-2">
                        <label htmlFor="reference" className="text-sm font-medium">
                          Any Special Requirements (Optional)
                        </label>
                        <Textarea
                          id="reference"
                          placeholder="e.g., Dietary restrictions, accessibility needs, etc."
                          value={referenceInfo}
                          onChange={(e) => setReferenceInfo(e.target.value)}
                        />
                      </div>
                    </div>
                  )}

                  <DialogFooter>
                    <Button variant="outline" onClick={() => setIsBookingDialogOpen(false)}>
                      Cancel
                    </Button>
                    <Button onClick={handleBookWorkshop} disabled={isLoading}>
                      {isLoading ? "Processing..." : "Confirm Booking"}
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            )}

            {workshop.status === "upcoming" && workshop.isRegistered && (
              <Button size="lg" variant="outline" disabled>
                Already Registered
              </Button>
            )}

            {workshop.status === "past" && workshop.isAttended && (
              <Button asChild>
                <Link href={`/certificate?id=${workshop.certificateId}`}>
                  <Award className="h-4 w-4 mr-2" />
                  View Certificate
                </Link>
              </Button>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>About This Workshop</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="whitespace-pre-line">{workshop.longDescription}</p>

                    {workshop.topics && (
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Topics Covered</h3>
                        <ul className="list-disc list-inside space-y-1">
                          {workshop.topics.map((topic, index) => (
                            <li key={index}>{topic}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {workshop.requirements && (
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Requirements</h3>
                        <ul className="list-disc list-inside space-y-1">
                          {workshop.requirements.map((req, index) => (
                            <li key={index}>{req}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {workshop.materials && (
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Materials</h3>
                        <ul className="list-disc list-inside space-y-1">
                          {workshop.materials.map((material, index) => (
                            <li key={index}>{material}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>

              {workshop.status === "past" && workshop.writeup && (
                <Card>
                  <CardHeader>
                    <CardTitle>Workshop Summary</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p className="whitespace-pre-line">{workshop.writeup}</p>

                      {workshop.gallery && (
                        <div>
                          <h3 className="text-lg font-semibold mb-4">Gallery</h3>
                          <div className="grid grid-cols-2 gap-4">
                            {workshop.gallery.map((image, index) => (
                              <div key={index} className="aspect-video rounded-md overflow-hidden">
                                <img
                                  src={image || "/placeholder.svg"}
                                  alt={`Workshop gallery ${index + 1}`}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Workshop Details</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Calendar className="h-5 w-5 mr-3 text-primary mt-0.5" />
                      <div>
                        <h3 className="font-medium">Date</h3>
                        <p className="text-muted-foreground">{formatDate(workshop.date)}</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Clock className="h-5 w-5 mr-3 text-primary mt-0.5" />
                      <div>
                        <h3 className="font-medium">Time</h3>
                        <p className="text-muted-foreground">{workshop.time}</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 mr-3 text-primary mt-0.5" />
                      <div>
                        <h3 className="font-medium">Location</h3>
                        <p className="text-muted-foreground">{workshop.location}</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Users className="h-5 w-5 mr-3 text-primary mt-0.5" />
                      <div>
                        <h3 className="font-medium">Participants</h3>
                        <p className="text-muted-foreground">
                          {workshop.status === "upcoming"
                            ? `${workshop.currentParticipants}/${workshop.maxParticipants} (${workshop.maxParticipants - workshop.currentParticipants} spots left)`
                            : `${workshop.participants} participants`}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <DollarSign className="h-5 w-5 mr-3 text-primary mt-0.5" />
                      <div>
                        <h3 className="font-medium">Price</h3>
                        <p className="text-muted-foreground">
                          {workshop.price === 0 ? "Free" : `${workshop.price} BDT`}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Instructor</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col items-center text-center mb-4">
                    <Avatar className="h-24 w-24 mb-4">
                      <AvatarImage src={workshop.instructor.image} alt={workshop.instructor.name} />
                      <AvatarFallback>
                        {workshop.instructor.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <h3 className="font-bold text-lg">{workshop.instructor.name}</h3>
                    <p className="text-sm text-muted-foreground">{workshop.instructor.designation}</p>
                    <p className="text-sm text-muted-foreground">{workshop.instructor.department}</p>
                  </div>
                  <p className="text-sm">{workshop.instructor.bio}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Confirmation Dialog */}
      <Dialog open={isConfirmationDialogOpen} onOpenChange={setIsConfirmationDialogOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Booking Confirmed!</DialogTitle>
            <DialogDescription>Your booking for "{workshop.title}" has been confirmed.</DialogDescription>
          </DialogHeader>

          <div className="py-6 flex flex-col items-center">
            <div className="border p-6 rounded-lg bg-muted/30 mb-4 text-center">
              <QrCode className="h-40 w-40 mx-auto mb-4" />
              <p className="text-lg font-bold mb-1">Booking ID: {bookingId}</p>
              <p className="text-sm text-muted-foreground">
                Please show this QR code at the workshop registration desk
              </p>
            </div>

            <div className="space-y-2 w-full">
              <div className="flex justify-between">
                <span className="text-sm font-medium">Workshop:</span>
                <span className="text-sm">{workshop.title}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm font-medium">Date:</span>
                <span className="text-sm">{formatDate(workshop.date)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm font-medium">Time:</span>
                <span className="text-sm">{workshop.time}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm font-medium">Location:</span>
                <span className="text-sm">{workshop.location}</span>
              </div>
              {workshop.price > 0 && (
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Payment Method:</span>
                  <span className="text-sm">{paymentMethod === "byHand" ? "By Hand Payment" : "Online Payment"}</span>
                </div>
              )}
            </div>
          </div>

          <DialogFooter className="flex flex-col sm:flex-row gap-2">
            <Button
              variant="outline"
              className="sm:flex-1"
              onClick={() => {
                setIsConfirmationDialogOpen(false)
                router.push("/user/achievements")
              }}
            >
              View My Bookings
            </Button>
            <Button
              className="sm:flex-1"
              onClick={() => {
                setIsConfirmationDialogOpen(false)
              }}
            >
              Done
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

