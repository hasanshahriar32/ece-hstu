import type { Metadata } from "next"
import Link from "next/link"
import { BookOpen, Mail, Phone, MapPin, Briefcase, GraduationCap, FileText, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

// Mock data for faculty members (this would typically come from a database)
const facultyData = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    title: "Professor",
    department: "Electronics Engineering",
    image: "/placeholder.svg?height=400&width=400",
    email: "sarah.johnson@university.edu",
    phone: "+1 (555) 123-4567",
    location: "Engineering Building, Room 305",
    bio: "Dr. Sarah Johnson is a Professor of Electronics Engineering with over 15 years of experience in academia and industry research. She specializes in microelectronics and VLSI design, with a focus on low-power applications for IoT devices. Her research has been published in numerous high-impact journals and she has received multiple grants from national science foundations. Dr. Johnson is passionate about mentoring graduate students and has supervised over 20 PhD candidates throughout her career.",
    researchInterests: ["Microelectronics", "VLSI Design", "Embedded Systems", "IoT"],
    publications: [
      {
        title: "Advanced VLSI Design Techniques for Low-Power Applications",
        journal: "IEEE Transactions on VLSI Systems",
        year: 2022,
        doi: "10.1109/TVLSI.2022.1234567",
        type: "Journal",
        abstract:
          "This paper presents novel techniques for reducing power consumption in VLSI designs for IoT applications. We propose a new architecture that achieves 40% power reduction compared to state-of-the-art designs while maintaining performance.",
      },
      {
        title: "Energy-Efficient IoT Architectures: A Comprehensive Review",
        conference: "International Conference on IoT Technologies",
        year: 2021,
        doi: "10.1109/ICIT.2021.7654321",
        type: "Conference",
        abstract:
          "This review paper examines recent advances in energy-efficient architectures for IoT devices. We analyze over 100 recent publications and identify key trends and promising directions for future research.",
      },
      {
        title: "Thermal Management Techniques for 3D Integrated Circuits",
        journal: "Journal of Electronic Materials",
        year: 2020,
        doi: "10.1007/JEM.2020.9876543",
        type: "Journal",
        abstract:
          "This study investigates novel thermal management techniques for 3D integrated circuits. We propose a hybrid cooling solution that combines microfluidic channels with thermoelectric materials to achieve efficient heat dissipation.",
      },
    ],
    achievements: [
      "IEEE Fellow (2020)",
      "Best Paper Award, International Conference on VLSI Design (2019)",
      "University Research Excellence Award (2018)",
      "National Science Foundation CAREER Award (2015)",
      "Outstanding Teaching Award, College of Engineering (2014)",
    ],
    education: [
      { degree: "Ph.D. in Electrical Engineering", institution: "Stanford University", year: 2008 },
      { degree: "M.S. in Electronics", institution: "MIT", year: 2004 },
      { degree: "B.Tech in Electronics Engineering", institution: "IIT Delhi", year: 2002 },
    ],
    courses: ["Digital Electronics", "VLSI Design", "Embedded Systems", "Advanced Microprocessors"],
    joinedYear: 2010,
    researchAreas: ["Microelectronics", "VLSI", "Embedded Systems"],
    currentProjects: [
      {
        title: "Ultra-Low Power IoT Sensors",
        description: "Developing next-generation IoT sensors that can operate for years on a single battery charge.",
        funding: "National Science Foundation",
        period: "2021-2024",
      },
      {
        title: "3D Integrated Circuit Design",
        description: "Exploring novel architectures for 3D integrated circuits with improved thermal management.",
        funding: "Semiconductor Research Corporation",
        period: "2020-2023",
      },
    ],
    collaborators: [
      "Dr. Michael Chen, University of California",
      "Dr. Emily Rodriguez, MIT",
      "Dr. Robert Kim, Samsung Research",
    ],
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    title: "Associate Professor",
    department: "Communication Engineering",
    image: "/placeholder.svg?height=400&width=400",
    email: "michael.chen@university.edu",
    phone: "+1 (555) 987-6543",
    location: "Engineering Building, Room 210",
    bio: "Dr. Michael Chen specializes in wireless communications and signal processing with a focus on 5G technologies. His research has contributed significantly to the development of advanced algorithms for MIMO systems and beamforming techniques. Dr. Chen has collaborated with major telecommunications companies and has several patents in wireless technology.",
    researchInterests: [
      "Wireless Communications",
      "5G Networks",
      "Signal Processing",
      "Machine Learning for Communications",
    ],
    publications: [
      {
        title: "Machine Learning Approaches for 5G Network Optimization",
        journal: "IEEE Communications Magazine",
        year: 2023,
        doi: "10.1109/MCOM.2023.2345678",
        type: "Journal",
        abstract:
          "This paper explores how machine learning techniques can be applied to optimize 5G network performance. We demonstrate that reinforcement learning algorithms can improve spectrum efficiency by up to 30% compared to traditional approaches.",
      },
      {
        title: "Performance Analysis of MIMO Systems in 5G Networks",
        conference: "IEEE Wireless Communications Conference",
        year: 2022,
        doi: "10.1109/WCC.2022.8765432",
        type: "Conference",
        abstract:
          "We present a comprehensive analysis of MIMO system performance in 5G networks under various channel conditions. Our results show that adaptive beamforming techniques can significantly improve reliability in high-mobility scenarios.",
      },
    ],
    achievements: [
      "NSF CAREER Award (2021)",
      "Young Researcher Award, IEEE Communications Society (2020)",
      "Best Demo Award, ACM MobiCom (2019)",
    ],
    education: [
      { degree: "Ph.D. in Electrical Engineering", institution: "UC Berkeley", year: 2012 },
      { degree: "M.S. in Communications Engineering", institution: "Georgia Tech", year: 2008 },
      { degree: "B.S. in Electrical Engineering", institution: "Tsinghua University", year: 2006 },
    ],
    courses: ["Wireless Communications", "Digital Signal Processing", "Communication Networks", "5G Technologies"],
    joinedYear: 2014,
    researchAreas: ["Communications", "Signal Processing", "Networks"],
    currentProjects: [
      {
        title: "AI-Driven Network Optimization",
        description: "Using artificial intelligence to dynamically optimize wireless network parameters in real-time.",
        funding: "National Science Foundation",
        period: "2022-2025",
      },
      {
        title: "Next-Generation MIMO Systems",
        description: "Developing advanced MIMO techniques for beyond-5G wireless systems.",
        funding: "Industry Consortium",
        period: "2021-2024",
      },
    ],
    collaborators: [
      "Dr. Sarah Johnson, University of Michigan",
      "Dr. James Wilson, Nokia Bell Labs",
      "Dr. Priya Sharma, Stanford University",
    ],
  },
  {
    id: 3,
    name: "Dr. Emily Rodriguez",
    title: "Assistant Professor",
    department: "Computer Engineering",
    image: "/placeholder.svg?height=400&width=400",
    email: "emily.rodriguez@university.edu",
    phone: "+1 (555) 456-7890",
    location: "Computing Center, Room 105",
    bio: "Dr. Emily Rodriguez focuses on artificial intelligence and its applications in embedded systems and robotics. Her pioneering work in real-time object detection has been implemented in several autonomous vehicle systems. Dr. Rodriguez maintains active collaborations with both academic institutions and industry partners.",
    researchInterests: ["Artificial Intelligence", "Robotics", "Computer Vision", "Edge Computing"],
    publications: [
      {
        title: "Real-time Object Detection for Autonomous Robots Using Edge Computing",
        journal: "IEEE Transactions on Robotics",
        year: 2023,
        doi: "10.1109/TRO.2023.3456789",
        type: "Journal",
        abstract:
          "This paper presents a novel approach to real-time object detection for autonomous robots that leverages edge computing. Our method achieves 95% accuracy with a latency of less than 20ms on resource-constrained devices.",
      },
      {
        title: "Energy-Efficient AI Algorithms for Resource-Constrained Devices",
        conference: "International Conference on Machine Learning",
        year: 2022,
        doi: "10.1145/ICML.2022.9876543",
        type: "Conference",
        abstract:
          "We introduce a new family of energy-efficient neural network architectures specifically designed for resource-constrained devices. Our approach reduces energy consumption by 60% while maintaining comparable accuracy to state-of-the-art models.",
      },
    ],
    achievements: [
      "Google Faculty Research Award (2022)",
      "Outstanding Young Faculty Award (2021)",
      "Best Dissertation Award, ACM SIGAI (2019)",
    ],
    education: [
      { degree: "Ph.D. in Computer Science", institution: "Carnegie Mellon University", year: 2018 },
      { degree: "M.S. in Robotics", institution: "University of Michigan", year: 2014 },
      { degree: "B.S. in Computer Engineering", institution: "University of Texas", year: 2012 },
    ],
    courses: ["Artificial Intelligence", "Robotics", "Computer Vision", "Edge Computing for IoT"],
    joinedYear: 2019,
    researchAreas: ["AI", "Robotics", "Computer Vision"],
    currentProjects: [
      {
        title: "Autonomous Navigation in Unstructured Environments",
        description:
          "Developing robust navigation algorithms for robots operating in complex, unstructured environments.",
        funding: "DARPA",
        period: "2022-2025",
      },
      {
        title: "Efficient Neural Networks for Edge Devices",
        description:
          "Creating highly optimized neural network architectures for deployment on resource-constrained edge devices.",
        funding: "Google Research",
        period: "2021-2023",
      },
    ],
    collaborators: [
      "Dr. Robert Kim, MIT",
      "Dr. James Wilson, Stanford University",
      "Dr. Sarah Johnson, Google Research",
    ],
  },
  {
    id: 4,
    name: "Dr. Robert Kim",
    title: "Professor",
    department: "Power Engineering",
    image: "/placeholder.svg?height=400&width=400",
    email: "robert.kim@university.edu",
    phone: "+1 (555) 234-5678",
    location: "Engineering Building, Room 405",
    bio: "Dr. Robert Kim is an expert in power systems and renewable energy integration with over 20 years of experience. His research has been instrumental in developing smart grid technologies and optimizing renewable energy resources. Dr. Kim has led several large-scale projects funded by the Department of Energy.",
    researchInterests: ["Power Systems", "Renewable Energy", "Smart Grid", "Energy Storage"],
    publications: [
      {
        title: "Optimal Integration of Renewable Energy Sources in Smart Grids",
        journal: "IEEE Transactions on Power Systems",
        year: 2023,
        doi: "10.1109/TPWRS.2023.4567890",
        type: "Journal",
        abstract:
          "This paper presents a novel optimization framework for integrating diverse renewable energy sources into smart grids. Our approach improves grid stability while maximizing renewable energy utilization.",
      },
      {
        title: "Advanced Energy Storage Solutions for Grid Stability",
        conference: "IEEE Power & Energy Society General Meeting",
        year: 2022,
        doi: "10.1109/PESGM.2022.0987654",
        type: "Conference",
        abstract:
          "We propose new energy storage management strategies that enhance grid stability during high renewable penetration scenarios. Our simulations demonstrate a 40% improvement in frequency regulation compared to conventional methods.",
      },
    ],
    achievements: [
      "IEEE Power & Energy Society Distinguished Lecturer (2022-2024)",
      "Outstanding Contribution Award, Department of Energy (2020)",
      "Fellow, National Academy of Engineering (2018)",
    ],
    education: [
      { degree: "Ph.D. in Electrical Engineering", institution: "University of California, Berkeley", year: 2002 },
      { degree: "M.S. in Power Systems", institution: "ETH Zurich", year: 1998 },
      { degree: "B.S. in Electrical Engineering", institution: "Seoul National University", year: 1996 },
    ],
    courses: ["Power System Analysis", "Renewable Energy Systems", "Smart Grid Technologies", "Energy Economics"],
    joinedYear: 2005,
    researchAreas: ["Power Systems", "Renewable Energy", "Smart Grid"],
    currentProjects: [
      {
        title: "Resilient Microgrids for Critical Infrastructure",
        description:
          "Developing advanced microgrid architectures that can maintain operation during extreme weather events and cyberattacks.",
        funding: "Department of Energy",
        period: "2021-2024",
      },
      {
        title: "Grid-Scale Energy Storage Optimization",
        description: "Creating algorithms for optimal sizing and operation of grid-scale energy storage systems.",
        funding: "National Science Foundation",
        period: "2020-2023",
      },
    ],
    collaborators: [
      "Dr. Priya Sharma, Stanford University",
      "Dr. Michael Chen, National Renewable Energy Laboratory",
      "Dr. James Wilson, University of Michigan",
    ],
  },
  {
    id: 5,
    name: "Dr. Priya Sharma",
    title: "Associate Professor",
    department: "Signal Processing",
    image: "/placeholder.svg?height=400&width=400",
    email: "priya.sharma@university.edu",
    phone: "+1 (555) 345-6789",
    location: "Engineering Building, Room 215",
    bio: "Dr. Priya Sharma specializes in digital signal processing and its applications in biomedical engineering. Her innovative work on wearable health monitoring systems has received international recognition and has been commercialized through university spin-off companies.",
    researchInterests: [
      "Digital Signal Processing",
      "Biomedical Signal Analysis",
      "Machine Learning",
      "Wearable Sensors",
    ],
    publications: [
      {
        title: "Wearable Sensor-Based Health Monitoring Using Advanced Signal Processing Techniques",
        journal: "IEEE Transactions on Biomedical Engineering",
        year: 2023,
        doi: "10.1109/TBME.2023.5678901",
        type: "Journal",
        abstract:
          "This paper presents a comprehensive framework for health monitoring using wearable sensors and advanced signal processing. Our approach enables continuous monitoring of vital signs with 98% accuracy compared to clinical gold standards.",
      },
      {
        title: "Real-time ECG Analysis for Cardiac Arrhythmia Detection",
        conference: "IEEE Engineering in Medicine and Biology Conference",
        year: 2022,
        doi: "10.1109/EMBC.2022.1098765",
        type: "Conference",
        abstract:
          "We introduce a novel algorithm for real-time detection of cardiac arrhythmias from ECG signals. Our method achieves 96% sensitivity and 98% specificity on standard benchmark datasets while requiring minimal computational resources.",
      },
    ],
    achievements: [
      "Women in Engineering Award, IEEE (2022)",
      "Innovation in Biomedical Engineering Award (2021)",
      "Best Paper Award, IEEE Sensors Journal (2020)",
    ],
    education: [
      { degree: "Ph.D. in Electrical Engineering", institution: "University of Michigan", year: 2013 },
      { degree: "M.Tech in Signal Processing", institution: "IIT Bombay", year: 2009 },
      { degree: "B.Tech in Electronics Engineering", institution: "IIT Roorkee", year: 2007 },
    ],
    courses: [
      "Digital Signal Processing",
      "Biomedical Signal Analysis",
      "Wearable Technology",
      "Machine Learning for Healthcare",
    ],
    joinedYear: 2015,
    researchAreas: ["Signal Processing", "Biomedical Engineering", "Machine Learning"],
    currentProjects: [
      {
        title: "Early Detection of Neurological Disorders",
        description:
          "Developing wearable sensor systems and algorithms for early detection of Parkinson's disease and other neurological disorders.",
        funding: "National Institutes of Health",
        period: "2022-2025",
      },
      {
        title: "Personalized Health Monitoring",
        description:
          "Creating adaptive algorithms that personalize health monitoring based on individual physiological characteristics.",
        funding: "Bill & Melinda Gates Foundation",
        period: "2021-2024",
      },
    ],
    collaborators: [
      "Dr. Emily Rodriguez, Johns Hopkins University",
      "Dr. Robert Kim, Mayo Clinic",
      "Dr. Michael Chen, University of California San Francisco",
    ],
  },
  {
    id: 6,
    name: "Dr. James Wilson",
    title: "Assistant Professor",
    department: "Control Systems",
    image: "/placeholder.svg?height=400&width=400",
    email: "james.wilson@university.edu",
    phone: "+1 (555) 567-8901",
    location: "Engineering Building, Room 110",
    bio: "Dr. James Wilson focuses on control systems theory and its applications in autonomous vehicles and drones. His research combines theoretical advances with practical implementations, and he maintains a state-of-the-art robotics laboratory for experimental validation of control algorithms.",
    researchInterests: ["Control Systems", "Autonomous Vehicles", "Drones", "Robotics"],
    publications: [
      {
        title: "Robust Control Strategies for Autonomous Drone Navigation in Urban Environments",
        journal: "IEEE Transactions on Control Systems Technology",
        year: 2023,
        doi: "10.1109/TCST.2023.6789012",
        type: "Journal",
        abstract:
          "This paper presents robust control strategies that enable autonomous drones to navigate safely in complex urban environments. Our approach demonstrates resilience to wind disturbances and sensor uncertainties.",
      },
      {
        title: "Adaptive Control Methods for Multi-Agent Robotic Systems",
        conference: "American Control Conference",
        year: 2022,
        doi: "10.23919/ACC.2022.2109876",
        type: "Conference",
        abstract:
          "We introduce novel adaptive control methods for coordinating multiple robotic agents in dynamic environments. Our approach enables efficient task allocation and collision avoidance without requiring centralized control.",
      },
    ],
    achievements: [
      "Early Career Award, American Automatic Control Council (2022)",
      "Outstanding Reviewer, IEEE Transactions on Automatic Control (2021)",
      "Best Presentation Award, IFAC World Congress (2020)",
    ],
    education: [
      { degree: "Ph.D. in Mechanical Engineering", institution: "California Institute of Technology", year: 2017 },
      { degree: "M.S. in Control Engineering", institution: "University of Cambridge", year: 2013 },
      { degree: "B.S. in Mechanical Engineering", institution: "University of Washington", year: 2011 },
    ],
    courses: ["Control Systems", "Autonomous Systems", "Drone Technology", "Robotics Control"],
    joinedYear: 2018,
    researchAreas: ["Control Systems", "Autonomous Vehicles", "Robotics"],
    currentProjects: [
      {
        title: "Resilient Control for Urban Air Mobility",
        description:
          "Developing control systems for urban air mobility vehicles that can safely operate in dense urban environments.",
        funding: "NASA",
        period: "2022-2025",
      },
      {
        title: "Multi-Robot Coordination in Dynamic Environments",
        description:
          "Creating distributed control algorithms for teams of robots operating in unpredictable environments.",
        funding: "Office of Naval Research",
        period: "2021-2024",
      },
    ],
    collaborators: [
      "Dr. Sarah Johnson, Stanford University",
      "Dr. Emily Rodriguez, Boston Dynamics",
      "Dr. Priya Sharma, University of California Berkeley",
    ],
  },
]

export const generateMetadata = ({ params }: { params: { id: string } }): Metadata => {
  const faculty = facultyData.find((f) => f.id === Number.parseInt(params.id))

  if (!faculty) {
    return {
      title: "Faculty Not Found",
    }
  }

  return {
    title: `${faculty.name} | Faculty Profile`,
    description: `${faculty.title} of ${faculty.department} at ECE Club. Research interests include ${faculty.researchInterests.join(", ")}.`,
  }
}

export default function FacultyProfilePage({ params }: { params: { id: string } }) {
  const facultyId = Number.parseInt(params.id)
  const faculty = facultyData.find((f) => f.id === facultyId)

  if (!faculty) {
    return (
      <div className="container mx-auto py-12 px-4">
        <div className="text-center py-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-4">
            <GraduationCap className="h-8 w-8 text-muted-foreground" />
          </div>
          <h3 className="text-2xl font-medium">Faculty Member Not Found</h3>
          <p className="text-muted-foreground mt-2">
            The faculty member you're looking for doesn't exist or has been removed.
          </p>
          <Button asChild className="mt-4">
            <Link href="/faculty">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Faculty Directory
            </Link>
          </Button>
        </div>
      </div>
    )
  }

  // Calculate years of experience
  const currentYear = new Date().getFullYear()
  const yearsOfExperience = currentYear - faculty.joinedYear

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="mb-6">
        <Button variant="ghost" size="sm" asChild className="mb-4">
          <Link href="/faculty">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Faculty Directory
          </Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar with personal info */}
        <div className="lg:col-span-1">
          <Card>
            <CardHeader className="pb-2">
              <div className="flex flex-col items-center">
                <Avatar className="h-32 w-32 mb-4 border">
                  <AvatarImage src={faculty.image} alt={faculty.name} />
                  <AvatarFallback>
                    {faculty.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <CardTitle className="text-xl text-center">{faculty.name}</CardTitle>
                <CardDescription className="text-center">
                  {faculty.title}, {faculty.department}
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">{faculty.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">{faculty.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">{faculty.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Briefcase className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">
                    {yearsOfExperience} years of experience (Joined {faculty.joinedYear})
                  </span>
                </div>
              </div>

              <Separator />

              <div>
                <h4 className="text-sm font-medium mb-2">Research Interests</h4>
                <div className="flex flex-wrap gap-1">
                  {faculty.researchInterests.map((interest, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {interest}
                    </Badge>
                  ))}
                </div>
              </div>

              <Separator />

              <div>
                <h4 className="text-sm font-medium mb-2">Education</h4>
                <div className="space-y-2">
                  {faculty.education.map((edu, index) => (
                    <div key={index} className="text-sm">
                      <div className="font-medium">{edu.degree}</div>
                      <div className="text-muted-foreground">
                        {edu.institution}, {edu.year}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <Separator />

              <div>
                <h4 className="text-sm font-medium mb-2">Courses Taught</h4>
                <div className="flex flex-wrap gap-1">
                  {faculty.courses.map((course, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {course}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main content */}
        <div className="lg:col-span-3">
          <Tabs defaultValue="bio" className="w-full">
            <TabsList className="grid grid-cols-4 mb-6">
              <TabsTrigger value="bio">Biography</TabsTrigger>
              <TabsTrigger value="research">Research</TabsTrigger>
              <TabsTrigger value="publications">Publications</TabsTrigger>
              <TabsTrigger value="achievements">Achievements</TabsTrigger>
            </TabsList>

            <TabsContent value="bio" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Biography</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="leading-relaxed">{faculty.bio}</p>
                </CardContent>
              </Card>

              {faculty.collaborators && (
                <Card>
                  <CardHeader>
                    <CardTitle>Collaborators</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-1">
                      {faculty.collaborators.map((collaborator, index) => (
                        <li key={index}>{collaborator}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )}
            </TabsContent>

            <TabsContent value="research" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Research Areas</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {faculty.researchInterests.map((interest, index) => (
                      <Badge key={index} className="text-sm">
                        {interest}
                      </Badge>
                    ))}
                  </div>
                  <p className="leading-relaxed">
                    {faculty.bio.split(".")[0]}. {faculty.bio.split(".")[1]}.
                  </p>
                </CardContent>
              </Card>

              {faculty.currentProjects && (
                <Card>
                  <CardHeader>
                    <CardTitle>Current Projects</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {faculty.currentProjects.map((project, index) => (
                        <div key={index} className="space-y-2">
                          <h3 className="text-lg font-medium">{project.title}</h3>
                          <p className="text-muted-foreground">{project.description}</p>
                          <div className="flex flex-wrap gap-4 text-sm">
                            <span className="flex items-center">
                              <Briefcase className="mr-1 h-4 w-4" />
                              Funding: {project.funding}
                            </span>
                            <span className="flex items-center">
                              <FileText className="mr-1 h-4 w-4" />
                              Period: {project.period}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}
            </TabsContent>

            <TabsContent value="publications" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Publications</CardTitle>
                  <CardDescription>
                    {faculty.name} has published {faculty.publications.length} papers in journals and conferences.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    {faculty.publications.map((pub, index) => (
                      <AccordionItem key={index} value={`pub-${index}`}>
                        <AccordionTrigger className="text-left">
                          <div>
                            <div className="font-medium">{pub.title}</div>
                            <div className="text-sm text-muted-foreground">
                              {pub.journal || pub.conference} ({pub.year})
                            </div>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="space-y-4 p-2">
                            <p className="text-sm">{pub.abstract}</p>
                            <div className="flex flex-wrap gap-4 text-sm">
                              <div className="flex items-center gap-2">
                                <FileText className="h-4 w-4 text-muted-foreground" />
                                <span>Type: {pub.type}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <BookOpen className="h-4 w-4 text-muted-foreground" />
                                <span>DOI: {pub.doi}</span>
                              </div>
                            </div>
                            <Button variant="outline" size="sm">
                              View Publication
                            </Button>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="achievements" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Achievements & Awards</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 list-disc pl-5">
                    {faculty.achievements.map((achievement, index) => (
                      <li key={index} className="text-base">
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

