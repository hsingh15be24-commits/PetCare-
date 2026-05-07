import { StatCard } from "./StatCard";
import { Stethoscope, Calendar, FileText, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";

const patients = [
  { id: "1", name: "Buddy", breed: "Golden Retriever", owner: "Sarah J.", nextCheckup: "May 12", status: "Healthy" },
  { id: "2", name: "Luna", breed: "Labrador", owner: "Mike C.", nextCheckup: "May 14", status: "Needs Vaccination" },
  { id: "3", name: "Max", breed: "German Shepherd", owner: "Sarah J.", nextCheckup: "May 15", status: "Under Treatment" },
];

export function VetDashboard() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-foreground">Welcome, Dr. Chen! 🩺</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard icon={Stethoscope} label="Total Patients" value={12} />
        <StatCard icon={Calendar} label="Appointments Today" value={4} />
        <StatCard icon={FileText} label="Reports Pending" value={2} />
        <StatCard icon={AlertTriangle} label="Urgent Cases" value={1} />
      </div>
      <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
        <h3 className="mb-4 font-semibold text-foreground">Patient Overview</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border text-left">
                <th className="pb-3 font-medium text-muted-foreground">Pet</th>
                <th className="pb-3 font-medium text-muted-foreground">Breed</th>
                <th className="pb-3 font-medium text-muted-foreground">Owner</th>
                <th className="pb-3 font-medium text-muted-foreground">Next Checkup</th>
                <th className="pb-3 font-medium text-muted-foreground">Status</th>
                <th className="pb-3 font-medium text-muted-foreground">Action</th>
              </tr>
            </thead>
            <tbody>
              {patients.map((p) => (
                <tr key={p.id} className="border-b border-border/50">
                  <td className="py-3 font-medium text-foreground">{p.name}</td>
                  <td className="py-3 text-muted-foreground">{p.breed}</td>
                  <td className="py-3 text-muted-foreground">{p.owner}</td>
                  <td className="py-3 text-muted-foreground">{p.nextCheckup}</td>
                  <td className="py-3">
                    <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${p.status === "Healthy" ? "bg-success/10 text-success" : p.status === "Under Treatment" ? "bg-destructive/10 text-destructive" : "bg-warning/10 text-warning"}`}>{p.status}</span>
                  </td>
                  <td className="py-3"><Button variant="ghost" size="sm">View</Button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}