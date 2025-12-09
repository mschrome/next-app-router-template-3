"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare, Users, Settings, FileText } from "lucide-react";

export default function ParallelRoutesDemo() {
  const [activeSlot, setActiveSlot] = useState("messages");

  const slots = [
    {
      id: "messages",
      name: "Messages Slot",
      icon: MessageSquare,
      description: "Message list and conversations",
      color: "border-blue-500/30 bg-blue-500/10",
      content: "Inbox content - Displays user message list"
    },
    {
      id: "users",
      name: "Users Slot",
      icon: Users,
      description: "User management and list",
      color: "border-green-500/30 bg-green-500/10",
      content: "User list - Displays online users and contacts"
    },
    {
      id: "settings",
      name: "Settings Slot",
      icon: Settings,
      description: "Application settings and configuration",
      color: "border-purple-500/30 bg-purple-500/10",
      content: "Settings panel - Displays application configuration options"
    }
  ];

  const currentSlot = slots.find(slot => slot.id === activeSlot);

  return (
    <div className="space-y-8">
      {/* Parallel Routes Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {slots.map((slot) => (
          <Card 
            key={slot.id}
            className={`cursor-pointer transition-all duration-200 hover:scale-105 ${
              activeSlot === slot.id 
                ? "ring-2 ring-primary shadow-lg" 
                : "hover:shadow-md"
            }`}
            onClick={() => setActiveSlot(slot.id)}
          >
            <CardHeader className="pb-3">
              <div className="flex items-center space-x-3">
                <div className={`p-2 rounded-lg ${slot.color}`}>
                  <slot.icon className="w-5 h-5 text-foreground" />
                </div>
                <div>
                  <CardTitle className="text-lg">{slot.name}</CardTitle>
                  <p className="text-sm text-muted-foreground">{slot.description}</p>
                </div>
              </div>
            </CardHeader>
          </Card>
        ))}
      </div>

      {/* Selected Slot Details */}
      {currentSlot && (
        <Card className="bg-muted/30 border-border/20">
          <CardHeader>
            <div className="flex items-center space-x-3">
              <div className={`p-2 rounded-lg ${currentSlot.color}`}>
                <currentSlot.icon className="w-5 h-5 text-foreground" />
              </div>
              <div>
                <CardTitle className="text-xl">{currentSlot.name}</CardTitle>
                <p className="text-muted-foreground">{currentSlot.description}</p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <FileText className="w-4 h-4" />
                <span>Folder Structure: @{currentSlot.id}/</span>
              </div>
              
              <div className="p-4 bg-background/50 rounded-lg border border-border/20">
                <div className="text-sm text-muted-foreground mb-2">Slot Content Preview:</div>
                <div className="font-medium">{currentSlot.content}</div>
              </div>


              <div className="mt-4 p-4 bg-muted/50 border border-border/20 rounded-lg">
                <h4 className="font-medium text-foreground mb-2">Real-world Use Cases</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Parallel Routes are particularly useful for scenarios requiring multiple independent content areas to be displayed simultaneously:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="flex items-center space-x-2 text-sm">
                    <MessageSquare className="w-4 h-4 text-blue-500" />
                    <span>Email App (Inbox + Contacts)</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Users className="w-4 h-4 text-green-500" />
                    <span>Social App (Feed + Friends List)</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Settings className="w-4 h-4 text-purple-500" />
                    <span>Admin Dashboard (Content + Sidebar)</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <FileText className="w-4 h-4 text-orange-500" />
                    <span>Document App (Table of Contents + Content)</span>
                  </div>
                </div>
              </div>

              <div className="mt-4 p-4 bg-muted/50 border border-border/20 rounded-lg">
                <h4 className="font-medium text-foreground mb-2">File Structure Example</h4>
                <div className="bg-background/50 p-3 rounded-lg border border-border/20">
                  <div className="text-sm font-mono text-muted-foreground">
                    app/
                    <br />
                    ├── @messages/
                    <br />
                    │   └── page.tsx
                    <br />
                    ├── @users/
                    <br />
                    │   └── page.tsx
                    <br />
                    ├── @settings/
                    <br />
                    │   └── page.tsx
                    <br />
                    └── layout.tsx
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  Each @folder represents a slot that can be rendered simultaneously in layout.tsx
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
} 