"use client";

import { Button } from "@/components/ui/button";
import { 
  BookOpen, 
  Clock, 
  Sparkles, 
  Users, 
  ArrowRight, 
  PhoneCall, 
  CheckCircle2
} from "lucide-react";
import Link from "next/link";

export function DemoBookingCTA() {
  const benefits = [
    {
      icon: BookOpen,
      title: "Skill Assessment",
      description: "Comprehensive evaluation of your current rating and chess intuition.",
      cardBg: "bg-white border-blue-200/90 hover:border-blue-500 shadow-sm hover:shadow-md",
      iconBg: "bg-gradient-to-br from-blue-700 to-blue-900 text-white shadow-md",
    },
    {
      icon: Users,
      title: "Coach Matching",
      description: "Get paired with an instructor who fits your learning style.",
      cardBg: "bg-white border-indigo-200/90 hover:border-indigo-500 shadow-sm hover:shadow-md",
      iconBg: "bg-gradient-to-br from-indigo-700 to-purple-800 text-white shadow-md",
    },
    {
      icon: Clock,
      title: "Flexible Timing",
      description: "Schedule your free demo session during evenings or weekends.",
      cardBg: "bg-white border-amber-200/90 hover:border-amber-500 shadow-sm hover:shadow-md",
      iconBg: "bg-gradient-to-br from-amber-600 to-orange-700 text-white shadow-md",
    },
    {
      icon: Sparkles,
      title: "Custom Roadmap",
      description: "Receive a tailored training plan to achieve your chess goals.",
      cardBg: "bg-white border-emerald-200/90 hover:border-emerald-500 shadow-sm hover:shadow-md",
      iconBg: "bg-gradient-to-br from-emerald-600 to-teal-700 text-white shadow-md",
    },
  ];

  const steps = [
    { num: "01", title: "Book Slot", desc: "Select a time that works for you." },
    { num: "02", title: "Meet Coach", desc: "Join the 1-on-1 video session." },
    { num: "03", title: "Get Plan", desc: "Receive your personalized roadmap." },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-50/50 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* MAIN CTA BANNER */}
        <div className="relative rounded-[2.5rem] p-8 md:p-16 overflow-hidden border border-slate-200 bg-slate-50/80 shadow-xl">
          
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
            
            {/* Left: Text Content */}
            <div className="text-left space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-300 bg-amber-50 text-amber-900 text-xs font-black uppercase tracking-widest shadow-sm">
                <Sparkles className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                <span>First Move is On Us</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-[1.1]">
                Experience the <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-800 via-indigo-700 to-amber-600">
                  Telangana Chess Method
                </span>
              </h2>
              
              <p className="text-slate-600 text-base md:text-lg max-w-lg leading-relaxed font-medium">
                Not sure where to start? Book a complimentary 30-minute demo session with a Telangana Chess Foundation FIDE-rated coach.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Link href="/contact" className="w-full sm:w-auto">
                  <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 hover:from-amber-700 hover:to-orange-700 text-white font-black h-14 px-8 rounded-2xl text-base shadow-lg transition-all hover:scale-105 border-0">
                    Book Free Demo <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <a href="tel:+919864646481" className="w-full sm:w-auto">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto border-slate-200 bg-white text-slate-800 hover:bg-slate-100 font-extrabold h-14 px-8 rounded-2xl text-base transition-all">
                    <PhoneCall className="w-5 h-5 mr-2 text-blue-700" /> +91 9864646481
                  </Button>
                </a>
              </div>
            </div>

            {/* Right: Benefits Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {benefits.map((item, idx) => (
                <div 
                  key={idx} 
                  className={`p-6 rounded-2xl transition-all duration-300 group hover:-translate-y-1 ${item.cardBg}`}
                >
                  <div className={`w-12 h-12 rounded-xl ${item.iconBg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-slate-900 font-black mb-2 text-lg">{item.title}</h3>
                  <p className="text-slate-600 text-xs leading-relaxed font-medium">{item.description}</p>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* PROCESS STEPS */}
        <div className="mt-24 relative">
          <div className="text-center mb-16 space-y-2">
            <h3 className="text-3xl font-black text-slate-900">How It Works</h3>
            <p className="text-slate-600 text-base font-medium">Your journey to mastery in 3 simple steps</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 relative max-w-5xl mx-auto">
            <div className="hidden md:block absolute top-10 left-[16%] right-[16%] h-0.5 bg-slate-200 -z-10"></div>

            {steps.map((step, index) => (
              <div key={index} className="relative flex flex-col items-center text-center group">
                <div className="w-20 h-20 rounded-2xl bg-white border border-slate-200 shadow-md flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-blue-500 transition-all duration-300 relative">
                  <span className="text-2xl font-black text-slate-400 group-hover:text-blue-700 transition-colors">
                    {step.num}
                  </span>
                  <div className="absolute -bottom-3 bg-white border border-slate-200 rounded-full p-1.5 text-slate-400 group-hover:text-white group-hover:bg-blue-700 transition-colors">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                </div>
                
                <h4 className="text-lg font-black text-slate-900 mb-2 group-hover:text-blue-800 transition-colors">{step.title}</h4>
                <p className="text-slate-600 text-xs max-w-[200px] leading-relaxed font-medium">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}