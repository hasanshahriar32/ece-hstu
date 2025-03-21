"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Award, Trash2 } from "lucide-react"

export default function FacultyAchievementsPage() {
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
        <h1 className="text-2xl font-bold tracking-tight">Achievements</h1>
        <p className="text-muted-foreground">Manage your awards, honors, and professional achievements.</p>
      </div>

      <div className="grid grid-cols-1 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Add New Achievement</CardTitle>
            <CardDescription>Enter the details of your new award or achievement.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="achievementTitle">Achievement Title</Label>
              <Input id="achievementTitle" placeholder="e.g., IEEE Fellow" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="achievementType">Achievement Type</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select achievement type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="award">Award</SelectItem>
                  <SelectItem value="honor">Honor</SelectItem>
                  <SelectItem value="fellowship">Fellowship</SelectItem>
                  <SelectItem value="grant">Grant</SelectItem>
                  <SelectItem value="recognition">Recognition</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="issuingOrganization">Issuing Organization</Label>
                <Input id="issuingOrganization" placeholder="e.g., IEEE" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="year">Year</Label>
                <Input id="year" type="number" placeholder="e.g., 2022" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea id="description" rows={3} placeholder="Describe the achievement and its significance" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="certificateUpload">Upload Certificate (if applicable)</Label>
              <Input id="certificateUpload" type="file" accept=".pdf,.jpg,.png" />
            </div>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button onClick={handleSave} disabled={saving}>
              {saving ? "Saving..." : "Add Achievement"}
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Your Achievements</CardTitle>
            <CardDescription>View and manage your existing achievements.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-4">
              <div className="border p-4 rounded-md">
                <div className="flex justify-between items-start">
                  <div className="flex items-start gap-3">
                    <Award className="h-5 w-5 mt-1 text-muted-foreground" />
                    <div>
                      <h3 className="font-medium">IEEE Fellow</h3>
                      <p className="text-sm text-muted-foreground">IEEE (2020)</p>
                      <p className="text-sm mt-1">
                        Recognized for contributions to low-power VLSI design and embedded systems.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      Edit
                    </Button>
                    <Button variant="ghost" size="sm" className="text-destructive">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>

              <div className="border p-4 rounded-md">
                <div className="flex justify-between items-start">
                  <div className="flex items-start gap-3">
                    <Award className="h-5 w-5 mt-1 text-muted-foreground" />
                    <div>
                      <h3 className="font-medium">Best Paper Award</h3>
                      <p className="text-sm text-muted-foreground">International Conference on VLSI Design (2019)</p>
                      <p className="text-sm mt-1">
                        For the paper "Energy-Efficient Circuit Design for IoT Applications".
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      Edit
                    </Button>
                    <Button variant="ghost" size="sm" className="text-destructive">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>

              <div className="border p-4 rounded-md">
                <div className="flex justify-between items-start">
                  <div className="flex items-start gap-3">
                    <Award className="h-5 w-5 mt-1 text-muted-foreground" />
                    <div>
                      <h3 className="font-medium">University Research Excellence Award</h3>
                      <p className="text-sm text-muted-foreground">University (2018)</p>
                      <p className="text-sm mt-1">Awarded for outstanding contributions to research and innovation.</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      Edit
                    </Button>
                    <Button variant="ghost" size="sm" className="text-destructive">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Professional Memberships</CardTitle>
            <CardDescription>Add your professional society memberships and roles.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-4">
              <div className="border p-4 rounded-md">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="organization1">Organization</Label>
                    <Input id="organization1" defaultValue="IEEE" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="memberSince1">Member Since</Label>
                    <Input id="memberSince1" type="number" defaultValue="2005" />
                  </div>
                </div>
                <div className="space-y-2 mt-4">
                  <Label htmlFor="role1">Role/Membership Level</Label>
                  <Input id="role1" defaultValue="Fellow" />
                </div>
              </div>

              <div className="border p-4 rounded-md">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="organization2">Organization</Label>
                    <Input id="organization2" defaultValue="ACM" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="memberSince2">Member Since</Label>
                    <Input id="memberSince2" type="number" defaultValue="2008" />
                  </div>
                </div>
                <div className="space-y-2 mt-4">
                  <Label htmlFor="role2">Role/Membership Level</Label>
                  <Input id="role2" defaultValue="Senior Member" />
                </div>
              </div>
            </div>

            <Button variant="outline" className="w-full">
              Add Another Membership
            </Button>
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

