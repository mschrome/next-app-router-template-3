import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Link from "next/link";
export const dynamic = 'force-dynamic';

// This entire page is async - which triggers loading.js
export default async function LoadingDemoPage() {
  // 3-second delay to ensure loading.js is visible
  await new Promise(resolve => setTimeout(resolve, 3000));
  
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent mb-4">
            Loading.js Live Demo
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            This page is an asynchronous component, and loading.js displayed the loading UI during its load.
          </p>
        </div>

        <div className="space-y-6">
          <Card className="bg-green-500/10 border-green-500/20">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <CheckCircle className="w-16 h-16 text-green-500" />
              </div>
              <CardTitle className="text-xl text-green-500">
                ✅ Loading.js Demo Successful!
              </CardTitle>
              <p className="text-muted-foreground">
                The loading UI just displayed came from the loading.js file.
              </p>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 bg-muted/30 rounded-lg">
                  <h4 className="font-medium mb-2">Data Loading Complete</h4>
                  <p className="text-sm text-muted-foreground">
                    This asynchronous page component took 3 seconds to load, during which Next.js automatically displayed the fallback UI defined in loading.js.
                  </p>
                </div>
                <div className="p-4 bg-primary/10 rounded-lg border border-primary/20">
                  <p className="text-sm text-primary font-medium">
                    🎉 Congratulations! You have successfully experienced Next.js&apos;s loading.js file convention.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Return button and explanation */}
          <div className="text-center space-y-4">
            <div className="flex justify-center">
              <Button asChild variant="outline" className="cursor-pointer">
                <Link href="/file-conventions/loading">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Introduction Page
                </Link>
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              To re-experience loading.js, please re-enter this demo from the introduction page.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}