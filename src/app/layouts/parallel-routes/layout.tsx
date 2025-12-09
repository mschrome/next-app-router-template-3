import Header from "@/components/Header";
import { ReactNode } from "react";

interface ParallelRoutesLayoutProps {
  messages: ReactNode;
  users: ReactNode;
  settings: ReactNode;
  default: ReactNode;
}

export default function ParallelRoutesLayout({
  messages,
  users,
  settings,
  default: defaultSlot
}: ParallelRoutesLayoutProps) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
<h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Next.js App Router - Parallel Routes
          </h1>          <p className="text-muted-foreground max-w-2xl mx-auto">
            This page demonstrates Next.js Parallel Routes feature. Using the @folder convention,
            three slots (@messages, @users, @settings) are rendered simultaneously, each with independent content and state.
          </p>
        </div>

        {/* Parallel Routes Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[600px]">
          {/* Messages Slot */}
          <div className="bg-card border border-border/20 rounded-lg overflow-hidden">
            {messages}
          </div>

          {/* Users Slot */}
          <div className="bg-card border border-border/20 rounded-lg overflow-hidden">
            {users}
          </div>

          {/* Settings Slot */}
          <div className="bg-card border border-border/20 rounded-lg overflow-hidden">
            {settings}
          </div>
        </div>

        {/* Default Slot (hidden by default) */}
        <div className="hidden">
          {defaultSlot}
        </div>

        {/* Explanation */}
        <div className="mt-8 p-6 bg-muted/30 border border-border/20 rounded-lg">
          <h3 className="text-lg font-medium mb-3">Technical Implementation Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-muted-foreground">
            <div>
              <h4 className="font-medium text-foreground mb-2">File Structure</h4>
              <div className="font-mono bg-background/50 p-3 rounded border">
                app/layouts/parallel-routes/
                <br />
                ├── @messages/page.tsx
                <br />
                ├── @users/page.tsx
                <br />
                ├── @settings/page.tsx
                <br />
                ├── @default/page.tsx
                <br />
                └── layout.tsx
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}