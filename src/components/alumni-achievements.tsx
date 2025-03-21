"use client"

import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Trophy, Award, BookOpen, Briefcase, Calendar, ChevronLeft, ChevronRight } from "lucide-react"

// Mock data for alumni achievements
const achievements = [
  {
    id: 1,
    name: "Dr. Aminul Islam",
    batch: "2010",
    image: "/placeholder.svg?height=200&width=200",
    achievement: "Research Excellence Award",
    organization: "Google AI",
    year: "2022",
    description:
      "Recognized for groundbreaking research in machine learning algorithms that improved computational efficiency by 40%.",
    category: "research",
  },
  {
    id: 2,
    name: "Fatema Khatun",
    batch: "2012",
    image: "/placeholder.svg?height=200&width=200",
    achievement: "Women in Tech Leadership Award",
    organization: "Microsoft",
    year: "2022",
    description:
      "Honored for exceptional leadership in promoting diversity and inclusion in the tech industry while leading critical cloud infrastructure projects.",
    category: "leadership",
  },
  {
    id: 3,
    name: "Md. Rafiqul Islam",
    batch: "2015",
    image: "/placeholder.svg?height=200&width=200",
    achievement: "Forbes 30 Under 30 Asia",
    organization: "Forbes",
    year: "2020",
    description:
      "Recognized as one of the top young entrepreneurs in Asia for founding TechBangla, which has revolutionized the tech ecosystem in Bangladesh.",
    category: "entrepreneurship",
  },
  {
    id: 4,
    name: "Nusrat Jahan",
    batch: "2016",
    image: "/placeholder.svg?height=200&width=200",
    achievement: "Innovation Patent",
    organization: "US Patent Office",
    year: "2021",
    description:
      "Granted patent for innovative mobile hardware design that improved battery efficiency by 30% while reducing heat generation.",
    category: "innovation",
  },
  {
    id: 5,
    name: "Md. Kamal Hossain",
    batch: "2018",
    image: "/placeholder.svg?height=200&width=200",
    achievement: "Best Master's Thesis Award",
    organization: "KTH Royal Institute of Technology",
    year: "2020",
    description:
      "Awarded for outstanding research in recommendation algorithms that significantly improved user engagement metrics.",
    category: "academic",
  },
  {
    id: 6,
    name: "Sabrina Akter",
    batch: "2019",
    image: "/placeholder.svg?height=200&width=200",
    achievement: "Samsung Innovation Award",
    organization: "Samsung Electronics",
    year: "2022",
    description:
      "Recognized for developing a breakthrough IoT protocol that enhanced device communication efficiency and security.",
    category: "innovation",
  },
  {
    id: 7,
    name: "Mohammad Ali",
    batch: "2014",
    image: "/placeholder.svg?height=200&width=200",
    achievement: "Outstanding Teaching Award",
    organization: "University of Dhaka",
    year: "2023",
    description: "Recognized for exceptional teaching methods and student mentorship in the field of electronics.",
    category: "academic",
  },
  {
    id: 8,
    name: "Tahmina Rahman",
    batch: "2013",
    image: "/placeholder.svg?height=200&width=200",
    achievement: "Best Research Paper",
    organization: "IEEE International Conference",
    year: "2022",
    description: "Awarded for groundbreaking research on energy-efficient wireless communication protocols.",
    category: "research",
  },
  {
    id: 9,
    name: "Imran Khan",
    batch: "2017",
    image: "/placeholder.svg?height=200&width=200",
    achievement: "Startup of the Year",
    organization: "Bangladesh Startup Awards",
    year: "2023",
    description: "Recognized for founding an innovative AgriTech startup that helps farmers optimize crop yields.",
    category: "entrepreneurship",
  },
  {
    id: 10,
    name: "Farzana Akter",
    batch: "2015",
    image: "/placeholder.svg?height=200&width=200",
    achievement: "Technical Leadership Award",
    organization: "Women in Tech Bangladesh",
    year: "2023",
    description: "Honored for technical leadership and mentorship of women in the technology sector.",
    category: "leadership",
  },
]

export function AlumniAchievements() {
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 4

  const totalPages = Math.ceil(achievements.length / itemsPerPage)
  const currentAchievements = achievements.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)

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

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "research":
        return <BookOpen className="h-5 w-5 text-blue-500" />
      case "leadership":
        return <Award className="h-5 w-5 text-purple-500" />
      case "entrepreneurship":
        return <Briefcase className="h-5 w-5 text-green-500" />
      case "innovation":
        return <Trophy className="h-5 w-5 text-amber-500" />
      case "academic":
        return <BookOpen className="h-5 w-5 text-red-500" />
      default:
        return <Award className="h-5 w-5 text-blue-500" />
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "research":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
      case "leadership":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300"
      case "entrepreneurship":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
      case "innovation":
        return "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300"
      case "academic":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300"
    }
  }

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {currentAchievements.map((achievement) => (
          <Card key={achievement.id}>
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={achievement.image} alt={achievement.name} />
                  <AvatarFallback>
                    {achievement.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold">{achievement.name}</h3>
                      <p className="text-sm text-muted-foreground">Batch {achievement.batch}</p>
                    </div>
                    <Badge className={getCategoryColor(achievement.category)}>
                      {achievement.category.charAt(0).toUpperCase() + achievement.category.slice(1)}
                    </Badge>
                  </div>

                  <div className="mt-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Trophy className="h-4 w-4 text-primary" />
                      <h4 className="font-medium">{achievement.achievement}</h4>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground mb-2">
                      <Briefcase className="h-3 w-3 mr-1" />
                      <span>{achievement.organization}</span>
                      <span className="mx-2">•</span>
                      <Calendar className="h-3 w-3 mr-1" />
                      <span>{achievement.year}</span>
                    </div>
                    <p className="text-sm">{achievement.description}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-2 mt-8">
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

      <div className="mt-8 text-center">
        <p className="text-muted-foreground">
          These are just a few highlights of our alumni achievements. If you're an alumnus with an achievement to share,
          please{" "}
          <a href="/contact" className="text-primary hover:underline">
            contact us
          </a>
          .
        </p>
      </div>
    </div>
  )
}

