import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, Users, TrendingUp, DollarSign } from "lucide-react";

export default function DashboardPage() {
  const stats = [
    {
      title: "Total Visits",
      value: "12,345",
      change: "+12%",
      icon: BarChart3,
      color: "text-blue-600"
    },
    {
      title: "Active Users",
      value: "1,234",
      change: "+8%",
      icon: Users,
      color: "text-green-600"
    },
    {
      title: "Growth Rate",
      value: "23.5%",
      change: "+5%",
      icon: TrendingUp,
      color: "text-purple-600"
    },
    {
      title: "Revenue",
      value: "$45,678",
      change: "+15%",
      icon: DollarSign,
      color: "text-orange-600"
    }
  ];

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <Card className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border-blue-500/20">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl text-blue-600">
            📊 Dashboard Page
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <p className="text-muted-foreground">
            This is the dashboard page, displaying various statistics and charts.
          </p>
          <p className="text-sm text-muted-foreground">
            Note: The page title bar and navigation remain unchanged; only the content area is updated.
          </p>
        </CardContent>
      </Card>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="bg-card/80 border-border/30 hover:bg-card/90 transition-colors">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">{stat.title}</p>
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <div className="flex items-center mt-2">
                    <TrendingUp className="w-4 h-4 text-green-600 mr-1" />
                    <span className="text-sm text-green-600">{stat.change}</span>
                  </div>
                </div>
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Chart Section */}
      <Card className="bg-card/80 border-border/30">
        <CardHeader>
          <CardTitle>Data Trends</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-40 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg flex items-center justify-center">
            <p className="text-muted-foreground">Chart component can be placed here</p>
          </div>
        </CardContent>
      </Card>

      {/* Page Info */}
      <Card className="bg-muted/30 border-border/20">
        <CardHeader>
          <CardTitle>Page Technical Information</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <h4 className="font-medium mb-2">Current File Path</h4>
              <div className="bg-background/50 p-3 rounded border font-mono text-xs">
                app/layouts/nested-layouts/dashboard/page.tsx
              </div>
            </div>
            <div>
              <h4 className="font-medium mb-2">Layout Used</h4>
              <div className="bg-background/50 p-3 rounded border font-mono text-xs">
                app/layouts/nested-layouts/layout.tsx ← Outer Layout
              </div>
            </div>
          </div>
          <div className="mt-4 p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
            <p className="text-sm text-blue-600 font-medium">
              ✅ This page shares the outer layout&apos;s navigation and title; only the content area is independent.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}