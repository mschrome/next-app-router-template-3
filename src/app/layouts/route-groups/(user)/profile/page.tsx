import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { User, Mail, Phone, MapPin, ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Link from "next/link";

export default function ProfilePage() {
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
            User Profile Page
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            This page is located within the <code className="bg-muted px-2 py-1 rounded text-primary">(user)</code> Route Group,
            at path <code className="bg-muted px-2 py-1 rounded text-primary">/layouts/route-groups/profile</code>
          </p>
        </div>

        <div className="max-w-2xl mx-auto space-y-6">
          {/* User Profile Card */}
          <Card className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border-blue-500/20">
            <CardHeader className="text-center">
              <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="w-12 h-12 text-primary" />
              </div>
              <CardTitle className="text-2xl">John Doe</CardTitle>
              <p className="text-muted-foreground">Premium User</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-sm text-muted-foreground">john.doe@example.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-sm text-muted-foreground">+1 555 123 4567</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium">Address</p>
                    <p className="text-sm text-muted-foreground">123 Main St, Anytown, USA</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <User className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium">Membership Level</p>
                    <p className="text-sm text-muted-foreground">VIP Gold Member</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Route Group Explanation */}
          <Card className="bg-muted/30 border-border/20">
            <CardHeader>
              <CardTitle>Route Group Features</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <h4 className="font-medium mb-2">Current Route Information</h4>
                    <div className="bg-background/50 p-3 rounded border font-mono text-xs">
                      <div>File Path: app/layouts/route-groups/(user)/profile/page.tsx</div>
                      <div>URL Path: /layouts/route-groups/profile</div>
                      <div>Route Group: (user)</div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Route Group Characteristics</h4>
                    <ul className="text-muted-foreground space-y-1">
                      <li>• (user) folder does not affect URL path</li>
                      <li>• Allows organizing different route types at the same level</li>
                      <li>• Facilitates code management and access control</li>
                      <li>• Supports different layouts and middleware</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Navigation */}
          <Card className="bg-muted/30 border-border/20">
            <CardHeader>
              <CardTitle>Other Route Group Pages</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <Button asChild variant="outline" className="justify-start cursor-pointer">
                  <Link href="/layouts/route-groups/orders">
                    <User className="w-4 h-4 mr-2" />
                    Order History (user)
                  </Link>
                </Button>
                <Button asChild variant="outline" className="justify-start cursor-pointer">
                  <Link href="/layouts/route-groups/dashboard">
                    <User className="w-4 h-4 mr-2" />
                    Admin Dashboard (admin)
                  </Link>
                </Button>
                <Button asChild variant="outline" className="justify-start cursor-pointer">
                  <Link href="/layouts/route-groups/about">
                    <User className="w-4 h-4 mr-2" />
                    About Us (public)
                  </Link>
                </Button>
                <Button asChild variant="outline" className="justify-start cursor-pointer">
                  <Link href="/layouts/route-groups/users">
                    <User className="w-4 h-4 mr-2" />
                    User Management (admin)
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}