"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { UserNav } from "@/components/user-nav"
import { ArrowLeft, ChevronRight, MessageSquare, Search, Send } from "lucide-react"
import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { toast } from "@/hooks/use-toast"

// Mock user data
const user = {
  name: "John Doe",
  email: "john.doe@example.com",
  image: "/placeholder.svg?height=200&width=200",
}

// Mock conversations data
const conversations = [
  {
    id: "conv-1",
    alumniName: "Dr. Jane Smith",
    alumniEmail: "jane.smith@example.com",
    alumniImage: "/placeholder.svg?height=100&width=100",
    lastMessage: "I've reviewed your materials and submitted the reference. Best of luck with your application!",
    timestamp: "2023-11-16T09:10:00Z",
    status: "approved",
    unread: true,
  },
  {
    id: "conv-2",
    alumniName: "Prof. Robert Johnson",
    alumniEmail: "robert.johnson@example.com",
    alumniImage: "/placeholder.svg?height=100&width=100",
    lastMessage:
      "I need more information about the position you're applying for. Could you please send me the job description?",
    timestamp: "2023-11-14T15:30:00Z",
    status: "pending",
    unread: false,
  },
  {
    id: "conv-3",
    alumniName: "Dr. Sarah Williams",
    alumniEmail: "sarah.williams@example.com",
    alumniImage: "/placeholder.svg?height=100&width=100",
    lastMessage:
      "I'm sorry, but I don't think I'm the best person to provide a reference for this particular position.",
    timestamp: "2023-11-10T11:45:00Z",
    status: "rejected",
    unread: false,
  },
]

// Mock messages for a conversation
const mockMessages = [
  {
    id: "msg-1",
    senderId: "user-1",
    senderName: "John Doe",
    senderImage: "/placeholder.svg?height=100&width=100",
    content:
      "Hello Dr. Smith, I hope this message finds you well. I wanted to ask if you would be willing to provide a reference for my job application at Tech Solutions Ltd.",
    timestamp: "2023-11-15T10:30:00Z",
  },
  {
    id: "msg-2",
    senderId: "alumni-1",
    senderName: "Dr. Jane Smith",
    senderImage: "/placeholder.svg?height=200&width=200",
    content:
      "Hello John, I hope you're doing well. I'd be happy to provide a reference for your job application. Could you please send me your resume and the job description?",
    timestamp: "2023-11-15T11:45:00Z",
  },
  {
    id: "msg-3",
    senderId: "user-1",
    senderName: "John Doe",
    senderImage: "/placeholder.svg?height=100&width=100",
    content:
      "Thank you so much, Dr. Smith! I really appreciate your willingness to help. I've attached my resume and the job description for your reference.",
    timestamp: "2023-11-15T13:20:00Z",
  },
  {
    id: "msg-4",
    senderId: "alumni-1",
    senderName: "Dr. Jane Smith",
    senderImage: "/placeholder.svg?height=200&width=200",
    content: "I've reviewed your materials and submitted the reference. Best of luck with your application!",
    timestamp: "2023-11-16T09:10:00Z",
  },
]

export default function UserMessagesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedConversation, setSelectedConversation] = useState<string | null>("conv-1") // Default to first conversation
  const [newMessage, setNewMessage] = useState("")
  const [messages, setMessages] = useState(mockMessages)
  const [isLoading, setIsLoading] = useState(false)

  // Filter conversations based on search query
  const filteredConversations = conversations.filter((conversation) =>
    conversation.alumniName.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  // Format date for display
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    const now = new Date()
    const diffDays = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24))

    if (diffDays === 0) {
      return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    } else if (diffDays === 1) {
      return "Yesterday"
    } else if (diffDays < 7) {
      return date.toLocaleDateString([], { weekday: "short" })
    } else {
      return date.toLocaleDateString([], { month: "short", day: "numeric" })
    }
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

  // Handle send message
  const handleSendMessage = async () => {
    if (!newMessage.trim() || !selectedConversation) return

    setIsLoading(true)
    try {
      // In a real app, you would send the message to your API
      const newMsg = {
        id: `msg-${messages.length + 1}`,
        senderId: "user-1",
        senderName: "John Doe",
        senderImage: "/placeholder.svg?height=100&width=100",
        content: newMessage,
        timestamp: new Date().toISOString(),
      }

      // Add the new message to the messages array
      setMessages([...messages, newMsg])
      setNewMessage("")

      // Simulate a delay
      await new Promise((resolve) => setTimeout(resolve, 500))
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-2">
            <Link href="/user/profile" className="inline-flex items-center">
              <ArrowLeft className="h-4 w-4 mr-1" />
              <span>Back to Profile</span>
            </Link>
            <h1 className="text-3xl font-bold ml-4">Reference Requests</h1>
          </div>
          <UserNav user={user} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-[calc(100vh-200px)] min-h-[500px]">
          {/* Conversations List */}
          <Card className="md:col-span-1 overflow-hidden flex flex-col">
            <CardHeader className="px-4 py-3">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search alumni..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-9"
                />
              </div>
            </CardHeader>
            <CardContent className="flex-1 overflow-auto p-0">
              {filteredConversations.length === 0 ? (
                <div className="text-center py-12">
                  <MessageSquare className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                  <h3 className="text-lg font-medium mb-2">No reference requests found</h3>
                  <p className="text-muted-foreground">You haven't sent any reference requests yet.</p>
                  <Button className="mt-4" asChild>
                    <Link href="/alumni">Browse Alumni</Link>
                  </Button>
                </div>
              ) : (
                <div className="divide-y">
                  {filteredConversations.map((conversation) => (
                    <div
                      key={conversation.id}
                      className={cn(
                        "flex items-center gap-3 p-4 cursor-pointer hover:bg-muted transition-colors",
                        selectedConversation === conversation.id && "bg-muted",
                      )}
                      onClick={() => setSelectedConversation(conversation.id)}
                    >
                      <div className="relative">
                        <Avatar>
                          <AvatarImage src={conversation.alumniImage} alt={conversation.alumniName} />
                          <AvatarFallback>
                            {conversation.alumniName
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        {conversation.unread && (
                          <span className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-blue-500" />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-center">
                          <h3 className={cn("font-medium truncate", conversation.unread && "font-semibold")}>
                            {conversation.alumniName}
                          </h3>
                          <span className="text-xs text-muted-foreground">{formatDate(conversation.timestamp)}</span>
                        </div>
                        <div className="flex items-center gap-2 mb-1">{getStatusBadge(conversation.status)}</div>
                        <p
                          className={cn(
                            "text-sm truncate text-muted-foreground",
                            conversation.unread && "text-foreground",
                          )}
                        >
                          {conversation.lastMessage}
                        </p>
                      </div>
                      <ChevronRight className="h-4 w-4 text-muted-foreground" />
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>

          {/* Message Thread */}
          <Card className="md:col-span-2 overflow-hidden flex flex-col">
            {selectedConversation ? (
              <>
                <CardHeader className="px-6 py-4 border-b">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarImage
                          src={filteredConversations.find((c) => c.id === selectedConversation)?.alumniImage}
                          alt={filteredConversations.find((c) => c.id === selectedConversation)?.alumniName}
                        />
                        <AvatarFallback>
                          {filteredConversations
                            .find((c) => c.id === selectedConversation)
                            ?.alumniName.split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-medium">
                          {filteredConversations.find((c) => c.id === selectedConversation)?.alumniName}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {filteredConversations.find((c) => c.id === selectedConversation)?.alumniEmail}
                        </p>
                      </div>
                    </div>
                    <div>
                      {getStatusBadge(filteredConversations.find((c) => c.id === selectedConversation)?.status || "")}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="flex-1 overflow-auto p-6 space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={cn(
                        "flex gap-3 max-w-[80%]",
                        message.senderId === "user-1" ? "ml-auto flex-row-reverse" : "",
                      )}
                    >
                      <Avatar className="h-8 w-8 flex-shrink-0">
                        <AvatarImage src={message.senderImage} alt={message.senderName} />
                        <AvatarFallback>
                          {message.senderName
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div
                          className={cn(
                            "rounded-lg p-3",
                            message.senderId === "user-1" ? "bg-primary text-primary-foreground" : "bg-muted",
                          )}
                        >
                          {message.content}
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">{formatDate(message.timestamp)}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
                <div className="p-4 border-t">
                  <div className="flex gap-2">
                    <Input
                      placeholder="Type a message..."
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" && !e.shiftKey) {
                          e.preventDefault()
                          handleSendMessage()
                        }
                      }}
                    />
                    <Button onClick={handleSendMessage} disabled={!newMessage.trim() || isLoading}>
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </>
            ) : (
              <div className="flex-1 flex items-center justify-center">
                <div className="text-center p-6">
                  <MessageSquare className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                  <h3 className="text-lg font-medium mb-2">No conversation selected</h3>
                  <p className="text-muted-foreground">Select a conversation from the list to view messages.</p>
                </div>
              </div>
            )}
          </Card>
        </div>
      </div>
    </div>
  )
}

