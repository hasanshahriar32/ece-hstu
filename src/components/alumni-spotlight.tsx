"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, Award, Briefcase, ExternalLink, GraduationCap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

// Mock data for alumni spotlight
const featuredAlumni = [
  {
    id: "1",
    name: "Dr. Sarah Johnson",
    avatar: "/placeholder.svg?height=100&width=100",
    graduation: "2015",
    title: "Senior Research Scientist",
    company: "Tesla AI",
    achievement: "Published groundbreaking research on renewable energy optimization",
    quote: "The ECE Club provided me with the foundation to pursue my passion for sustainable technology.",
    tags: ["AI", "Renewable Energy", "Research"],
  },
  {
    id: "2",
    name: "Michael Chen",
    avatar: "/placeholder.svg?height=100&width=100",
    graduation: "2018",
    title: "Lead Software Engineer",
    company: "Google",
    achievement: "Developed key components of Google's machine learning infrastructure",
    quote: "My journey in tech started with the projects I built as part of the ECE Club.",
    tags: ["Software Engineering", "Machine Learning", "Cloud"],
  },
  {
    id: "3",
    name: "Priya Patel",
    avatar: "/placeholder.svg?height=100&width=100",
    graduation: "2016",
    title: "Founder & CEO",
    company: "InnovateTech Solutions",
    achievement: "Built a startup valued at $50M focused on IoT solutions",
    quote: "The leadership skills I gained at the ECE Club were instrumental in my entrepreneurial journey.",
    tags: ["Entrepreneurship", "IoT", "Leadership"],
  },
]

export function AlumniSpotlight() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const currentAlumni = featuredAlumni[currentIndex]

  const nextAlumni = () => {
    setCurrentIndex((prev) => (prev + 1) % featuredAlumni.length)
  }

  const prevAlumni = () => {
    setCurrentIndex((prev) => (prev - 1 + featuredAlumni.length) % featuredAlumni.length)
  }

  return (
    <section className="py-12 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Alumni Spotlight</h2>
            <p className="text-muted-foreground mt-2">Celebrating the achievements of our distinguished alumni</p>
          </div>
          <div className="flex items-center mt-4 md:mt-0">
            <Button variant="outline" size="sm" onClick={prevAlumni} className="mr-2">
              Previous
            </Button>
            <Button variant="outline" size="sm" onClick={nextAlumni}>
              Next
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main spotlight card */}
          <Card className="col-span-1 lg:col-span-2 overflow-hidden">
            <CardHeader className="pb-0">
              <div className="flex justify-between items-start">
                <div className="flex items-center">
                  <Avatar className="h-12 w-12 mr-4">
                    <AvatarImage src={currentAlumni.avatar} alt={currentAlumni.name} />
                    <AvatarFallback>
                      {currentAlumni.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle>{currentAlumni.name}</CardTitle>
                    <CardDescription>
                      Class of {currentAlumni.graduation} • {currentAlumni.title} at {currentAlumni.company}
                    </CardDescription>
                  </div>
                </div>
                <Link href={`/alumni?highlight=${currentAlumni.id}`}>
                  <Button variant="ghost" size="icon">
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="mb-6">
                <div className="flex items-center mb-2">
                  <Award className="h-5 w-5 mr-2 text-primary" />
                  <h3 className="font-semibold">Key Achievement</h3>
                </div>
                <p>{currentAlumni.achievement}</p>
              </div>

              <blockquote className="border-l-4 border-primary pl-4 italic my-4">"{currentAlumni.quote}"</blockquote>

              <div className="flex flex-wrap gap-2 mt-4">
                {currentAlumni.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link href={`/alumni/profile/${currentAlumni.id}`}>
                  View Full Profile <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>

          {/* Alumni stats and quick links */}
          <Card>
            <CardHeader>
              <CardTitle>Alumni Network</CardTitle>
              <CardDescription>Our growing community of professionals</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center">
                  <GraduationCap className="h-5 w-5 mr-3 text-primary" />
                  <div>
                    <p className="text-sm font-medium">500+ Graduates</p>
                    <p className="text-sm text-muted-foreground">Across 15+ countries</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Briefcase className="h-5 w-5 mr-3 text-primary" />
                  <div>
                    <p className="text-sm font-medium">200+ Companies</p>
                    <p className="text-sm text-muted-foreground">Including Fortune 500</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Award className="h-5 w-5 mr-3 text-primary" />
                  <div>
                    <p className="text-sm font-medium">50+ Industry Awards</p>
                    <p className="text-sm text-muted-foreground">Recognizing excellence</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t">
                <h4 className="text-sm font-semibold mb-3">Quick Links</h4>
                <div className="space-y-2">
                  <Button variant="outline" asChild className="w-full justify-start">
                    <Link href="/alumni">
                      <GraduationCap className="mr-2 h-4 w-4" /> Alumni Directory
                    </Link>
                  </Button>
                  <Button variant="outline" asChild className="w-full justify-start">
                    <Link href="/alumni/events">
                      <Briefcase className="mr-2 h-4 w-4" /> Alumni Events
                    </Link>
                  </Button>
                  <Button variant="outline" asChild className="w-full justify-start">
                    <Link href="/alumni/dashboard">
                      <Award className="mr-2 h-4 w-4" /> Join Alumni Network
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

