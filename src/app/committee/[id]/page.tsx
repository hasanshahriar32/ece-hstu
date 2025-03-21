"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronLeft, Mail, Phone, MapPin, Calendar, GraduationCap, Briefcase, Award } from "lucide-react"

// Mock data for committee members
const committeeMembers = {
  "prof-md-mehedi-islam": {
    id: "prof-md-mehedi-islam",
    name: "Prof. Md. Mehedi Islam",
    role: "Chairman",
    department: "Department of ECE",
    image: "/placeholder.svg?height=400&width=400",
    email: "mehedi@hstu.ac.bd",
    phone: "01716239606",
    office: "Room 101, ECE Building",
    officeHours: "Sunday, Tuesday, Thursday: 2:00 PM - 4:00 PM",
    bio: `Prof. Md. Mehedi Islam is the Chairman of the Department of Electronics and Communication Engineering at Hajee Mohammad Danesh Science and Technology University. He has over 15 years of teaching and research experience in the field of electronics and communication engineering.

    He completed his B.Sc. and M.Sc. in Electrical and Electronic Engineering from Bangladesh University of Engineering and Technology (BUET) and received his Ph.D. in Electronic Engineering from Tokyo Institute of Technology, Japan.

    His research interests include wireless communications, signal processing, embedded systems, and IoT applications. He has published numerous papers in reputed international journals and conferences and has supervised many undergraduate and graduate research projects.

    Prof. Islam is actively involved in curriculum development and academic administration. He is committed to enhancing the quality of education and research in the department and fostering industry-academia collaboration.`,
    education: [
      {
        degree: "Ph.D. in Electronic Engineering",
        institution: "Tokyo Institute of Technology, Japan",
        year: "2010",
      },
      {
        degree: "M.Sc. in Electrical and Electronic Engineering",
        institution: "Bangladesh University of Engineering and Technology (BUET)",
        year: "2005",
      },
      {
        degree: "B.Sc. in Electrical and Electronic Engineering",
        institution: "Bangladesh University of Engineering and Technology (BUET)",
        year: "2003",
      },
    ],
    experience: [
      {
        position: "Chairman",
        institution: "Department of ECE, HSTU",
        duration: "2022 - Present",
      },
      {
        position: "Professor",
        institution: "Department of ECE, HSTU",
        duration: "2018 - Present",
      },
      {
        position: "Associate Professor",
        institution: "Department of ECE, HSTU",
        duration: "2014 - 2018",
      },
      {
        position: "Assistant Professor",
        institution: "Department of ECE, HSTU",
        duration: "2010 - 2014",
      },
      {
        position: "Lecturer",
        institution: "Department of ECE, HSTU",
        duration: "2005 - 2007",
      },
    ],
    publications: [
      {
        title: "Performance Analysis of 5G Wireless Networks in Urban Environments",
        journal: "IEEE Transactions on Wireless Communications",
        year: "2021",
      },
      {
        title: "IoT-Based Smart Agriculture Monitoring System",
        journal: "Journal of Agricultural Engineering",
        year: "2020",
      },
      {
        title: "Energy-Efficient Routing Protocols for Wireless Sensor Networks",
        journal: "International Journal of Communication Systems",
        year: "2018",
      },
      {
        title: "FPGA Implementation of Digital Signal Processing Algorithms",
        journal: "IEEE Transactions on Circuits and Systems",
        year: "2016",
      },
      {
        title: "Adaptive Modulation Techniques for Cognitive Radio Networks",
        journal: "Wireless Personal Communications",
        year: "2015",
      },
    ],
    awards: [
      {
        title: "Best Researcher Award",
        institution: "HSTU",
        year: "2020",
      },
      {
        title: "Outstanding Faculty Award",
        institution: "Faculty of Engineering, HSTU",
        year: "2018",
      },
      {
        title: "JSPS Fellowship",
        institution: "Japan Society for the Promotion of Science",
        year: "2012",
      },
    ],
    courses: [
      "ECE 301: Digital Signal Processing",
      "ECE 405: Wireless Communication",
      "ECE 501: Advanced Communication Systems",
      "ECE 503: Research Methodology",
    ],
    projects: [
      {
        title: "Smart Agriculture Monitoring System",
        description: "Development of IoT-based system for monitoring agricultural parameters",
        duration: "2020 - 2022",
        funding: "Ministry of Science and Technology",
      },
      {
        title: "5G Network Optimization",
        description: "Research on optimization techniques for 5G wireless networks",
        duration: "2018 - 2020",
        funding: "University Research Fund",
      },
      {
        title: "Energy Harvesting for Wireless Sensor Networks",
        description: "Development of energy harvesting techniques for sustainable WSNs",
        duration: "2016 - 2018",
        funding: "IEEE Communications Society",
      },
    ],
  },
  "dr-aminul-islam": {
    id: "dr-aminul-islam",
    name: "Dr. Aminul Islam",
    role: "Vice Chairman",
    department: "Department of ECE",
    image: "/placeholder.svg?height=400&width=400",
    email: "aminul@hstu.ac.bd",
    phone: "01712345678",
    office: "Room 203, ECE Building",
    officeHours: "Monday, Wednesday: 10:00 AM - 12:00 PM",
    bio: `Dr. Aminul Islam is the Vice Chairman of the Department of Electronics and Communication Engineering at HSTU. He specializes in embedded systems, IoT, and wireless communications.

    He received his Ph.D. in Electronics Engineering from Korea Advanced Institute of Science and Technology (KAIST) and has been with HSTU since 2012. His research focuses on developing innovative solutions for smart agriculture, healthcare, and environmental monitoring using IoT and embedded systems.

    Dr. Islam is passionate about teaching and mentoring students. He has supervised numerous undergraduate and graduate projects and has been instrumental in establishing the department's IoT research lab.

    He actively collaborates with industry partners and other academic institutions to promote research and innovation in the field of electronics and communication engineering.`,
    education: [
      {
        degree: "Ph.D. in Electronics Engineering",
        institution: "Korea Advanced Institute of Science and Technology (KAIST)",
        year: "2012",
      },
      {
        degree: "M.Sc. in Electronics Engineering",
        institution: "Korea Advanced Institute of Science and Technology (KAIST)",
        year: "2009",
      },
      {
        degree: "B.Sc. in Electrical and Electronic Engineering",
        institution: "Khulna University of Engineering and Technology (KUET)",
        year: "2007",
      },
    ],
    experience: [
      {
        position: "Vice Chairman",
        institution: "Department of ECE, HSTU",
        duration: "2022 - Present",
      },
      {
        position: "Associate Professor",
        institution: "Department of ECE, HSTU",
        duration: "2018 - Present",
      },
      {
        position: "Assistant Professor",
        institution: "Department of ECE, HSTU",
        duration: "2012 - 2018",
      },
      {
        position: "Research Assistant",
        institution: "KAIST, South Korea",
        duration: "2009 - 2012",
      },
    ],
    publications: [
      {
        title: "IoT-Based Smart Healthcare Monitoring System",
        journal: "IEEE Internet of Things Journal",
        year: "2022",
      },
      {
        title: "Energy-Efficient MAC Protocol for Wireless Sensor Networks",
        journal: "IEEE Sensors Journal",
        year: "2020",
      },
      {
        title: "Smart Agriculture: A Review of IoT Applications",
        journal: "Journal of Agricultural Engineering",
        year: "2019",
      },
      {
        title: "Low-Power Design Techniques for Embedded Systems",
        journal: "IEEE Transactions on VLSI Systems",
        year: "2017",
      },
    ],
    awards: [
      {
        title: "Best Paper Award",
        institution: "IEEE International Conference on IoT",
        year: "2021",
      },
      {
        title: "Research Excellence Award",
        institution: "HSTU",
        year: "2019",
      },
      {
        title: "Korean Government Scholarship",
        institution: "National Institute for International Education, Korea",
        year: "2007-2012",
      },
    ],
    courses: [
      "ECE 302: Embedded Systems",
      "ECE 403: Internet of Things",
      "ECE 305: Microprocessors and Microcontrollers",
      "ECE 502: Advanced Embedded Systems",
    ],
    projects: [
      {
        title: "IoT-Based Healthcare Monitoring System",
        description: "Development of a remote patient monitoring system using IoT",
        duration: "2021 - Present",
        funding: "Ministry of Health",
      },
      {
        title: "Smart Irrigation System",
        description: "Automated irrigation system based on soil moisture and weather conditions",
        duration: "2019 - 2021",
        funding: "Ministry of Agriculture",
      },
      {
        title: "Low-Power Wireless Sensor Network",
        description: "Development of energy-efficient protocols for WSNs",
        duration: "2017 - 2019",
        funding: "University Research Fund",
      },
    ],
  },
}

export default function MemberDetailPage({ params }: { params: { id: string } }) {
  // Get member data based on ID
  const member = committeeMembers[params.id]

  if (!member) {
    return (
      <div className="container mx-auto py-16 px-4 text-center">
        <h1 className="text-2xl font-bold mb-4">Member not found</h1>
        <p className="text-muted-foreground mb-8">
          The committee member you are looking for does not exist or has been removed.
        </p>
        <Button asChild>
          <Link href="/committee">Back to Committee</Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <Button variant="outline" asChild className="mb-6">
          <Link href="/committee">
            <ChevronLeft className="h-4 w-4 mr-2" />
            Back to Committee
          </Link>
        </Button>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-1">
            <div className="sticky top-24 space-y-6">
              <div className="flex flex-col items-center text-center">
                <Avatar className="h-40 w-40 mb-4">
                  <AvatarImage src={member.image} alt={member.name} />
                  <AvatarFallback>
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <h1 className="text-2xl font-bold">{member.name}</h1>
                <Badge className="mt-2 mb-1">{member.role}</Badge>
                <p className="text-sm text-muted-foreground">{member.department}</p>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start">
                    <Mail className="h-5 w-5 mr-3 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <a href={`mailto:${member.email}`} className="text-sm text-blue-600 hover:underline">
                        {member.email}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Phone className="h-5 w-5 mr-3 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-medium">Phone</h3>
                      <a href={`tel:${member.phone}`} className="text-sm">
                        {member.phone}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 mr-3 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-medium">Office</h3>
                      <p className="text-sm">{member.office}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Calendar className="h-5 w-5 mr-3 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-medium">Office Hours</h3>
                      <p className="text-sm">{member.officeHours}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="md:col-span-3 space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Biography</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="whitespace-pre-line">{member.bio}</p>
              </CardContent>
            </Card>

            <Tabs defaultValue="education" className="space-y-6">
              <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full">
                <TabsTrigger value="education">Education</TabsTrigger>
                <TabsTrigger value="experience">Experience</TabsTrigger>
                <TabsTrigger value="publications">Publications</TabsTrigger>
                <TabsTrigger value="teaching">Teaching & Research</TabsTrigger>
              </TabsList>

              <TabsContent value="education" className="space-y-6">
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <GraduationCap className="h-5 w-5 text-primary" />
                      <CardTitle>Education</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {member.education.map((edu, index) => (
                        <div key={index} className="border-l-2 border-primary pl-4 pb-2">
                          <h3 className="font-semibold text-lg">{edu.degree}</h3>
                          <p className="text-muted-foreground">{edu.institution}</p>
                          <p className="text-sm">{edu.year}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {member.awards && (
                  <Card>
                    <CardHeader>
                      <div className="flex items-center gap-2">
                        <Award className="h-5 w-5 text-primary" />
                        <CardTitle>Awards & Honors</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {member.awards.map((award, index) => (
                          <div key={index} className="flex justify-between items-start border-b pb-3 last:border-0">
                            <div>
                              <h3 className="font-medium">{award.title}</h3>
                              <p className="text-sm text-muted-foreground">{award.institution}</p>
                            </div>
                            <Badge variant="outline">{award.year}</Badge>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )}
              </TabsContent>

              <TabsContent value="experience" className="space-y-6">
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <Briefcase className="h-5 w-5 text-primary" />
                      <CardTitle>Professional Experience</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {member.experience.map((exp, index) => (
                        <div key={index} className="border-l-2 border-primary pl-4 pb-2">
                          <h3 className="font-semibold text-lg">{exp.position}</h3>
                          <p className="text-muted-foreground">{exp.institution}</p>
                          <p className="text-sm">{exp.duration}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="publications" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Publications</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {member.publications.map((pub, index) => (
                        <div key={index} className="border-b pb-3 last:border-0">
                          <h3 className="font-medium">{pub.title}</h3>
                          <p className="text-sm text-muted-foreground">{pub.journal}</p>
                          <p className="text-sm">{pub.year}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="teaching" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Courses Taught</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc list-inside space-y-2">
                      {member.courses.map((course, index) => (
                        <li key={index}>{course}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Research Projects</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {member.projects.map((project, index) => (
                        <div key={index} className="border-b pb-4 last:border-0">
                          <h3 className="font-semibold">{project.title}</h3>
                          <p className="text-sm mb-2">{project.description}</p>
                          <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm">
                            <span className="text-muted-foreground">Duration: {project.duration}</span>
                            <span className="text-muted-foreground">Funding: {project.funding}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}

