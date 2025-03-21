import { Skeleton } from "@/components/ui/skeleton"
import { Button } from "@/components/ui/button"
import { ChevronLeft } from "lucide-react"

export default function Loading() {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <Button variant="outline" className="mb-6">
          <ChevronLeft className="h-4 w-4 mr-2" />
          Back to Alumni
        </Button>

        <div className="text-center mb-12">
          <Skeleton className="h-10 w-[250px] mx-auto mb-4" />
          <Skeleton className="h-5 w-full max-w-3xl mx-auto" />
        </div>

        <div className="flex justify-center mb-8">
          <Skeleton className="h-10 w-[300px]" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {Array.from({ length: 4 }).map((_, i) => (
            <Skeleton key={i} className="h-[400px] rounded-lg" />
          ))}
        </div>

        <div className="flex justify-center">
          <Skeleton className="h-10 w-[200px]" />
        </div>
      </div>
    </div>
  )
}

