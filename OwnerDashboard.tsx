import { StatCard } from "./StatCard";
import { PawPrint, Calendar, CreditCard, Bell, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

const mockPets = [
  { id: "1", name: "Buddy", breed: "Golden Retriever", age: 3, status: "Boarding" },
  { id: "2", name: "Whiskers", breed: "Persian Cat", age: 2, status: "Home" },
  { id: "3", name: "Max", breed: "German Shepherd", age: 5, status: "Boarding" },
];

const mockBookings = [
  { id: "1", pet: "Buddy", plan: "Premium", dates: "May 10 - May 17", status: "Active" },
  { id: "2", pet: "Max", plan: "Standard", dates: "May 12 - May 15", status: "Pending" },
];

export function OwnerDashboard() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-foreground">Welcome back, Sarah! 👋</h2>
        <Button variant="hero" size="sm"><Plus className="mr-1 h-4 w-4" /> Add Pet</Button>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard icon={PawPrint} label="Total Pets" value={3} />
        <StatCard icon={Calendar} label="Active Bookings" value={2} change="+1" positive />
        <StatCard icon={CreditCard} label="Total Spent" value="$1,250" />
        <StatCard icon={Bell} label="Notifications" value={5} />
      </div>
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
          <h3 className="mb-4 font-semibold text-foreground">My Pets</h3>
          <div className="space-y-3">
            {mockPets.map((pet) => (
              <div key={pet.id} className="flex items-center justify-between rounded-lg bg-muted/50 p-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary text-sm font-bold">{pet.name[0]}</div>
                  <div>
                    <p className="font-medium text-foreground">{pet.name}</p>
                    <p className="text-xs text-muted-foreground">{pet.breed} · {pet.age}y</p>
                  </div>
                </div>
                <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${pet.status === "Boarding" ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground"}`}>{pet.status}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
          <h3 className="mb-4 font-semibold text-foreground">Recent Bookings</h3>
          <div className="space-y-3">
            {mockBookings.map((b) => (
              <div key={b.id} className="flex items-center justify-between rounded-lg bg-muted/50 p-3">
                <div>
                  <p className="font-medium text-foreground">{b.pet} — {b.plan}</p>
                  <p className="text-xs text-muted-foreground">{b.dates}</p>
                </div>
                <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${b.status === "Active" ? "bg-success/10 text-success" : "bg-warning/10 text-warning"}`}>{b.status}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}