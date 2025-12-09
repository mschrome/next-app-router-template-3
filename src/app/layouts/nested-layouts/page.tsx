import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function NestedLayoutsPage() {
  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <Card className="bg-gradient-to-br from-primary/10 to-blue-500/10 border-primary/20">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl text-primary">
            🏠 Welcome to Nested Layouts Home
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <p className="text-muted-foreground">
            This is the home page for nested layouts. Click on the navigation tabs above to experience the true features of Nested Layouts.
          </p>
          <p className="text-sm text-muted-foreground">
            Note: When you switch between different pages, the outer layout (navigation bar, title, etc.) remains unchanged,
            and only the content area updates. This is the core advantage of Nested Layouts.
          </p>
        </CardContent>
      </Card>

      {/* Features Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="bg-card/80 border-border/30">
          <CardHeader>
            <CardTitle className="text-lg">Layout Persistence</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              The outer layout maintains its state when switching pages, avoiding re-renders and improving user experience.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-card/80 border-border/30">
          <CardHeader>
            <CardTitle className="text-lg">Shared Components</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Common components like navigation bars and sidebars can be shared across multiple pages, leading to cleaner code.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-card/80 border-border/30">
          <CardHeader>
            <CardTitle className="text-lg">Multi-level Nesting</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Supports multi-level layout nesting, where each level can have its own layout logic and state management.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-card/80 border-border/30">
          <CardHeader>
            <CardTitle className="text-lg">Performance Optimization</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Only the changed parts are re-rendered, significantly improving application performance and responsiveness.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Current Page Info */}
      <Card className="bg-muted/30 border-border/20">
        <CardHeader>
          <CardTitle>Current Page Information</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <h4 className="font-medium mb-2">File Path</h4>
              <div className="bg-background/50 p-3 rounded border font-mono text-xs">
                app/layouts/nested-layouts/page.tsx
              </div>
            </div>
            <div>
              <h4 className="font-medium mb-2">Applied Layout</h4>
              <div className="bg-background/50 p-3 rounded border font-mono text-xs">
                app/layouts/nested-layouts/layout.tsx
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}