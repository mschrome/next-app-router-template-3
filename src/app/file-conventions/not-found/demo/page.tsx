import { notFound } from "next/navigation";
import Header from "@/components/Header";
export const dynamic = 'force-dynamic';

// Demo page that calls notFound()
export default function NotFoundDemoPage() {
  // Immediately call notFound() function, which triggers not-found.js
  notFound();
  
  // This line will never be executed, but shows what would normally be rendered
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent mb-4">
            Not-Found.js Live Demo
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            If you see this message, the notFound() function is not working correctly
          </p>
        </div>
      </main>
    </div>
  );
} 