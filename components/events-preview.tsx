"use client";

import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin, Trophy, Users, Zap, ArrowRight } from "lucide-react";
import Link from "next/link";

export function EventsPreview() {
  const upcomingEvents = [
    {
      id: 1,
      title: "Monthly Chess Tournament",
      day: "15",
      month: "OCT",
      year: "2025",
      time: "10:00 AM",
      location: "Main Academy Hall",
      type: "Tournament",
      participants: "32/50 Slots",
      icon: Trophy,
      description: "Compete against fellow enthusiasts. Swiss system, 5 rounds, cash prizes for top 3.",
      color: "blue", 
    },
    {
      id: 2,
      title: "Beginner's Strategy Workshop",
      day: "20",
      month: "OCT",
      year: "2025",
      time: "02:00 PM",
      location: "Training Room A",
      type: "Workshop",
      participants: "Limited Seats",
      icon: Users,
      description: "Master opening principles and middle-game tactics in this intensive session.",
      color: "orange",
    },
    {
      id: 3,
      title: "GM Masterclass Series",
      day: "05",
      month: "NOV",
      year: "2025",
      time: "11:00 AM",
      location: "Virtual & Offline",
      type: "Masterclass",
      participants: "Open to All",
      icon: Zap,
      description: "Exclusive session with Grandmaster Naresh on endgame theoretical complexities.",
      color: "purple",
    },
  ];

  const getStyles = (color: string) => {
    switch (color) {
      case "blue":
        return {
          border: "border-blue-200",
          bg: "bg-blue-50",
          text: "text-blue-700",
          gradient: "from-blue-700 to-indigo-800",
        };
      case "orange":
        return {
          border: "border-amber-200",
          bg: "bg-amber-50",
          text: "text-amber-800",
          gradient: "from-amber-600 to-orange-700",
        };
      case "purple":
        return {
          border: "border-indigo-200",
          bg: "bg-indigo-50",
          text: "text-indigo-800",
          gradient: "from-indigo-700 to-purple-800",
        };
      default: return { border: "", bg: "", text: "", gradient: "" };
    }
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50/50 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-amber-50/40 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="text-left space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-blue-200 bg-blue-50 text-blue-800 text-xs font-bold uppercase tracking-widest shadow-sm">
              <Calendar className="w-3.5 h-3.5 fill-blue-600 text-blue-600" />
              <span>Mark Your Calendars</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
              Upcoming <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-800 via-indigo-700 to-amber-600">Battles</span>
            </h2>
            
            <p className="text-slate-600 max-w-xl text-base leading-relaxed font-medium">
              Join Telangana Chess Foundation tournaments, workshops, and masterclasses to elevate your strategy and claim your victory.
            </p>
          </div>
          
          <Link href="/events" className="hidden md:block">
            <Button variant="outline" className="border-slate-200 bg-white text-slate-800 hover:text-slate-950 hover:bg-slate-50 transition-all rounded-xl px-6 h-12 font-bold text-xs uppercase tracking-wider">
              View Full Calendar
            </Button>
          </Link>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {upcomingEvents.map((event) => {
            const styles = getStyles(event.color);
            
            return (
              <div 
                key={event.id}
                className={`group relative bg-white border border-slate-200 rounded-3xl overflow-hidden hover:border-slate-300 transition-all duration-500 hover:-translate-y-2 flex flex-col hover:shadow-xl shadow-md`}
              >
                {/* Decorative Top Line */}
                <div className={`h-1.5 w-full bg-gradient-to-r ${styles.gradient}`} />

                <div className="p-8 flex flex-col h-full relative z-10">
                  
                  {/* Top Row: Date & Type Badge */}
                  <div className="flex justify-between items-start mb-8">
                    <div className="flex flex-col items-center justify-center w-16 h-16 p-2.5 bg-slate-50 rounded-2xl border border-slate-200 group-hover:border-blue-300 transition-colors">
                      <span className="text-[10px] font-extrabold text-slate-500 uppercase tracking-widest">{event.month}</span>
                      <span className="text-2xl font-black text-slate-900 leading-none">{event.day}</span>
                    </div>

                    <div className={`px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider border ${styles.border} ${styles.bg} ${styles.text}`}>
                      {event.type}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="mb-8 flex-grow">
                    <h3 className="text-2xl font-black text-slate-900 mb-3 group-hover:text-blue-800 transition-colors">
                      {event.title}
                    </h3>
                    <p className="text-slate-600 text-xs leading-relaxed border-l-2 border-slate-200 pl-3.5 font-medium">
                      {event.description}
                    </p>
                  </div>

                  {/* Meta Details */}
                  <div className="space-y-3 mb-8">
                    <div className="flex items-center text-xs text-slate-700">
                      <div className="w-7 flex justify-center"><Clock className="w-4 h-4 text-blue-600" /></div>
                      <span className="font-bold">{event.time}</span>
                    </div>
                    <div className="flex items-center text-xs text-slate-700">
                      <div className="w-7 flex justify-center"><MapPin className="w-4 h-4 text-blue-600" /></div>
                      <span className="font-bold">{event.location}</span>
                    </div>
                    <div className="flex items-center text-xs text-slate-700">
                      <div className="w-7 flex justify-center"><Users className="w-4 h-4 text-blue-600" /></div>
                      <span className="font-bold">{event.participants}</span>
                    </div>
                  </div>

                  {/* Action Button */}
                  <Link href="/contact" className="w-full mt-auto">
                    <Button className={`w-full bg-gradient-to-r ${styles.gradient} text-white font-black text-xs uppercase tracking-wider h-12 rounded-xl shadow-md transition-all duration-300 hover:scale-[1.02]`}>
                      Register Now <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile View All Button */}
        <div className="mt-12 text-center md:hidden">
          <Link href="/events">
            <Button variant="outline" className="w-full border-slate-200 bg-white text-slate-800 hover:bg-slate-50 h-12 rounded-xl font-bold uppercase tracking-wider text-xs">
              View All Events
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}