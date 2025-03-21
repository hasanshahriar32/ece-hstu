import { Skeleton } from "@/components/ui/skeleton"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { ChevronLeft } from "lucide-react"

export default function Loading() {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="max-w-3xl mx-auto">
        <Button variant="outline" className="mb-6">
          <ChevronLeft className="h-4 w-4 mr-2" />
          Back to Alumni
        </Button>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-4 mb-4">
              <Skeleton className="h-12 w-12 rounded-full" />
              <div className="space-y-2">
                <Skeleton className="h-6 w-[250px]" />
                <Skeleton className="h-4 w-[200px]" />
              </div>
            </div>
            <Skeleton className="h-4 w-full mt-4" />
            <Skeleton className="h-4 w-[90%] mt-2" />
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Skeleton className="h-5 w-[100px]" />
                  <Skeleton className="h-10 w-full" />
                </div>
                <div className="space-y-2">
                  <Skeleton className="h-5 w-[100px]" />
                  <Skeleton className="h-10 w-full" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Skeleton className="h-5 w-[100px]" />
                  <Skeleton className="h-10 w-full" />
                </div>
                <div className="space-y-2">
                  <Skeleton className="h-5 w-[100px]" />
                  <Skeleton className="h-10 w-full" />
                </div>
              </div>

              <div className="space-y-2">
                <Skeleton className="h-5 w-[150px]" />
                <Skeleton className="h-10 w-full" />
                <Skeleton className="h-4 w-[80%]" />
              </div>

              <div className="space-y-2">
                <Skeleton className="h-5 w-[150px]" />
                <Skeleton className="h-10 w-full" />
              </div>

              <div className="space-y-2">
                <Skeleton className="h-5 w-[150px]" />
                <Skeleton className="h-10 w-full" />
                <Skeleton className="h-4 w-[80%]" />
              </div>

              <div className="space-y-2">
                <Skeleton className="h-5 w-[100px]" />
                <Skeleton className="h-32 w-full" />
                <Skeleton className="h-4 w-[60%]" />
              </div>

              <Skeleton className="h-10 w-full" />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

