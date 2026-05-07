import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <section id="contact" className="bg-muted/30 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <span className="mb-3 inline-block text-sm font-semibold text-primary">Contact</span>
          <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">Get In Touch</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">Have questions? We'd love to hear from you.</p>
        </div>
        <div className="grid gap-12 lg:grid-cols-2">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="space-y-6">
              {[
                { icon: Mail, label: "Email", value: "hello@petcare.com" },
                { icon: Phone, label: "Phone", value: "+1 (555) 123-4567" },
                { icon: MapPin, label: "Address", value: "123 Pet Lane, San Francisco, CA 94105" },
              ].map((c) => (
                <div key={c.label} className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <c.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{c.label}</p>
                    <p className="text-sm text-muted-foreground">{c.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4 rounded-2xl border border-border/50 bg-card p-6 shadow-sm"
            onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
          >
            {submitted ? (
              <div className="py-12 text-center">
                <p className="text-lg font-semibold text-primary">Thank you!</p>
                <p className="text-sm text-muted-foreground">We'll get back to you soon.</p>
              </div>
            ) : (
              <>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Input placeholder="Your Name" required />
                  <Input type="email" placeholder="Email Address" required />
                </div>
                <Input placeholder="Subject" required />
                <Textarea placeholder="Your message..." rows={4} required />
                <Button variant="hero" className="w-full">Send Message</Button>
              </>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}