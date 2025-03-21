"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import {
  MapPin,
  Mail,
  Phone,
  Linkedin,
  Globe,
  ChevronLeft,
  ChevronRight,
  MessageSquare,
  Filter,
  Search,
  X,
} from "lucide-react"

// Enhanced mock data for alumni with additional fields
const alumniData = [
  {
    id: 1,
    name: "Dr. Aminul Islam",
    batch: "2010",
    image: "/placeholder.svg?height=200&width=200",
    designation: "Senior Research Scientist",
    company: "Google",
    industry: "Technology",
    location: "Mountain View, CA, USA",
    email: "aminul@example.com",
    phone: "+1 123-456-7890",
    linkedin: "linkedin.com/in/aminul",
    website: "aminulislam.com",
    bio: "Dr. Aminul Islam is a Senior Research Scientist at Google AI, focusing on machine learning and computer vision. He completed his Ph.D. from Stanford University after graduating from HSTU. His research has been published in top-tier conferences and journals.",
    achievements: ["Best Paper Award at CVPR 2019", "Google Research Excellence Award 2021", "IEEE Fellow"],
    experienceYears: 12,
    age: 34,
    skills: ["Machine Learning", "Computer Vision", "Deep Learning", "Python", "TensorFlow"],
  },
  {
    id: 2,
    name: "Fatema Khatun",
    batch: "2012",
    image: "/placeholder.svg?height=200&width=200",
    designation: "Lead Software Engineer",
    company: "Microsoft",
    industry: "Technology",
    location: "Seattle, WA, USA",
    email: "fatema@example.com",
    phone: "+1 234-567-8901",
    linkedin: "linkedin.com/in/fatema",
    website: "fatemakhatun.dev",
    bio: "Fatema Khatun is a Lead Software Engineer at Microsoft, where she works on cloud infrastructure and distributed systems. She has been with Microsoft for 8 years and has contributed to several key projects.",
    achievements: ["Microsoft MVP 2020", "Women in Tech Leadership Award 2022"],
    experienceYears: 10,
    age: 32,
    skills: ["Cloud Computing", "Distributed Systems", "C#", "Azure", "Kubernetes"],
  },
  {
    id: 3,
    name: "Md. Rafiqul Islam",
    batch: "2015",
    image: "/placeholder.svg?height=200&width=200",
    designation: "Founder & CEO",
    company: "TechBangla",
    industry: "Startup",
    location: "Dhaka, Bangladesh",
    email: "rafiq@example.com",
    phone: "+880 1712-345678",
    linkedin: "linkedin.com/in/rafiqul",
    website: "techbangla.com",
    bio: "Md. Rafiqul Islam is the Founder and CEO of TechBangla, a successful tech startup based in Dhaka. After graduating from HSTU, he worked at several multinational companies before starting his own venture in 2018.",
    achievements: ["Forbes 30 Under 30 Asia 2020", "Bangladesh Young Entrepreneur Award 2021"],
    experienceYears: 8,
    age: 30,
    skills: ["Entrepreneurship", "Business Development", "Product Management", "Leadership", "Marketing"],
  },
  {
    id: 4,
    name: "Nusrat Jahan",
    batch: "2016",
    image: "/placeholder.svg?height=200&width=200",
    designation: "Hardware Engineer",
    company: "Apple",
    industry: "Technology",
    location: "Cupertino, CA, USA",
    email: "nusrat@example.com",
    phone: "+1 345-678-9012",
    linkedin: "linkedin.com/in/nusrat",
    website: "",
    bio: "Nusrat Jahan is a Hardware Engineer at Apple, working on next-generation iPhone hardware. She completed her Master's from MIT after graduating from HSTU and joined Apple in 2019.",
    achievements: ["Apple Innovation Award 2022", "3 Patents in Mobile Hardware Design"],
    experienceYears: 7,
    age: 29,
    skills: ["Hardware Design", "Circuit Design", "PCB Layout", "Embedded Systems", "IoT"],
  },
  {
    id: 5,
    name: "Md. Kamal Hossain",
    batch: "2018",
    image: "/placeholder.svg?height=200&width=200",
    designation: "Data Scientist",
    company: "Spotify",
    industry: "Entertainment",
    location: "Stockholm, Sweden",
    email: "kamal@example.com",
    phone: "+46 70-123-4567",
    linkedin: "linkedin.com/in/kamal",
    website: "kamalhossain.io",
    bio: "Md. Kamal Hossain is a Data Scientist at Spotify, where he works on recommendation algorithms and user behavior analysis. He joined Spotify after completing his Master's in Data Science from KTH Royal Institute of Technology.",
    achievements: ["Best Master's Thesis Award 2020", "Spotify Hackathon Winner 2021"],
    experienceYears: 5,
    age: 27,
    skills: ["Data Science", "Machine Learning", "Python", "SQL", "Recommendation Systems"],
  },
  {
    id: 6,
    name: "Sabrina Akter",
    batch: "2019",
    image: "/placeholder.svg?height=200&width=200",
    designation: "Embedded Systems Engineer",
    company: "Samsung Electronics",
    industry: "Electronics",
    location: "Seoul, South Korea",
    email: "sabrina@example.com",
    phone: "+82 10-1234-5678",
    linkedin: "linkedin.com/in/sabrina",
    website: "",
    bio: "Sabrina Akter is an Embedded Systems Engineer at Samsung Electronics, working on IoT devices and smart home technology. She joined Samsung right after graduating from HSTU and has been with the company for 4 years.",
    achievements: ["Samsung Innovation Award 2022", "Best Employee of the Quarter (Q2 2023)"],
    experienceYears: 4,
    age: 26,
    skills: ["Embedded Systems", "C/C++", "IoT", "Firmware Development", "RTOS"],
  },
  {
    id: 7,
    name: "Ahmed Rahman",
    batch: "2014",
    image: "/placeholder.svg?height=200&width=200",
    designation: "Senior DevOps Engineer",
    company: "Amazon",
    industry: "Technology",
    location: "Seattle, WA, USA",
    email: "ahmed@example.com",
    phone: "+1 456-789-0123",
    linkedin: "linkedin.com/in/ahmed",
    website: "ahmedrahman.dev",
    bio: "Ahmed Rahman is a Senior DevOps Engineer at Amazon, where he works on cloud infrastructure and CI/CD pipelines. He has been with Amazon for 6 years and has contributed to several key projects.",
    achievements: ["AWS Certified Solutions Architect", "Amazon Technical Excellence Award 2021"],
    experienceYears: 9,
    age: 31,
    skills: ["DevOps", "AWS", "Docker", "Kubernetes", "Terraform", "CI/CD"],
  },
  {
    id: 8,
    name: "Tahmina Begum",
    batch: "2017",
    image: "/placeholder.svg?height=200&width=200",
    designation: "UX/UI Designer",
    company: "Facebook",
    industry: "Technology",
    location: "Menlo Park, CA, USA",
    email: "tahmina@example.com",
    phone: "+1 567-890-1234",
    linkedin: "linkedin.com/in/tahmina",
    website: "tahminabegum.design",
    bio: "Tahmina Begum is a UX/UI Designer at Facebook, where she works on designing user interfaces for Facebook's products. She joined Facebook after completing her Master's in Human-Computer Interaction from Carnegie Mellon University.",
    achievements: ["Facebook Design Excellence Award 2022", "Best Paper at CHI 2021"],
    experienceYears: 6,
    age: 28,
    skills: ["UX Design", "UI Design", "Figma", "Adobe XD", "User Research", "Prototyping"],
  },
  {
    id: 9,
    name: "Imran Hossain",
    batch: "2013",
    image: "/placeholder.svg?height=200&width=200",
    designation: "Blockchain Developer",
    company: "Coinbase",
    industry: "Cryptocurrency",
    location: "San Francisco, CA, USA",
    email: "imran@example.com",
    phone: "+1 678-901-2345",
    linkedin: "linkedin.com/in/imran",
    website: "imranhossain.dev",
    bio: "Imran Hossain is a Blockchain Developer at Coinbase, where he works on developing blockchain-based solutions. He has been with Coinbase for 5 years and has contributed to several key projects.",
    achievements: ["Coinbase Innovation Award 2021", "3 Patents in Blockchain Technology"],
    experienceYears: 10,
    age: 33,
    skills: ["Blockchain", "Ethereum", "Solidity", "Smart Contracts", "Web3.js", "DeFi"],
  },
  {
    id: 10,
    name: "Nasrin Akter",
    batch: "2011",
    image: "/placeholder.svg?height=200&width=200",
    designation: "AI Research Scientist",
    company: "OpenAI",
    industry: "Artificial Intelligence",
    location: "San Francisco, CA, USA",
    email: "nasrin@example.com",
    phone: "+1 789-012-3456",
    linkedin: "linkedin.com/in/nasrin",
    website: "nasrinakter.ai",
    bio: "Nasrin Akter is an AI Research Scientist at OpenAI, where she works on developing advanced AI models. She completed her Ph.D. from MIT after graduating from HSTU and joined OpenAI in 2018.",
    achievements: ["Best Paper Award at NeurIPS 2020", "OpenAI Research Excellence Award 2022"],
    experienceYears: 12,
    age: 35,
    skills: ["Artificial Intelligence", "Machine Learning", "Deep Learning", "Natural Language Processing", "PyTorch"],
  },
]

// List of popular companies for suggestions
const popularCompanies = [
  "Google",
  "Microsoft",
  "Apple",
  "Amazon",
  "Facebook",
  "Samsung",
  "Spotify",
  "OpenAI",
  "Coinbase",
  "TechBangla",
  "IBM",
  "Intel",
  "Oracle",
  "Cisco",
  "Adobe",
  "Netflix",
  "Twitter",
  "LinkedIn",
  "Uber",
  "Airbnb",
]

// List of industries for filtering
const industries = [
  "Technology",
  "Artificial Intelligence",
  "Electronics",
  "Entertainment",
  "Cryptocurrency",
  "Startup",
  "Healthcare",
  "Finance",
  "Education",
  "Manufacturing",
  "Telecommunications",
  "Energy",
  "Retail",
  "Transportation",
  "Consulting",
]

interface AlumniDirectoryProps {
  searchQuery: string
  batchFilter: string
}

export function AlumniDirectory({ searchQuery, batchFilter }: AlumniDirectoryProps) {
  const router = useRouter()
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedAlumni, setSelectedAlumni] = useState<(typeof alumniData)[0] | null>(null)
  const [advancedFilters, setAdvancedFilters] = useState(false)

  // Advanced filter states
  const [experienceRange, setExperienceRange] = useState<[number, number]>([0, 15])
  const [ageRange, setAgeRange] = useState<[number, number]>([22, 40])
  const [selectedCompanies, setSelectedCompanies] = useState<string[]>([])
  const [selectedIndustries, setSelectedIndustries] = useState<string[]>([])
  const [locationFilter, setLocationFilter] = useState("")
  const [skillsFilter, setSkillsFilter] = useState("")
  const [activeFiltersCount, setActiveFiltersCount] = useState(0)
  const [companySearchQuery, setCompanySearchQuery] = useState("")
  const [filteredCompanySuggestions, setFilteredCompanySuggestions] = useState<string[]>([])

  const itemsPerPage = 6

  // Update company suggestions based on search
  useEffect(() => {
    if (companySearchQuery) {
      const filtered = popularCompanies.filter((company) =>
        company.toLowerCase().includes(companySearchQuery.toLowerCase()),
      )
      setFilteredCompanySuggestions(filtered)
    } else {
      setFilteredCompanySuggestions([])
    }
  }, [companySearchQuery])

  // Count active filters
  useEffect(() => {
    let count = 0
    if (searchQuery) count++
    if (batchFilter !== "all") count++
    if (experienceRange[0] > 0 || experienceRange[1] < 15) count++
    if (ageRange[0] > 22 || ageRange[1] < 40) count++
    if (selectedCompanies.length > 0) count++
    if (selectedIndustries.length > 0) count++
    if (locationFilter) count++
    if (skillsFilter) count++

    setActiveFiltersCount(count)
  }, [
    searchQuery,
    batchFilter,
    experienceRange,
    ageRange,
    selectedCompanies,
    selectedIndustries,
    locationFilter,
    skillsFilter,
  ])

  // Toggle company selection
  const toggleCompany = (company: string) => {
    setSelectedCompanies((prev) => (prev.includes(company) ? prev.filter((c) => c !== company) : [...prev, company]))
  }

  // Toggle industry selection
  const toggleIndustry = (industry: string) => {
    setSelectedIndustries((prev) =>
      prev.includes(industry) ? prev.filter((i) => i !== industry) : [...prev, industry],
    )
  }

  // Reset all filters
  const resetFilters = () => {
    setExperienceRange([0, 15])
    setAgeRange([22, 40])
    setSelectedCompanies([])
    setSelectedIndustries([])
    setLocationFilter("")
    setSkillsFilter("")
    setCompanySearchQuery("")
  }

  // Filter alumni based on all criteria
  const filteredAlumni = alumniData.filter((alumni) => {
    // Basic filters
    const matchesSearch =
      alumni.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      alumni.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      alumni.designation.toLowerCase().includes(searchQuery.toLowerCase()) ||
      alumni.skills.some((skill) => skill.toLowerCase().includes(searchQuery.toLowerCase()))

    const matchesBatch = batchFilter === "all" || alumni.batch === batchFilter

    // Advanced filters
    const matchesExperience =
      alumni.experienceYears >= experienceRange[0] && alumni.experienceYears <= experienceRange[1]

    const matchesAge = alumni.age >= ageRange[0] && alumni.age <= ageRange[1]

    const matchesCompany = selectedCompanies.length === 0 || selectedCompanies.includes(alumni.company)

    const matchesIndustry = selectedIndustries.length === 0 || selectedIndustries.includes(alumni.industry)

    const matchesLocation = !locationFilter || alumni.location.toLowerCase().includes(locationFilter.toLowerCase())

    const matchesSkills =
      !skillsFilter || alumni.skills.some((skill) => skill.toLowerCase().includes(skillsFilter.toLowerCase()))

    return (
      matchesSearch &&
      matchesBatch &&
      matchesExperience &&
      matchesAge &&
      matchesCompany &&
      matchesIndustry &&
      matchesLocation &&
      matchesSkills
    )
  })

  const totalPages = Math.ceil(filteredAlumni.length / itemsPerPage)

  const currentAlumni = filteredAlumni.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)

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

  const handleRequestReference = (alumniId: number) => {
    router.push(`/alumni/request-reference/${alumniId}`)
  }

  return (
    <div>
      {/* Advanced Filters Section */}
      <Card className="mb-8">
        <CardContent className="p-4">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setAdvancedFilters(!advancedFilters)}
                className="flex items-center gap-1"
              >
                <Filter className="h-4 w-4" />
                Advanced Filters
                {activeFiltersCount > 0 && (
                  <Badge variant="secondary" className="ml-1">
                    {activeFiltersCount}
                  </Badge>
                )}
              </Button>

              {activeFiltersCount > 0 && (
                <Button variant="ghost" size="sm" onClick={resetFilters} className="text-muted-foreground">
                  <X className="h-3 w-3 mr-1" />
                  Reset
                </Button>
              )}
            </div>

            <div className="text-sm text-muted-foreground">{filteredAlumni.length} alumni found</div>
          </div>

          {advancedFilters && (
            <div className="space-y-4 mt-4 pt-4 border-t">
              <Accordion type="multiple" className="w-full">
                <AccordionItem value="experience">
                  <AccordionTrigger className="text-sm font-medium">Experience (Years)</AccordionTrigger>
                  <AccordionContent>
                    <div className="pt-2 pb-4">
                      <Slider
                        defaultValue={experienceRange}
                        min={0}
                        max={15}
                        step={1}
                        value={experienceRange}
                        onValueChange={(value) => setExperienceRange(value as [number, number])}
                        className="mb-2"
                      />
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>{experienceRange[0]} years</span>
                        <span>{experienceRange[1]} years</span>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="age">
                  <AccordionTrigger className="text-sm font-medium">Age Range</AccordionTrigger>
                  <AccordionContent>
                    <div className="pt-2 pb-4">
                      <Slider
                        defaultValue={ageRange}
                        min={22}
                        max={40}
                        step={1}
                        value={ageRange}
                        onValueChange={(value) => setAgeRange(value as [number, number])}
                        className="mb-2"
                      />
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>{ageRange[0]} years</span>
                        <span>{ageRange[1]} years</span>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="company">
                  <AccordionTrigger className="text-sm font-medium">Company</AccordionTrigger>
                  <AccordionContent>
                    <div className="pt-2 pb-4 space-y-3">
                      <div className="relative">
                        <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input
                          placeholder="Search companies..."
                          value={companySearchQuery}
                          onChange={(e) => setCompanySearchQuery(e.target.value)}
                          className="pl-8"
                        />
                      </div>

                      {/* Company suggestions */}
                      {filteredCompanySuggestions.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-2">
                          {filteredCompanySuggestions.map((company) => (
                            <Badge
                              key={company}
                              variant={selectedCompanies.includes(company) ? "default" : "outline"}
                              className="cursor-pointer"
                              onClick={() => toggleCompany(company)}
                            >
                              {company}
                            </Badge>
                          ))}
                        </div>
                      )}

                      {/* Selected companies */}
                      {selectedCompanies.length > 0 && (
                        <div className="mt-3">
                          <Label className="text-xs text-muted-foreground mb-2 block">Selected Companies:</Label>
                          <div className="flex flex-wrap gap-2">
                            {selectedCompanies.map((company) => (
                              <Badge
                                key={company}
                                variant="default"
                                className="cursor-pointer"
                                onClick={() => toggleCompany(company)}
                              >
                                {company}
                                <X className="ml-1 h-3 w-3" />
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="industry">
                  <AccordionTrigger className="text-sm font-medium">Industry</AccordionTrigger>
                  <AccordionContent>
                    <div className="pt-2 pb-4">
                      <div className="grid grid-cols-2 gap-2">
                        {industries.map((industry) => (
                          <div key={industry} className="flex items-center space-x-2">
                            <Checkbox
                              id={`industry-${industry}`}
                              checked={selectedIndustries.includes(industry)}
                              onCheckedChange={() => toggleIndustry(industry)}
                            />
                            <Label htmlFor={`industry-${industry}`} className="text-sm cursor-pointer">
                              {industry}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="location">
                  <AccordionTrigger className="text-sm font-medium">Location</AccordionTrigger>
                  <AccordionContent>
                    <div className="pt-2 pb-4">
                      <div className="relative">
                        <MapPin className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input
                          placeholder="Filter by location..."
                          value={locationFilter}
                          onChange={(e) => setLocationFilter(e.target.value)}
                          className="pl-8"
                        />
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="skills">
                  <AccordionTrigger className="text-sm font-medium">Skills & Expertise</AccordionTrigger>
                  <AccordionContent>
                    <div className="pt-2 pb-4">
                      <Input
                        placeholder="Filter by skills (e.g., Machine Learning, Python)..."
                        value={skillsFilter}
                        onChange={(e) => setSkillsFilter(e.target.value)}
                      />
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          )}
        </CardContent>
      </Card>

      {filteredAlumni.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No alumni found matching your criteria.</p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {currentAlumni.map((alumni) => (
              <Card key={alumni.id} className="overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center mb-4">
                    <Avatar className="h-24 w-24 mb-4">
                      <AvatarImage src={alumni.image} alt={alumni.name} />
                      <AvatarFallback>
                        {alumni.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <h3 className="font-bold text-lg">{alumni.name}</h3>
                    <p className="text-muted-foreground text-sm">{alumni.designation}</p>
                    <p className="text-sm font-medium">{alumni.company}</p>
                    <div className="flex flex-wrap gap-1 justify-center mt-2">
                      <Badge variant="outline">Batch {alumni.batch}</Badge>
                      <Badge variant="secondary">{alumni.experienceYears} yrs exp</Badge>
                    </div>
                  </div>

                  <div className="flex items-center text-sm text-muted-foreground mb-4">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>{alumni.location}</span>
                  </div>

                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" className="w-full" onClick={() => setSelectedAlumni(alumni)}>
                        View Profile
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl">
                      <DialogHeader>
                        <DialogTitle>Alumni Profile</DialogTitle>
                        <DialogDescription>Detailed information about {alumni.name}</DialogDescription>
                      </DialogHeader>

                      {selectedAlumni && (
                        <div className="grid md:grid-cols-3 gap-6 pt-4">
                          <div className="md:col-span-1 flex flex-col items-center text-center">
                            <Avatar className="h-32 w-32 mb-4">
                              <AvatarImage src={selectedAlumni.image} alt={selectedAlumni.name} />
                              <AvatarFallback>
                                {selectedAlumni.name
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </AvatarFallback>
                            </Avatar>
                            <h3 className="font-bold text-xl">{selectedAlumni.name}</h3>
                            <p className="text-muted-foreground">{selectedAlumni.designation}</p>
                            <p className="font-medium">{selectedAlumni.company}</p>
                            <div className="flex flex-wrap gap-1 justify-center mt-2">
                              <Badge variant="outline">Batch {selectedAlumni.batch}</Badge>
                              <Badge variant="secondary">{selectedAlumni.experienceYears} yrs exp</Badge>
                            </div>

                            <div className="mt-4 space-y-2 w-full">
                              <div className="flex items-center text-sm">
                                <MapPin className="h-4 w-4 mr-2" />
                                <span>{selectedAlumni.location}</span>
                              </div>
                              <div className="flex items-center text-sm">
                                <Mail className="h-4 w-4 mr-2" />
                                <span>{selectedAlumni.email}</span>
                              </div>
                              <div className="flex items-center text-sm">
                                <Phone className="h-4 w-4 mr-2" />
                                <span>{selectedAlumni.phone}</span>
                              </div>
                              {selectedAlumni.linkedin && (
                                <div className="flex items-center text-sm">
                                  <Linkedin className="h-4 w-4 mr-2" />
                                  <a
                                    href={`https://${selectedAlumni.linkedin}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-primary hover:underline"
                                  >
                                    {selectedAlumni.linkedin}
                                  </a>
                                </div>
                              )}
                              {selectedAlumni.website && (
                                <div className="flex items-center text-sm">
                                  <Globe className="h-4 w-4 mr-2" />
                                  <a
                                    href={`https://${selectedAlumni.website}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-primary hover:underline"
                                  >
                                    {selectedAlumni.website}
                                  </a>
                                </div>
                              )}
                            </div>

                            <Button className="mt-6 w-full" onClick={() => handleRequestReference(selectedAlumni.id)}>
                              <MessageSquare className="mr-2 h-4 w-4" />
                              Request Reference
                            </Button>
                          </div>

                          <div className="md:col-span-2 space-y-4">
                            <div>
                              <h4 className="font-semibold mb-2">Biography</h4>
                              <p className="text-sm text-muted-foreground">{selectedAlumni.bio}</p>
                            </div>

                            <div>
                              <h4 className="font-semibold mb-2">Skills & Expertise</h4>
                              <div className="flex flex-wrap gap-2">
                                {selectedAlumni.skills.map((skill, index) => (
                                  <Badge key={index} variant="secondary">
                                    {skill}
                                  </Badge>
                                ))}
                              </div>
                            </div>

                            <div>
                              <h4 className="font-semibold mb-2">Achievements</h4>
                              <ul className="list-disc list-inside text-sm text-muted-foreground">
                                {selectedAlumni.achievements.map((achievement, index) => (
                                  <li key={index}>{achievement}</li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      )}
                    </DialogContent>
                  </Dialog>
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
        </>
      )}
    </div>
  )
}

