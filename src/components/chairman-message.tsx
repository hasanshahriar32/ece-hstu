import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function ChairmanMessage() {
  return (
    <section className="container mx-auto px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Chairman's Message</h2>

        <div className="grid md:grid-cols-3 gap-8 items-start">
          <div className="md:col-span-1 flex flex-col items-center text-center">
            <Avatar className="h-40 w-40 mb-4">
              <AvatarImage src="/placeholder.svg?height=160&width=160" alt="Prof. Md. Mehedi Islam" />
              <AvatarFallback>MI</AvatarFallback>
            </Avatar>
            <h3 className="text-xl font-semibold">Prof. Md. Mehedi Islam</h3>
            <p className="text-sm text-muted-foreground mb-4">Chairman, Department of ECE</p>
            <Button asChild variant="outline" size="sm">
              <Link href="/about">View Profile</Link>
            </Button>

            <div className="mt-6 space-y-2 text-sm">
              <p className="flex items-center justify-center">
                <span className="font-medium mr-2">Email:</span>
                <a href="mailto:mehedi@hstu.ac.bd" className="text-blue-600 dark:text-blue-400">
                  mehedi@hstu.ac.bd
                </a>
              </p>
              <p className="flex items-center justify-center">
                <span className="font-medium mr-2">Phone:</span> 01716239606
              </p>
            </div>
          </div>

          <div className="md:col-span-2 space-y-4">
            <p className="font-medium text-lg">Dear Esteemed Faculty, Dedicated Staff, and Bright Students,</p>

            <p>
              It is with great enthusiasm and a sense of pride that I extend a warm welcome to all of you as the newly
              appointed Chairman of the Department of Electronics and Communication Engineering at Hajee Mohammad Danesh
              Science and Technology University, Dinajpur.
            </p>

            <p>
              Our department has a rich legacy of academic excellence, innovation, and research, and I am honored to be
              a part of this vibrant community. Together, we will continue to build on this foundation, striving for new
              milestones and achievements in the field of Electronics and Communication Engineering.
            </p>

            <p>
              To our faculty and staff, your dedication and hard work are the backbone of this department. I look
              forward to collaborating with you to create an environment that fosters creativity, critical thinking, and
              academic growth. Let us work hand in hand to inspire and guide our students toward success.
            </p>

            <div className="flex justify-end mt-6">
              <Button asChild variant="ghost">
                <Link href="/about#chairman-message">Read Full Message</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

