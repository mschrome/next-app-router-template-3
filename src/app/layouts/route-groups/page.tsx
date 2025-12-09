import { Button } from "@/components/ui/button";
import RouteGroupsDemo from "./route-groups-demo";
import Header from "@/components/Header";

export default function RouteGroupsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* Title Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Next.js App Router - Route Groups
          </h1>
          <div className="max-w-3xl mx-auto space-y-4 text-muted-foreground">
            <p>
              Route Groups are a powerful feature in Next.js that allow you to organize routes into logical groups without affecting the URL path structure. You create route groups by using parentheses `(folderName)`.
            </p>
            <p>
              This organization method is particularly useful for scenarios where different route segments require different layouts, such as grouping admin pages, user pages, and public pages. Each group can have its own layout and styles, while the URL path remains clean.
            </p>
          </div>
        </div>

        {/* Demo Section */}
        <div className="max-w-4xl mx-auto mb-12">
          <RouteGroupsDemo />
        </div>

      </main>
    </div>
  );
} 