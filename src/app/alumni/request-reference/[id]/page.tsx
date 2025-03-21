"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { toast } from "@/hooks/use-toast"
import { ChevronLeft, Send } from "lucide-react"

// Mock alumni data - in a real app, you would fetch this based on the ID
const alumniData = [
  {
    id: 1,
    name: "Dr. Aminul Islam",
    batch: "2010",
    image: "/placeholder.svg?height=200&width=200",
    designation: "Senior Research Scientist",
    company: "Google AI",
  },
  {
    id: 2,
    name: "Fatema Khatun",
    batch: "2012",
    image: "/placeholder.svg?height=200&width=200",
    designation: "Lead Software Engineer",
    company: "Microsoft",
  },
  {
    id: 3,
    name: "Md. Rafiqul Islam",
    batch: "2015",
    image: "/placeholder.svg?height=200&width=200",
    designation: "Founder & CEO",
    company: "TechBangla",
  },
  {
    id: 4,
    name: "Nusrat Jahan",
    batch: "2016",
    image: "/placeholder.svg?height=200&width=200",
    designation: "Hardware Engineer",
    company: "Apple",
  },
  {
    id: 5,
    name: "Md. Kamal Hossain",
    batch: "2018",
    image: "/placeholder.svg?height=200&width=200",
    designation: "Data Scientist",
    company: "Spotify",
  },
  {
    id: 6,
    name: "Sabrina Akter",
    batch: "2019",
    image: "/placeholder.svg?height=200&width=200",
    designation: "Embedded Systems Engineer",
    company: "Samsung Electronics",
  },
]

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  studentId: z.string().min(1, { message: "Student ID is required." }),
  batch: z.string().min(1, { message: "Batch is required." }),
  linkedinProfile: z.string().url({ message: "Please enter a valid URL." }).optional().or(z.literal("")),
  portfolioUrl: z.string().url({ message: "Please enter a valid URL." }).optional().or(z.literal("")),
  resumeUrl: z.string().url({ message: "Please enter a valid URL." }).optional().or(z.literal("")),
  message: z.string().min(50, { message: "Message must be at least 50 characters." }),
})

export default function RequestReferencePage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Find the alumni based on the ID
  const alumniId = Number.parseInt(params.id)
  const alumni = alumniData.find((a) => a.id === alumniId)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      studentId: "",
      batch: "",
      linkedinProfile: "",
      portfolioUrl: "",
      resumeUrl: "",
      message: "",
    },
  })

  // If alumni not found, show error
  if (!alumni) {
    return (
      <div className="container mx-auto py-16 px-4 text-center">
        <h1 className="text-2xl font-bold mb-4">Alumni not found</h1>
        <p className="text-muted-foreground mb-8">The alumni you are looking for does not exist or has been removed.</p>
        <Button asChild>
          <Link href="/alumni">Back to Alumni</Link>
        </Button>
      </div>
    )
  }

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)

    // Simulate API call
    try {
      // In a real app, you would send the form data to your API
      console.log(values)

      // Simulate a delay
      await new Promise((resolve) => setTimeout(resolve, 1500))

      toast({
        title: "Reference request sent",
        description: `Your reference request has been sent to ${alumni.name}.`,
      })

      router.push("/alumni")
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send reference request. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="max-w-3xl mx-auto">
        <Button variant="outline" asChild className="mb-6">
          <Link href="/alumni">
            <ChevronLeft className="h-4 w-4 mr-2" />
            Back to Alumni
          </Link>
        </Button>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-4 mb-4">
              <Avatar className="h-12 w-12">
                <AvatarImage src={alumni.image} alt={alumni.name} />
                <AvatarFallback>
                  {alumni.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div>
                <CardTitle>Request Reference from {alumni.name}</CardTitle>
                <CardDescription>
                  {alumni.designation} at {alumni.company}
                </CardDescription>
              </div>
            </div>
            <CardDescription>
              Fill out this form to request a professional reference from this alumni. Be sure to include relevant
              details about your skills, experience, and why you're seeking a reference.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Your Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Your Email</FormLabel>
                        <FormControl>
                          <Input placeholder="john.doe@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="studentId"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Student ID</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g., 2018331001" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="batch"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Batch</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g., 2018" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="linkedinProfile"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>LinkedIn Profile URL</FormLabel>
                      <FormControl>
                        <Input placeholder="https://linkedin.com/in/yourprofile" {...field} />
                      </FormControl>
                      <FormDescription>
                        Share your LinkedIn profile to help the alumni understand your professional background.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="portfolioUrl"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Portfolio URL (Optional)</FormLabel>
                      <FormControl>
                        <Input placeholder="https://yourportfolio.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="resumeUrl"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Resume URL (Optional)</FormLabel>
                      <FormControl>
                        <Input placeholder="https://drive.google.com/your-resume" {...field} />
                      </FormControl>
                      <FormDescription>
                        Link to your resume on Google Drive, Dropbox, or another cloud storage service.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Explain why you're requesting a reference, what position you're applying for, and any specific aspects of your skills or experience you'd like them to highlight."
                          className="min-h-[150px]"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>Be specific and professional. Minimum 50 characters.</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" disabled={isSubmitting} className="w-full">
                  {isSubmitting ? (
                    "Sending Request..."
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Send Reference Request
                    </>
                  )}
                </Button>
              </form>
            </Form>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4 items-start">
            <div className="text-sm text-muted-foreground">
              <p>
                <strong>Note:</strong> Reference requests are reviewed by alumni who volunteer their time to help
                current students and recent graduates. Please be respectful of their time and only request references
                when appropriate.
              </p>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

