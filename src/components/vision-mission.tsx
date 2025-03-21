import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Lightbulb, Target } from "lucide-react"

export function VisionMission() {
  return (
    <section className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-12">Vision & Mission</h2>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <Card className="border-blue-200 dark:border-blue-800">
          <CardHeader className="pb-2">
            <div className="flex items-center gap-2">
              <Lightbulb className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              <CardTitle>Vision</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Enhancement of excellence in education and research in Electronics, Information and Communication arena to
              produce innovative and ethical engineers and researchers with research focus in national and global needs.
            </p>
          </CardContent>
        </Card>

        <Card className="border-indigo-200 dark:border-indigo-800">
          <CardHeader className="pb-2">
            <div className="flex items-center gap-2">
              <Target className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
              <CardTitle>Mission</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-2">
            <p className="text-muted-foreground">
              1. Imparting quality education with ethical values to produce advanced graduates and professionals to
              overcome the domestic and global challenges.
            </p>
            <p className="text-muted-foreground">
              2. Fostering culture of innovation, creation, and research by utilizing existing resources for the
              development of the society.
            </p>
            <p className="text-muted-foreground">
              3. Enhancing knowledge by collaboration and research activities with academia and industry for reaching
              heights of excellence.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

