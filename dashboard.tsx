import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useAuth } from "@/lib/auth-context";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { OwnerDashboard } from "@/components/dashboard/OwnerDashboard";
import { CaretakerDashboard } from "@/components/dashboard/CaretakerDashboard";
import { VetDashboard } from "@/components/dashboard/VetDashboard";
import { AdminDashboard } from "@/components/dashboard/AdminDashboard";
import { useEffect } from "react";

export const Route = createFileRoute("/dashboard")({
  component: DashboardPage,
});

function DashboardPage() {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate({ to: "/login" });
    }
  }, [user, navigate]);

  if (!user) return null;

  const Dashboard = {
    owner: OwnerDashboard,
    caretaker: CaretakerDashboard,
    vet: VetDashboard,
    admin: AdminDashboard,
  }[user.role];

  return (
    <DashboardLayout>
      <Dashboard />
    </DashboardLayout>
  );
}