"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { UserNav } from "@/components/user-nav"
import { Award, Briefcase, Calendar, FileText, MessageSquare, User, Users } from "lucide-react"
import Link from "next/link"

// Mock user data
const user = {
  name: "Dr. Jane Smith",
  email: "jane.smith@example.com",
  image: "/placeholder.svg?height=200&width=200",
  batch: "2010",
  department: "ECE",
  designation: "Senior Research Scientist",
  company: "Tech Innovations Inc.",
}

// Mock stats data
const stats = [
  { title: "Reference Requests", value: "12", icon: MessageSquare, color: "text-blue-500" },
  { title: "Publications", value: "8", icon: FileText, color: "text-green-500" },
  { title: "Achievements", value: "15", icon: Award, color: "text-amber-500" },
  { title: "Events Attended", value: "6", icon: Calendar, color: "text-purple-500" },
]

// Mock recent activities
const recentActivities = [
  {
    type: "reference_request",
    title: "New Reference Request",
    description: "Ahmed Khan requested a reference for Software Engineer position",
    date: "2 hours ago",
    link: "/alumni/dashboard/references",
  },
  {
    type: "achievement",
    title: "Achievement Added",
    description: "You added 'Best Paper Award at IEEE Conference 2023'",
    date: "2 days ago",
    link: "/alumni/dashboard/professional",
  },
  {
    type: "event",
    title: "Event Registration",
    description: "You registered for 'Annual Alumni Meetup 2023'",
    date: "1 week ago",
    link: "/events/annual-meetup-2023",
  },
  {
    type: "profile",
    title: "Profile Updated",
    description: "You updated your professional information",
    date: "2 weeks ago",
    link: "/alumni/dashboard/profile",
  },
]

// Mock upcoming events
const upcomingEvents = [
  {
    id: "event-1",
    title: "Annual Alumni Meetup 2023",
    date: "December 15, 2023",
    location: "HSTU Campus",
    description: "Join us for the annual alumni gathering and networking event.",
  },
  {
    id: "event-2",
    title: "Industry-Academia Collaboration Workshop",
    date: "January 10, 2024",
    location: "Virtual",
    description: "A workshop focused on strengthening ties between industry and academia.",
  },
]

export default function AlumniDashboard() {
  const [activeTab, setActiveTab] = useState("overview")

  const getActivityIcon = (type: string) => {
    switch (type) {
      case "reference_request":
        return <MessageSquare className="h-5 w-5 text-blue-500" />
      case "achievement":
        return <Award className="h-5 w-5 text-amber-500" />
      case "event":
        return <Calendar className="h-5 w-5 text-purple-500" />
      case "profile":
        return <User className="h-5 w-5 text-green-500" />
      default:
        return <FileText className="h-5 w-5 text-gray-500" />
    }
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Alumni Dashboard</h1>
          <UserNav user={user} />
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid grid-cols-5 max-w-3xl">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="professional">Professional</TabsTrigger>
            <TabsTrigger value="references">References</TabsTrigger>
            <TabsTrigger value="messages">Messages</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Welcome Card */}
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Welcome back, {user.name}!</CardTitle>
                <CardDescription>
                  Batch of {user.batch} | {user.designation} at {user.company}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Thank you for being an active member of our alumni network. Your contributions help strengthen our
                  community and inspire current students.
                </p>
              </CardContent>
            </Card>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <Card key={index}>
                  <CardContent className="p-6 flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                      <p className="text-3xl font-bold">{stat.value}</p>
                    </div>
                    <stat.icon className={`h-8 w-8 ${stat.color}`} />
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Recent Activity and Upcoming Events */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Recent Activity */}
              <Card>
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                  <CardDescription>Your latest interactions and updates</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentActivities.map((activity, index) => (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="mt-1">{getActivityIcon(activity.type)}</div>
                        <div className="flex-1 space-y-1">
                          <div className="flex items-center justify-between">
                            <p className="text-sm font-medium">{activity.title}</p>
                            <span className="text-xs text-muted-foreground">{activity.date}</span>
                          </div>
                          <p className="text-sm text-muted-foreground">{activity.description}</p>
                          <Link href={activity.link} className="text-xs text-blue-500 hover:underline">
                            View details
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Upcoming Events */}
              <Card>
                <CardHeader>
                  <CardTitle>Upcoming Events</CardTitle>
                  <CardDescription>Events you might be interested in</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {upcomingEvents.map((event) => (
                      <div key={event.id} className="border rounded-lg p-4">
                        <h3 className="font-medium">{event.title}</h3>
                        <div className="flex items-center text-sm text-muted-foreground mt-1">
                          <Calendar className="h-4 w-4 mr-2" />
                          <span>{event.date}</span>
                        </div>
                        <div className="text-sm mt-2">{event.description}</div>
                        <Link
                          href={`/events/${event.id}`}
                          className="text-xs text-blue-500 hover:underline mt-2 inline-block"
                        >
                          View event details
                        </Link>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Quick Links */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Links</CardTitle>
                <CardDescription>Frequently accessed pages and resources</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <Link href="/alumni/dashboard/profile">
                    <div className="border rounded-lg p-4 text-center hover:bg-muted transition-colors">
                      <User className="h-6 w-6 mx-auto mb-2" />
                      <span className="text-sm font-medium">Update Profile</span>
                    </div>
                  </Link>
                  <Link href="/alumni/dashboard/professional">
                    <div className="border rounded-lg p-4 text-center hover:bg-muted transition-colors">
                      <Briefcase className="h-6 w-6 mx-auto mb-2" />
                      <span className="text-sm font-medium">Professional Info</span>
                    </div>
                  </Link>
                  <Link href="/alumni/dashboard/references">
                    <div className="border rounded-lg p-4 text-center hover:bg-muted transition-colors">
                      <MessageSquare className="h-6 w-6 mx-auto mb-2" />
                      <span className="text-sm font-medium">Reference Requests</span>
                    </div>
                  </Link>
                  <Link href="/alumni">
                    <div className="border rounded-lg p-4 text-center hover:bg-muted transition-colors">
                      <Users className="h-6 w-6 mx-auto mb-2" />
                      <span className="text-sm font-medium">Alumni Network</span>
                    </div>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="profile">
            <Card>
              <CardHeader>
                <CardTitle>Profile Management</CardTitle>
                <CardDescription>Manage your personal and contact information</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <p>This tab will redirect to the profile management page.</p>
                <Link href="/alumni/dashboard/profile" className="text-blue-500 hover:underline">
                  Go to Profile Management
                </Link>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="professional">
            <Card>
              <CardHeader>
                <CardTitle>Professional Information</CardTitle>
                <CardDescription>Manage your career, research, and achievements</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <p>This tab will redirect to the professional information management page.</p>
                <Link href="/alumni/dashboard/professional" className="text-blue-500 hover:underline">
                  Go to Professional Information
                </Link>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="references">
            <Card>
              <CardHeader>
                <CardTitle>Reference Requests</CardTitle>
                <CardDescription>Manage reference requests from students</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <p>This tab will redirect to the reference requests management page.</p>
                <Link href="/alumni/dashboard/references" className="text-blue-500 hover:underline">
                  Go to Reference Requests
                </Link>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="messages">
            <Card>
              <CardHeader>
                <CardTitle>Messages</CardTitle>
                <CardDescription>View and respond to messages from students and other alumni</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <p>This tab will redirect to the messaging system.</p>
                <Link href="/alumni/dashboard/messages" className="text-blue-500 hover:underline">
                  Go to Messages
                </Link>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

