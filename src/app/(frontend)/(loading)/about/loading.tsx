import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <Skeleton className="h-10 w-[300px] mx-auto mb-4" />
          <Skeleton className="h-5 w-full max-w-3xl mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="space-y-4">
            <Skeleton className="h-8 w-[200px] mb-4" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-[80%]" />
          </div>
          <Skeleton className="h-64 md:h-auto rounded-lg" />
        </div>

        <div className="mb-16">
          <div className="text-center mb-8">
            <Skeleton className="h-8 w-[250px] mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Skeleton className="h-[200px] rounded-lg" />
            <Skeleton className="h-[200px] rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  )
}

