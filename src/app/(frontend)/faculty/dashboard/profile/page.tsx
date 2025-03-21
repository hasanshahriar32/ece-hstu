"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function FacultyProfilePage() {
  const [saving, setSaving] = useState(false)

  const handleSave = () => {
    setSaving(true)
    // Simulate API call
    setTimeout(() => {
      setSaving(false)
    }, 1000)
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Profile</h1>
        <p className="text-muted-foreground">Manage your personal information and contact details.</p>
      </div>

      <Tabs defaultValue="personal">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="personal">Personal Info</TabsTrigger>
          <TabsTrigger value="contact">Contact Details</TabsTrigger>
          <TabsTrigger value="education">Education</TabsTrigger>
        </TabsList>

        <TabsContent value="personal" className="space-y-4 mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Personal Information</CardTitle>
              <CardDescription>Update your personal details and profile picture.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex flex-col items-center space-y-2">
                  <Avatar className="h-24 w-24">
                    <AvatarImage src="/placeholder.svg?height=96&width=96" alt="Profile picture" />
                    <AvatarFallback>DR</AvatarFallback>
                  </Avatar>
                  <Button variant="outline" size="sm">
                    Change Photo
                  </Button>
                </div>

                <div className="flex-1 space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" defaultValue="Sarah" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" defaultValue="Johnson" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="title">Academic Title</Label>
                    <Input id="title" defaultValue="Professor" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="department">Department</Label>
                    <Input id="department" defaultValue="Electronics Engineering" />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="bio">Biography</Label>
                <Textarea
                  id="bio"
                  rows={5}
                  defaultValue="Dr. Sarah Johnson is a Professor of Electronics Engineering with over 15 years of experience in academia and industry research."
                />
                <p className="text-sm text-muted-foreground">
                  Brief description of your academic background and research focus.
                </p>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button onClick={handleSave} disabled={saving}>
                {saving ? "Saving..." : "Save Changes"}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="contact" className="space-y-4 mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
              <CardDescription>Update your contact details and office location.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" defaultValue="sarah.johnson@university.edu" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" defaultValue="+1 (555) 123-4567" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="office">Office Location</Label>
                <Input id="office" defaultValue="Engineering Building, Room 305" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="officeHours">Office Hours</Label>
                <Input id="officeHours" defaultValue="Monday and Wednesday, 2:00 PM - 4:00 PM" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="website">Personal Website</Label>
                <Input id="website" type="url" defaultValue="https://sarahjohnson.faculty.university.edu" />
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button onClick={handleSave} disabled={saving}>
                {saving ? "Saving..." : "Save Changes"}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="education" className="space-y-4 mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Education</CardTitle>
              <CardDescription>Add your educational background and qualifications.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="border p-4 rounded-md">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="degree1">Degree</Label>
                      <Input id="degree1" defaultValue="Ph.D. in Electrical Engineering" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="year1">Year</Label>
                      <Input id="year1" defaultValue="2008" />
                    </div>
                  </div>
                  <div className="space-y-2 mt-4">
                    <Label htmlFor="institution1">Institution</Label>
                    <Input id="institution1" defaultValue="Stanford University" />
                  </div>
                </div>

                <div className="border p-4 rounded-md">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="degree2">Degree</Label>
                      <Input id="degree2" defaultValue="M.S. in Electronics" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="year2">Year</Label>
                      <Input id="year2" defaultValue="2004" />
                    </div>
                  </div>
                  <div className="space-y-2 mt-4">
                    <Label htmlFor="institution2">Institution</Label>
                    <Input id="institution2" defaultValue="MIT" />
                  </div>
                </div>

                <div className="border p-4 rounded-md">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="degree3">Degree</Label>
                      <Input id="degree3" defaultValue="B.Tech in Electronics Engineering" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="year3">Year</Label>
                      <Input id="year3" defaultValue="2002" />
                    </div>
                  </div>
                  <div className="space-y-2 mt-4">
                    <Label htmlFor="institution3">Institution</Label>
                    <Input id="institution3" defaultValue="IIT Delhi" />
                  </div>
                </div>
              </div>

              <Button variant="outline" className="w-full">
                Add Another Degree
              </Button>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button onClick={handleSave} disabled={saving}>
                {saving ? "Saving..." : "Save Changes"}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

