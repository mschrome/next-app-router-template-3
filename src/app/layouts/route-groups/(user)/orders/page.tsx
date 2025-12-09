import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Calendar, DollarSign, ArrowLeft, Package, Truck } from "lucide-react";
import Header from "@/components/Header";
import Link from "next/link";

export default function OrdersPage() {
  const orders = [
    {
      id: "ORD-001",
      date: "2024-01-15",
      total: "¥299.00",
      status: "Completed",
      statusColor: "bg-green-500/20 text-green-600",
      items: ["Next.js Development Guide", "React Advanced Tutorial"]
    },
    {
      id: "ORD-002", 
      date: "2024-01-20",
      total: "¥159.00",
      status: "In Transit",
      statusColor: "bg-blue-500/20 text-blue-600",
      items: ["TypeScript in Practice", "Tailwind CSS Handbook"]
    },
    {
      id: "ORD-003",
      date: "2024-01-25", 
      total: "¥89.00",
      status: "Pending Shipment",
      statusColor: "bg-yellow-500/20 text-yellow-600",
      items: ["JavaScript Advanced Programming"]
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
            My Orders
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            This page is located within the <code className="bg-muted px-2 py-1 rounded text-primary">(user)</code> Route Group,
            at path <code className="bg-muted px-2 py-1 rounded text-primary">/layouts/route-groups/orders</code>
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {/* Orders List */}
          <div className="space-y-4">
            {orders.map((order) => (
              <Card key={order.id} className="bg-card/80 border-border/30 hover:bg-card/90 transition-colors">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                        <ShoppingCart className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{order.id}</CardTitle>
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          <span>{order.date}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className={`px-2 py-1 rounded-full text-xs font-medium ${order.statusColor}`}>
                        {order.status}
                      </div>
                      <div className="text-right">
                        <div className="flex items-center space-x-1 text-primary font-semibold">
                          <DollarSign className="w-4 h-4" />
                          <span>{order.total}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-medium mb-2 flex items-center">
                        <Package className="w-4 h-4 mr-2" />
                        Order Items
                      </h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {order.items.map((item, index) => (
                          <li key={index}>• {item}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex justify-between items-center pt-3 border-t border-border/20">
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <Truck className="w-4 h-4" />
                        <span>Standard Delivery</span>
                      </div>
                      <Button size="sm" variant="outline" className="cursor-pointer">
                        View Details
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Route Group Explanation */}
          <Card className="bg-muted/30 border-border/20">
            <CardHeader>
              <CardTitle>Route Group Structure</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <h4 className="font-medium mb-2">Current File Structure</h4>
                    <div className="bg-background/50 p-3 rounded border font-mono text-xs">
                      <div>app/layouts/route-groups/</div>
                      <div>├── (user)/</div>
                      <div>│   ├── profile/page.tsx</div>
                      <div>│   └── orders/page.tsx ← Current Page</div>
                      <div>├── (admin)/</div>
                      <div>│   ├── dashboard/page.tsx</div>
                      <div>│   └── users/page.tsx</div>
                      <div>└── (public)/</div>
                      <div>&nbsp;&nbsp;&nbsp;&nbsp;└── about/page.tsx</div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">URL Path Mapping</h4>
                    <div className="bg-background/50 p-3 rounded border text-xs space-y-1">
                      <div><span className="text-primary">(user)</span> does not affect URL:</div>
                      <div>• /layouts/route-groups/profile</div>
                      <div>• /layouts/route-groups/orders</div>
                      <div><span className="text-primary">(admin)</span> does not affect URL:</div>
                      <div>• /layouts/route-groups/dashboard</div>
                      <div>• /layouts/route-groups/users</div>
                      <div><span className="text-primary">(public)</span> does not affect URL:</div>
                      <div>• /layouts/route-groups/about</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
} 