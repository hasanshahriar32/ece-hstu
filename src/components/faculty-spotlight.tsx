"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

// Mock data for faculty spotlight
const facultySpotlightData = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    title: "Professor",
    department: "Electronics Engineering",
    image: "/placeholder.svg?height=400&width=400",
    quote: "Innovation in electronics is about finding elegant solutions to complex problems.",
    achievement: "IEEE Fellow (2020)",
    researchFocus: "Low-Power VLSI Design",
    publication: "Advanced VLSI Design Techniques for Low-Power Applications",
    publicationYear: 2022,
  },
  {
    id: 4,
    name: "Dr. Robert Kim",
    title: "Professor",
    department: "Power Engineering",
    image: "/placeholder.svg?height=400&width=400",
    quote: "Renewable energy integration is the key to a sustainable future.",
    achievement: "IEEE Power & Energy Society Distinguished Lecturer (2022-2024)",
    researchFocus: "Smart Grid Technologies",
    publication: "Optimal Integration of Renewable Energy Sources in Smart Grids",
    publicationYear: 2023,
  },
  {
    id: 3,
    name: "Dr. Emily Rodriguez",
    title: "Assistant Professor",
    department: "Computer Engineering",
    image: "/placeholder.svg?height=400&width=400",
    quote: "AI will transform how we interact with embedded systems and robotics.",
    achievement: "Google Faculty Research Award (2022)",
    researchFocus: "AI for Robotics",
    publication: "Real-time Object Detection for Autonomous Robots Using Edge Computing",
    publicationYear: 2023,
  },
]

export function FacultySpotlight() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextFaculty = () => {
    setCurrentIndex((currentIndex + 1) % facultySpotlightData.length)
  }

  const prevFaculty = () => {
    setCurrentIndex((currentIndex - 1 + facultySpotlightData.length) % facultySpotlightData.length)
  }

  const currentFaculty = facultySpotlightData[currentIndex]

  return (
    <div className="py-12 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold tracking-tight">Faculty Spotlight</h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
            Meet our distinguished faculty members who are leading innovation and research in various fields.
          </p>
        </div>

        <div className="relative">
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 hidden md:flex"
            onClick={prevFaculty}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex flex-col items-center md:items-start">
                  <Avatar className="h-32 w-32 border">
                    <AvatarImage src={currentFaculty.image} alt={currentFaculty.name} />
                    <AvatarFallback>
                      {currentFaculty.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>

                  <div className="mt-4 text-center md:text-left">
                    <h3 className="text-xl font-bold">{currentFaculty.name}</h3>
                    <p className="text-muted-foreground">
                      {currentFaculty.title}, {currentFaculty.department}
                    </p>
                  </div>

                  <div className="mt-4">
                    <Badge className="mb-2">{currentFaculty.researchFocus}</Badge>
                    <p className="text-sm text-muted-foreground">{currentFaculty.achievement}</p>
                  </div>

                  <div className="mt-4 flex space-x-2">
                    <Link href={`/faculty/${currentFaculty.id}`}>
                      <Button variant="outline" size="sm">
                        View Profile
                      </Button>
                    </Link>
                  </div>
                </div>

                <div className="md:col-span-2 space-y-4">
                  <div className="bg-muted p-4 rounded-md italic">"{currentFaculty.quote}"</div>

                  <div>
                    <h4 className="font-medium">Latest Publication</h4>
                    <p className="text-sm mt-1">
                      {currentFaculty.publication} ({currentFaculty.publicationYear})
                    </p>
                    <Link href="/faculty/publications" className="text-sm text-primary flex items-center mt-2">
                      View Publication <ExternalLink className="ml-1 h-3 w-3" />
                    </Link>
                  </div>

                  <div className="pt-4 border-t">
                    <h4 className="font-medium mb-2">Research Highlights</h4>
                    <ul className="text-sm space-y-1 list-disc pl-5">
                      <li>Published over 50 research papers in top-tier journals and conferences</li>
                      <li>Secured $2.5M in research funding over the past 5 years</li>
                      <li>Mentored 15+ graduate students to successful careers in academia and industry</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Button
            variant="ghost"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 hidden md:flex"
            onClick={nextFaculty}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>

        <div className="flex justify-center mt-4 md:hidden">
          <Button variant="outline" size="sm" onClick={prevFaculty} className="mr-2">
            <ChevronLeft className="h-4 w-4 mr-1" /> Previous
          </Button>
          <Button variant="outline" size="sm" onClick={nextFaculty}>
            Next <ChevronRight className="h-4 w-4 ml-1" />
          </Button>
        </div>

        <div className="flex justify-center mt-8">
          <Link href="/faculty">
            <Button>View All Faculty</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

