"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight, Calendar, Users } from "lucide-react"
import Link from "next/link"

// Mock data for workshops
const workshops = [
  {
    id: 1,
    title: "Introduction to IoT",
    date: "2023-06-15",
    instructor: "Dr. Aminul Islam",
    participants: 30,
    image: "/placeholder.svg?height=200&width=350",
    description: "Learn the basics of Internet of Things and how to build your first IoT project.",
    status: "upcoming",
  },
  {
    id: 2,
    title: "PCB Design Workshop",
    date: "2023-06-22",
    instructor: "Md. Rafiqul Islam",
    participants: 25,
    image: "/placeholder.svg?height=200&width=350",
    description: "Hands-on workshop on PCB design using industry-standard tools.",
    status: "upcoming",
  },
  {
    id: 3,
    title: "Machine Learning Fundamentals",
    date: "2023-05-10",
    instructor: "Dr. Fatema Khatun",
    participants: 40,
    image: "/placeholder.svg?height=200&width=350",
    description: "Introduction to machine learning concepts and practical applications.",
    status: "past",
  },
  {
    id: 4,
    title: "Embedded Systems Programming",
    date: "2023-04-18",
    instructor: "Prof. Md. Mehedi Islam",
    participants: 35,
    image: "/placeholder.svg?height=200&width=350",
    description: "Programming microcontrollers and embedded systems for real-world applications.",
    status: "past",
  },
  {
    id: 5,
    title: "Wireless Communication Systems",
    date: "2023-03-22",
    instructor: "Dr. Aminul Islam",
    participants: 30,
    image: "/placeholder.svg?height=200&width=350",
    description: "Understanding modern wireless communication technologies and standards.",
    status: "past",
  },
  {
    id: 6,
    title: "Digital Signal Processing",
    date: "2023-02-15",
    instructor: "Md. Kamal Hossain",
    participants: 28,
    image: "/placeholder.svg?height=200&width=350",
    description: "Practical applications of digital signal processing in communications.",
    status: "past",
  },
]

export function WorkshopSection() {
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 3
  const totalPages = Math.ceil(workshops.length / itemsPerPage)

  const currentWorkshops = workshops.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
    }
  }

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" }
    return new Date(dateString).toLocaleDateString("en-US", options)
  }

  return (
    <section className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold">Workshops</h2>
        <Button asChild variant="outline">
          <Link href="/workshops">View All Workshops</Link>
        </Button>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-6">
        {currentWorkshops.map((workshop) => (
          <Card key={workshop.id} className="overflow-hidden">
            <div className="relative h-48">
              <img
                src={workshop.image || "/placeholder.svg"}
                alt={workshop.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-2 right-2">
                <Badge
                  className={
                    workshop.status === "upcoming" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"
                  }
                >
                  {workshop.status === "upcoming" ? "Upcoming" : "Past"}
                </Badge>
              </div>
            </div>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">{workshop.title}</CardTitle>
              <CardDescription>{workshop.description}</CardDescription>
            </CardHeader>
            <CardContent className="pb-2">
              <div className="space-y-2 text-sm">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                  <span>{formatDate(workshop.date)}</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-4 w-4 mr-2 text-muted-foreground" />
                  <span>{workshop.participants} participants</span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild variant="outline" size="sm" className="w-full">
                <Link href={`/workshops/${workshop.id}`}>View Details</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-2">
          <Button variant="outline" size="icon" onClick={prevPage} disabled={currentPage === 1}>
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <span className="text-sm">
            Page {currentPage} of {totalPages}
          </span>
          <Button variant="outline" size="icon" onClick={nextPage} disabled={currentPage === totalPages}>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      )}
    </section>
  )
}

