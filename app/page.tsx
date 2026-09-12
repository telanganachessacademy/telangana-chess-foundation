import { HeroSection } from "@/components/hero-section";
import { StatsSection } from "@/components/stats-section";
import { FeaturesSection } from "@/components/features-section";
import { CoursesSection } from "@/components/courses-section";
import { EventsPreview } from "@/components/events-preview";
import { TeamSection } from "@/components/team-section";
import { DemoBookingCTA } from "@/components/demo-booking-cta";
import { TestimonialsSection } from "@/components/testimonials-section";
import { InteractiveChessboard } from "@/components/interactive-chessboard";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <main>
        <HeroSection />
        <StatsSection />
        <FeaturesSection />
        
        {/* Interactive Puzzle Arena */}
        <section className="py-20 bg-slate-50/80 border-y border-slate-200 px-4">
          <div className="container max-w-5xl mx-auto">
            <InteractiveChessboard />
          </div>
        </section>

        <CoursesSection />
        <EventsPreview />
        <TeamSection />
        <DemoBookingCTA />
        <TestimonialsSection />
      </main>
    </div>
  );
}
