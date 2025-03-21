import { Skeleton } from "@/components/ui/skeleton"

export default function AlumniProfileLoading() {
  return (
    <div className="container mx-auto py-10 space-y-8">
      <div className="flex items-center justify-between">
        <Skeleton className="h-10 w-[250px]" />
        <Skeleton className="h-10 w-[120px]" />
      </div>

      <div className="space-y-6">
        <div className="flex flex-col md:flex-row gap-6">
          <Skeleton className="h-[200px] w-[200px] rounded-full" />
          <div className="space-y-4 flex-1">
            <Skeleton className="h-8 w-[200px]" />
            <Skeleton className="h-6 w-full" />
            <Skeleton className="h-6 w-full" />
            <Skeleton className="h-6 w-3/4" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <Skeleton className="h-8 w-[150px]" />
            <Skeleton className="h-12 w-full" />
            <Skeleton className="h-12 w-full" />
            <Skeleton className="h-12 w-full" />
          </div>
          <div className="space-y-4">
            <Skeleton className="h-8 w-[150px]" />
            <Skeleton className="h-12 w-full" />
            <Skeleton className="h-12 w-full" />
            <Skeleton className="h-12 w-full" />
          </div>
        </div>

        <Skeleton className="h-12 w-[150px]" />
      </div>
    </div>
  )
}

