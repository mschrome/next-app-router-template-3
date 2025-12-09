import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Globe, Heart, Users, Target, ArrowLeft, Mail, Phone, MapPin } from "lucide-react";
import Header from "@/components/Header";
import Link from "next/link";

export default function AboutPage() {
  const features = [
    {
      title: "Innovative Technology",
      description: "Utilizing the latest Next.js and modern frontend tech stack",
      icon: Target,
      color: "text-blue-600"
    },
    {
      title: "User Experience",
      description: "Focused on delivering excellent user experience and interface design",
      icon: Heart,
      color: "text-red-600"
    },
    {
      title: "Team Collaboration",
      description: "Possessing a professional development team and a complete collaboration process",
      icon: Users,
      color: "text-green-600"
    },
    {
      title: "Global Service",
      description: "Committed to providing stable and reliable services to global users",
      icon: Globe,
      color: "text-purple-600"
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
            About Us
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            This page is located within the <code className="bg-muted px-2 py-1 rounded text-primary">(public)</code> Route Group,
            at path <code className="bg-muted px-2 py-1 rounded text-primary">/layouts/route-groups/about</code>
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Company Introduction */}
          <Card className="bg-gradient-to-br from-primary/10 to-blue-500/10 border-primary/20">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Our Mission</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Dedicated to providing exceptional digital experiences through innovative technological solutions.
                We focus on Next.js application development, striving for a perfect balance between code quality and user experience.
              </p>
              <p className="text-muted-foreground">
                We believe in the power of technology to change the world, allowing everyone to enjoy the convenience it brings.
              </p>
            </CardContent>
          </Card>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="bg-card/80 border-border/30 hover:bg-card/90 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className={`w-6 h-6 ${feature.color}`} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Information */}
          <Card className="bg-muted/30 border-border/20">
            <CardHeader>
              <CardTitle>Contact Us</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-sm text-muted-foreground">contact@example.com</p>
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
                    <p className="text-sm text-muted-foreground">123 Tech Park, Anytown, USA</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Route Group Explanation */}
          <Card className="bg-muted/30 border-border/20">
            <CardHeader>
              <CardTitle>Public Page Characteristics of Route Group</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-medium mb-2">Current Path Structure</h4>
                  <div className="bg-background/50 p-3 rounded border font-mono text-xs">
                    <div>File Path: app/layouts/route-groups/(public)/about/page.tsx</div>
                    <div>URL Path: /layouts/route-groups/about</div>
                    <div>Route Group: (public)</div>
                    <div>Characteristic: Publicly Accessible Page</div>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Public Page Features</h4>
                  <ul className="text-muted-foreground space-y-1">
                    <li>• Located within the (public) route group</li>
                    <li>• Accessible without special permissions</li>
                    <li>• Suitable for company information, help documentation, etc.</li>
                    <li>• Can be optimized for SEO</li>
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