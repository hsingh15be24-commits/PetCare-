import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  { name: "Sarah Johnson", role: "Dog Owner", text: "PetCare gave me complete peace of mind while traveling. The daily photo updates of my golden retriever were amazing!", rating: 5 },
  { name: "Michael Chen", role: "Cat Owner", text: "The veterinary care is exceptional. My cat received the best medical attention and I could track everything in real-time.", rating: 5 },
  { name: "Emily Roberts", role: "Multi-pet Owner", text: "Managing boarding for my 3 pets used to be a nightmare. PetCare made it seamless with their all-in-one platform.", rating: 5 },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-muted/30 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <span className="mb-3 inline-block text-sm font-semibold text-primary">Testimonials</span>
          <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">Loved by Pet Parents</h2>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="rounded-2xl border border-border/50 bg-card p-6 shadow-sm"
            >
              <div className="mb-4 flex gap-1">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="mb-6 text-sm leading-relaxed text-muted-foreground">"{t.text}"</p>
              <div>
                <p className="font-semibold text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}