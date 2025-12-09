import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Loader2, Play, ExternalLink } from "lucide-react";
import Header from "@/components/Header";
import Link from "next/link";

export default function LoadingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <Loader2 className="w-8 h-8 text-primary" />
            <h1 className="text-4xl font-bold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              Next.js App Router - Loading UI
            </h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Loading UI is a powerful feature in Next.js. By creating a loading.js file,
            you can automatically display a fallback UI when a page or component is loading, enhancing the user experience.
          </p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed mt-4">
            When a route segment is loading, Next.js automatically displays the nearest loading.js boundary
            until the content finishes loading. This is very useful for scenarios like data fetching and code splitting.
          </p>
        </div>

        <div className="space-y-8">
          {/* Demo Entry */}
          <Card className="bg-gradient-to-br from-primary/10 to-blue-500/10 border-primary/20">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-primary">
                🚀 Loading.js Live Demo
              </CardTitle>
              <p className="text-muted-foreground">
                Experience how Next.js&apos;s loading.js file convention works
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center mb-6">
                <p className="text-muted-foreground mb-4">
                  Click the button below to enter a dedicated demo page that contains asynchronous components, which will truly trigger the display of loading.js.
                </p>
              </div>

              <div className="text-center">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-6 cursor-pointer">
                  <Link href="/file-conventions/loading/demo">
                    <Play className="w-5 h-5 mr-2" />
                    Enter Loading.js Demo
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>


          {/* File Structure */}
          <Card className="bg-muted/30 border-border/20">
            <CardHeader>
              <CardTitle>Current File Structure</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-background/50 p-4 rounded-lg border border-border/20">
                <div className="font-mono text-sm text-muted-foreground space-y-1">
                  <div>app/file-conventions/loading/</div>
                  <div>├── loading.js       ← This file defines the loading UI</div>
                  <div>├── page.tsx         ← Current entry page (synchronous)</div>
                  <div>└── demo/</div>
                  <div>&nbsp;&nbsp;&nbsp;&nbsp;└── page.tsx   ← Demo page (asynchronous, will trigger loading.js)</div>
                </div>
              </div>
              <div className="mt-4 p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                <p className="text-sm text-green-600 font-medium">
                  ✅ The demo page will truly trigger loading.js, while the entry page remains fast-loading
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

       
      </main>
    </div>
  );
}