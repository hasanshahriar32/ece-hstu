"use client"

import type React from "react"

import { useState, useEffect, useCallback } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

// Sample carousel images - replace with your actual images
const carouselImages = [
  {
    url: "/placeholder.svg?height=800&width=1600&text=ECE+Club+Events",
    alt: "ECE Club Events",
  },
  {
    url: "/placeholder.svg?height=800&width=1600&text=Workshops+and+Seminars",
    alt: "Workshops and Seminars",
  },
  {
    url: "/placeholder.svg?height=800&width=1600&text=Technical+Projects",
    alt: "Technical Projects",
  },
  {
    url: "/placeholder.svg?height=800&width=1600&text=Sports+Activities",
    alt: "Sports Activities",
  },
]

export function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1))
  }, [])

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? carouselImages.length - 1 : prevIndex - 1))
  }, [])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  // Auto-play functionality
  useEffect(() => {
    let interval: NodeJS.Timeout

    if (isAutoPlaying) {
      interval = setInterval(() => {
        goToNext()
      }, 5000) // Change image every 5 seconds
    }

    return () => {
      if (interval) clearInterval(interval)
    }
  }, [isAutoPlaying, goToNext])

  // Pause auto-play when user interacts with carousel
  const pauseAutoPlay = () => {
    setIsAutoPlaying(false)

    // Resume auto-play after 10 seconds of inactivity
    const timeout = setTimeout(() => {
      setIsAutoPlaying(true)
    }, 10000)

    return () => clearTimeout(timeout)
  }

  // Touch event handlers for swipe functionality
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      // Swipe left, go to next
      goToNext()
    }

    if (touchStart - touchEnd < -50) {
      // Swipe right, go to previous
      goToPrevious()
    }
  }

  return (
    <section
      className="relative h-[500px] md:h-[600px] overflow-hidden -mt-[1px]" // Added -mt-[1px] to fix any potential gap
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Carousel Images */}
      <div className="absolute inset-0">
        {carouselImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img src={image.url || "/placeholder.svg"} alt={image.alt} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Welcome to ECE Club</h1>
            <p className="text-xl mb-8">
              Empowering students through innovation, collaboration, and excellence in Electronics and Communication
              Engineering.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" variant="default">
                <Link href="/events">Explore Events</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-white/10 hover:bg-white/20 text-white border-white/20"
              >
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={() => {
          goToPrevious()
          pauseAutoPlay()
        }}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-white/50"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={() => {
          goToNext()
          pauseAutoPlay()
        }}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-white/50"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Indicator Dots */}
      <div className="absolute bottom-6 left-0 right-0">
        <div className="flex justify-center gap-2">
          {carouselImages.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                goToSlide(index)
                pauseAutoPlay()
              }}
              className={`h-2.5 w-2.5 rounded-full focus:outline-none focus:ring-2 focus:ring-white/50 ${
                index === currentIndex ? "bg-white" : "bg-white/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

