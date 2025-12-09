import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Settings, Bell, Shield, Moon } from "lucide-react";

export default function SettingsSlot() {
  const settingCategories = [
    {
      id: "general",
      name: "General Settings",
      icon: Settings,
      color: "text-blue-500",
      settings: [
        { name: "Language", value: "English", description: "Application interface language" },
        { name: "Timezone", value: "UTC+8", description: "System timezone settings" },
        { name: "Theme", value: "Dark", description: "Interface theme mode" }
      ]
    },
    {
      id: "notifications",
      name: "Notification Settings",
      icon: Bell,
      color: "text-green-500",
      settings: [
        { name: "Email Notifications", value: "On", description: "Receive email notifications" },
        { name: "Push Notifications", value: "On", description: "Receive push notifications" },
        { name: "Sound Alerts", value: "Off", description: "Notification sound alerts" }
      ]
    },
    {
      id: "security",
      name: "Security Settings",
      icon: Shield,
      color: "text-red-500",
      settings: [
        { name: "Two-Factor Authentication", value: "On", description: "Account security verification" },
        { name: "Login Alerts", value: "On", description: "Abnormal login alerts" },
        { name: "Password Strength", value: "Strong", description: "Password security level" }
      ]
    }
  ];

  return (
    <div className="h-full flex flex-col">
      <CardHeader className="py-4">
        <div className="flex items-center space-x-2">
          <Settings className="w-5 h-5 text-purple-500" />
          <CardTitle className="text-lg">App Settings</CardTitle>
        </div>
      </CardHeader>
      
      <CardContent className="flex-1 space-y-4">
        {settingCategories.map((category) => (
          <div key={category.id} className="space-y-3">
            <div className="flex items-center space-x-2">
              <category.icon className={`w-4 h-4 ${category.color}`} />
              <h3 className="font-medium text-sm">{category.name}</h3>
            </div>
            <div className="space-y-2">
              {category.settings.map((setting, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 bg-muted/30 rounded-lg border border-border/20"
                >
                  <div className="flex-1">
                    <div className="font-medium text-sm">{setting.name}</div>
                    <div className="text-xs text-muted-foreground">{setting.description}</div>
                  </div>
                  <div className="text-sm text-muted-foreground">{setting.value}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
        
        <div className="pt-4 border-t border-border/20">
          <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
            <div className="flex items-center space-x-2">
              <Moon className="w-4 h-4 text-orange-500" />
              <span className="text-sm font-medium">Dark Mode</span>
            </div>
            <div className="w-10 h-6 bg-primary rounded-full relative">
              <div className="w-4 h-4 bg-white rounded-full absolute right-1 top-1 transition-transform"></div>
            </div>
          </div>
        </div>
      </CardContent>
    </div>
  );
} 