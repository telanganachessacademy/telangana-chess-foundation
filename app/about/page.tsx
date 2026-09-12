"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AboutSection } from "@/components/about-section";
import {
  Trophy,
  Users,
  Target,
  Award,
  BookOpen,
  Star,
  Mail,
  UserCheck,
  Crown,
  ShieldCheck,
  Zap
} from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-blue-600 selection:text-white">
      
      {/* HERO HEADER */}
      <section className="relative pt-36 pb-24 overflow-hidden bg-slate-50 border-b border-slate-200">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50/70 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-amber-50/50 rounded-full blur-[100px] -translate-x-1/3 translate-y-1/3" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
          <Badge className="mb-6 bg-blue-50 text-blue-800 border-blue-200 px-4 py-1.5 text-xs font-black uppercase tracking-widest shadow-sm">
            <Crown className="w-3.5 h-3.5 mr-1.5 text-amber-500" />
            FIDE Certified Foundation
          </Badge>
          
          <h1 className="text-2xl sm:text-5xl md:text-4xl font-black mb-6 text-slate-900 tracking-tight leading-tight">
            Forging Champions At <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-800 via-indigo-700 to-amber-600">Telangana Chess Foundation</span>
          </h1>
          
          <p className="text-base sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed border-t border-slate-200 pt-6 font-medium">
            Nurturing chess minds since 2010, we are dedicated to developing strategic thinking, tactical sharpness, and competitive mastery in players of all age groups across Telangana.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link href="/coaches">
              <Button size="lg" className="bg-blue-700 hover:bg-blue-800 text-white font-black rounded-xl h-12 px-6 shadow-md text-xs uppercase tracking-wider">
                <UserCheck className="w-4 h-4 mr-2" /> Meet Our Coaches
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg" className="border-slate-300 text-slate-800 hover:bg-slate-100 font-bold rounded-xl h-12 px-6 text-xs uppercase tracking-wider">
                <Mail className="w-4 h-4 mr-2" /> Contact Desk
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION COMPONENT */}
      <AboutSection />

      {/* MISSION & VISION */}
      <section className="py-20 px-4 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8">
            
            <div className="bg-white rounded-[2.5rem] p-8 md:p-10 border border-blue-200 shadow-lg relative overflow-hidden group hover:-translate-y-1 transition-all duration-300">
              <div className="w-16 h-16 bg-blue-700 rounded-2xl flex items-center justify-center mb-6 shadow-md">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-4">Our Mission</h3>
              <p className="text-slate-600 leading-relaxed font-medium text-sm sm:text-base">
                To deliver structured, world-class chess education that instills critical decision making, strategic patience, and competitive excellence while creating a lifelong love for the royal game.
              </p>
            </div>

            <div className="bg-white rounded-[2.5rem] p-8 md:p-10 border border-amber-200 shadow-lg relative overflow-hidden group hover:-translate-y-1 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-600 to-orange-600 rounded-2xl flex items-center justify-center mb-6 shadow-md">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-4">Our Vision</h3>
              <p className="text-slate-600 leading-relaxed font-medium text-sm sm:text-base">
                To establish Telangana as a premier powerhouse for international chess talent, producing rated Grandmasters and making expert chess coaching accessible to every passionate student.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ACHIEVEMENTS COUNTERS */}
      <section className="py-16 px-4 bg-white border-y border-slate-200">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-slate-900">Foundation Milestones</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Users, number: "600+", label: "Active Students", color: "text-blue-700", bg: "bg-blue-50" },
              { icon: Trophy, number: "120+", label: "Tournaments Host", color: "text-amber-600", bg: "bg-amber-50" },
              { icon: Award, number: "60+", label: "State Champions", color: "text-emerald-600", bg: "bg-emerald-50" },
              { icon: BookOpen, number: "15+", label: "Years Excellence", color: "text-indigo-700", bg: "bg-indigo-50" },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 bg-slate-50 border border-slate-200 rounded-2xl hover:border-blue-300 transition-all hover:-translate-y-1 shadow-sm"
              >
                <div className={`w-14 h-14 mx-auto mb-4 ${stat.bg} rounded-2xl flex items-center justify-center`}>
                  <stat.icon className={`w-7 h-7 ${stat.color}`} />
                </div>
                <div className="text-3xl font-black text-slate-900 mb-1">
                  {stat.number}
                </div>
                <div className="text-xs text-slate-500 font-extrabold uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR STORY & FOUNDER */}
      <section className="py-20 px-4 bg-slate-50/70">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-12 gap-12 items-center">
            
            <div className="md:col-span-7 space-y-6">
              <Badge className="bg-blue-50 text-blue-800 border-blue-200 px-3.5 py-1 text-xs font-black uppercase tracking-wider">
                Founder Journey
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                Building Telangana's Premier Chess Institution
              </h2>
              <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
                <p>
                  Founded by Head Coach <strong>Tejavath Naresh</strong> (FIDE Rated & Certified Arbiter), Telangana Chess Foundation was established with a single-minded objective: providing top-tier tactical & strategic mentorship to young prodigies.
                </p>
                <p>
                  Over the past decade, our organization has evolved into one of South India's most respected training academies. Our structured curriculum seamlessly integrates traditional board analysis with modern engine tools, Stockfish evaluations, and interactive online classrooms.
                </p>
                <p>
                  Today, we continue to train state title holders, national contenders, and passionate players across Hyderabad and online global batches.
                </p>
              </div>
            </div>

            <div className="md:col-span-5">
              <div className="rounded-[2.5rem] p-8 border border-slate-200 shadow-2xl bg-slate-900 text-white relative overflow-hidden">
                <div className="text-5xl mb-4">♔</div>
                <h3 className="text-2xl font-black mb-1 text-amber-400">Tejavath Naresh</h3>
                <p className="text-xs font-bold uppercase tracking-widest text-blue-300 mb-4">Founder & Head Coach</p>
                <p className="text-slate-300 text-sm leading-relaxed mb-6 font-medium">
                  "Chess is not just about moving pieces; it is about foresight, discipline, and emotional strength. We build champions who excel both on the board and in life."
                </p>
                <div className="flex items-center gap-2 text-xs font-bold text-emerald-400">
                  <ShieldCheck className="w-4 h-4" /> FIDE Arbiter & International Rated Player
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="py-20 px-4 bg-slate-950 text-white relative overflow-hidden">
        <div className="container mx-auto max-w-6xl relative z-10 text-center">
          <h2 className="text-3xl sm:text-4xl font-black mb-12 tracking-tight">Our Core Educational Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Excellence & Discipline",
                description: "We enforce high analytical standards in game analysis, calculation exercises, and tournament preparation.",
                icon: Trophy
              },
              {
                title: "Ethical Sportsmanship",
                description: "Respect for opponents, grace in victory and defeat, and unwavering integrity during competitive play.",
                icon: ShieldCheck
              },
              {
                title: "Technological Innovation",
                description: "Leveraging digital boards, online classroom LMS, and cloud puzzle engines to accelerate student growth.",
                icon: Zap
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-slate-900 border border-slate-800 p-8 rounded-3xl text-left hover:border-slate-700 transition-all hover:-translate-y-1 shadow-lg"
              >
                <div className="w-12 h-12 bg-slate-800 rounded-2xl flex items-center justify-center mb-6 text-amber-400">
                  <value.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{value.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed font-medium">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
