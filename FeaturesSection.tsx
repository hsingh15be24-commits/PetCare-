import { motion } from "framer-motion";
import { Home, Stethoscope, CalendarDays, Bell, CreditCard, BarChart3, Users, Camera } from "lucide-react";

const features = [
  { icon: Home, title: "Premium Boarding", desc: "Comfortable, safe accommodation with AC rooms and play areas." },
  { icon: Stethoscope, title: "Vet Consultations", desc: "Access to qualified veterinarians for regular checkups." },
  { icon: CalendarDays, title: "Easy Booking", desc: "Book boarding and services in just a few clicks." },
  { icon: Bell, title: "Real-time Notifications", desc: "Get instant updates on your pet's activities and health." },
  { icon: CreditCard, title: "Secure Payments", desc: "Safe and easy online payment processing." },
  { icon: BarChart3, title: "Health Tracking", desc: "Monitor your pet's health records and vaccination status." },
  { icon: Users, title: "Trusted Caretakers", desc: "Verified and trained caretakers who love animals." },
  { icon: Camera, title: "Live Updates", desc: "Photos and videos of your pet throughout their stay." },
];

export function FeaturesSection() {
  return (
    <section id="features" className="bg-muted/30 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <span className="mb-3 inline-block text-sm font-semibold text-primary">Features</span>
          <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">Everything Your Pet Needs</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">Comprehensive pet care services designed with love and backed by technology.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="group rounded-2xl border border-border/50 bg-card p-6 shadow-sm transition-all hover:shadow-md hover:-translate-y-1"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 font-semibold text-foreground">{f.title}</h3>
              <p className="text-sm text-muted-foreground">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}