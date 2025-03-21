import { Skeleton } from "@/components/ui/skeleton"
import { Button } from "@/components/ui/button"
import { ChevronLeft } from "lucide-react"

export default function Loading() {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <Button variant="outline" className="mb-6">
          <ChevronLeft className="h-4 w-4 mr-2" />
          Back to Committee
        </Button>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-1">
            <div className="sticky top-24 space-y-6">
              <div className="flex flex-col items-center text-center">
                <Skeleton className="h-40 w-40 rounded-full mb-4" />
                <Skeleton className="h-8 w-[180px]" />
                <Skeleton className="h-6 w-[100px] mt-2 mb-1" />
                <Skeleton className="h-4 w-[150px]" />
              </div>

              <Skeleton className="h-[200px] rounded-lg" />
            </div>
          </div>

          <div className="md:col-span-3 space-y-8">
            <Skeleton className="h-[200px] rounded-lg" />

            <div className="space-y-6">
              <Skeleton className="h-10 w-full rounded-lg" />
              <Skeleton className="h-[400px] rounded-lg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

