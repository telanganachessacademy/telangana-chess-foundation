"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Trophy,
  Star,
  Users,
  Calendar,
  Medal,
  GraduationCap,
  ArrowRight,
  Sparkles,
  CheckCircle2
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function CoachesPage() {
  const coaches = [
    {
      name: "Tejavath Naresh",
      title: "Head Coach & Founder",
      image: "/naresh.jpg",
      rating: "2200", 
      specialization: ["Opening Theory", "Endgame Mastery", "Tournament Preparation"],
      achievements: ["FIDE Arbiter", "FIDE Rated Player", "Chess Coach"],
      experience: "15+ Years",
      students: "200+",
      bio: "Tejavath Naresh is the visionary founder of Telangana Chess Foundation with over 15 years of coaching excellence. He specializes in building a strong foundation for future grandmasters.",
      color: "blue",
    },
    {
      name: "Tejavath Aruna",
      title: "Senior Coach",
      rating: "2450",
      image: "/coach.png",
      specialization: ["Tactical Training", "Youth Development", "Women's Chess"],
      achievements: ["FIDE Rated Player", "Women's Title Holder"],
      experience: "12+ Years",
      students: "150+",
      bio: "Tejavath Aruna specializes in developing young talent and has coached multiple national champions with a focus on tactical sharpness.",
      color: "green",
    },
    {
      name: "Ranghanathan K S",
      title: "Junior Coach",
      rating: "2400",
      image: "/coach.png",
      specialization: ["Beginner Training", "School Programs", "Online Coaching"],
      achievements: ["International FIDE Rated"],
      experience: "8+ Years",
      students: "100+",
      bio: "Ranghanathan K S brings innovative teaching methods and excels in online chess education, making complex concepts easy to understand.",
      color: "purple",
    },
    {
      name: "Kethavath Lokesh",
      title: "Assistant Coach",
      rating: "2300",
      image: "/coach.png",
      specialization: ["Puzzle Solving", "Pattern Recognition", "Rapid Chess"],
      achievements: ["International FIDE Rated"],
      experience: "6+ Years",
      students: "80+",
      bio: "Kethavath Lokesh is known for expertise in tactical training and rapid chess improvement, helping students spot combinations instantly.",
      color: "pink",
    },
  ];

  const getThemeStyles = (color: string) => {
    switch (color) {
      case "blue":
        return {
          badge: "bg-blue-50 text-blue-800 border-blue-200 font-bold",
          icon: "text-blue-700",
          border: "group-hover:border-blue-300",
          tag: "border-blue-200 text-blue-800 bg-blue-50"
        };
      case "green":
        return {
          badge: "bg-emerald-50 text-emerald-800 border-emerald-200 font-bold",
          icon: "text-emerald-700",
          border: "group-hover:border-emerald-300",
          tag: "border-emerald-200 text-emerald-800 bg-emerald-50"
        };
      case "purple":
        return {
          badge: "bg-indigo-50 text-indigo-800 border-indigo-200 font-bold",
          icon: "text-indigo-700",
          border: "group-hover:border-indigo-300",
          tag: "border-indigo-200 text-indigo-800 bg-indigo-50"
        };
      case "pink":
        return {
          badge: "bg-amber-50 text-amber-900 border-amber-200 font-bold",
          icon: "text-amber-700",
          border: "group-hover:border-amber-300",
          tag: "border-amber-200 text-amber-900 bg-amber-50"
        };
      default: return {};
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-blue-600 selection:text-white">
      
      {/* HERO SECTION */}
      <section className="relative pt-36 pb-20 bg-slate-50 border-b border-slate-200 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-blue-200 bg-blue-50 text-blue-800 text-xs font-black uppercase tracking-widest shadow-sm mb-6">
            <GraduationCap className="w-3.5 h-3.5 fill-blue-600 text-blue-600" />
            <span>World-Class Faculty</span>
          </div>
          
          <h1 className="text-2xl sm:text-5xl md:text-4xl font-black mb-6 text-slate-900 tracking-tight leading-tight">
            Meet Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-800 via-indigo-700 to-amber-600">Mentors</span>
          </h1>
          
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto font-medium leading-relaxed">
            Grandmasters, International Masters, and FIDE-certified experts dedicated to shaping the next generation of Telangana Chess Foundation champions.
          </p>
        </div>
      </section>

      {/* COACHES LIST */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 gap-12">
            {coaches.map((coach, index) => {
              const styles = getThemeStyles(coach.color)!;

              return (
                <div 
                  key={index} 
                  className={`group relative bg-white rounded-[2.5rem] border border-slate-200 shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 ${styles.border} flex flex-col md:flex-row`}
                >
                  
                  {/* Image Column */}
                  <div className="relative w-full md:w-2/5 h-80 md:h-auto overflow-hidden bg-slate-100">
                    <Image
                      src={coach.image}
                      alt={coach.name}
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    
                    <div className="absolute bottom-6 left-6 md:left-8 bg-slate-900/90 backdrop-blur-md border border-white/20 text-white px-4 py-2 rounded-xl text-xs font-black flex items-center gap-2 shadow-lg">
                      <Trophy className="w-4 h-4 text-amber-400 fill-amber-400" />
                      <span>{coach.rating} ELO</span>
                    </div>
                  </div>

                  {/* Content Column */}
                  <div className="p-8 md:p-12 md:w-3/5 flex flex-col relative">
                    <div className="mb-6">
                      <div className={`inline-block px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-3 border ${styles.badge}`}>
                        {coach.title}
                      </div>
                      <h3 className="text-3xl font-black text-slate-900 mb-2">{coach.name}</h3>
                    </div>

                    <p className="text-slate-600 text-sm leading-relaxed mb-8 flex-grow font-medium">
                      {coach.bio}
                    </p>

                    {/* Stats Row */}
                    <div className="grid grid-cols-2 gap-4 mb-8 py-5 border-t border-b border-slate-200 bg-slate-50 rounded-2xl px-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 rounded-xl bg-white border border-slate-200 shadow-sm text-slate-700">
                          <Calendar className={`w-5 h-5 ${styles.icon}`} />
                        </div>
                        <div>
                          <p className="text-[10px] uppercase text-slate-500 font-extrabold tracking-widest">Experience</p>
                          <p className="text-sm font-black text-slate-900">{coach.experience}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                         <div className="p-2.5 rounded-xl bg-white border border-slate-200 shadow-sm text-slate-700">
                          <Users className={`w-5 h-5 ${styles.icon}`} />
                        </div>
                        <div>
                          <p className="text-[10px] uppercase text-slate-500 font-extrabold tracking-widest">Students</p>
                          <p className="text-sm font-black text-slate-900">{coach.students}</p>
                        </div>
                      </div>
                    </div>

                    {/* Specs & Achievements */}
                    <div className="space-y-4">
                      <div>
                        <p className="text-[10px] text-slate-500 font-extrabold uppercase tracking-widest mb-2.5">Specialization</p>
                        <div className="flex flex-wrap gap-2">
                          {coach.specialization.map((spec, i) => (
                            <span key={i} className={`text-[10px] font-black px-3 py-1 rounded-lg border uppercase tracking-wider ${styles.tag}`}>
                              {spec}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-4 pt-2">
                        {coach.achievements.map((ach, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs text-slate-700 font-bold">
                            <CheckCircle2 className={`w-4 h-4 ${styles.icon}`} />
                            {ach}
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 bg-slate-50 relative overflow-hidden border-t border-slate-200">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">The Telangana Chess Advantage</h2>
            <p className="text-slate-600 text-base font-medium">Why thousands of students trust their chess journey with our faculty.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Star,
                title: "Proven Methodology",
                desc: "Our curriculum is designed by masters to ensure steady progress from beginner to title level.",
                color: "text-amber-600",
                bg: "bg-amber-50",
                border: "border-amber-200"
              },
              {
                icon: Users,
                title: "Personalized Mentorship",
                desc: "We don't believe in one-size-fits-all. Every student gets a tailored roadmap based on their playstyle.",
                color: "text-blue-700",
                bg: "bg-blue-50",
                border: "border-blue-200"
              },
              {
                icon: Trophy,
                title: "Tournament Focus",
                desc: "Regular internal leagues and preparation for official FIDE tournaments to build competitive spirit.",
                color: "text-indigo-700",
                bg: "bg-indigo-50",
                border: "border-indigo-200"
              },
            ].map((feature, i) => (
              <div key={i} className="bg-white border border-slate-200 p-8 rounded-3xl hover:border-slate-300 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className={`mb-6 w-14 h-14 rounded-2xl flex items-center justify-center border ${feature.bg} ${feature.border}`}>
                  <feature.icon className={`w-7 h-7 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 text-xs leading-relaxed font-medium">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <div className="relative bg-slate-50 rounded-[3rem] p-12 md:p-20 border border-slate-200 shadow-xl">
            <div className="relative z-10">
                <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">Train with Telangana's Best</h2>
                <p className="text-base text-slate-600 max-w-2xl mx-auto mb-10 font-medium">
                  Don't just play chess, master it. Book a free 1-on-1 assessment with our head coach today.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Link href="/contact">
                    <Button className="h-14 px-8 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-black text-xs uppercase tracking-wider shadow-md transition-all hover:scale-105">
                      Book Free Assessment
                    </Button>
                  </Link>
                  <Link href="/courses">
                    <Button variant="outline" className="h-14 px-8 rounded-xl border-slate-300 bg-white text-slate-800 hover:bg-slate-100 font-bold text-xs uppercase tracking-wider transition-all">
                      Explore Courses
                    </Button>
                  </Link>
                </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}