import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, ChevronRight } from "lucide-react"

// Mock data for committee members
const committeeMembers = [
  {
    id: "prof-md-mehedi-islam",
    name: "Prof. Md. Mehedi Islam",
    role: "Chairman",
    department: "Department of ECE",
    image: "/placeholder.svg?height=400&width=400",
    email: "mehedi@hstu.ac.bd",
    phone: "01716239606",
  },
  {
    id: "dr-aminul-islam",
    name: "Dr. Aminul Islam",
    role: "Vice Chairman",
    department: "Department of ECE",
    image: "/placeholder.svg?height=400&width=400",
    email: "aminul@hstu.ac.bd",
    phone: "01712345678",
  },
  {
    id: "md-kamal-hossain",
    name: "Md. Kamal Hossain",
    role: "General Secretary",
    department: "ECE Batch 2018",
    image: "/placeholder.svg?height=400&width=400",
    email: "kamal@hstu.ac.bd",
    phone: "01756789012",
  },
  {
    id: "nusrat-jahan",
    name: "Nusrat Jahan",
    role: "Treasurer",
    department: "ECE Batch 2019",
    image: "/placeholder.svg?height=400&width=400",
    email: "nusrat@hstu.ac.bd",
    phone: "01745678901",
  },
  {
    id: "tanvir-ahmed",
    name: "Tanvir Ahmed",
    role: "Event Coordinator",
    department: "ECE Batch 2020",
    image: "/placeholder.svg?height=400&width=400",
    email: "tanvir@hstu.ac.bd",
    phone: "01767890123",
  },
  {
    id: "fatema-khatun",
    name: "Fatema Khatun",
    role: "Media & Communications",
    department: "ECE Batch 2020",
    image: "/placeholder.svg?height=400&width=400",
    email: "fatema@hstu.ac.bd",
    phone: "01778901234",
  },
  {
    id: "arif-hossain",
    name: "Arif Hossain",
    role: "Technical Lead",
    department: "ECE Batch 2021",
    image: "/placeholder.svg?height=400&width=400",
    email: "arif@hstu.ac.bd",
    phone: "01789012345",
  },
  {
    id: "mim-akter",
    name: "Mim Akter",
    role: "Creative Director",
    department: "ECE Batch 2021",
    image: "/placeholder.svg?height=400&width=400",
    email: "mim@hstu.ac.bd",
    phone: "01790123456",
  },
]

export default function CommitteePage() {
  // Group members by role category
  const executiveMembers = committeeMembers.filter((member) =>
    ["Chairman", "Vice Chairman", "General Secretary", "Treasurer"].includes(member.role),
  )

  const coordinators = committeeMembers.filter(
    (member) => !["Chairman", "Vice Chairman", "General Secretary", "Treasurer"].includes(member.role),
  )

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Our Committee</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Meet the dedicated team behind the ECE Club who work tirelessly to organize events, workshops, and
            activities for our members.
          </p>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Executive Committee</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {executiveMembers.map((member) => (
              <Link href={`/committee/${member.id}`} key={member.id} className="block">
                <Card className="h-full transition-all duration-300 hover:shadow-md">
                  <div className="p-6 flex flex-col items-center text-center">
                    <Avatar className="h-24 w-24 mb-4">
                      <AvatarImage src={member.image} alt={member.name} />
                      <AvatarFallback>
                        {member.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <h3 className="text-xl font-semibold">{member.name}</h3>
                    <Badge className="mt-2 mb-1">{member.role}</Badge>
                    <p className="text-sm text-muted-foreground mb-4">{member.department}</p>
                    <div className="space-y-2 w-full">
                      <div className="flex items-center justify-center text-sm">
                        <Mail className="h-4 w-4 mr-2 text-muted-foreground" />
                        <span className="text-muted-foreground truncate">{member.email}</span>
                      </div>
                      <div className="flex items-center justify-center text-sm">
                        <Phone className="h-4 w-4 mr-2 text-muted-foreground" />
                        <span className="text-muted-foreground">{member.phone}</span>
                      </div>
                    </div>
                  </div>
                  <CardFooter className="border-t p-4 flex justify-center">
                    <Button variant="ghost" size="sm" className="w-full">
                      View Profile
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-8">Coordinators</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coordinators.map((member) => (
              <Link href={`/committee/${member.id}`} key={member.id} className="block">
                <Card className="h-full transition-all duration-300 hover:shadow-md">
                  <div className="p-6 flex flex-col items-center text-center">
                    <Avatar className="h-24 w-24 mb-4">
                      <AvatarImage src={member.image} alt={member.name} />
                      <AvatarFallback>
                        {member.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <h3 className="text-xl font-semibold">{member.name}</h3>
                    <Badge className="mt-2 mb-1">{member.role}</Badge>
                    <p className="text-sm text-muted-foreground mb-4">{member.department}</p>
                    <div className="space-y-2 w-full">
                      <div className="flex items-center justify-center text-sm">
                        <Mail className="h-4 w-4 mr-2 text-muted-foreground" />
                        <span className="text-muted-foreground truncate">{member.email}</span>
                      </div>
                      <div className="flex items-center justify-center text-sm">
                        <Phone className="h-4 w-4 mr-2 text-muted-foreground" />
                        <span className="text-muted-foreground">{member.phone}</span>
                      </div>
                    </div>
                  </div>
                  <CardFooter className="border-t p-4 flex justify-center">
                    <Button variant="ghost" size="sm" className="w-full">
                      View Profile
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

