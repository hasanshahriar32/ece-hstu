"use client"

import { useState } from "react"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { toast } from "@/hooks/use-toast"
import { UserNav } from "@/components/user-nav"
import Link from "next/link"
import { ArrowLeft, Plus, Trash2, Award, Briefcase, BookOpen, FileText, ExternalLink } from "lucide-react"

// Mock user data
const user = {
  name: "Dr. Jane Smith",
  email: "jane.smith@example.com",
  image: "/placeholder.svg?height=200&width=200",
}

// Mock career data
const careerEntries = [
  {
    id: "job-1",
    title: "Senior Research Scientist",
    company: "Tech Innovations Inc.",
    location: "Boston, USA",
    startDate: "2020-03",
    endDate: null,
    current: true,
    description: "Leading research in signal processing algorithms for next-generation communication systems.",
  },
  {
    id: "job-2",
    title: "Research Scientist",
    company: "Advanced Communications Lab",
    location: "San Francisco, USA",
    startDate: "2017-06",
    endDate: "2020-02",
    current: false,
    description: "Developed novel algorithms for wireless communication systems.",
  },
  {
    id: "job-3",
    title: "Postdoctoral Researcher",
    company: "University of Technology",
    location: "New York, USA",
    startDate: "2015-09",
    endDate: "2017-05",
    current: false,
    description: "Conducted research on signal processing techniques for 5G networks.",
  },
]

// Mock research data
const researchEntries = [
  {
    id: "research-1",
    title: "Advanced Signal Processing for 6G Networks",
    institution: "Tech Innovations Inc.",
    startDate: "2021-01",
    endDate: null,
    current: true,
    description: "Investigating novel signal processing techniques for next-generation wireless networks.",
    publications: 3,
  },
  {
    id: "research-2",
    title: "Machine Learning for Wireless Communications",
    institution: "Advanced Communications Lab",
    startDate: "2018-03",
    endDate: "2020-02",
    current: false,
    description: "Applied machine learning algorithms to improve wireless communication systems.",
    publications: 5,
  },
]

// Mock publications data
const publications = [
  {
    id: "pub-1",
    title: "Novel Signal Processing Techniques for 6G Networks",
    journal: "IEEE Transactions on Communications",
    year: 2023,
    authors: "Smith, J., Johnson, R., Williams, T.",
    doi: "10.1109/TCOMM.2023.1234567",
    url: "https://example.com/publication1",
  },
  {
    id: "pub-2",
    title: "Machine Learning Applications in Wireless Communications",
    journal: "IEEE Journal on Selected Areas in Communications",
    year: 2022,
    authors: "Smith, J., Brown, A., Davis, M.",
    doi: "10.1109/JSAC.2022.7654321",
    url: "https://example.com/publication2",
  },
  {
    id: "pub-3",
    title: "Deep Learning for Channel Estimation in MIMO Systems",
    journal: "IEEE Wireless Communications Letters",
    year: 2021,
    authors: "Smith, J., Wilson, E.",
    doi: "10.1109/WCL.2021.9876543",
    url: "https://example.com/publication3",
  },
]

// Mock achievements data
const achievements = [
  {
    id: "achievement-1",
    title: "Best Paper Award",
    organization: "IEEE International Conference on Communications",
    date: "2023-06",
    description: "Received the Best Paper Award for the paper 'Novel Signal Processing Techniques for 6G Networks'.",
  },
  {
    id: "achievement-2",
    title: "Research Excellence Award",
    organization: "Tech Innovations Inc.",
    date: "2022-12",
    description: "Recognized for outstanding contributions to research and development.",
  },
  {
    id: "achievement-3",
    title: "Patent: Signal Processing Method",
    organization: "US Patent Office",
    date: "2021-08",
    description: "Granted patent for a novel signal processing method for wireless communications.",
    patentNumber: "US12345678",
  },
]

// Form schemas
const careerFormSchema = z.object({
  title: z.string().min(1, { message: "Job title is required." }),
  company: z.string().min(1, { message: "Company name is required." }),
  location: z.string().optional(),
  startDate: z.string().min(1, { message: "Start date is required." }),
  endDate: z.string().optional(),
  current: z.boolean().default(false),
  description: z.string().optional(),
})

const researchFormSchema = z.object({
  title: z.string().min(1, { message: "Research title is required." }),
  institution: z.string().min(1, { message: "Institution name is required." }),
  startDate: z.string().min(1, { message: "Start date is required." }),
  endDate: z.string().optional(),
  current: z.boolean().default(false),
  description: z.string().optional(),
  publications: z.number().optional(),
})

const publicationFormSchema = z.object({
  title: z.string().min(1, { message: "Publication title is required." }),
  journal: z.string().min(1, { message: "Journal name is required." }),
  year: z.number().min(1900, { message: "Valid year is required." }),
  authors: z.string().min(1, { message: "Authors are required." }),
  doi: z.string().optional(),
  url: z.string().url({ message: "Please enter a valid URL." }).optional(),
})

const achievementFormSchema = z.object({
  title: z.string().min(1, { message: "Achievement title is required." }),
  organization: z.string().min(1, { message: "Organization name is required." }),
  date: z.string().min(1, { message: "Date is required." }),
  description: z.string().optional(),
  patentNumber: z.string().optional(),
})

export default function ProfessionalInfoPage() {
  const [activeTab, setActiveTab] = useState("career")
  const [isAddingCareer, setIsAddingCareer] = useState(false)
  const [isAddingResearch, setIsAddingResearch] = useState(false)
  const [isAddingPublication, setIsAddingPublication] = useState(false)
  const [isAddingAchievement, setIsAddingAchievement] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  // Career form
  const careerForm = useForm<z.infer<typeof careerFormSchema>>({
    resolver: zodResolver(careerFormSchema),
    defaultValues: {
      title: "",
      company: "",
      location: "",
      startDate: "",
      endDate: "",
      current: false,
      description: "",
    },
  })

  // Research form
  const researchForm = useForm<z.infer<typeof researchFormSchema>>({
    resolver: zodResolver(researchFormSchema),
    defaultValues: {
      title: "",
      institution: "",
      startDate: "",
      endDate: "",
      current: false,
      description: "",
      publications: 0,
    },
  })

  // Publication form
  const publicationForm = useForm<z.infer<typeof publicationFormSchema>>({
    resolver: zodResolver(publicationFormSchema),
    defaultValues: {
      title: "",
      journal: "",
      year: new Date().getFullYear(),
      authors: "",
      doi: "",
      url: "",
    },
  })

  // Achievement form
  const achievementForm = useForm<z.infer<typeof achievementFormSchema>>({
    resolver: zodResolver(achievementFormSchema),
    defaultValues: {
      title: "",
      organization: "",
      date: "",
      description: "",
      patentNumber: "",
    },
  })

  // Handle form submissions
  async function onCareerSubmit(values: z.infer<typeof careerFormSchema>) {
    setIsLoading(true)
    try {
      console.log(values)
      await new Promise((resolve) => setTimeout(resolve, 1000))
      toast({
        title: "Career information added",
        description: "Your career information has been added successfully.",
      })
      careerForm.reset()
      setIsAddingCareer(false)
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to add career information. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  async function onResearchSubmit(values: z.infer<typeof researchFormSchema>) {
    setIsLoading(true)
    try {
      console.log(values)
      await new Promise((resolve) => setTimeout(resolve, 1000))
      toast({
        title: "Research information added",
        description: "Your research information has been added successfully.",
      })
      researchForm.reset()
      setIsAddingResearch(false)
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to add research information. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  async function onPublicationSubmit(values: z.infer<typeof publicationFormSchema>) {
    setIsLoading(true)
    try {
      console.log(values)
      await new Promise((resolve) => setTimeout(resolve, 1000))
      toast({
        title: "Publication added",
        description: "Your publication has been added successfully.",
      })
      publicationForm.reset()
      setIsAddingPublication(false)
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to add publication. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  async function onAchievementSubmit(values: z.infer<typeof achievementFormSchema>) {
    setIsLoading(true)
    try {
      console.log(values)
      await new Promise((resolve) => setTimeout(resolve, 1000))
      toast({
        title: "Achievement added",
        description: "Your achievement has been added successfully.",
      })
      achievementForm.reset()
      setIsAddingAchievement(false)
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to add achievement. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  // Format date for display
  const formatDate = (dateString: string | null) => {
    if (!dateString) return "Present"
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", { year: "numeric", month: "long" })
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-2">
            <Link href="/alumni/dashboard" className="inline-flex items-center">
              <ArrowLeft className="h-4 w-4 mr-1" />
              <span>Back to Dashboard</span>
            </Link>
            <h1 className="text-3xl font-bold ml-4">Professional Information</h1>
          </div>
          <UserNav user={user} />
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid grid-cols-4 max-w-2xl">
            <TabsTrigger value="career">Career</TabsTrigger>
            <TabsTrigger value="research">Research</TabsTrigger>
            <TabsTrigger value="publications">Publications</TabsTrigger>
            <TabsTrigger value="achievements">Achievements</TabsTrigger>
          </TabsList>

          {/* Career Tab */}
          <TabsContent value="career">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Career History</CardTitle>
                  <CardDescription>Manage your professional career history</CardDescription>
                </div>
                <Button onClick={() => setIsAddingCareer(true)} disabled={isAddingCareer}>
                  <Plus className="h-4 w-4 mr-2" />
                  Add Position
                </Button>
              </CardHeader>
              <CardContent>
                {isAddingCareer ? (
                  <Form {...careerForm}>
                    <form onSubmit={careerForm.handleSubmit(onCareerSubmit)} className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField
                          control={careerForm.control}
                          name="title"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Job Title</FormLabel>
                              <FormControl>
                                <Input placeholder="e.g., Senior Research Scientist" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={careerForm.control}
                          name="company"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Company/Organization</FormLabel>
                              <FormControl>
                                <Input placeholder="e.g., Tech Innovations Inc." {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={careerForm.control}
                        name="location"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Location</FormLabel>
                            <FormControl>
                              <Input placeholder="e.g., Boston, USA" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField
                          control={careerForm.control}
                          name="startDate"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Start Date</FormLabel>
                              <FormControl>
                                <Input type="month" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={careerForm.control}
                          name="endDate"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>End Date</FormLabel>
                              <FormControl>
                                <Input
                                  type="month"
                                  {...field}
                                  disabled={careerForm.watch("current")}
                                  value={field.value || ""}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={careerForm.control}
                        name="current"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                            <FormControl>
                              <input
                                type="checkbox"
                                checked={field.value}
                                onChange={field.onChange}
                                className="h-4 w-4 mt-1"
                              />
                            </FormControl>
                            <div className="space-y-1 leading-none">
                              <FormLabel>Current Position</FormLabel>
                              <FormDescription>Check if this is your current position</FormDescription>
                            </div>
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={careerForm.control}
                        name="description"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Description</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Describe your responsibilities and achievements in this role"
                                className="resize-none"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div className="flex justify-end space-x-2">
                        <Button type="button" variant="outline" onClick={() => setIsAddingCareer(false)}>
                          Cancel
                        </Button>
                        <Button type="submit" disabled={isLoading}>
                          {isLoading ? "Saving..." : "Save"}
                        </Button>
                      </div>
                    </form>
                  </Form>
                ) : (
                  <div className="space-y-6">
                    {careerEntries.length === 0 ? (
                      <div className="text-center py-12">
                        <Briefcase className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                        <h3 className="text-lg font-medium mb-2">No career history added</h3>
                        <p className="text-muted-foreground mb-4">
                          Add your professional experience to showcase your career path.
                        </p>
                        <Button onClick={() => setIsAddingCareer(true)}>
                          <Plus className="h-4 w-4 mr-2" />
                          Add Position
                        </Button>
                      </div>
                    ) : (
                      careerEntries.map((entry) => (
                        <div key={entry.id} className="border rounded-lg p-4">
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="font-medium text-lg">{entry.title}</h3>
                              <p className="text-muted-foreground">{entry.company}</p>
                              {entry.location && <p className="text-sm text-muted-foreground">{entry.location}</p>}
                              <p className="text-sm mt-1">
                                {formatDate(entry.startDate)} - {formatDate(entry.endDate)}
                                {entry.current && " (Current)"}
                              </p>
                            </div>
                            <Button variant="ghost" size="icon">
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                          {entry.description && <p className="mt-2 text-sm">{entry.description}</p>}
                        </div>
                      ))
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Research Tab */}
          <TabsContent value="research">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Research Projects</CardTitle>
                  <CardDescription>Manage your research projects and activities</CardDescription>
                </div>
                <Button onClick={() => setIsAddingResearch(true)} disabled={isAddingResearch}>
                  <Plus className="h-4 w-4 mr-2" />
                  Add Research
                </Button>
              </CardHeader>
              <CardContent>
                {isAddingResearch ? (
                  <Form {...researchForm}>
                    <form onSubmit={researchForm.handleSubmit(onResearchSubmit)} className="space-y-4">
                      <FormField
                        control={researchForm.control}
                        name="title"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Research Title</FormLabel>
                            <FormControl>
                              <Input placeholder="e.g., Advanced Signal Processing for 6G Networks" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={researchForm.control}
                        name="institution"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Institution/Organization</FormLabel>
                            <FormControl>
                              <Input placeholder="e.g., Tech Innovations Inc." {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField
                          control={researchForm.control}
                          name="startDate"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Start Date</FormLabel>
                              <FormControl>
                                <Input type="month" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={researchForm.control}
                          name="endDate"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>End Date</FormLabel>
                              <FormControl>
                                <Input
                                  type="month"
                                  {...field}
                                  disabled={researchForm.watch("current")}
                                  value={field.value || ""}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={researchForm.control}
                        name="current"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                            <FormControl>
                              <input
                                type="checkbox"
                                checked={field.value}
                                onChange={field.onChange}
                                className="h-4 w-4 mt-1"
                              />
                            </FormControl>
                            <div className="space-y-1 leading-none">
                              <FormLabel>Current Project</FormLabel>
                              <FormDescription>Check if this is an ongoing research project</FormDescription>
                            </div>
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={researchForm.control}
                        name="description"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Description</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Describe your research project, objectives, and outcomes"
                                className="resize-none"
                                {...field}
                                value={field.value || ""}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={researchForm.control}
                        name="publications"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Number of Publications</FormLabel>
                            <FormControl>
                              <Input
                                type="number"
                                min="0"
                                {...field}
                                onChange={(e) => field.onChange(Number.parseInt(e.target.value) || 0)}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div className="flex justify-end space-x-2">
                        <Button type="button" variant="outline" onClick={() => setIsAddingResearch(false)}>
                          Cancel
                        </Button>
                        <Button type="submit" disabled={isLoading}>
                          {isLoading ? "Saving..." : "Save"}
                        </Button>
                      </div>
                    </form>
                  </Form>
                ) : (
                  <div className="space-y-6">
                    {researchEntries.length === 0 ? (
                      <div className="text-center py-12">
                        <BookOpen className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                        <h3 className="text-lg font-medium mb-2">No research projects added</h3>
                        <p className="text-muted-foreground mb-4">
                          Add your research projects to showcase your academic contributions.
                        </p>
                        <Button onClick={() => setIsAddingResearch(true)}>
                          <Plus className="h-4 w-4 mr-2" />
                          Add Research
                        </Button>
                      </div>
                    ) : (
                      researchEntries.map((entry) => (
                        <div key={entry.id} className="border rounded-lg p-4">
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="font-medium text-lg">{entry.title}</h3>
                              <p className="text-muted-foreground">{entry.institution}</p>
                              <p className="text-sm mt-1">
                                {formatDate(entry.startDate)} - {formatDate(entry.endDate)}
                                {entry.current && " (Current)"}
                              </p>
                              {entry.publications > 0 && (
                                <p className="text-sm mt-1">Publications: {entry.publications}</p>
                              )}
                            </div>
                            <Button variant="ghost" size="icon">
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                          {entry.description && <p className="mt-2 text-sm">{entry.description}</p>}
                        </div>
                      ))
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Publications Tab */}
          <TabsContent value="publications">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Publications</CardTitle>
                  <CardDescription>Manage your academic publications and papers</CardDescription>
                </div>
                <Button onClick={() => setIsAddingPublication(true)} disabled={isAddingPublication}>
                  <Plus className="h-4 w-4 mr-2" />
                  Add Publication
                </Button>
              </CardHeader>
              <CardContent>
                {isAddingPublication ? (
                  <Form {...publicationForm}>
                    <form onSubmit={publicationForm.handleSubmit(onPublicationSubmit)} className="space-y-4">
                      <FormField
                        control={publicationForm.control}
                        name="title"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Publication Title</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="e.g., Novel Signal Processing Techniques for 6G Networks"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={publicationForm.control}
                        name="journal"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Journal/Conference</FormLabel>
                            <FormControl>
                              <Input placeholder="e.g., IEEE Transactions on Communications" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField
                          control={publicationForm.control}
                          name="year"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Year</FormLabel>
                              <FormControl>
                                <Input
                                  type="number"
                                  min="1900"
                                  max={new Date().getFullYear()}
                                  {...field}
                                  onChange={(e) =>
                                    field.onChange(Number.parseInt(e.target.value) || new Date().getFullYear())
                                  }
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={publicationForm.control}
                          name="doi"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>DOI</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="e.g., 10.1109/TCOMM.2023.1234567"
                                  {...field}
                                  value={field.value || ""}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={publicationForm.control}
                        name="authors"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Authors</FormLabel>
                            <FormControl>
                              <Input placeholder="e.g., Smith, J., Johnson, R., Williams, T." {...field} />
                            </FormControl>
                            <FormDescription>
                              List of authors in the format: Last, First Initial., Last, First Initial.
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={publicationForm.control}
                        name="url"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>URL</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="e.g., https://example.com/publication"
                                {...field}
                                value={field.value || ""}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div className="flex justify-end space-x-2">
                        <Button type="button" variant="outline" onClick={() => setIsAddingPublication(false)}>
                          Cancel
                        </Button>
                        <Button type="submit" disabled={isLoading}>
                          {isLoading ? "Saving..." : "Save"}
                        </Button>
                      </div>
                    </form>
                  </Form>
                ) : (
                  <div className="space-y-6">
                    {publications.length === 0 ? (
                      <div className="text-center py-12">
                        <FileText className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                        <h3 className="text-lg font-medium mb-2">No publications added</h3>
                        <p className="text-muted-foreground mb-4">
                          Add your publications to showcase your research contributions.
                        </p>
                        <Button onClick={() => setIsAddingPublication(true)}>
                          <Plus className="h-4 w-4 mr-2" />
                          Add Publication
                        </Button>
                      </div>
                    ) : (
                      publications.map((publication) => (
                        <div key={publication.id} className="border rounded-lg p-4">
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="font-medium text-lg">{publication.title}</h3>
                              <p className="text-muted-foreground">
                                {publication.journal}, {publication.year}
                              </p>
                              <p className="text-sm mt-1">Authors: {publication.authors}</p>
                              {publication.doi && <p className="text-sm mt-1">DOI: {publication.doi}</p>}
                            </div>
                            <Button variant="ghost" size="icon">
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                          <div className="mt-2 flex items-center">
                            {publication.url && (
                              <Link
                                href={publication.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm text-blue-500 hover:underline inline-flex items-center"
                              >
                                View Publication <ExternalLink className="h-3 w-3 ml-1" />
                              </Link>
                            )}
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Achievements Tab */}
          <TabsContent value="achievements">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Achievements</CardTitle>
                  <CardDescription>Manage your awards, honors, and professional achievements</CardDescription>
                </div>
                <Button onClick={() => setIsAddingAchievement(true)} disabled={isAddingAchievement}>
                  <Plus className="h-4 w-4 mr-2" />
                  Add Achievement
                </Button>
              </CardHeader>
              <CardContent>
                {isAddingAchievement ? (
                  <Form {...achievementForm}>
                    <form onSubmit={achievementForm.handleSubmit(onAchievementSubmit)} className="space-y-4">
                      <FormField
                        control={achievementForm.control}
                        name="title"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Achievement Title</FormLabel>
                            <FormControl>
                              <Input placeholder="e.g., Best Paper Award" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={achievementForm.control}
                        name="organization"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Organization/Event</FormLabel>
                            <FormControl>
                              <Input placeholder="e.g., IEEE International Conference on Communications" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={achievementForm.control}
                        name="date"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Date</FormLabel>
                            <FormControl>
                              <Input type="month" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={achievementForm.control}
                        name="description"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Description</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Describe your achievement and its significance"
                                className="resize-none"
                                {...field}
                                value={field.value || ""}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={achievementForm.control}
                        name="patentNumber"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Patent Number (if applicable)</FormLabel>
                            <FormControl>
                              <Input placeholder="e.g., US12345678" {...field} value={field.value || ""} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div className="flex justify-end space-x-2">
                        <Button type="button" variant="outline" onClick={() => setIsAddingAchievement(false)}>
                          Cancel
                        </Button>
                        <Button type="submit" disabled={isLoading}>
                          {isLoading ? "Saving..." : "Save"}
                        </Button>
                      </div>
                    </form>
                  </Form>
                ) : (
                  <div className="space-y-6">
                    {achievements.length === 0 ? (
                      <div className="text-center py-12">
                        <Award className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                        <h3 className="text-lg font-medium mb-2">No achievements added</h3>
                        <p className="text-muted-foreground mb-4">
                          Add your awards, honors, and professional achievements.
                        </p>
                        <Button onClick={() => setIsAddingAchievement(true)}>
                          <Plus className="h-4 w-4 mr-2" />
                          Add Achievement
                        </Button>
                      </div>
                    ) : (
                      achievements.map((achievement) => (
                        <div key={achievement.id} className="border rounded-lg p-4">
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="font-medium text-lg">{achievement.title}</h3>
                              <p className="text-muted-foreground">{achievement.organization}</p>
                              <p className="text-sm mt-1">{formatDate(achievement.date)}</p>
                              {achievement.patentNumber && (
                                <p className="text-sm mt-1">Patent Number: {achievement.patentNumber}</p>
                              )}
                            </div>
                            <Button variant="ghost" size="icon">
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                          {achievement.description && <p className="mt-2 text-sm">{achievement.description}</p>}
                        </div>
                      ))
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

