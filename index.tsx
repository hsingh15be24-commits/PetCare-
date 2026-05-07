import { createFileRoute } from "@tanstack/react-router";

import { Header } from "@/components/landing/Header";
import { HeroSection } from "@/components/landing/HeroSection";
import { FeaturesSection } from "@/components/landing/FeaturesSection";
import { PlansSection } from "@/components/landing/PlansSection";
import { TestimonialsSection } from "@/components/landing/TestimonialsSection";
import { AboutSection } from "@/components/landing/AboutSection";
import { ContactSection } from "@/components/landing/ContactSection";
import { Footer } from "@/components/landing/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PetCare — Premium Pet Care Management" },
      { name: "description", content: "Book trusted pet boarding, grooming, and veterinary care. Real-time updates, verified caretakers, and peace of mind for pet parents." },
      { property: "og:title", content: "PetCare — Premium Pet Care Management" },
      { property: "og:description", content: "Book trusted pet boarding, grooming, and veterinary care." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <PlansSection />
      <TestimonialsSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
