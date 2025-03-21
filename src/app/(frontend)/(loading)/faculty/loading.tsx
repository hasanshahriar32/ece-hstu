import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="space-y-8">
        <div className="text-center space-y-2">
          <Skeleton className="h-10 w-[300px] mx-auto" />
          <Skeleton className="h-5 w-[500px] mx-auto" />
        </div>

        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <Skeleton className="h-10 w-[200px]" />
            <Skeleton className="h-10 w-[300px]" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array(6)
              .fill(0)
              .map((_, i) => (
                <Skeleton key={i} className="h-[300px] rounded-xl" />
              ))}
          </div>

          <div className="flex justify-center mt-6">
            <Skeleton className="h-10 w-[300px]" />
          </div>
        </div>
      </div>
    </main>
  )
}

