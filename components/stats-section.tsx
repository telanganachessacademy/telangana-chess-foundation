"use client";

import { useEffect, useState, useRef } from "react";
import { Trophy, Users, GraduationCap, Swords, ChartBar } from "lucide-react";

// --- Custom Hook for Counting Up Numbers ---
const useCounter = (end: number, duration: number = 2000, start: boolean = false) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [end, duration, start]);

  return count;
};

// --- Stat Card Component ---
const StatCard = ({ item, isVisible, index }: { item: any; isVisible: boolean; index: number }) => {
  const count = useCounter(parseInt(item.value), 2200, isVisible);

  return (
    <div
      className={`relative group bg-white border border-slate-200/90 rounded-3xl p-8 overflow-hidden hover:border-slate-300 hover:-translate-y-2 transition-all duration-500 shadow-md hover:shadow-xl ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      {/* Background Watermark Icon */}
      <div className={`absolute -right-8 -bottom-8 opacity-[0.05] group-hover:opacity-10 transition-opacity duration-500 transform group-hover:scale-110 rotate-12 ${item.textColor}`}>
        <item.icon className="w-44 h-44" />
      </div>

      {/* Top Icon with Glow */}
      <div className={`inline-flex p-3.5 rounded-2xl mb-6 bg-gradient-to-br ${item.gradient} shadow-md border border-white/40 group-hover:scale-110 transition-transform duration-300`}>
        <item.icon className="w-7 h-7 text-white" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <div className="flex items-baseline gap-1 mb-2">
          <span className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
            {count}
          </span>
          <span className={`text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-br ${item.gradient}`}>
            {item.suffix}
          </span>
        </div>
        <h3 className="text-slate-500 font-bold uppercase tracking-widest text-xs">
          {item.label}
        </h3>
      </div>

      {/* Bottom Gradient Accent Beam */}
      <div className={`absolute bottom-0 left-0 w-full h-1.5 bg-gradient-to-r ${item.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
    </div>
  );
};

export function StatsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  const stats = [
    {
      value: "120",
      label: "Tournaments Organised",
      suffix: "+",
      icon: Trophy,
      textColor: "text-amber-600",
      gradient: "from-amber-500 via-orange-500 to-amber-600",
    },
    {
      value: "600",
      label: "Active Students",
      suffix: "+",
      icon: Users,
      textColor: "text-blue-600",
      gradient: "from-blue-600 via-indigo-600 to-blue-700",
    },
    {
      value: "15",
      label: "FIDE Certified Mentors",
      suffix: "+",
      icon: GraduationCap,
      textColor: "text-emerald-600",
      gradient: "from-emerald-600 via-teal-600 to-emerald-700",
    },
    {
      value: "5000",
      label: "Analyzed Games",
      suffix: "+",
      icon: Swords,
      textColor: "text-red-600",
      gradient: "from-red-600 via-rose-600 to-red-700",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-20 sm:py-24 relative bg-slate-50/60 border-y border-slate-200/80 overflow-hidden"
    >
      <div className="container mx-auto px-4 relative z-10">
        
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-blue-200 bg-blue-50 text-blue-800 text-xs font-bold uppercase tracking-widest shadow-sm mb-4">
            <ChartBar className="w-3.5 h-3.5 text-blue-600" />
            <span>Proven Track Record</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">
            Our Impact In <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-indigo-600 to-amber-600">Numbers</span>
          </h2>
          
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed font-medium">
            Over a decade of nurturing competitive players, state champions, and strategic minds across Telangana and beyond.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {stats.map((stat, index) => (
            <StatCard 
              key={index} 
              item={stat} 
              isVisible={isVisible} 
              index={index} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}