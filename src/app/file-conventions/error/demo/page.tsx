import Header from "@/components/Header";

export const dynamic = 'force-dynamic';
// Server component that will throw an error
async function ErrorThrowingComponent() {
  // Simulate a server-side error
  throw new Error("DEMO_ERROR: This is a demo error to show how error.js works. API request failed or data processing error occurred.");
  
  // This line will never be executed, but shows content under normal circumstances
  return (
    <div className="text-center p-8">
      <h3 className="text-xl font-semibold text-green-500 mb-2">No Error</h3>
      <p className="text-muted-foreground">
        If you see this message, no error has occurred
      </p>
    </div>
  );
}

// Main demo page - Server Component
export default async function ErrorDemoPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent mb-4">
            Error.js Live Demo
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            This page contains a component that will throw an error, triggering error.js to display the error UI
          </p>
        </div>

        {/* This component will throw an error, triggering error.js */}
        <ErrorThrowingComponent />
      </main>
    </div>
  );
} 