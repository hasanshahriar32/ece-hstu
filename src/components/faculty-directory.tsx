"use client"

import { useState } from "react"
import Link from "next/link"
import { Search, Filter, GraduationCap, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"

// Mock data for faculty members
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
    bio: "Dr. Sarah Johnson is a Professor of Electronics Engineering with over 15 years of experience in academia and industry research.",
    researchInterests: ["Microelectronics", "VLSI Design", "Embedded Systems", "IoT"],
    publications: [
      {
        title: "Advanced VLSI Design Techniques for Low-Power Applications",
        journal: "IEEE Transactions on VLSI Systems",
        year: 2022,
        doi: "10.1109/TVLSI.2022.1234567",
        type: "Journal",
      },
      {
        title: "Energy-Efficient IoT Architectures: A Comprehensive Review",
        conference: "International Conference on IoT Technologies",
        year: 2021,
        doi: "10.1109/ICIT.2021.7654321",
        type: "Conference",
      },
    ],
    achievements: [
      "IEEE Fellow (2020)",
      "Best Paper Award, International Conference on VLSI Design (2019)",
      "University Research Excellence Award (2018)",
    ],
    education: [
      { degree: "Ph.D. in Electrical Engineering", institution: "Stanford University", year: 2008 },
      { degree: "M.S. in Electronics", institution: "MIT", year: 2004 },
      { degree: "B.Tech in Electronics Engineering", institution: "IIT Delhi", year: 2002 },
    ],
    courses: ["Digital Electronics", "VLSI Design", "Embedded Systems", "Advanced Microprocessors"],
    joinedYear: 2010,
    researchAreas: ["Microelectronics", "VLSI", "Embedded Systems"],
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
    bio: "Dr. Michael Chen specializes in wireless communications and signal processing with a focus on 5G technologies.",
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
      },
      {
        title: "Performance Analysis of MIMO Systems in 5G Networks",
        conference: "IEEE Wireless Communications Conference",
        year: 2022,
        doi: "10.1109/WCC.2022.8765432",
        type: "Conference",
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
    bio: "Dr. Emily Rodriguez focuses on artificial intelligence and its applications in embedded systems and robotics.",
    researchInterests: ["Artificial Intelligence", "Robotics", "Computer Vision", "Edge Computing"],
    publications: [
      {
        title: "Real-time Object Detection for Autonomous Robots Using Edge Computing",
        journal: "IEEE Transactions on Robotics",
        year: 2023,
        doi: "10.1109/TRO.2023.3456789",
        type: "Journal",
      },
      {
        title: "Energy-Efficient AI Algorithms for Resource-Constrained Devices",
        conference: "International Conference on Machine Learning",
        year: 2022,
        doi: "10.1145/ICML.2022.9876543",
        type: "Conference",
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
    bio: "Dr. Robert Kim is an expert in power systems and renewable energy integration with over 20 years of experience.",
    researchInterests: ["Power Systems", "Renewable Energy", "Smart Grid", "Energy Storage"],
    publications: [
      {
        title: "Optimal Integration of Renewable Energy Sources in Smart Grids",
        journal: "IEEE Transactions on Power Systems",
        year: 2023,
        doi: "10.1109/TPWRS.2023.4567890",
        type: "Journal",
      },
      {
        title: "Advanced Energy Storage Solutions for Grid Stability",
        conference: "IEEE Power & Energy Society General Meeting",
        year: 2022,
        doi: "10.1109/PESGM.2022.0987654",
        type: "Conference",
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
    bio: "Dr. Priya Sharma specializes in digital signal processing and its applications in biomedical engineering.",
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
      },
      {
        title: "Real-time ECG Analysis for Cardiac Arrhythmia Detection",
        conference: "IEEE Engineering in Medicine and Biology Conference",
        year: 2022,
        doi: "10.1109/EMBC.2022.1098765",
        type: "Conference",
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
    bio: "Dr. James Wilson focuses on control systems theory and its applications in autonomous vehicles and drones.",
    researchInterests: ["Control Systems", "Autonomous Vehicles", "Drones", "Robotics"],
    publications: [
      {
        title: "Robust Control Strategies for Autonomous Drone Navigation in Urban Environments",
        journal: "IEEE Transactions on Control Systems Technology",
        year: 2023,
        doi: "10.1109/TCST.2023.6789012",
        type: "Journal",
      },
      {
        title: "Adaptive Control Methods for Multi-Agent Robotic Systems",
        conference: "American Control Conference",
        year: 2022,
        doi: "10.23919/ACC.2022.2109876",
        type: "Conference",
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
  },
]

// Department options for filtering
const departments = [
  "Electronics Engineering",
  "Communication Engineering",
  "Computer Engineering",
  "Power Engineering",
  "Signal Processing",
  "Control Systems",
]

// Research area options for filtering
const researchAreas = [
  "Microelectronics",
  "VLSI",
  "Embedded Systems",
  "Communications",
  "Signal Processing",
  "Networks",
  "AI",
  "Robotics",
  "Computer Vision",
  "Power Systems",
  "Renewable Energy",
  "Smart Grid",
  "Biomedical Engineering",
  "Machine Learning",
  "Control Systems",
  "Autonomous Vehicles",
]

// Publication types for filtering
const publicationTypes = ["Journal", "Conference", "Book Chapter", "Patent"]

export function FacultyDirectory() {
  const [searchQuery, setSearchQuery] = useState("")
  const [showFilters, setShowFilters] = useState(false)
  const [selectedDepartments, setSelectedDepartments] = useState<string[]>([])
  const [selectedResearchAreas, setSelectedResearchAreas] = useState<string[]>([])
  const [selectedPublicationTypes, setSelectedPublicationTypes] = useState<string[]>([])
  const [experienceRange, setExperienceRange] = useState([0, 30])
  const [publicationYearRange, setPublicationYearRange] = useState([2000, 2023])
  const [sortBy, setSortBy] = useState("name")
  const [activeFiltersCount, setActiveFiltersCount] = useState(0)

  // Calculate current year for experience calculation
  const currentYear = new Date().getFullYear()

  // Calculate active filters count
  const calculateActiveFilters = () => {
    let count = 0
    if (selectedDepartments.length > 0) count++
    if (selectedResearchAreas.length > 0) count++
    if (selectedPublicationTypes.length > 0) count++
    if (experienceRange[0] > 0 || experienceRange[1] < 30) count++
    if (publicationYearRange[0] > 2000 || publicationYearRange[1] < 2023) count++
    setActiveFiltersCount(count)
  }

  // Update active filters count when filters change
  useState(() => {
    calculateActiveFilters()
  })

  // Filter faculty based on search and filters
  const filteredFaculty = facultyData.filter((faculty) => {
    // Search query filter
    const matchesSearch =
      faculty.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faculty.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faculty.researchInterests.some((interest) => interest.toLowerCase().includes(searchQuery.toLowerCase()))

    // Department filter
    const matchesDepartment = selectedDepartments.length === 0 || selectedDepartments.includes(faculty.department)

    // Research areas filter
    const matchesResearchArea =
      selectedResearchAreas.length === 0 || faculty.researchAreas.some((area) => selectedResearchAreas.includes(area))

    // Publication type filter
    const matchesPublicationType =
      selectedPublicationTypes.length === 0 ||
      faculty.publications.some((pub) => selectedPublicationTypes.includes(pub.type))

    // Experience range filter
    const yearsOfExperience = currentYear - faculty.joinedYear
    const matchesExperienceRange = yearsOfExperience >= experienceRange[0] && yearsOfExperience <= experienceRange[1]

    // Publication year filter
    const matchesPublicationYear = faculty.publications.some(
      (pub) => pub.year >= publicationYearRange[0] && pub.year <= publicationYearRange[1],
    )

    return (
      matchesSearch &&
      matchesDepartment &&
      matchesResearchArea &&
      matchesPublicationType &&
      matchesExperienceRange &&
      matchesPublicationYear
    )
  })

  // Sort faculty based on selected sort option
  const sortedFaculty = [...filteredFaculty].sort((a, b) => {
    switch (sortBy) {
      case "name":
        return a.name.localeCompare(b.name)
      case "department":
        return a.department.localeCompare(b.department)
      case "experience":
        return currentYear - b.joinedYear - (currentYear - a.joinedYear)
      case "publications":
        return b.publications.length - a.publications.length
      default:
        return 0
    }
  })

  // Reset all filters
  const resetFilters = () => {
    setSelectedDepartments([])
    setSelectedResearchAreas([])
    setSelectedPublicationTypes([])
    setExperienceRange([0, 30])
    setPublicationYearRange([2000, 2023])
    setSortBy("name")
    setActiveFiltersCount(0)
  }

  // Toggle department selection
  const toggleDepartment = (department: string) => {
    if (selectedDepartments.includes(department)) {
      setSelectedDepartments(selectedDepartments.filter((d) => d !== department))
    } else {
      setSelectedDepartments([...selectedDepartments, department])
    }
    calculateActiveFilters()
  }

  // Toggle research area selection
  const toggleResearchArea = (area: string) => {
    if (selectedResearchAreas.includes(area)) {
      setSelectedResearchAreas(selectedResearchAreas.filter((a) => a !== area))
    } else {
      setSelectedResearchAreas([...selectedResearchAreas, area])
    }
    calculateActiveFilters()
  }

  // Toggle publication type selection
  const togglePublicationType = (type: string) => {
    if (selectedPublicationTypes.includes(type)) {
      setSelectedPublicationTypes(selectedPublicationTypes.filter((t) => t !== type))
    } else {
      setSelectedPublicationTypes([...selectedPublicationTypes, type])
    }
    calculateActiveFilters()
  }

  return (
    <div className="space-y-6">
      {/* Search and filter controls */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search by name, department, or research interest..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={() => setShowFilters(!showFilters)} className="flex items-center gap-2">
            <Filter className="h-4 w-4" />
            Filters
            {activeFiltersCount > 0 && (
              <Badge variant="secondary" className="ml-1">
                {activeFiltersCount}
              </Badge>
            )}
          </Button>
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="name">Name</SelectItem>
              <SelectItem value="department">Department</SelectItem>
              <SelectItem value="experience">Experience</SelectItem>
              <SelectItem value="publications">Publications</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Advanced filters */}
      {showFilters && (
        <div className="bg-muted/40 rounded-lg p-4 border">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-medium">Advanced Filters</h3>
            <div className="flex gap-2">
              {activeFiltersCount > 0 && (
                <Button variant="ghost" size="sm" onClick={resetFilters}>
                  Reset All
                </Button>
              )}
              <Button variant="ghost" size="sm" onClick={() => setShowFilters(false)}>
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Department filter */}
            <div className="space-y-2">
              <h4 className="text-sm font-medium">Department</h4>
              <div className="space-y-1 max-h-40 overflow-y-auto">
                {departments.map((department) => (
                  <div key={department} className="flex items-center space-x-2">
                    <Checkbox
                      id={`department-${department}`}
                      checked={selectedDepartments.includes(department)}
                      onCheckedChange={() => toggleDepartment(department)}
                    />
                    <label
                      htmlFor={`department-${department}`}
                      className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {department}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Research areas filter */}
            <div className="space-y-2">
              <h4 className="text-sm font-medium">Research Areas</h4>
              <div className="space-y-1 max-h-40 overflow-y-auto">
                {researchAreas.map((area) => (
                  <div key={area} className="flex items-center space-x-2">
                    <Checkbox
                      id={`area-${area}`}
                      checked={selectedResearchAreas.includes(area)}
                      onCheckedChange={() => toggleResearchArea(area)}
                    />
                    <label
                      htmlFor={`area-${area}`}
                      className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {area}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Publication types filter */}
            <div className="space-y-2">
              <h4 className="text-sm font-medium">Publication Types</h4>
              <div className="space-y-1">
                {publicationTypes.map((type) => (
                  <div key={type} className="flex items-center space-x-2">
                    <Checkbox
                      id={`type-${type}`}
                      checked={selectedPublicationTypes.includes(type)}
                      onCheckedChange={() => togglePublicationType(type)}
                    />
                    <label
                      htmlFor={`type-${type}`}
                      className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {type}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience range filter */}
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-medium mb-2">Years of Experience</h4>
                <Slider
                  defaultValue={experienceRange}
                  min={0}
                  max={30}
                  step={1}
                  value={experienceRange}
                  onValueChange={setExperienceRange}
                  className="py-4"
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>{experienceRange[0]} years</span>
                  <span>{experienceRange[1]} years</span>
                </div>
              </div>
            </div>

            {/* Publication year range filter */}
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-medium mb-2">Publication Years</h4>
                <Slider
                  defaultValue={publicationYearRange}
                  min={2000}
                  max={2023}
                  step={1}
                  value={publicationYearRange}
                  onValueChange={setPublicationYearRange}
                  className="py-4"
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>{publicationYearRange[0]}</span>
                  <span>{publicationYearRange[1]}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Results count */}
      <div className="text-sm text-muted-foreground">Found {sortedFaculty.length} faculty members</div>

      {/* Faculty cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedFaculty.map((faculty) => (
          <Card key={faculty.id} className="overflow-hidden">
            <CardHeader className="p-4">
              <div className="flex items-start gap-4">
                <Avatar className="h-16 w-16 border">
                  <AvatarImage src={faculty.image} alt={faculty.name} />
                  <AvatarFallback>
                    {faculty.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                  <CardTitle className="text-lg">{faculty.name}</CardTitle>
                  <CardDescription>
                    {faculty.title}, {faculty.department}
                  </CardDescription>
                  <div className="flex flex-wrap gap-1 mt-1">
                    <Badge variant="outline" className="text-xs">
                      {currentYear - faculty.joinedYear} years
                    </Badge>
                    {faculty.researchAreas.slice(0, 2).map((area) => (
                      <Badge key={area} variant="secondary" className="text-xs">
                        {area}
                      </Badge>
                    ))}
                    {faculty.researchAreas.length > 2 && (
                      <Badge variant="secondary" className="text-xs">
                        +{faculty.researchAreas.length - 2}
                      </Badge>
                    )}
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <p className="text-sm text-muted-foreground line-clamp-3">{faculty.bio}</p>
            </CardContent>
            <CardFooter className="p-4 pt-0 flex justify-between">
              <Link href={`/faculty/${faculty.id}`}>
                <Button variant="outline" size="sm">
                  View Profile
                </Button>
              </Link>

              <Link href={`/faculty/${faculty.id}`}>
                <Button variant="ghost" size="sm">
                  Full Profile
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* Empty state */}
      {sortedFaculty.length === 0 && (
        <div className="text-center py-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-4">
            <GraduationCap className="h-8 w-8 text-muted-foreground" />
          </div>
          <h3 className="text-lg font-medium">No faculty members found</h3>
          <p className="text-muted-foreground mt-2">
            Try adjusting your search or filters to find what you're looking for.
          </p>
          <Button variant="outline" className="mt-4" onClick={resetFilters}>
            Reset Filters
          </Button>
        </div>
      )}
    </div>
  )
}

