import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Award, BookOpen, Calendar, Lightbulb, Target, Rocket } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">About ECE Club</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Empowering students through innovation, collaboration, and excellence in Electronics and Communication
            Engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div>
            <h2 className="text-2xl font-bold mb-4">Our Story</h2>
            <p className="text-muted-foreground mb-4">
              The Electronics and Communication Engineering (ECE) Club at Hajee Mohammad Danesh Science and Technology
              University was established in 2015 with the aim of fostering a community of passionate ECE students and
              professionals.
            </p>
            <p className="text-muted-foreground mb-4">
              What started as a small group of enthusiastic students has now grown into one of the most active and
              influential technical clubs on campus, with over 500 members and alumni spread across various industries.
            </p>
            <p className="text-muted-foreground">
              Our club serves as a platform for students to explore their interests, enhance their technical skills, and
              build meaningful connections that extend beyond their academic journey.
            </p>
          </div>
          <div className="relative h-64 md:h-auto rounded-lg overflow-hidden">
            <img
              src="/placeholder.svg?height=400&width=600&text=ECE+Club+Members"
              alt="ECE Club Members"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold">Our Mission & Vision</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-blue-50 dark:bg-blue-950/30 border-blue-100 dark:border-blue-900">
              <CardContent className="pt-6">
                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <Target className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
                    <p className="text-muted-foreground">
                      To create a vibrant community that fosters technical excellence, innovation, and professional
                      growth among ECE students through workshops, competitions, projects, and industry connections.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-indigo-50 dark:bg-indigo-950/30 border-indigo-100 dark:border-indigo-900">
              <CardContent className="pt-6">
                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <Lightbulb className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
                    <p className="text-muted-foreground">
                      To be the premier platform for ECE students to develop technical skills, leadership abilities, and
                      innovative thinking, preparing them to become industry leaders and contributors to technological
                      advancement.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold">What We Do</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="pt-6">
                <div className="text-center mb-4">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900 mb-4">
                    <BookOpen className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-lg font-semibold">Workshops & Seminars</h3>
                </div>
                <p className="text-sm text-muted-foreground text-center">
                  Regular workshops and seminars on cutting-edge technologies, industry trends, and career development.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="text-center mb-4">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100 dark:bg-indigo-900 mb-4">
                    <Rocket className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <h3 className="text-lg font-semibold">Projects & Competitions</h3>
                </div>
                <p className="text-sm text-muted-foreground text-center">
                  Hands-on projects and technical competitions to apply classroom knowledge and develop practical
                  skills.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="text-center mb-4">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900 mb-4">
                    <Calendar className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <h3 className="text-lg font-semibold">Events & Networking</h3>
                </div>
                <p className="text-sm text-muted-foreground text-center">
                  Social and cultural events, sports competitions, and networking opportunities with industry
                  professionals.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold">Our Achievements</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Club Achievements</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Award className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2 mt-0.5" />
                  <span>Best Technical Club Award 2022, HSTU</span>
                </li>
                <li className="flex items-start">
                  <Award className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2 mt-0.5" />
                  <span>Organized the largest technical fest in the university's history</span>
                </li>
                <li className="flex items-start">
                  <Award className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2 mt-0.5" />
                  <span>Successfully conducted over 50 workshops and seminars</span>
                </li>
                <li className="flex items-start">
                  <Award className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2 mt-0.5" />
                  <span>Established partnerships with 10+ industry leaders</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Member Achievements</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Award className="h-5 w-5 text-indigo-600 dark:text-indigo-400 mr-2 mt-0.5" />
                  <span>National Robotics Competition 2023 - 1st Place</span>
                </li>
                <li className="flex items-start">
                  <Award className="h-5 w-5 text-indigo-600 dark:text-indigo-400 mr-2 mt-0.5" />
                  <span>IEEE Paper Contest 2022 - Best Paper Award</span>
                </li>
                <li className="flex items-start">
                  <Award className="h-5 w-5 text-indigo-600 dark:text-indigo-400 mr-2 mt-0.5" />
                  <span>Inter-University Programming Contest - 2nd Runner-up</span>
                </li>
                <li className="flex items-start">
                  <Award className="h-5 w-5 text-indigo-600 dark:text-indigo-400 mr-2 mt-0.5" />
                  <span>Multiple members placed in top tech companies</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold mb-6">Join Our Community</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
            Become a part of the ECE Club and unlock a world of opportunities for learning, networking, and growth.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/auth/register">Register Now</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

