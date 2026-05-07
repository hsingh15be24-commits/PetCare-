import { StatCard } from "./StatCard";
import { Users, PawPrint, Calendar, DollarSign, TrendingUp, BarChart3 } from "lucide-react";

const recentBookings = [
  { id: "1", owner: "Sarah J.", pet: "Buddy", plan: "Premium", amount: "$693", status: "Active" },
  { id: "2", owner: "Mike C.", pet: "Luna", plan: "Standard", amount: "$295", status: "Pending" },
  { id: "3", owner: "Emily R.", pet: "Charlie", plan: "Basic", amount: "$145", status: "Completed" },
  { id: "4", owner: "John D.", pet: "Milo", plan: "Premium", amount: "$990", status: "Active" },
];

export function AdminDashboard() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-foreground">Admin Overview 📊</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard icon={Users} label="Total Users" value={1245} change="+12%" positive />
        <StatCard icon={PawPrint} label="Registered Pets" value={892} change="+8%" positive />
        <StatCard icon={Calendar} label="Active Bookings" value={67} change="+5%" positive />
        <StatCard icon={DollarSign} label="Revenue (MTD)" value="$48,250" change="+18%" positive />
      </div>
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
          <h3 className="mb-4 font-semibold text-foreground">Revenue Overview</h3>
          <div className="flex h-48 items-end gap-2">
            {[35, 42, 55, 48, 62, 78, 72, 85, 90, 68, 95, 88].map((h, i) => (
              <div key={i} className="flex-1 rounded-t-md bg-primary/70 transition-all hover:bg-primary" style={{ height: `${h}%` }} />
            ))}
          </div>
          <div className="mt-2 flex justify-between text-xs text-muted-foreground">
            <span>Jan</span><span>Jun</span><span>Dec</span>
          </div>
        </div>
        <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
          <h3 className="mb-4 font-semibold text-foreground">Pet Occupancy</h3>
          <div className="space-y-4">
            {[
              { label: "Dogs", pct: 75, count: 45 },
              { label: "Cats", pct: 55, count: 22 },
              { label: "Others", pct: 20, count: 5 },
            ].map((o) => (
              <div key={o.label}>
                <div className="mb-1 flex justify-between text-sm">
                  <span className="text-foreground">{o.label}</span>
                  <span className="text-muted-foreground">{o.count} pets ({o.pct}%)</span>
                </div>
                <div className="h-2 rounded-full bg-muted">
                  <div className="h-2 rounded-full bg-primary transition-all" style={{ width: `${o.pct}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
        <h3 className="mb-4 font-semibold text-foreground">Recent Bookings</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border text-left">
                <th className="pb-3 font-medium text-muted-foreground">Owner</th>
                <th className="pb-3 font-medium text-muted-foreground">Pet</th>
                <th className="pb-3 font-medium text-muted-foreground">Plan</th>
                <th className="pb-3 font-medium text-muted-foreground">Amount</th>
                <th className="pb-3 font-medium text-muted-foreground">Status</th>
              </tr>
            </thead>
            <tbody>
              {recentBookings.map((b) => (
                <tr key={b.id} className="border-b border-border/50">
                  <td className="py-3 font-medium text-foreground">{b.owner}</td>
                  <td className="py-3 text-muted-foreground">{b.pet}</td>
                  <td className="py-3 text-muted-foreground">{b.plan}</td>
                  <td className="py-3 text-foreground font-medium">{b.amount}</td>
                  <td className="py-3">
                    <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${b.status === "Active" ? "bg-success/10 text-success" : b.status === "Completed" ? "bg-primary/10 text-primary" : "bg-warning/10 text-warning"}`}>{b.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}