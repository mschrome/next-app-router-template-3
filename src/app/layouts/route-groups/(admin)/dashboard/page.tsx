import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Settings, Users, BarChart3, ArrowLeft, TrendingUp, UserCheck, AlertCircle } from "lucide-react";
import Header from "@/components/Header";
import Link from "next/link";

export default function AdminDashboardPage() {
  const stats = [
    {
      title: "Total Users",
      value: "1,234",
      change: "+12%",
      icon: Users,
      color: "text-blue-600"
    },
    {
      title: "Active Users",
      value: "856",
      change: "+8%", 
      icon: UserCheck,
      color: "text-green-600"
    },
    {
      title: "System Load",
      value: "67%",
      change: "-5%",
      icon: BarChart3,
      color: "text-orange-600"
    },
    {
      title: "Pending Issues",
      value: "23",
      change: "+3",
      icon: AlertCircle,
      color: "text-red-600"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Button asChild variant="outline" size="sm" className="cursor-pointer">
            <Link href="/layouts/route-groups">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Route Groups Demo
            </Link>
          </Button>
        </div>

        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent mb-4">
            Admin Dashboard
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            This page is located within the <code className="bg-muted px-2 py-1 rounded text-primary">(admin)</code> Route Group,
            at path <code className="bg-muted px-2 py-1 rounded text-primary">/layouts/route-groups/dashboard</code>
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-8">
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
                    <div className={`w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center`}>
                      <stat.icon className={`w-6 h-6 ${stat.color}`} />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Quick Actions */}
          <Card className="bg-gradient-to-br from-red-500/10 to-orange-500/10 border-red-500/20">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Settings className="w-5 h-5 mr-2 text-red-600" />
                Admin Actions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Button asChild className="justify-start h-auto p-4 bg-background/50 hover:bg-background/80 cursor-pointer"> 
                  <Link href="/layouts/route-groups/users">
                    <div className="text-left">
                      <div className="font-medium">User Management</div>
                      <div className="text-sm text-muted-foreground">Manage system users and permissions</div>
                    </div>
                  </Link>
                </Button>
                <Button variant="outline" className="justify-start h-auto p-4 cursor-pointer">
                  <div className="text-left">
                    <div className="font-medium">System Settings</div>
                    <div className="text-sm text-muted-foreground">Configure system parameters</div>
                  </div>
                </Button>
                <Button variant="outline" className="justify-start h-auto p-4 cursor-pointer">
                  <div className="text-left">
                    <div className="font-medium">Data Analytics</div>
                    <div className="text-sm text-muted-foreground">View detailed reports</div>
                  </div>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Route Group Explanation */}
          <Card className="bg-muted/30 border-border/20">
            <CardHeader>
              <CardTitle>Route Group Admin Page Features</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-medium mb-2">Current Path Structure</h4>
                  <div className="bg-background/50 p-3 rounded border font-mono text-xs">
                    <div>File Path: app/layouts/route-groups/(admin)/dashboard/page.tsx</div>
                    <div>URL Path: /layouts/route-groups/dashboard</div>
                    <div>Route Group: (admin)</div>
                    <div>Feature: Admin-specific page</div>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Route Group Advantages</h4>
                  <ul className="text-muted-foreground space-y-1">
                    <li>• Groups admin pages into (admin)</li>
                    <li>• Allows dedicated middleware and layouts</li>
                    <li>• Keeps URL paths clean</li>
                    <li>• Facilitates permission control and code organization</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
} 