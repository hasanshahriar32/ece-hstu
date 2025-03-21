"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, FileText, Trash2 } from "lucide-react"

export default function FacultyPublicationsPage() {
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
        <h1 className="text-2xl font-bold tracking-tight">Publications</h1>
        <p className="text-muted-foreground">
          Manage your research publications, including journal articles, conference papers, and books.
        </p>
      </div>

      <Tabs defaultValue="add">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="add">Add Publication</TabsTrigger>
          <TabsTrigger value="manage">Manage Publications</TabsTrigger>
        </TabsList>

        <TabsContent value="add" className="space-y-4 mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Add New Publication</CardTitle>
              <CardDescription>Enter the details of your new publication.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="pubTitle">Publication Title</Label>
                <Input id="pubTitle" placeholder="Enter the full title of your publication" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="pubType">Publication Type</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select publication type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="journal">Journal Article</SelectItem>
                    <SelectItem value="conference">Conference Paper</SelectItem>
                    <SelectItem value="book">Book</SelectItem>
                    <SelectItem value="bookChapter">Book Chapter</SelectItem>
                    <SelectItem value="patent">Patent</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="authors">Authors</Label>
                <Input id="authors" placeholder="e.g., Johnson, S., Chen, M., Rodriguez, E." />
                <p className="text-sm text-muted-foreground">
                  List all authors in the order they appear on the publication.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="journalConference">Journal/Conference Name</Label>
                  <Input id="journalConference" placeholder="e.g., IEEE Transactions on VLSI Systems" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="year">Publication Year</Label>
                  <Input id="year" type="number" placeholder="e.g., 2023" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="volume">Volume</Label>
                  <Input id="volume" placeholder="e.g., 31" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="issue">Issue</Label>
                  <Input id="issue" placeholder="e.g., 4" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="pages">Pages</Label>
                  <Input id="pages" placeholder="e.g., 123-145" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="doi">DOI</Label>
                  <Input id="doi" placeholder="e.g., 10.1109/TVLSI.2022.1234567" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="abstract">Abstract</Label>
                <Textarea id="abstract" rows={4} placeholder="Enter the abstract of your publication" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="keywords">Keywords</Label>
                <Input id="keywords" placeholder="e.g., VLSI, Low-Power, IoT, Energy Efficiency" />
                <p className="text-sm text-muted-foreground">Comma-separated list of keywords</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="pdfUpload">Upload PDF</Label>
                <Input id="pdfUpload" type="file" accept=".pdf" />
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button onClick={handleSave} disabled={saving}>
                {saving ? "Saving..." : "Add Publication"}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="manage" className="space-y-4 mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Your Publications</CardTitle>
              <CardDescription>View and manage your existing publications.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="border p-4 rounded-md">
                  <div className="flex justify-between items-start">
                    <div className="flex items-start gap-3">
                      <BookOpen className="h-5 w-5 mt-1 text-muted-foreground" />
                      <div>
                        <h3 className="font-medium">Advanced VLSI Design Techniques for Low-Power Applications</h3>
                        <p className="text-sm text-muted-foreground">IEEE Transactions on VLSI Systems (2022)</p>
                        <p className="text-sm mt-1">Johnson, S., Chen, M., et al.</p>
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
                      <FileText className="h-5 w-5 mt-1 text-muted-foreground" />
                      <div>
                        <h3 className="font-medium">Energy-Efficient IoT Architectures: A Comprehensive Review</h3>
                        <p className="text-sm text-muted-foreground">
                          International Conference on IoT Technologies (2021)
                        </p>
                        <p className="text-sm mt-1">Johnson, S., Rodriguez, E., et al.</p>
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
                      <BookOpen className="h-5 w-5 mt-1 text-muted-foreground" />
                      <div>
                        <h3 className="font-medium">Power-Aware Design Methodologies for Embedded Systems</h3>
                        <p className="text-sm text-muted-foreground">
                          IEEE Transactions on Computer-Aided Design (2020)
                        </p>
                        <p className="text-sm mt-1">Johnson, S., Kim, R., et al.</p>
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

              <div className="flex justify-center mt-4">
                <Button variant="outline">Load More</Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Publication Statistics</CardTitle>
              <CardDescription>Overview of your publication metrics.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="border rounded-md p-4 text-center">
                  <div className="text-2xl font-bold">8</div>
                  <div className="text-sm text-muted-foreground">Journal Articles</div>
                </div>
                <div className="border rounded-md p-4 text-center">
                  <div className="text-2xl font-bold">4</div>
                  <div className="text-sm text-muted-foreground">Conference Papers</div>
                </div>
                <div className="border rounded-md p-4 text-center">
                  <div className="text-2xl font-bold">2</div>
                  <div className="text-sm text-muted-foreground">Book Chapters</div>
                </div>
                <div className="border rounded-md p-4 text-center">
                  <div className="text-2xl font-bold">120+</div>
                  <div className="text-sm text-muted-foreground">Citations</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

