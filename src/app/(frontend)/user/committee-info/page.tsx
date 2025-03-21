"use client"

import { useState } from "react"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { UserNav } from "@/components/user-nav"
import { toast } from "@/hooks/use-toast"
import { AlertCircle, Shield } from "lucide-react"

const committeeFormSchema = z.object({
  role: z.string().min(1, { message: "Role is required." }),
  department: z.string().default("ECE"),
  bio: z.string().max(500, { message: "Bio must not exceed 500 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(11, { message: "Please enter a valid phone number." }),
  officeHours: z.string().optional(),
  responsibilities: z.string().max(1000, { message: "Responsibilities must not exceed 1000 characters." }),
  term: z.string().min(1, { message: "Term is required." }),
})

export default function CommitteeInfoPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [isAuthorized, setIsAuthorized] = useState(true) // Mock authorization status

  // Mock committee member data
  const committeeMember = {
    name: "Dr. Aminul Islam",
    role: "Vice Chairman",
    department: "ECE",
    bio: "Dr. Aminul Islam is a Professor in the Department of Electronics and Communication Engineering with over 15 years of teaching and research experience.",
    email: "aminul@hstu.ac.bd",
    phone: "01712345678",
    officeHours: "Sunday, Tuesday, Thursday: 2:00 PM - 4:00 PM",
    responsibilities:
      "Oversee academic activities, coordinate with other departments, represent the department in university meetings, and guide student activities.",
    term: "2023-2025",
    image: "/placeholder.svg?height=200  and guide student activities.",
    term: "2023-2025",
    image: "/placeholder.svg?height=200&width=200",
  }

  const form = useForm<z.infer<typeof committeeFormSchema>>({
    resolver: zodResolver(committeeFormSchema),
    defaultValues: {
      role: committeeMember.role,
      department: committeeMember.department,
      bio: committeeMember.bio,
      email: committeeMember.email,
      phone: committeeMember.phone,
      officeHours: committeeMember.officeHours,
      responsibilities: committeeMember.responsibilities,
      term: committeeMember.term,
    },
  })

  async function onSubmit(values: z.infer<typeof committeeFormSchema>) {
    setIsLoading(true)

    // Simulate API call
    try {
      // In a real app, you would send the form data to your API
      console.log(values)

      // Simulate a delay
      await new Promise((resolve) => setTimeout(resolve, 1500))

      toast({
        title: "Committee information updated",
        description: "Your committee information has been updated successfully.",
      })
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to update committee information. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  // Mock user data for UserNav
  const user = {
    name: committeeMember.name,
    email: committeeMember.email,
    image: committeeMember.image,
  }

  if (!isAuthorized) {
    return (
      <div className="container mx-auto py-8 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold">Committee Information</h1>
            <UserNav user={user} />
          </div>

          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Access Denied</AlertTitle>
            <AlertDescription>
              You do not have permission to access this page. Only authorized committee members can update committee
              information.
            </AlertDescription>
          </Alert>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Committee Information</h1>
          <UserNav user={user} />
        </div>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-primary" />
              <CardTitle>Update Committee Information</CardTitle>
            </div>
            <CardDescription>
              Update your information as a committee member. This information will be displayed on the committee page.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row gap-8 mb-8">
              <div className="flex flex-col items-center space-y-2">
                <Avatar className="h-32 w-32">
                  <AvatarImage src={committeeMember.image} alt={committeeMember.name} />
                  <AvatarFallback>
                    {committeeMember.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <h3 className="font-semibold text-lg">{committeeMember.name}</h3>
                <Button variant="outline" size="sm">
                  Change Photo
                </Button>
              </div>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="flex-1 space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="role"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Role in Committee</FormLabel>
                          <FormControl>
                            <Input placeholder="e.g., Vice Chairman" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="department"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Department</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select department" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="ECE">Electronics and Communication Engineering</SelectItem>
                              <SelectItem value="CSE">Computer Science and Engineering</SelectItem>
                              <SelectItem value="EEE">Electrical and Electronic Engineering</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="bio"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Bio</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Brief description about yourself" className="resize-none" {...field} />
                        </FormControl>
                        <FormDescription>Brief description for your profile. Maximum 500 characters.</FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="john.doe@example.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number</FormLabel>
                          <FormControl>
                            <Input placeholder="01XXXXXXXXX" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="officeHours"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Office Hours</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="e.g., Monday, Wednesday: 2:00 PM - 4:00 PM"
                            {...field}
                            value={field.value || ""}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="responsibilities"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Responsibilities</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Describe your responsibilities as a committee member"
                            className="resize-none"
                            {...field}
                          />
                        </FormControl>
                        <FormDescription>
                          Describe your key responsibilities in the committee. Maximum 1000 characters.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="term"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Term</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g., 2023-2025" {...field} />
                        </FormControl>
                        <FormDescription>The period of your committee membership (e.g., 2023-2025).</FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" disabled={isLoading}>
                    {isLoading ? "Updating..." : "Update Committee Information"}
                  </Button>
                </form>
              </Form>
            </div>
          </CardContent>
          <CardFooter>
            <p className="text-sm text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

