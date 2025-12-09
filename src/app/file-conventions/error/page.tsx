import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, AlertTriangle, Play, ExternalLink } from "lucide-react";
import Header from "@/components/Header";
import Link from "next/link";

export default function ErrorPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <AlertTriangle className="w-8 h-8 text-primary" />
            <h1 className="text-4xl font-bold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              Next.js App Router - Error UI
            </h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Error UI is a powerful feature in Next.js. By creating an error.js file,
            you can automatically catch errors in pages or components and provide a custom fallback UI.
          </p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed mt-4">
            When an error occurs in a route segment, Next.js automatically displays the nearest error.js boundary,
            allowing users to see a friendly error message instead of a crashed page.
          </p>
        </div>

        <div className="space-y-8">
          {/* Demo Entry */}
          <Card className="bg-gradient-to-br from-red-500/10 to-orange-500/10 border-red-500/20">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-red-600">
                🚨 Error.js Live Demo
              </CardTitle>
              <p className="text-muted-foreground">
                Experience how Next.js&apos;s error.js file convention works
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center mb-6">
                <p className="text-muted-foreground mb-4">
                  Click the button below to enter a dedicated demo page that will throw an error, truly triggering the display of error.js.
                </p>
              </div>

              <div className="text-center">
                <Button asChild size="lg" className="bg-red-600 hover:bg-red-700 text-lg px-8 py-6 cursor-pointer">
                  <Link href="/file-conventions/error/demo">
                    <Play className="w-5 h-5 mr-2" />
                    Enter Error.js Demo
                  </Link>
                </Button>
                <p className="text-sm text-muted-foreground mt-2">
                  The demo page will throw a real error, then display the error.js UI.
                </p>
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
                  <div>app/file-conventions/error/</div>
                  <div>├── error.js          ← This file defines the error UI</div>
                  <div>├── page.tsx          ← Current entry page (synchronous)</div>
                  <div>└── demo/</div>
                  <div>&nbsp;&nbsp;&nbsp;&nbsp;└── page.tsx    ← Demo page (will throw an error, triggering error.js)</div>
                </div>
              </div>
              <div className="mt-4 p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
                <p className="text-sm text-red-600 font-medium">
                  ✅ The demo page will genuinely throw an error and trigger error.js, while the entry page remains stable.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

      </main>
    </div>
  );
}