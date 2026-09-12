"use client";

import { Gamepad2, Monitor, Users, ArrowRight, Zap } from "lucide-react";
import Image from "next/image";

export function FeaturesSection() {
  const features = [
    {
      icon: Gamepad2,
      title: "Interactive Game Area",
      description:
        "Practice with purpose. Challenge peers, analyze moves with Stockfish engine, and get real-time coach feedback in our dedicated arena.",
      image: "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?auto=format&fit=crop&q=80&w=800",
      color: "blue",
    },
    {
      icon: Monitor,
      title: "Live Digital Classrooms",
      description:
        "Experience seamless learning with interactive 1-on-1 and group sessions. Our 'Open Classroom' technology brings the academy to your home.",
      image: "https://images.unsplash.com/photo-1593642532400-2682810df593?auto=format&fit=crop&q=80&w=800",
      color: "orange",
    },
    {
      icon: Users,
      title: "Academy Management",
      description:
        "A centralized dashboard for coaches and parents. Track ELO ratings, tournament history, and attendance with professional analytics.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
      color: "purple",
    },
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case "blue":
        return {
          bg: "bg-blue-700",
          glow: "shadow-[0_0_25px_rgba(29,78,216,0.3)]",
          text: "text-blue-700",
          border: "group-hover:border-blue-300"
        };
      case "orange":
        return {
          bg: "bg-amber-600",
          glow: "shadow-[0_0_25px_rgba(217,119,6,0.3)]",
          text: "text-amber-700",
          border: "group-hover:border-amber-300"
        };
      case "purple":
        return {
          bg: "bg-indigo-700",
          glow: "shadow-[0_0_25px_rgba(67,56,202,0.3)]",
          text: "text-indigo-700",
          border: "group-hover:border-indigo-300"
        };
      default:
        return {
          bg: "bg-slate-700",
          glow: "shadow-none",
          text: "text-slate-700",
          border: "group-hover:border-slate-300"
        };
    }
  };

  return (
    <section id="features" className="py-24 relative bg-white overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f008_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f008_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        <div className="absolute top-1/4 left-0 w-[450px] h-[450px] bg-blue-50/60 rounded-full blur-[110px]" />
        <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-amber-50/60 rounded-full blur-[110px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-200 bg-blue-50 text-blue-800 text-xs font-bold uppercase tracking-widest shadow-sm">
            <Zap className="w-3.5 h-3.5 fill-blue-600 text-blue-600" />
            <span>World-Class Platform</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            Everything You Need To <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-800 via-indigo-700 to-amber-600">
              Master The Game
            </span>
          </h2>
          
          <p className="text-base text-slate-600 leading-relaxed max-w-2xl mx-auto font-medium">
            We combine traditional chess wisdom with modern digital infrastructure. Explore the tools that give Telangana Chess Foundation students their competitive edge.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-10">
          {features.map((feature, index) => {
            const styles = getColorClasses(feature.color);

            return (
              <div
                key={index}
                className={`group relative bg-white rounded-3xl border border-slate-200 ${styles.border} transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl overflow-hidden flex flex-col shadow-md`}
              >
                {/* Image Section */}
                <div className="relative h-64 w-full overflow-hidden bg-slate-100">
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent z-10"></div>
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                  />
                  
                  {/* Floating Icon */}
                  <div className={`absolute -bottom-6 right-8 z-20 w-16 h-16 rounded-2xl flex items-center justify-center ${styles.bg} text-white transform rotate-6 group-hover:rotate-0 transition-all duration-300 ${styles.glow} border-2 border-white shadow-xl`}>
                    <feature.icon className="w-8 h-8" />
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8 pt-10 flex flex-col flex-grow">
                  <h3 className="text-2xl font-black text-slate-900 mb-3">
                    {feature.title}
                  </h3>
                  
                  <p className="text-slate-600 leading-relaxed mb-8 flex-grow font-medium">
                    {feature.description}
                  </p>

                  {/* Action Link */}
                  <div className={`flex items-center text-xs font-black ${styles.text} transition-colors cursor-pointer mt-auto uppercase tracking-wider`}>
                    <span>Learn more</span>
                    <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1.5 transition-transform" />
                  </div>
                </div>

                {/* Bottom Line Accent */}
                <div className={`h-1.5 w-full ${styles.bg} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}