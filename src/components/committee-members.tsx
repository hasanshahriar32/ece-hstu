"use client"

import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Mail, Phone } from "lucide-react"
import Link from "next/link"

// Mock data for committee members
const committeeMembers = [
  {
    id: 1,
    name: "Prof. Md. Mehedi Islam",
    role: "Chairman",
    department: "Department of ECE",
    image: "/placeholder.svg?height=200&width=200",
    email: "mehedi@hstu.ac.bd",
    phone: "01716239606",
    featured: true,
  },
  {
    id: 2,
    name: "Dr. Aminul Islam",
    role: "Vice Chairman",
    department: "Department of ECE",
    image: "/placeholder.svg?height=200&width=200",
    email: "aminul@hstu.ac.bd",
    phone: "01712345678",
    featured: true,
  },
  {
    id: 3,
    name: "Dr. Fatema Khatun",
    role: "General Secretary",
    department: "Department of ECE",
    image: "/placeholder.svg?height=200&width=200",
    email: "fatema@hstu.ac.bd",
    phone: "01723456789",
    featured: true,
  },
  {
    id: 4,
    name: "Md. Rafiqul Islam",
    role: "Treasurer",
    department: "Department of ECE",
    image: "/placeholder.svg?height=200&width=200",
    email: "rafiq@hstu.ac.bd",
    phone: "01734567890",
    featured: false,
  },
  {
    id: 5,
    name: "Nusrat Jahan",
    role: "Event Coordinator",
    department: "Department of ECE",
    image: "/placeholder.svg?height=200&width=200",
    email: "nusrat@hstu.ac.bd",
    phone: "01745678901",
    featured: false,
  },
  {
    id: 6,
    name: "Md. Kamal Hossain",
    role: "Technical Lead",
    department: "Department of ECE",
    image: "/placeholder.svg?height=200&width=200",
    email: "kamal@hstu.ac.bd",
    phone: "01756789012",
    featured: false,
  },
  {
    id: 7,
    name: "Sabrina Akter",
    role: "Media Coordinator",
    department: "Department of ECE",
    image: "/placeholder.svg?height=200&width=200",
    email: "sabrina@hstu.ac.bd",
    phone: "01767890123",
    featured: false,
  },
  {
    id: 8,
    name: "Md. Rakibul Hasan",
    role: "Student Representative",
    department: "Department of ECE",
    image: "/placeholder.svg?height=200&width=200",
    email: "rakib@hstu.ac.bd",
    phone: "01778901234",
    featured: false,
  },
]

export function CommitteeMembers() {
  const [currentPage, setCurrentPage] = useState(1)
  const featuredMembers = committeeMembers.filter((member) => member.featured)
  const regularMembers = committeeMembers.filter((member) => !member.featured)

  const itemsPerPage = 4
  const totalPages = Math.ceil(regularMembers.length / itemsPerPage)

  const currentMembers = regularMembers.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)

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

  return (
    <section className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-12">
        <h2 className="text-3xl font-bold">Committee Members</h2>
        <Button asChild variant="outline">
          <Link href="/committee">View All Members</Link>
        </Button>
      </div>

      {/* Featured Members */}
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        {featuredMembers.map((member) => (
          <Card key={member.id} className="border-blue-200 dark:border-blue-800">
            <CardHeader className="text-center pb-2">
              <Avatar className="h-24 w-24 mx-auto mb-4">
                <AvatarImage src={member.image} alt={member.name} />
                <AvatarFallback>
                  {member.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <CardTitle>{member.name}</CardTitle>
              <CardDescription className="font-medium text-primary">{member.role}</CardDescription>
              <CardDescription>{member.department}</CardDescription>
            </CardHeader>
            <CardFooter className="flex justify-center gap-4 pt-2">
              <Button variant="ghost" size="icon" asChild>
                <a href={`mailto:${member.email}`} aria-label={`Email ${member.name}`}>
                  <Mail className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href={`tel:${member.phone}`} aria-label={`Call ${member.name}`}>
                  <Phone className="h-4 w-4" />
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* Regular Members */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {currentMembers.map((member) => (
          <Card key={member.id} className="overflow-hidden">
            <CardContent className="p-4 text-center">
              <Avatar className="h-16 w-16 mx-auto mb-2">
                <AvatarImage src={member.image} alt={member.name} />
                <AvatarFallback>
                  {member.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <h3 className="font-medium text-sm">{member.name}</h3>
              <p className="text-xs text-primary">{member.role}</p>
            </CardContent>
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

