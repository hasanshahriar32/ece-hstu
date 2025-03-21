"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { ChevronLeft, ChevronRight, Download, Share2 } from "lucide-react"

// Mock data for gallery
const galleryData = {
  events: [
    {
      id: "tech-fest-2023",
      title: "Tech Fest 2023",
      date: "September 15-17, 2023",
      description:
        "The biggest technical festival organized by the Department of Electronics and Communication Engineering.",
      coverImage: "/placeholder.svg?height=400&width=600",
      images: [
        { id: 1, src: "/placeholder.svg?height=800&width=1200", caption: "Opening ceremony with the Vice-Chancellor" },
        { id: 2, src: "/placeholder.svg?height=800&width=1200", caption: "Project exhibition by final year students" },
        {
          id: 3,
          src: "/placeholder.svg?height=800&width=1200",
          caption: "Hackathon participants working on their projects",
        },
        { id: 4, src: "/placeholder.svg?height=800&width=1200", caption: "Technical paper presentation session" },
        { id: 5, src: "/placeholder.svg?height=800&width=1200", caption: "Industry experts panel discussion" },
        { id: 6, src: "/placeholder.svg?height=800&width=1200", caption: "Award ceremony for the best projects" },
      ],
    },
    {
      id: "alumni-reunion-2023",
      title: "Alumni Reunion 2023",
      date: "October 20-21, 2023",
      description: "Annual reunion of ECE alumni connecting current students with graduates.",
      coverImage: "/placeholder.svg?height=400&width=600",
      images: [
        { id: 1, src: "/placeholder.svg?height=800&width=1200", caption: "Alumni registration desk" },
        { id: 2, src: "/placeholder.svg?height=800&width=1200", caption: "Welcome speech by the Department Chairman" },
        { id: 3, src: "/placeholder.svg?height=800&width=1200", caption: "Alumni-student networking session" },
        { id: 4, src: "/placeholder.svg?height=800&width=1200", caption: "Panel discussion on career opportunities" },
        { id: 5, src: "/placeholder.svg?height=800&width=1200", caption: "Cultural program by students" },
        { id: 6, src: "/placeholder.svg?height=800&width=1200", caption: "Group photo of alumni from batch 2015" },
      ],
    },
  ],
  workshops: [
    {
      id: "iot-workshop",
      title: "Introduction to IoT Workshop",
      date: "June 15, 2023",
      description: "Hands-on workshop on Internet of Things basics and applications.",
      coverImage: "/placeholder.svg?height=400&width=600",
      images: [
        { id: 1, src: "/placeholder.svg?height=800&width=1200", caption: "Workshop introduction by Dr. Aminul Islam" },
        { id: 2, src: "/placeholder.svg?height=800&width=1200", caption: "Students working with Arduino boards" },
        { id: 3, src: "/placeholder.svg?height=800&width=1200", caption: "IoT sensor demonstration" },
        { id: 4, src: "/placeholder.svg?height=800&width=1200", caption: "Group project work session" },
      ],
    },
    {
      id: "pcb-design-workshop",
      title: "PCB Design Workshop",
      date: "June 22, 2023",
      description: "Workshop on PCB design using industry-standard tools.",
      coverImage: "/placeholder.svg?height=400&width=600",
      images: [
        { id: 1, src: "/placeholder.svg?height=800&width=1200", caption: "Introduction to PCB design software" },
        { id: 2, src: "/placeholder.svg?height=800&width=1200", caption: "Students designing their first PCB" },
        { id: 3, src: "/placeholder.svg?height=800&width=1200", caption: "Instructor helping with complex routing" },
        { id: 4, src: "/placeholder.svg?height=800&width=1200", caption: "Finished PCB designs by participants" },
      ],
    },
  ],
  cultural: [
    {
      id: "cultural-night-2023",
      title: "Annual Cultural Night 2023",
      date: "August 10, 2023",
      description: "A night of music, dance, and drama performances by ECE students.",
      coverImage: "/placeholder.svg?height=400&width=600",
      images: [
        { id: 1, src: "/placeholder.svg?height=800&width=1200", caption: "Opening dance performance" },
        { id: 2, src: "/placeholder.svg?height=800&width=1200", caption: "Musical band performance" },
        { id: 3, src: "/placeholder.svg?height=800&width=1200", caption: "Drama presentation by final year students" },
        { id: 4, src: "/placeholder.svg?height=800&width=1200", caption: "Solo singing performance" },
        { id: 5, src: "/placeholder.svg?height=800&width=1200", caption: "Group photo of all performers" },
      ],
    },
    {
      id: "photography-exhibition",
      title: "Photography Exhibition",
      date: "August 15, 2023",
      description: "Exhibition of photographs taken by ECE students and faculty.",
      coverImage: "/placeholder.svg?height=400&width=600",
      images: [
        { id: 1, src: "/placeholder.svg?height=800&width=1200", caption: "Exhibition inauguration by the Chairman" },
        { id: 2, src: "/placeholder.svg?height=800&width=1200", caption: "Nature photography section" },
        { id: 3, src: "/placeholder.svg?height=800&width=1200", caption: "Portrait photography display" },
        { id: 4, src: "/placeholder.svg?height=800&width=1200", caption: "Technical photography collection" },
        { id: 5, src: "/placeholder.svg?height=800&width=1200", caption: "Award ceremony for best photographs" },
      ],
    },
  ],
}

export default function GalleryPage() {
  const [selectedAlbum, setSelectedAlbum] = useState<any>(null)
  const [selectedImage, setSelectedImage] = useState<any>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const handleAlbumClick = (album: any) => {
    setSelectedAlbum(album)
    setSelectedImage(album.images[0])
    setCurrentImageIndex(0)
  }

  const handleImageClick = (image: any, index: number) => {
    setSelectedImage(image)
    setCurrentImageIndex(index)
  }

  const nextImage = () => {
    if (selectedAlbum && currentImageIndex < selectedAlbum.images.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1)
      setSelectedImage(selectedAlbum.images[currentImageIndex + 1])
    }
  }

  const prevImage = () => {
    if (selectedAlbum && currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1)
      setSelectedImage(selectedAlbum.images[currentImageIndex - 1])
    }
  }

  const closeAlbum = () => {
    setSelectedAlbum(null)
    setSelectedImage(null)
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Photo Gallery</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore moments from our events, workshops, and cultural activities through our photo gallery.
          </p>
        </div>

        {selectedAlbum ? (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <Button variant="outline" onClick={closeAlbum}>
                <ChevronLeft className="h-4 w-4 mr-2" />
                Back to Albums
              </Button>
              <h2 className="text-2xl font-bold">{selectedAlbum.title}</h2>
              <div className="w-[100px]"></div> {/* Spacer for alignment */}
            </div>

            <Dialog>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {selectedAlbum.images.map((image: any, index: number) => (
                  <DialogTrigger key={image.id} asChild>
                    <Card
                      className="overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
                      onClick={() => handleImageClick(image, index)}
                    >
                      <CardContent className="p-0">
                        <div className="aspect-[4/3] relative">
                          <img
                            src={image.src || "/placeholder.svg"}
                            alt={image.caption}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </CardContent>
                    </Card>
                  </DialogTrigger>
                ))}
              </div>

              <DialogContent className="max-w-4xl w-[90vw]">
                {selectedImage && (
                  <>
                    <DialogHeader>
                      <DialogTitle>{selectedAlbum.title}</DialogTitle>
                      <DialogDescription>{selectedImage.caption}</DialogDescription>
                    </DialogHeader>

                    <div className="relative">
                      <img
                        src={selectedImage.src || "/placeholder.svg"}
                        alt={selectedImage.caption}
                        className="w-full rounded-md"
                      />

                      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 flex justify-between w-full px-4">
                        <Button
                          variant="outline"
                          size="icon"
                          className="bg-background/80 rounded-full"
                          onClick={prevImage}
                          disabled={currentImageIndex === 0}
                        >
                          <ChevronLeft className="h-6 w-6" />
                        </Button>
                        <Button
                          variant="outline"
                          size="icon"
                          className="bg-background/80 rounded-full"
                          onClick={nextImage}
                          disabled={currentImageIndex === selectedAlbum.images.length - 1}
                        >
                          <ChevronRight className="h-6 w-6" />
                        </Button>
                      </div>
                    </div>

                    <div className="flex justify-between items-center">
                      <div className="text-sm text-muted-foreground">
                        Image {currentImageIndex + 1} of {selectedAlbum.images.length}
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Download className="h-4 w-4 mr-2" />
                          Download
                        </Button>
                        <Button variant="outline" size="sm">
                          <Share2 className="h-4 w-4 mr-2" />
                          Share
                        </Button>
                      </div>
                    </div>
                  </>
                )}
              </DialogContent>
            </Dialog>
          </div>
        ) : (
          <Tabs defaultValue="events">
            <TabsList className="grid w-full grid-cols-3 mb-8 max-w-md mx-auto">
              <TabsTrigger value="events">Events</TabsTrigger>
              <TabsTrigger value="workshops">Workshops</TabsTrigger>
              <TabsTrigger value="cultural">Cultural</TabsTrigger>
            </TabsList>

            <TabsContent value="events" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {galleryData.events.map((album) => (
                  <Card
                    key={album.id}
                    className="overflow-hidden cursor-pointer hover:shadow-md transition-shadow"
                    onClick={() => handleAlbumClick(album)}
                  >
                    <CardContent className="p-0">
                      <div className="aspect-video relative">
                        <img
                          src={album.coverImage || "/placeholder.svg"}
                          alt={album.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4">
                          <h3 className="text-xl font-bold text-white">{album.title}</h3>
                          <p className="text-sm text-white/80">{album.date}</p>
                          <p className="text-sm text-white/80">{album.images.length} photos</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="workshops" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {galleryData.workshops.map((album) => (
                  <Card
                    key={album.id}
                    className="overflow-hidden cursor-pointer hover:shadow-md transition-shadow"
                    onClick={() => handleAlbumClick(album)}
                  >
                    <CardContent className="p-0">
                      <div className="aspect-video relative">
                        <img
                          src={album.coverImage || "/placeholder.svg"}
                          alt={album.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4">
                          <h3 className="text-xl font-bold text-white">{album.title}</h3>
                          <p className="text-sm text-white/80">{album.date}</p>
                          <p className="text-sm text-white/80">{album.images.length} photos</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="cultural" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {galleryData.cultural.map((album) => (
                  <Card
                    key={album.id}
                    className="overflow-hidden cursor-pointer hover:shadow-md transition-shadow"
                    onClick={() => handleAlbumClick(album)}
                  >
                    <CardContent className="p-0">
                      <div className="aspect-video relative">
                        <img
                          src={album.coverImage || "/placeholder.svg"}
                          alt={album.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4">
                          <h3 className="text-xl font-bold text-white">{album.title}</h3>
                          <p className="text-sm text-white/80">{album.date}</p>
                          <p className="text-sm text-white/80">{album.images.length} photos</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        )}
      </div>
    </div>
  )
}

