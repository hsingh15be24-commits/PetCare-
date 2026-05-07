import { motion } from "framer-motion";
import { Heart, Award, Users } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <span className="mb-3 inline-block text-sm font-semibold text-primary">About Us</span>
            <h2 className="mb-6 text-3xl font-bold text-foreground sm:text-4xl">We Treat Your Pets Like Family</h2>
            <p className="mb-6 text-muted-foreground leading-relaxed">
              Founded by passionate pet lovers, PetCare is on a mission to revolutionize how pet owners access care services.
              We believe every pet deserves premium care, and every owner deserves peace of mind.
            </p>
            <p className="mb-8 text-muted-foreground leading-relaxed">
              Our network of verified caretakers and veterinarians ensures your furry family member receives
              the highest quality care, whether it's a weekend stay or extended boarding.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="grid grid-cols-2 gap-4">
            {[
              { icon: Heart, num: "10,000+", label: "Pets Cared For" },
              { icon: Users, num: "500+", label: "Verified Caretakers" },
              { icon: Award, num: "4.9/5", label: "Average Rating" },
              { icon: Heart, num: "99%", label: "Happy Owners" },
            ].map((s) => (
              <div key={s.label} className="rounded-xl border border-border/50 bg-card p-6 text-center shadow-sm">
                <s.icon className="mx-auto mb-3 h-8 w-8 text-primary" />
                <p className="text-2xl font-bold text-foreground">{s.num}</p>
                <p className="text-xs text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}