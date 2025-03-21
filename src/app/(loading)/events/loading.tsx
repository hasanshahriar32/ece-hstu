import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

export default function Loading() {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <Skeleton className="h-10 w-[200px] mx-auto mb-4" />
          <Skeleton className="h-5 w-full max-w-3xl mx-auto" />
        </div>

        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <Skeleton className="h-10 flex-1" />
              <div className="flex flex-wrap gap-3">
                <Skeleton className="h-10 w-[130px]" />
                <Skeleton className="h-10 w-[120px]" />
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-8">
          <Skeleton className="h-8 w-[200px] mb-6" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Array.from({ length: 4 }).map((_, i) => (
              <Card key={i} className="overflow-hidden">
                <Skeleton className="h-48 w-full" />
                <CardHeader className="pb-2">
                  <Skeleton className="h-6 w-[70%]" />
                </CardHeader>
                <CardContent className="pb-2">
                  <Skeleton className="h-4 w-full mb-4" />
                  <Skeleton className="h-4 w-full mb-4" />
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-[60%]" />
                    <Skeleton className="h-4 w-[40%]" />
                    <Skeleton className="h-4 w-[50%]" />
                  </div>
                </CardContent>
                <div className="p-6 pt-0">
                  <Skeleton className="h-10 w-full" />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

