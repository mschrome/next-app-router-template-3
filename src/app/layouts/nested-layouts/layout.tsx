import { ReactNode } from "react";
import Header from "@/components/Header";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface NestedLayoutsLayoutProps {
  children: ReactNode;
}

export default function NestedLayoutsLayout({ children }: NestedLayoutsLayoutProps) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      {/* Nested Layout Container */}
      <div className="container mx-auto px-4 py-8">
        {/* Navigation Tabs */}
        <div className="mb-8">
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent mb-4">
              Nested Layouts Demo
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              This is a true Nested Layouts implementation, utilizing Next.js file-system routing and multiple layout.tsx files.
            </p>
          </div>
          
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-2 mb-6 p-4 bg-muted/30 rounded-lg border border-border/20">
            <Button asChild variant="outline" size="sm" className="cursor-pointer">
              <Link href="/layouts/nested-layouts">
                Home
              </Link>
            </Button>
            <Button asChild variant="outline" size="sm" className="cursor-pointer">
              <Link href="/layouts/nested-layouts/dashboard">
                Dashboard
              </Link>
            </Button>
          </div>
        </div>

        {/* Page Content */}
        <main>
          {children}
        </main>

        {/* Layout Explanation */}
        <div className="mt-8 p-6 bg-muted/30 border border-border/20 rounded-lg">
          <h3 className="text-lg font-medium mb-3">Nested Layouts Technical Implementation</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-muted-foreground">
            <div>
              <h4 className="font-medium text-foreground mb-2">File Structure</h4>
              <div className="font-mono bg-background/50 p-3 rounded border text-xs">
                app/layouts/nested-layouts/
                <br />
                ├── layout.tsx ← Outer Layout (Current File)
                <br />
                ├── page.tsx ← Home Page
                <br />
                ├── dashboard/page.tsx
                <br />
                ├── settings/
                <br />
                │&nbsp;&nbsp;├── layout.tsx ← Inner Layout
                <br />
                │&nbsp;&nbsp;└── page.tsx
                <br />
                └── profile/page.tsx
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 