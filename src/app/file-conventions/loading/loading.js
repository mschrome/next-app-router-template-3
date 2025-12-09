import { Loader2 } from "lucide-react";
import Header from "@/components/Header";

export default function Loading() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="container mx-auto px-4 py-8 flex items-center justify-center min-h-[calc(100vh-80px)]">
        <div className="text-center space-y-6 max-w-md mx-auto px-4">
          {/* Main Loading Spinner */}
          <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
            <Loader2 className="w-12 h-12 text-primary animate-spin" />
          </div>
          
          <div>
            <h2 className="text-2xl font-bold text-primary mb-2">Loading...</h2>
            <p className="text-muted-foreground">
              This is the loading.js fallback UI automatically displayed by Next.js
            </p>
          </div>
          
          {/* Skeleton Loaders - Showing the structure of actual content */}
          <div className="space-y-4">
            {/* Title Skeleton */}
            <div className="h-8 bg-muted/50 rounded animate-pulse w-3/4 mx-auto"></div>
            
            {/* Description Skeleton */}
            <div className="space-y-2">
              <div className="h-4 bg-muted/50 rounded animate-pulse"></div>
              <div className="h-4 bg-muted/50 rounded animate-pulse w-5/6"></div>
            </div>
            
            {/* Button Skeleton */}
            <div className="h-12 bg-muted/50 rounded animate-pulse w-32 mx-auto"></div>
            
            {/* Content Cards Skeleton */}
            <div className="space-y-3">
              <div className="h-20 bg-muted/50 rounded animate-pulse"></div>
              <div className="h-20 bg-muted/50 rounded animate-pulse"></div>
              <div className="h-20 bg-muted/50 rounded animate-pulse"></div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 