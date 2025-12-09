import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Info, ArrowRight } from "lucide-react";

export default function DefaultSlot() {
  return (
    <div className="h-full flex flex-col">
      <CardHeader className="pb-4">
        <div className="flex items-center space-x-2">
          <Info className="w-5 h-5 text-muted-foreground" />
          <CardTitle className="text-lg">Welcome</CardTitle>
        </div>
      </CardHeader>
      
      <CardContent className="flex-1 flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="w-16 h-16 bg-muted/50 rounded-full flex items-center justify-center mx-auto">
            <Info className="w-8 h-8 text-muted-foreground" />
          </div>
          <div>
            <h3 className="text-lg font-medium mb-2">Select a slot on the left to get started</h3>
            <p className="text-sm text-muted-foreground">
              This is a Parallel Routes demo page, showcasing multiple slots rendering simultaneously.
              <br />
              Click on the slot cards on the left to view different content.
            </p>
          </div>
          <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
            <span>Messages</span>
            <ArrowRight className="w-4 h-4" />
            <span>Users</span>
            <ArrowRight className="w-4 h-4" />
            <span>Settings</span>
          </div>
        </div>
      </CardContent>
    </div>
  );
} 