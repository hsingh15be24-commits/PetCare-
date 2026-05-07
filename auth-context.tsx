import { createContext, useContext, useState, type ReactNode } from "react";

export type UserRole = "owner" | "caretaker" | "vet" | "admin";

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string, role: UserRole) => void;
  signup: (name: string, email: string, password: string, role: UserRole) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

const DEMO_USERS: Record<UserRole, User> = {
  owner: { id: "1", name: "Sarah Johnson", email: "sarah@petcare.com", role: "owner" },
  caretaker: { id: "2", name: "James Wilson", email: "james@petcare.com", role: "caretaker" },
  vet: { id: "3", name: "Dr. Emily Chen", email: "emily@petcare.com", role: "vet" },
  admin: { id: "4", name: "Admin User", email: "admin@petcare.com", role: "admin" },
};

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(() => {
    if (typeof window === "undefined") return null;
    const saved = localStorage.getItem("petcare_user");
    return saved ? JSON.parse(saved) : null;
  });

  const login = (_email: string, _password: string, role: UserRole) => {
    const u = DEMO_USERS[role];
    setUser(u);
    localStorage.setItem("petcare_user", JSON.stringify(u));
  };

  const signup = (name: string, email: string, _password: string, role: UserRole) => {
    const u = { id: crypto.randomUUID(), name, email, role };
    setUser(u);
    localStorage.setItem("petcare_user", JSON.stringify(u));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("petcare_user");
  };

  return <AuthContext value={{ user, login, signup, logout }}>{children}</AuthContext>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be inside AuthProvider");
  return ctx;
}