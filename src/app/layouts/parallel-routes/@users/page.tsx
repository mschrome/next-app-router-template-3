import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Circle, MessageSquare, Video, Phone } from "lucide-react";

export default function UsersSlot() {
  const users = [
    {
      id: 1,
      name: "John Doe",
      avatar: "JD",
      status: "Online",
      department: "Engineering",
      lastSeen: "Just now"
    },
    {
      id: 2,
      name: "Jane Smith",
      avatar: "JS",
      status: "Online",
      department: "Product",
      lastSeen: "2 minutes ago"
    },
    {
      id: 3,
      name: "Peter Jones",
      avatar: "PJ",
      status: "Offline",
      department: "Design",
      lastSeen: "1 hour ago"
    },
    {
      id: 4,
      name: "Alice Brown",
      avatar: "AB",
      status: "Online",
      department: "Operations",
      lastSeen: "5 minutes ago"
    }
  ];

  const onlineUsers = users.filter(user => user.status === "Online");

  return (
    <div className="h-full flex flex-col">
      <CardHeader className="py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Users className="w-5 h-5 text-green-500" />
            <CardTitle className="text-lg">User List</CardTitle>
          </div>
          <div className="text-sm text-muted-foreground">
            {onlineUsers.length} Online
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="flex-1 space-y-3">
        {users.map((user) => (
          <div
            key={user.id}
            className="flex items-center justify-between p-3 bg-muted/30 rounded-lg border border-border/20 hover:bg-muted/50 transition-colors"
          >
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center font-semibold text-primary text-sm">
                {user.avatar}
              </div>
              <div>
                <div className="flex items-center space-x-2">
                  <h3 className="font-medium text-sm">{user.name}</h3>
                  <div className="flex items-center space-x-1">
                    <Circle className={`w-2 h-2 ${
                      user.status === "Online" ? "text-green-500 fill-current" : "text-gray-400"
                    }`} />
                    <span className="text-xs text-muted-foreground">{user.status}</span>
                  </div>
                </div>
                <div className="text-xs text-muted-foreground">
                  {user.department} • {user.lastSeen}
                </div>
              </div>
            </div>
            <div className="flex space-x-1">
              <button className="p-2 hover:bg-muted/50 rounded transition-colors cursor-pointer">
                <MessageSquare className="w-4 h-4 text-muted-foreground" />
              </button>
              <button className="p-2 hover:bg-muted/50 rounded transition-colors cursor-pointer">
                <Video className="w-4 h-4 text-muted-foreground" />
              </button>
              <button className="p-2 hover:bg-muted/50 rounded transition-colors cursor-pointer">
                <Phone className="w-4 h-4 text-muted-foreground" />
              </button>
            </div>
          </div>
        ))}
      </CardContent>
    </div>
  );
} 