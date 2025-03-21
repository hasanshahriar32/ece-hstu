"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Code, Github } from "lucide-react"

export function DeveloperCard() {
  return (
    <section className="py-12 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-card rounded-xl shadow-md overflow-hidden">
          <div className="md:flex">
            <div className="md:shrink-0 bg-gradient-to-br from-blue-600 to-indigo-700 text-white p-6 flex items-center justify-center">
              <Code className="h-16 w-16" />
            </div>
            <div className="p-8">
              <div className="flex items-center gap-4 mb-4">
                <Avatar className="h-12 w-12">
                  <AvatarImage src="/placeholder.svg?height=100&width=100" alt="Shahriar Hasan" />
                  <AvatarFallback>SH</AvatarFallback>
                </Avatar>
                <div>
                  <div className="uppercase tracking-wide text-sm text-primary font-semibold">Meet Our Developer</div>
                  <h2 className="text-xl font-semibold">Shahriar Hasan</h2>
                </div>
              </div>
              <p className="text-muted-foreground">
                Full-stack software engineer, web security expert, and the talented developer behind the ECE Club
                website. Learn more about his skills, experience, and projects.
              </p>
              <div className="mt-4">
                <Button asChild>
                  <Link href="/developer">
                    <Github className="mr-2 h-4 w-4" />
                    View Developer Profile
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

