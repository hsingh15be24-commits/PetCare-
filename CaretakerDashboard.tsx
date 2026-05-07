import { StatCard } from "./StatCard";
import { PawPrint, CheckCircle, Clock, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const assignedPets = [
  { id: "1", name: "Buddy", breed: "Golden Retriever", owner: "Sarah J.", fed: true, walked: true },
  { id: "2", name: "Luna", breed: "Labrador", owner: "Mike C.", fed: true, walked: false },
  { id: "3", name: "Charlie", breed: "Beagle", owner: "Emily R.", fed: false, walked: false },
];

export function CaretakerDashboard() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-foreground">Good morning, James! 🐾</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard icon={PawPrint} label="Assigned Pets" value={3} />
        <StatCard icon={CheckCircle} label="Tasks Done" value={4} change="67%" positive />
        <StatCard icon={Clock} label="Pending Tasks" value={2} />
        <StatCard icon={AlertCircle} label="Alerts" value={0} />
      </div>
      <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
        <h3 className="mb-4 font-semibold text-foreground">Today's Pet Care</h3>
        <div className="space-y-3">
          {assignedPets.map((pet) => (
            <div key={pet.id} className="flex items-center justify-between rounded-lg bg-muted/50 p-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary text-sm font-bold">{pet.name[0]}</div>
                <div>
                  <p className="font-medium text-foreground">{pet.name}</p>
                  <p className="text-xs text-muted-foreground">{pet.breed} · Owner: {pet.owner}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${pet.fed ? "bg-success/10 text-success" : "bg-warning/10 text-warning"}`}>{pet.fed ? "Fed ✓" : "Feed"}</span>
                <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${pet.walked ? "bg-success/10 text-success" : "bg-warning/10 text-warning"}`}>{pet.walked ? "Walked ✓" : "Walk"}</span>
                <Button variant="ghost" size="sm">Notes</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}