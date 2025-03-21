import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Faculty Research | ECE Club",
  description: "Explore research areas and projects by our faculty members.",
}

export default function FacultyResearchPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Faculty Research</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore the cutting-edge research conducted by our faculty members across various domains.
          </p>
        </div>

        {/* Research areas will be implemented here */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 border rounded-lg bg-card">
            <h2 className="text-xl font-semibold mb-4">Microelectronics & VLSI</h2>
            <p className="text-muted-foreground mb-4">
              Research in advanced microelectronic systems and VLSI design for next-generation computing.
            </p>
            <div className="flex justify-between items-center">
              <span className="text-sm">3 Faculty Members</span>
              <span className="text-sm">12 Publications</span>
            </div>
          </div>

          <div className="p-6 border rounded-lg bg-card">
            <h2 className="text-xl font-semibold mb-4">Wireless Communications</h2>
            <p className="text-muted-foreground mb-4">
              Exploring 5G/6G technologies, IoT networks, and next-generation communication systems.
            </p>
            <div className="flex justify-between items-center">
              <span className="text-sm">4 Faculty Members</span>
              <span className="text-sm">18 Publications</span>
            </div>
          </div>

          <div className="p-6 border rounded-lg bg-card">
            <h2 className="text-xl font-semibold mb-4">AI & Machine Learning</h2>
            <p className="text-muted-foreground mb-4">
              Applying artificial intelligence and machine learning to solve complex engineering problems.
            </p>
            <div className="flex justify-between items-center">
              <span className="text-sm">5 Faculty Members</span>
              <span className="text-sm">22 Publications</span>
            </div>
          </div>

          <div className="p-6 border rounded-lg bg-card">
            <h2 className="text-xl font-semibold mb-4">Power Systems & Renewable Energy</h2>
            <p className="text-muted-foreground mb-4">
              Research on smart grids, renewable energy integration, and sustainable power systems.
            </p>
            <div className="flex justify-between items-center">
              <span className="text-sm">3 Faculty Members</span>
              <span className="text-sm">15 Publications</span>
            </div>
          </div>

          <div className="p-6 border rounded-lg bg-card">
            <h2 className="text-xl font-semibold mb-4">Biomedical Signal Processing</h2>
            <p className="text-muted-foreground mb-4">
              Developing advanced signal processing techniques for healthcare applications.
            </p>
            <div className="flex justify-between items-center">
              <span className="text-sm">2 Faculty Members</span>
              <span className="text-sm">9 Publications</span>
            </div>
          </div>

          <div className="p-6 border rounded-lg bg-card">
            <h2 className="text-xl font-semibold mb-4">Robotics & Control Systems</h2>
            <p className="text-muted-foreground mb-4">
              Research on autonomous systems, robotics, and advanced control methodologies.
            </p>
            <div className="flex justify-between items-center">
              <span className="text-sm">4 Faculty Members</span>
              <span className="text-sm">16 Publications</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

