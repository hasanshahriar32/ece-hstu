import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Github, Linkedin, Facebook, Globe, Mail, MapPin, Briefcase, GraduationCap, Award } from "lucide-react"

export default function DeveloperPage() {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Developer</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Meet the developer behind the ECE Club website
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-1">
            <div className="sticky top-24 space-y-6">
              <div className="flex flex-col items-center text-center">
                <Avatar className="h-40 w-40 mb-4">
                  <AvatarImage src="/placeholder.svg?height=400&width=400" alt="Shahriar Hasan" />
                  <AvatarFallback>SH</AvatarFallback>
                </Avatar>
                <h1 className="text-2xl font-bold">Shahriar Hasan</h1>
                <p className="text-sm text-muted-foreground mt-2 max-w-xs">
                  Full-stack software engg. || Web Security Expert || ML & DevSecOps enthusiast || Embedded Systems
                  Programmer || Postman Std. Leader || Open-Source Contributor.
                </p>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 mr-3 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-medium">Based in</h3>
                      <p className="text-sm">Dhaka, BD</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Briefcase className="h-5 w-5 mr-3 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-medium">Company</h3>
                      <p className="text-sm">University of HSTU</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Mail className="h-5 w-5 mr-3 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <a href="mailto:hasanshahriar32@gmail.com" className="text-sm text-blue-600 hover:underline">
                        hasanshahriar32@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Globe className="h-5 w-5 mr-3 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-medium">Website</h3>
                      <a
                        href="https://shahriarhasan.vercel.app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-blue-600 hover:underline"
                      >
                        shahriarhasan.vercel.app
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Social Links</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    <Button variant="outline" size="sm" asChild className="justify-start">
                      <a href="https://github.com/hasanshahriar32" target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        GitHub
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild className="justify-start">
                      <a href="https://linkedin.com/in/hasanshahriar32" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="h-4 w-4 mr-2" />
                        LinkedIn
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild className="justify-start">
                      <a href="https://facebook.com/H4549" target="_blank" rel="noopener noreferrer">
                        <Facebook className="h-4 w-4 mr-2" />
                        Facebook
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild className="justify-start">
                      <a href="https://medium.com/@hasanshahriar32" target="_blank" rel="noopener noreferrer">
                        <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
                        </svg>
                        Medium
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild className="justify-start">
                      <a href="https://dev.to/hasanshahriar32" target="_blank" rel="noopener noreferrer">
                        <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M7.42 10.05c-.18-.16-.46-.23-.84-.23H6l.02 2.44.04 2.45.56-.02c.41 0 .63-.07.83-.26.24-.24.26-.36.26-2.2 0-1.91-.02-1.96-.29-2.18zM0 4.94v14.12h24V4.94H0zM8.56 15.3c-.44.58-1.06.77-2.53.77H4.71V8.53h1.4c1.67 0 2.16.18 2.6.9.27.43.29.6.32 2.57.05 2.23-.02 2.73-.47 3.3zm5.09-5.47h-2.47v1.77h1.52v1.28l-.72.04-.75.03v1.77l1.22.03 1.2.04v1.28h-1.6c-1.53 0-1.6-.01-1.87-.3l-.3-.28v-3.16c0-3.02.01-3.18.25-3.48.23-.31.25-.31 1.88-.31h1.64v1.3zm4.68 5.45c-.17.43-.64.79-1 .79-.18 0-.45-.15-.67-.39-.32-.32-.45-.63-.82-2.08l-.9-3.39-.45-1.67h.76c.4 0 .75.02.75.05 0 .06 1.16 4.54 1.26 4.83.04.15.32-.7.73-2.3l.66-2.52.74-.04c.4-.02.73 0 .73.04 0 .14-1.67 6.38-1.8 6.68z" />
                        </svg>
                        Dev.to
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="md:col-span-2 space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Tech Stack</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">JavaScript</Badge>
                  <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">React.js</Badge>
                  <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">Node.js</Badge>
                  <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">Nest.js</Badge>
                  <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">MongoDB</Badge>
                  <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">PostgreSQL</Badge>
                  <Badge className="bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300">Git</Badge>
                  <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">Docker</Badge>
                  <Badge className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300">
                    JavaScript
                  </Badge>
                  <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">CSS</Badge>
                  <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">TypeScript</Badge>
                  <Badge className="bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-300">Tailwind</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Briefcase className="h-5 w-5 text-primary" />
                  <CardTitle>Experience</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="border-l-2 border-primary pl-4 pb-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold text-lg">Full-stack Developer</h3>
                        <p className="text-muted-foreground">Bangladeshi Software</p>
                      </div>
                      <Badge variant="outline">October 2023 - Present</Badge>
                    </div>
                  </div>

                  <div className="border-l-2 border-primary pl-4 pb-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold text-lg">Front End Developer</h3>
                        <p className="text-muted-foreground">SJ Innovation</p>
                      </div>
                      <Badge variant="outline">May 2023 - July 2023</Badge>
                    </div>
                  </div>

                  <div className="border-l-2 border-primary pl-4 pb-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold text-lg">Front End Developer</h3>
                        <p className="text-muted-foreground">3W Business Private LTD</p>
                      </div>
                      <Badge variant="outline">February 2023 - February 2023</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-primary" />
                  <CardTitle>Education</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="border-l-2 border-primary pl-4 pb-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold text-lg">B.Sc Engg. in ECE</h3>
                        <p className="text-muted-foreground">
                          Hajee Mohammad Danesh Science and Technology University. Dinajpur, Bangladesh.
                        </p>
                      </div>
                      <Badge variant="outline">2020 - Present</Badge>
                    </div>
                  </div>

                  <div className="border-l-2 border-primary pl-4 pb-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold text-lg">HSC & SSC</h3>
                        <p className="text-muted-foreground">Saidpur Govt. Technical College.</p>
                      </div>
                      <Badge variant="outline">2012 - 2019</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-primary" />
                  <CardTitle>Certification</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="border-l-2 border-primary pl-4 pb-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold text-lg">Full Stack Development</h3>
                        <p className="text-muted-foreground">
                          MERN Stack development with TypeScript, Next JS, Docker, AWS.
                        </p>
                      </div>
                      <Badge variant="outline">March 2022</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Projects</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Some of the notable projects developed by Shahriar Hasan include:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">ECE Club Website</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        A comprehensive website for the ECE Club with features for event management, certificate
                        generation, and alumni networking.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Smart Agriculture System</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        IoT-based system for monitoring and controlling agricultural parameters using embedded systems.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">E-Learning Platform</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        A full-stack e-learning platform with course management, video streaming, and assessment
                        features.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Health Monitoring App</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Mobile application for health monitoring with data visualization and alert systems.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

