"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { X } from "lucide-react"

export default function FacultyResearchPage() {
  const [saving, setSaving] = useState(false)
  const [newInterest, setNewInterest] = useState("")
  const [interests, setInterests] = useState(["Microelectronics", "VLSI Design", "Embedded Systems", "IoT"])

  const handleAddInterest = () => {
    if (newInterest.trim() && !interests.includes(newInterest.trim())) {
      setInterests([...interests, newInterest.trim()])
      setNewInterest("")
    }
  }

  const handleRemoveInterest = (interest: string) => {
    setInterests(interests.filter((i) => i !== interest))
  }

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
        <h1 className="text-2xl font-bold tracking-tight">Research</h1>
        <p className="text-muted-foreground">Manage your research interests and ongoing projects.</p>
      </div>

      <div className="grid grid-cols-1 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Research Interests</CardTitle>
            <CardDescription>Add or update your areas of research expertise.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-wrap gap-2">
              {interests.map((interest) => (
                <Badge key={interest} variant="secondary" className="px-2 py-1 text-sm">
                  {interest}
                  <button onClick={() => handleRemoveInterest(interest)} className="ml-1 hover:text-destructive">
                    <X className="h-3 w-3" />
                  </button>
                </Badge>
              ))}
            </div>

            <div className="flex gap-2">
              <Input
                placeholder="Add a research interest"
                value={newInterest}
                onChange={(e) => setNewInterest(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault()
                    handleAddInterest()
                  }
                }}
              />
              <Button onClick={handleAddInterest}>Add</Button>
            </div>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button onClick={handleSave} disabled={saving}>
              {saving ? "Saving..." : "Save Changes"}
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Current Research Projects</CardTitle>
            <CardDescription>Add details about your ongoing research projects.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="border p-4 rounded-md space-y-4">
              <div className="space-y-2">
                <Label htmlFor="projectTitle">Project Title</Label>
                <Input id="projectTitle" defaultValue="Advanced VLSI Design for Low-Power IoT Devices" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="projectDescription">Project Description</Label>
                <Textarea
                  id="projectDescription"
                  rows={3}
                  defaultValue="This project focuses on developing novel VLSI design techniques for ultra-low power IoT devices, with a specific emphasis on energy harvesting and power management circuits."
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="startDate">Start Date</Label>
                  <Input id="startDate" type="date" defaultValue="2022-01-01" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="endDate">End Date (Expected)</Label>
                  <Input id="endDate" type="date" defaultValue="2024-12-31" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="funding">Funding Source</Label>
                <Input id="funding" defaultValue="National Science Foundation (NSF)" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="collaborators">Collaborators</Label>
                <Input id="collaborators" defaultValue="Dr. Michael Chen, Dr. Emily Rodriguez" />
                <p className="text-sm text-muted-foreground">Comma-separated list of collaborators</p>
              </div>
            </div>

            <Button variant="outline" className="w-full">
              Add Another Project
            </Button>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button onClick={handleSave} disabled={saving}>
              {saving ? "Saving..." : "Save Changes"}
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Research Statement</CardTitle>
            <CardDescription>
              Provide a comprehensive statement about your research philosophy and goals.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <Textarea
                rows={8}
                defaultValue="My research focuses on developing innovative solutions for energy-efficient electronic systems, particularly in the context of IoT and embedded applications. I am passionate about bridging the gap between theoretical advancements in VLSI design and practical implementations that can make a real-world impact. My approach combines rigorous analytical methods with experimental validation to create robust and efficient systems."
              />
              <p className="text-sm text-muted-foreground">
                This statement will appear on your public profile and faculty directory listing.
              </p>
            </div>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button onClick={handleSave} disabled={saving}>
              {saving ? "Saving..." : "Save Changes"}
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

