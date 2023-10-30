import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <main className="flex flex-col justify-center min-h-screen items-center">
      <h2 className="text-2xl text-emerald-500 font-bold">Loading...</h2>
      <p className="text-base font-medium text-slate-800">Hopefully not for too long 🙂</p>
      <div className="flex items-center space-x-4 mt-4">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
      </div>
    </main>
    
  )
}