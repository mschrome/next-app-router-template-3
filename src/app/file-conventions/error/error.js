"use client";

import { AlertTriangle, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Link from "next/link";

export default function Error({
  error,
}) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="container mx-auto px-4 py-8 flex items-center justify-center min-h-[calc(100vh-80px)]">
        <div className="text-center space-y-6 max-w-md mx-auto px-4">
          {/* Error Icon */}
          <div className="w-24 h-24 bg-red-500/20 rounded-full flex items-center justify-center mx-auto">
            <AlertTriangle className="w-12 h-12 text-red-500" />
          </div>
          
          <div>
            <h2 className="text-2xl font-bold text-red-500 mb-2">Something went wrong!</h2>
            <p className="text-muted-foreground mb-4">
              This is the error.js fallback UI automatically displayed by Next.js
            </p>
          </div>

          {/* Error Details */}
          <div className="bg-background/50 p-4 rounded-lg border border-border/20 text-left">
            <h4 className="font-medium mb-2">Error Information</h4>
            <div className="font-mono text-sm text-muted-foreground space-y-1">
              <div>Error: {error?.name || 'Unknown Error'}</div>
              <div>Message: {error?.message || 'Something went wrong'}</div>
              {error?.digest && <div>Digest: {error.digest}</div>}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            
            <Button variant="outline" asChild className="cursor-pointer">
              <Link href="/file-conventions/error">
                <Home className="w-4 h-4 mr-2" />
                Back to Introduction
              </Link>
            </Button>
          </div>

        </div>
      </main>
    </div>
  );
} 