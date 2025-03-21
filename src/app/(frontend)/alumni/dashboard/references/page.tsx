"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { UserNav } from "@/components/user-nav"
import { ArrowLeft, Calendar, ExternalLink, Eye, MessageSquare, Search, ThumbsDown, ThumbsUp } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { toast } from "@/hooks/use-toast"

// Mock user data
const user = {
  name: "Dr. Jane Smith",
  email: "jane.smith@example.com",
  image: "/placeholder.svg?height=200&width=200",
}

// Mock reference requests data
const referenceRequests = [
  {
    id: "ref-1",
    studentName: "Ahmed Khan",
    studentEmail: "ahmed.khan@example.com",
    studentImage: "/placeholder.svg?height=100&width=100",
    studentBatch: "2020",
    studentId: "2020331001",
    position: "Software Engineer",
    company: "Tech Solutions Ltd.",
    message:
      "I am applying for a Software Engineer position at Tech Solutions Ltd. I was impressed by your research on signal processing and would be grateful if you could provide a reference for my application. I have attached my resume and portfolio for your review.",
    resumeLink: "https://example.com/resume",
    portfolioLink: "https://example.com/portfolio",
    linkedinLink: "https://linkedin.com/in/ahmedkhan",
    status: "pending",
    date: "2023-11-15T10:30:00Z",
  },
  {
    id: "ref-2",
    studentName: "Sarah Johnson",
    studentEmail: "sarah.johnson@example.com",
    studentImage: "/placeholder.svg?height=100&width=100",
    studentBatch: "2019",
    studentId: "2019331005",
    position: "Research Assistant",
    company: "Advanced Research Institute",
    message:
      "I am applying for a Research Assistant position at the Advanced Research Institute. I was in your Signal Processing class and would appreciate if you could provide a reference for my application. I have attached my resume and research portfolio.",
    resumeLink: "https://example.com/resume",
    portfolioLink: "https://example.com/portfolio",
    linkedinLink: "https://linkedin.com/in/sarahjohnson",
    status: "approved",
    date: "2023-11-10T14:15:00Z",
  },
  {
    id: "ref-3",
    studentName: "Michael Lee",
    studentEmail: "michael.lee@example.com",
    studentImage: "/placeholder.svg?height=100&width=100",
    studentBatch: "2021",
    studentId: "2021331012",
    position: "Graduate Program",
    company: "University of Technology",
    message:
      "I am applying for the Graduate Program in Signal Processing at the University of Technology. I would be grateful if you could provide a reference for my application. I have attached my academic transcript and research proposal.",
    resumeLink: "https://example.com/resume",
    portfolioLink: "https://example.com/portfolio",
    linkedinLink: "https://linkedin.com/in/michaellee",
    status: "rejected",
    date: "2023-11-05T09:45:00Z",
  },
  {
    id: "ref-4",
    studentName: "Fatima Rahman",
    studentEmail: "fatima.rahman@example.com",
    studentImage: "/placeholder.svg?height=100&width=100",
    studentBatch: "2018",
    studentId: "2018331008",
    position: "PhD Program",
    company: "International University",
    message:
      "I am applying for the PhD Program in Wireless Communications at International University. I would be grateful if you could provide a reference for my application. I have attached my research proposal and academic transcript.",
    resumeLink: "https://example.com/resume",
    portfolioLink: "https://example.com/portfolio",
    linkedinLink: "https://linkedin.com/in/fatimarahman",
    status: "pending",
    date: "2023-11-02T16:20:00Z",
  },
]

export default function ReferenceRequestsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [selectedRequest, setSelectedRequest] = useState<(typeof referenceRequests)[0] | null>(null)
  const [isViewModalOpen, setIsViewModalOpen] = useState(false)
  const [isReplyModalOpen, setIsReplyModalOpen] = useState(false)
  const [replyMessage, setReplyMessage] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  // Filter reference requests based on search query and status filter
  const filteredRequests = referenceRequests.filter((request) => {
    const matchesSearch =
      request.studentName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      request.position.toLowerCase().includes(searchQuery.toLowerCase()) ||
      request.company.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesStatus = statusFilter === "all" || request.status === statusFilter

    return matchesSearch && matchesStatus
  })

  // Format date for display
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: "numeric", month: "long", day: "numeric" }
    return new Date(dateString).toLocaleDateString("en-US", options)
  }

  // Get status badge
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "pending":
        return <Badge className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300">Pending</Badge>
      case "approved":
        return <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">Approved</Badge>
      case "rejected":
        return <Badge className="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300">Rejected</Badge>
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }

  // Handle approve request
  const handleApprove = async () => {
    if (!selectedRequest) return

    setIsLoading(true)
    try {
      // In a real app, you would send the approval to your API
      console.log("Approving request:", selectedRequest.id, replyMessage)

      // Simulate a delay
      await new Promise((resolve) => setTimeout(resolve, 1000))

      toast({
        title: "Reference request approved",
        description: "Your response has been sent to the student.",
      })

      setIsReplyModalOpen(false)
      setReplyMessage("")
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to approve reference request. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  // Handle reject request
  const handleReject = async () => {
    if (!selectedRequest) return

    setIsLoading(true)
    try {
      // In a real app, you would send the rejection to your API
      console.log("Rejecting request:", selectedRequest.id, replyMessage)

      // Simulate a delay
      await new Promise((resolve) => setTimeout(resolve, 1000))

      toast({
        title: "Reference request rejected",
        description: "Your response has been sent to the student.",
      })

      setIsReplyModalOpen(false)
      setReplyMessage("")
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to reject reference request. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
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
            <h1 className="text-3xl font-bold ml-4">Reference Requests</h1>
          </div>
          <UserNav user={user} />
        </div>

        <Card className="mb-6">
          <CardContent className="p-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search by student name, position, or company..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-9"
                />
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm whitespace-nowrap">Status:</span>
                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger className="w-[150px]">
                    <SelectValue placeholder="All Statuses" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Statuses</SelectItem>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="approved">Approved</SelectItem>
                    <SelectItem value="rejected">Rejected</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        {filteredRequests.length === 0 ? (
          <div className="text-center py-12">
            <MessageSquare className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
            <h3 className="text-lg font-medium mb-2">No reference requests found</h3>
            <p className="text-muted-foreground">
              No reference requests match your search criteria. Try adjusting your filters.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredRequests.map((request) => (
              <Card key={request.id} className="overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-shrink-0">
                      <Avatar className="h-16 w-16">
                        <AvatarImage src={request.studentImage} alt={request.studentName} />
                        <AvatarFallback>
                          {request.studentName
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                        <h3 className="text-lg font-medium">{request.studentName}</h3>
                        <div className="flex items-center mt-1 md:mt-0">
                          <Calendar className="h-4 w-4 mr-1 text-muted-foreground" />
                          <span className="text-sm text-muted-foreground">{formatDate(request.date)}</span>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2 mb-2">
                        {getStatusBadge(request.status)}
                        <Badge variant="outline">{request.position}</Badge>
                        <Badge variant="outline">{request.company}</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">
                        Batch: {request.studentBatch} | Student ID: {request.studentId}
                      </p>
                      <p className="text-sm line-clamp-2 mb-3">{request.message}</p>
                      <div className="flex flex-wrap gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => {
                            setSelectedRequest(request)
                            setIsViewModalOpen(true)
                          }}
                        >
                          <Eye className="h-4 w-4 mr-2" />
                          View Details
                        </Button>
                        {request.status === "pending" && (
                          <Button
                            size="sm"
                            onClick={() => {
                              setSelectedRequest(request)
                              setIsReplyModalOpen(true)
                            }}
                          >
                            <MessageSquare className="h-4 w-4 mr-2" />
                            Respond
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* View Request Modal */}
        <Dialog open={isViewModalOpen} onOpenChange={setIsViewModalOpen}>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Reference Request Details</DialogTitle>
              <DialogDescription>Review the details of this reference request</DialogDescription>
            </DialogHeader>
            {selectedRequest && (
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src={selectedRequest.studentImage} alt={selectedRequest.studentName} />
                    <AvatarFallback>
                      {selectedRequest.studentName
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-medium">{selectedRequest.studentName}</h3>
                    <p className="text-sm text-muted-foreground">{selectedRequest.studentEmail}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>
                    <p className="text-muted-foreground">Batch</p>
                    <p>{selectedRequest.studentBatch}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Student ID</p>
                    <p>{selectedRequest.studentId}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Position</p>
                    <p>{selectedRequest.position}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Company/Institution</p>
                    <p>{selectedRequest.company}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Status</p>
                    <p>{getStatusBadge(selectedRequest.status)}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Date Requested</p>
                    <p>{formatDate(selectedRequest.date)}</p>
                  </div>
                </div>

                <div>
                  <p className="text-muted-foreground text-sm mb-1">Message</p>
                  <div className="border rounded-md p-3 text-sm">{selectedRequest.message}</div>
                </div>

                <div>
                  <p className="text-muted-foreground text-sm mb-1">Links</p>
                  <div className="flex flex-wrap gap-2">
                    {selectedRequest.resumeLink && (
                      <Link
                        href={selectedRequest.resumeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm text-blue-500 hover:underline"
                      >
                        Resume <ExternalLink className="h-3 w-3 ml-1" />
                      </Link>
                    )}
                    {selectedRequest.portfolioLink && (
                      <Link
                        href={selectedRequest.portfolioLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm text-blue-500 hover:underline"
                      >
                        Portfolio <ExternalLink className="h-3 w-3 ml-1" />
                      </Link>
                    )}
                    {selectedRequest.linkedinLink && (
                      <Link
                        href={selectedRequest.linkedinLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm text-blue-500 hover:underline"
                      >
                        LinkedIn <ExternalLink className="h-3 w-3 ml-1" />
                      </Link>
                    )}
                  </div>
                </div>

                {selectedRequest.status === "pending" && (
                  <div className="flex justify-end gap-2">
                    <Button
                      variant="outline"
                      onClick={() => {
                        setIsViewModalOpen(false)
                        setIsReplyModalOpen(true)
                      }}
                    >
                      Respond to Request
                    </Button>
                  </div>
                )}
              </div>
            )}
          </DialogContent>
        </Dialog>

        {/* Reply Modal */}
        <Dialog open={isReplyModalOpen} onOpenChange={setIsReplyModalOpen}>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Respond to Reference Request</DialogTitle>
              <DialogDescription>
                Approve or reject this reference request from {selectedRequest?.studentName}
              </DialogDescription>
            </DialogHeader>
            {selectedRequest && (
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src={selectedRequest.studentImage} alt={selectedRequest.studentName} />
                    <AvatarFallback>
                      {selectedRequest.studentName
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-medium">{selectedRequest.studentName}</h3>
                    <p className="text-sm text-muted-foreground">
                      {selectedRequest.position} at {selectedRequest.company}
                    </p>
                  </div>
                </div>

                <div>
                  <label htmlFor="reply-message" className="text-sm font-medium">
                    Message (Optional)
                  </label>
                  <textarea
                    id="reply-message"
                    className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    rows={5}
                    placeholder="Add a message to the student..."
                    value={replyMessage}
                    onChange={(e) => setReplyMessage(e.target.value)}
                  />
                </div>

                <div className="flex justify-end gap-2">
                  <Button variant="outline" onClick={() => setIsReplyModalOpen(false)} disabled={isLoading}>
                    Cancel
                  </Button>
                  <Button variant="destructive" onClick={handleReject} disabled={isLoading}>
                    <ThumbsDown className="h-4 w-4 mr-2" />
                    {isLoading ? "Rejecting..." : "Reject Request"}
                  </Button>
                  <Button onClick={handleApprove} disabled={isLoading}>
                    <ThumbsUp className="h-4 w-4 mr-2" />
                    {isLoading ? "Approving..." : "Approve Request"}
                  </Button>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}

