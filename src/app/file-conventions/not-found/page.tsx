import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, FileQuestion, Play, ExternalLink } from "lucide-react";
import Header from "@/components/Header";
import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <FileQuestion className="w-8 h-8 text-primary" />
            <h1 className="text-4xl font-bold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              Next.js App Router - Not Found UI
            </h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Not Found UI is a special feature in Next.js. By creating a not-found.js file,
            you can automatically display a custom 404 interface when a user visits a non-existent page.
          </p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed mt-4">
            When a route does not exist or the notFound() function is called, Next.js automatically displays the nearest not-found.js boundary,
            showing users a friendly 404 message instead of the default error page.
          </p>
        </div>

        <div className="space-y-8">
          {/* Demo Entry */}
          <Card className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border-yellow-500/20">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-yellow-600">
                🔍 Not-Found.js Live Demo
              </CardTitle>
              <p className="text-muted-foreground">
                Experience how Next.js&apos;s not-found.js file convention works
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center mb-6">
                <p className="text-muted-foreground mb-4">
                  Click the button below to enter a dedicated demo page that calls the notFound() function, truly triggering the display of not-found.js.
                </p>
              </div>

              <div className="text-center">
                <Button asChild size="lg" className="bg-yellow-600 hover:bg-yellow-700 text-lg px-8 py-6 cursor-pointer">
                  <Link href="/file-conventions/not-found/demo">
                    <Play className="w-5 h-5 mr-2" />
                    Enter Not-Found.js Demo
                  </Link>
                </Button>
                <p className="text-sm text-muted-foreground mt-2">
                  The demo page will call the notFound() function and then display the not-found.js UI
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
                  <div>app/file-conventions/not-found/</div>
                  <div>├── not-found.js       ← This file defines the 404 UI</div>
                  <div>├── page.tsx           ← Current entry page (synchronous)</div>
                  <div>└── demo/</div>
                  <div>&nbsp;&nbsp;&nbsp;&nbsp;└── page.tsx     ← Demo page (calls notFound(), triggering not-found.js)</div>
                </div>
              </div>
              <div className="mt-4 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
                <p className="text-sm text-yellow-600 font-medium">
                  ✅ The demo page will truly call notFound() and trigger not-found.js, while the entry page remains stable
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

      </main>
    </div>
  );
}