import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";

const plans = [
  {
    name: "Basic",
    price: 29,
    desc: "Essential care for short stays",
    features: ["Standard boarding", "Regular meals (2x/day)", "Basic health monitoring", "Daily walking", "Check-in/out reports"],
    popular: false,
  },
  {
    name: "Standard",
    price: 59,
    desc: "Enhanced comfort & attention",
    features: ["Premium accommodation", "Customized meals (3x/day)", "Daily playtime sessions", "Grooming support", "Health monitoring", "Photo updates"],
    popular: true,
  },
  {
    name: "Premium",
    price: 99,
    desc: "Luxury care experience",
    features: ["Luxury AC rooms", "24/7 CCTV monitoring", "Vet consultations included", "Premium organic food", "Live video updates", "Spa & grooming", "Personal caretaker"],
    popular: false,
  },
];

export function PlansSection() {
  return (
    <section id="plans" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <span className="mb-3 inline-block text-sm font-semibold text-primary">Pricing</span>
          <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">Choose Your Plan</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">Flexible plans to fit every pet and budget. All plans include our love guarantee.</p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`relative flex flex-col rounded-2xl border p-8 ${plan.popular ? "border-primary bg-primary/5 shadow-lg shadow-primary/10" : "border-border bg-card shadow-sm"}`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-semibold text-primary-foreground">
                  Most Popular
                </span>
              )}
              <h3 className="mb-2 text-xl font-bold text-foreground">{plan.name}</h3>
              <p className="mb-6 text-sm text-muted-foreground">{plan.desc}</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-foreground">${plan.price}</span>
                <span className="text-muted-foreground">/night</span>
              </div>
              <ul className="mb-8 flex-1 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link to="/signup">
                <Button variant={plan.popular ? "hero" : "hero-outline"} className="w-full">
                  Get Started
                </Button>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}