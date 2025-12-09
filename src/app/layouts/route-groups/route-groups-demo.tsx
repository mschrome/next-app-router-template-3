"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Folder, FileText, Users, Settings, Globe, ExternalLink } from "lucide-react";
import Link from "next/link";

export default function RouteGroupsDemo() {
  const [activeGroup, setActiveGroup] = useState("admin");

  const routeGroups = [
    {
      id: "admin",
      name: "Admin Group",
      icon: Settings,
      description: "Pages related to the admin backend",
      routes: [
        { path: "/layouts/route-groups/dashboard", name: "Dashboard", description: "Admin Dashboard", realPath: "/layouts/route-groups/dashboard" },
        { path: "/layouts/route-groups/users", name: "User Management", description: "User Management", realPath: "/layouts/route-groups/users" },
      ],
      color: "border-red-500/30 bg-red-500/10"
    },
    {
      id: "user",
      name: "User Group", 
      icon: Users,
      description: "Pages related to user profiles",
      routes: [
        { path: "/layouts/route-groups/profile", name: "Profile", description: "User Profile", realPath: "/layouts/route-groups/profile" },
        { path: "/layouts/route-groups/orders", name: "Orders", description: "Order History", realPath: "/layouts/route-groups/orders" },
      ],
      color: "border-blue-500/30 bg-blue-500/10"
    },
    {
      id: "public",
      name: "Public Group",
      icon: Globe,
      description: "Publicly accessible pages",
      routes: [
        { path: "/layouts/route-groups/about", name: "About", description: "About Us", realPath: "/layouts/route-groups/about" },
      ],
      color: "border-green-500/30 bg-green-500/10"
    }
  ];

  const currentGroup = routeGroups.find(group => group.id === activeGroup);

  return (
    <div className="space-y-8">
      {/* Route Groups Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {routeGroups.map((group) => (
          <Card 
            key={group.id}
            className={`cursor-pointer transition-all duration-200 hover:scale-105 ${
              activeGroup === group.id 
                ? "ring-2 ring-primary shadow-lg" 
                : "hover:shadow-md"
            }`}
            onClick={() => setActiveGroup(group.id)}
          >
            <CardHeader className="pb-3">
              <div className="flex items-center space-x-3">
                <div className={`p-2 rounded-lg ${group.color}`}>
                  <group.icon className="w-5 h-5 text-foreground" />
                </div>
                <div>
                  <CardTitle className="text-lg">{group.name}</CardTitle>
                  <p className="text-sm text-muted-foreground">{group.description}</p>
                </div>
              </div>
            </CardHeader>
          </Card>
        ))}
      </div>

      {/* Selected Group Details */}
      {currentGroup && (
        <Card className="bg-muted/30 border-border/20">
          <CardHeader>
            <div className="flex items-center space-x-3">
              <div className={`p-2 rounded-lg ${currentGroup.color}`}>
                <currentGroup.icon className="w-5 h-5 text-foreground" />
              </div>
              <div>
                <CardTitle className="text-xl">{currentGroup.name}</CardTitle>
                <p className="text-muted-foreground">{currentGroup.description}</p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Folder className="w-4 h-4" />
                <span>Folder Structure: (group-name)/</span>
              </div>
              
              <div className="space-y-3">
                {currentGroup.routes.map((route, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-background/50 rounded-lg border border-border/20">
                    <FileText className="w-4 h-4 text-muted-foreground" />
                    <div className="flex-1">
                      <div className="font-medium">{route.name}</div>
                      <div className="text-sm text-muted-foreground">{route.description}</div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-muted-foreground font-mono">{route.path}</span>
                      <Link 
                        href={route.realPath}
                        className="inline-flex items-center space-x-1 text-sm text-primary hover:text-primary/80 transition-colors"
                      >
                        <span>Visit</span>
                        <ExternalLink className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
} 