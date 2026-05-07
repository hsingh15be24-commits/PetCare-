import { Link, useNavigate, useLocation } from "@tanstack/react-router";
import { useAuth, type UserRole } from "@/lib/auth-context";
import { PawPrint, LogOut, Home, PawPrintIcon, Calendar, CreditCard, Bell, Users, BarChart3, Stethoscope, ClipboardList, Heart, Settings, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, type ReactNode } from "react";

interface NavItem {
  icon: typeof Home;
  label: string;
  href: string;
}

const navByRole: Record<UserRole, NavItem[]> = {
  owner: [
    { icon: Home, label: "Overview", href: "/dashboard" },
    { icon: PawPrintIcon, label: "My Pets", href: "/dashboard/pets" },
    { icon: Calendar, label: "Bookings", href: "/dashboard/bookings" },
    { icon: CreditCard, label: "Payments", href: "/dashboard/payments" },
    { icon: Bell, label: "Notifications", href: "/dashboard/notifications" },
  ],
  caretaker: [
    { icon: Home, label: "Overview", href: "/dashboard" },
    { icon: PawPrintIcon, label: "Assigned Pets", href: "/dashboard/pets" },
    { icon: ClipboardList, label: "Daily Tasks", href: "/dashboard/tasks" },
    { icon: Bell, label: "Notifications", href: "/dashboard/notifications" },
  ],
  vet: [
    { icon: Home, label: "Overview", href: "/dashboard" },
    { icon: Stethoscope, label: "Patients", href: "/dashboard/patients" },
    { icon: Heart, label: "Health Records", href: "/dashboard/health" },
    { icon: Calendar, label: "Appointments", href: "/dashboard/appointments" },
    { icon: Bell, label: "Notifications", href: "/dashboard/notifications" },
  ],
  admin: [
    { icon: Home, label: "Overview", href: "/dashboard" },
    { icon: Users, label: "Users", href: "/dashboard/users" },
    { icon: PawPrintIcon, label: "Pets", href: "/dashboard/pets" },
    { icon: Calendar, label: "Bookings", href: "/dashboard/bookings" },
    { icon: CreditCard, label: "Payments", href: "/dashboard/payments" },
    { icon: BarChart3, label: "Analytics", href: "/dashboard/analytics" },
    { icon: Settings, label: "Settings", href: "/dashboard/settings" },
  ],
};

export function DashboardLayout({ children }: { children: ReactNode }) {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  if (!user) return null;

  const nav = navByRole[user.role];

  const handleLogout = () => {
    logout();
    navigate({ to: "/" });
  };

  const SidebarContent = () => (
    <>
      <div className="flex h-16 items-center gap-2 border-b border-sidebar-border px-6">
        <PawPrint className="h-6 w-6 text-sidebar-primary" />
        <span className="text-lg font-bold text-sidebar-foreground">PetCare</span>
      </div>
      <nav className="flex-1 space-y-1 p-4">
        {nav.map((item) => {
          const active = location.pathname === item.href;
          return (
            <Link
              key={item.href}
              to={item.href}
              onClick={() => setSidebarOpen(false)}
              className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${active ? "bg-sidebar-accent text-sidebar-primary" : "text-sidebar-foreground/70 hover:bg-sidebar-accent/50 hover:text-sidebar-foreground"}`}
            >
              <item.icon className="h-4 w-4" />
              {item.label}
            </Link>
          );
        })}
      </nav>
      <div className="border-t border-sidebar-border p-4">
        <div className="mb-3 flex items-center gap-3 px-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-sidebar-primary text-xs font-bold text-sidebar-primary-foreground">
            {user.name.charAt(0)}
          </div>
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-medium text-sidebar-foreground">{user.name}</p>
            <p className="truncate text-xs text-sidebar-foreground/50 capitalize">{user.role}</p>
          </div>
        </div>
        <Button variant="ghost" size="sm" className="w-full justify-start gap-2 text-sidebar-foreground/70" onClick={handleLogout}>
          <LogOut className="h-4 w-4" /> Sign Out
        </Button>
      </div>
    </>
  );

  return (
    <div className="flex h-screen bg-background">
      {/* Desktop sidebar */}
      <aside className="hidden w-64 flex-col border-r border-sidebar-border bg-sidebar md:flex">
        <SidebarContent />
      </aside>
      {/* Mobile sidebar */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="absolute inset-0 bg-foreground/30" onClick={() => setSidebarOpen(false)} />
          <aside className="absolute inset-y-0 left-0 flex w-64 flex-col bg-sidebar shadow-xl">
            <SidebarContent />
          </aside>
        </div>
      )}
      {/* Main */}
      <div className="flex flex-1 flex-col overflow-hidden">
        <header className="flex h-16 items-center gap-4 border-b border-border bg-background px-4 sm:px-6">
          <button className="md:hidden" onClick={() => setSidebarOpen(true)}>
            <Menu className="h-5 w-5 text-foreground" />
          </button>
          <h1 className="text-lg font-semibold text-foreground capitalize">{user.role} Dashboard</h1>
        </header>
        <main className="flex-1 overflow-auto p-4 sm:p-6">
          {children}
        </main>
      </div>
    </div>
  );
}