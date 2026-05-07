import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import heroPets from "@/assets/hero-pets.png";
import { Shield, Heart, Clock } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="absolute inset-0 opacity-30" style={{ background: "radial-gradient(ellipse at 30% 20%, oklch(0.55 0.14 175 / 25%), transparent 60%), radial-gradient(ellipse at 70% 80%, oklch(0.75 0.14 75 / 20%), transparent 60%)" }} />
      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-12 lg:flex-row">
        <div className="flex-1 text-center lg:text-left animate-fade-up">
          <span className="mb-4 inline-block rounded-full bg-secondary px-4 py-1.5 text-xs font-semibold text-secondary-foreground">
            Trusted by 10,000+ Pet Owners
          </span>
          <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Book Pet Care,{" "}
            <span className="text-primary">Easily.</span>
          </h1>
          <p className="mb-8 max-w-lg text-lg text-muted-foreground">
            Premium boarding, grooming, and vet care for your furry family members.
            Trusted caretakers, real-time updates, and peace of mind while you're away.
          </p>
          <div className="flex flex-wrap justify-center gap-4 lg:justify-start">
            <Link to="/signup">
              <Button variant="hero" size="xl">Start Free Trial</Button>
            </Link>
            <a href="#plans">
              <Button variant="hero-outline" size="xl">View Plans</Button>
            </a>
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-8 lg:justify-start">
            {[
              { icon: Shield, label: "Verified Caretakers" },
              { icon: Heart, label: "24/7 Health Monitoring" },
              { icon: Clock, label: "Real-time Updates" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-2 text-sm text-muted-foreground">
                <item.icon className="h-4 w-4 text-primary" />
                {item.label}
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          <img src={heroPets} alt="Happy pets - dog and cat" width={1024} height={768} className="mx-auto max-w-md animate-float lg:max-w-lg" />
        </div>
      </div>
    </section>
  );
}