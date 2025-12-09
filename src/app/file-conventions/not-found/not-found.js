import { FileQuestion, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="container mx-auto px-4 py-8 flex items-center justify-center min-h-[calc(100vh-80px)]">
        <div className="text-center space-y-6 max-w-md mx-auto px-4">
          {/* 404 Icon */}
          <div className="w-24 h-24 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto">
            <FileQuestion className="w-12 h-12 text-yellow-500" />
          </div>
          
          <div>
            <h2 className="text-2xl font-bold text-yellow-500 mb-2">Page Not Found</h2>
            <p className="text-muted-foreground mb-4">
              This is the not-found.js fallback UI automatically displayed by Next.js
            </p>
          </div>

          {/* 404 Details */}
          <div className="bg-background/50 p-4 rounded-lg border border-border/20 text-left">
            <h4 className="font-medium mb-2">404 Details</h4>
            <div className="font-mono text-sm text-muted-foreground space-y-1">
              <div>Status: 404 Not Found</div>
              <div>Reason: Page does not exist or notFound() was called</div>
              <div>Handler: not-found.js</div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild className="bg-yellow-500 hover:bg-yellow-600 cursor-pointer">
              <Link href="/file-conventions/not-found">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Introduction Page
              </Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
} 