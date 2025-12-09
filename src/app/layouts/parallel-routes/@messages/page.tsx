import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare, User, Clock, Search } from "lucide-react";

export default function MessagesSlot() {
  const messages = [
    {
      id: 1,
      from: "John Doe",
      subject: "Project Progress Report",
      preview: "Please check the latest project progress report, we need...",
      time: "14:30",
      unread: true
    },
    {
      id: 2,
      from: "Jane Smith",
      subject: "Meeting Schedule Confirmation",
      preview: "Regarding tomorrow's meeting schedule, please confirm the time...",
      time: "13:15",
      unread: false
    },
    {
      id: 3,
      from: "Peter Jones",
      subject: "Document Review Request",
      preview: "Please help review this document, thank you...",
      time: "11:45",
      unread: true
    }
  ];

  return (
    <div className="h-full flex flex-col">
      <CardHeader className="py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <MessageSquare className="w-5 h-5 text-blue-500" />
            <CardTitle className="text-lg">Inbox</CardTitle>
          </div>
          <div className="text-sm text-muted-foreground">
            {messages.filter(m => m.unread).length} unread
          </div>
        </div>
        <div className="relative">
          <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search messages..."
            className="w-full pl-10 pr-4 py-2 bg-muted/50 border border-border/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 text-sm"
          />
        </div>
      </CardHeader>
      
      <CardContent className="flex-1 space-y-3">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`p-3 rounded-lg border transition-colors ${
              message.unread 
                ? "bg-blue-500/10 border-blue-500/20 hover:bg-blue-500/20" 
                : "bg-muted/30 border-border/20 hover:bg-muted/50"
            }`}
          >
            <div className="flex items-start justify-between">
              <div className="flex-1 min-w-0">
                <div className="flex items-center space-x-2 mb-1">
                  <User className="w-4 h-4 text-muted-foreground" />
                  <span className="font-medium text-sm">{message.from}</span>
                  {message.unread && (
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  )}
                </div>
                <div className="font-medium text-sm mb-1">{message.subject}</div>
                <div className="text-xs text-muted-foreground truncate">{message.preview}</div>
              </div>
              <div className="flex items-center space-x-2 ml-3">
                <Clock className="w-3 h-3 text-muted-foreground" />
                <span className="text-xs text-muted-foreground">{message.time}</span>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </div>
  );
} 