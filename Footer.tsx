import { PawPrint } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <Link to="/" className="flex items-center gap-2 text-lg font-bold text-primary">
              <PawPrint className="h-6 w-6" />
              PetCare
            </Link>
            <p className="mt-3 text-sm text-muted-foreground">Premium pet care services for modern pet parents. Your pets deserve the best.</p>
          </div>
          <div>
            <h4 className="mb-3 text-sm font-semibold text-foreground">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Pet Boarding</li><li>Grooming</li><li>Vet Care</li><li>Training</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 text-sm font-semibold text-foreground">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#about">About</a></li><li><a href="#contact">Contact</a></li><li>Careers</li><li>Blog</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 text-sm font-semibold text-foreground">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Privacy Policy</li><li>Terms of Service</li><li>Cookie Policy</li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-border pt-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} PetCare. All rights reserved.
        </div>
      </div>
    </footer>
  );
}