import { Skeleton } from "@/components/ui/skeleton"

export default function AlumniProfessionalLoading() {
  return (
    <div className="container mx-auto py-10 space-y-8">
      <div className="flex items-center justify-between">
        <Skeleton className="h-10 w-[300px]" />
        <Skeleton className="h-10 w-[120px]" />
      </div>

      <div className="space-y-6">
        <div className="space-y-4">
          <Skeleton className="h-8 w-[200px]" />
          <div className="space-y-4">
            <Skeleton className="h-[120px] w-full" />
            <Skeleton className="h-[120px] w-full" />
          </div>
          <Skeleton className="h-10 w-[150px]" />
        </div>

        <div className="space-y-4">
          <Skeleton className="h-8 w-[200px]" />
          <div className="space-y-4">
            <Skeleton className="h-[120px] w-full" />
            <Skeleton className="h-[120px] w-full" />
          </div>
          <Skeleton className="h-10 w-[150px]" />
        </div>

        <div className="space-y-4">
          <Skeleton className="h-8 w-[200px]" />
          <div className="space-y-4">
            <Skeleton className="h-[120px] w-full" />
            <Skeleton className="h-[120px] w-full" />
          </div>
          <Skeleton className="h-10 w-[150px]" />
        </div>
      </div>
    </div>
  )
}

