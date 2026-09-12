"use client";

import { Button } from "@/components/ui/button";
import { Clock, Users, Star, ArrowRight, Check, Crown, Shield, Zap, BookOpen, Sparkles, Target, ChevronDown, ChevronUp, Trophy } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export function CoursesSection() {
  const [selectedFilter, setSelectedFilter] = useState<string>("All");
  const [expandedCourses, setExpandedCourses] = useState<{ [key: number]: boolean }>({});

  const toggleFeatures = (index: number) => {
    setExpandedCourses((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const courses = [
    {
      title: "Beginner Level – 1",
      level: "Beginner",
      duration: "3 Months",
      price: "₹15,000",
      students: "50+",
      rating: "4.9",
      icon: BookOpen,
      color: "blue",
      description: "Perfect for complete beginners. Learn the rules, movements, and basic checkmates to start playing confidently.",
      features: [
        "Intro to Chess Board & Pieces",
        "Movement & Value of Pieces",
        "Rules: Castling, En Passant",
        "Basic Checkmates & Stalemate",
        "Files, Ranks, Diagonals",
        "Center Control Basics",
      ],
      classSize: "8-10 students",
    },
    {
      title: "Beginner Level – 2",
      level: "Beginner",
      duration: "3 Months",
      price: "₹15,000",
      students: "45+",
      rating: "4.8",
      icon: BookOpen,
      color: "blue",
      description: "Builds on basics. Focus on elementary checkmates, simple tactics like pins and forks, and piece coordination.",
      features: [
        "King + Queen/Rook Checkmates",
        "Checkmate in 1 & 2 moves",
        "Tactics: Pin, Fork (Basic)",
        "Discovered Checks",
        "Simple Combinations",
        "Attacking the King",
      ],
      classSize: "8-10 students",
    },
    {
      title: "Intermediate Level – 1",
      level: "Intermediate",
      duration: "4 Months",
      price: "₹20,000",
      students: "40+",
      rating: "4.8",
      icon: Target,
      color: "orange",
      description: "Introduction to advanced tactics. Learn absolute pins, forks, double attacks, and calculating deeper mates.",
      features: [
        "Absolute vs Relative Pins",
        "Knight Forks & Double Attacks",
        "Checkmate in 3 & 4 moves",
        "Discovered Check Tactics",
        "Removing the Defender",
        "Decoy Sacrifices",
      ],
      classSize: "6-8 students",
    },
    {
      title: "Intermediate Level – 2",
      level: "Intermediate",
      duration: "4 Months",
      price: "₹20,000",
      students: "40+",
      rating: "4.8",
      icon: Target,
      color: "orange",
      description: "Master opening principles. Develop pieces effectively, control the center, and study the Giuoco Piano.",
      features: [
        "Opening Principles & Development",
        "Good vs Bad Bishop",
        "Coordination of Pieces",
        "King Pawn Openings (Giuoco Piano)",
        "Advanced Combinations",
        "Mating Nets",
      ],
      classSize: "6-8 students",
    },
    {
      title: "Intermediate Level – 3",
      level: "Intermediate",
      duration: "4 Months",
      price: "₹20,000",
      students: "35+",
      rating: "4.8",
      icon: Target,
      color: "orange",
      description: "Deepen tactical understanding. Learn complex motifs like X-rays, interference, and overloading.",
      features: [
        "Discovered Attacks",
        "X-Ray Attacks",
        "Interference Tactics",
        "Overloaded Pieces",
        "Attraction & Deflection",
        "Clearance Sacrifices",
      ],
      classSize: "6-8 students",
    },
    {
      title: "Intermediate Level – 4",
      level: "Intermediate",
      duration: "4 Months",
      price: "₹20,000",
      students: "35+",
      rating: "4.8",
      icon: Target,
      color: "orange",
      description: "Strategic mastery. Understand pawn structures, open files, and positional concepts like zugzwang.",
      features: [
        "Pawn Structures & Chains",
        "Isolated & Backward Pawns",
        "Open Files & Outposts",
        "Zugzwang & Traps",
        "Passed Pawns",
        "Opening Repertoire Building",
      ],
      classSize: "6-8 students",
    },
    {
      title: "Advanced Level – 1",
      level: "Advanced",
      duration: "6 Months",
      price: "₹30,000",
      students: "25+",
      rating: "4.9",
      icon: Trophy,
      color: "purple",
      description: "Intensive training for competitive players. Deep opening analysis, endgame theory, and positional sacrifices.",
      features: [
        "Dynamic vs Static Centers",
        "Pawn & Knight Endgames",
        "Advanced Opening Repertoire",
        "Space Advantage & Prophylaxis",
        "Attacking Themes (Greek Gift)",
        "Positional Sacrifices",
      ],
      classSize: "4-6 students",
    },
    {
      title: "Advanced Level – 2",
      level: "Advanced",
      duration: "6 Months",
      price: "₹30,000",
      students: "20+",
      rating: "4.9",
      icon: Crown,
      color: "purple",
      description: "Elite training for aspiring masters. Focus on tournament discipline, psychology, and rigorous practice.",
      features: [
        "Tournament Psychology",
        "Calculation Visualization",
        "Complex Endgames",
        "Grandmaster Game Analysis",
        "Opening Preparation",
        "Competitive Homework",
      ],
      classSize: "4-6 students",
    },
  ];

  const filteredCourses = selectedFilter === "All" 
    ? courses 
    : courses.filter(c => c.level === selectedFilter);

  const getThemeStyles = (color: string) => {
    switch (color) {
      case "blue":
        return {
          cardBg: "bg-white border-blue-200/90 hover:border-blue-500 shadow-md",
          iconBg: "bg-gradient-to-br from-blue-700 to-blue-900 text-white shadow-md",
          badge: "bg-blue-100 text-blue-900 border-blue-300",
          check: "text-blue-700",
          btn: "bg-blue-700 hover:bg-blue-800 text-white shadow-md",
        };
      case "orange":
        return {
          cardBg: "bg-white border-amber-200/90 hover:border-amber-500 shadow-md",
          iconBg: "bg-gradient-to-br from-amber-600 to-orange-700 text-white shadow-md",
          badge: "bg-amber-100 text-amber-900 border-amber-300",
          check: "text-amber-700",
          btn: "bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white shadow-md",
        };
      case "purple":
        return {
          cardBg: "bg-white border-indigo-200/90 hover:border-indigo-500 shadow-md",
          iconBg: "bg-gradient-to-br from-indigo-700 to-purple-800 text-white shadow-md",
          badge: "bg-indigo-100 text-indigo-900 border-indigo-300",
          check: "text-indigo-700",
          btn: "bg-indigo-700 hover:bg-indigo-800 text-white shadow-md",
        };
      default: return {};
    }
  };

  return (
    <section id="courses" className="py-24 bg-slate-50/70 relative overflow-hidden border-t border-slate-200">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-blue-50/50 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f008_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f008_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-200 bg-blue-50 text-blue-800 text-xs font-black uppercase tracking-widest shadow-sm">
            <BookOpen className="w-3.5 h-3.5 fill-blue-600 text-blue-600" />
            <span>Structured Curriculum</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Choose Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-800 via-indigo-700 to-amber-600">
              Path to Mastery
            </span>
          </h2>
          
          <p className="text-base text-slate-600 leading-relaxed max-w-2xl mx-auto font-medium">
            From first moves to state championships, Telangana Chess Foundation offers comprehensive training structured for every skill level.
          </p>

          {/* Level Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {["All", "Beginner", "Intermediate", "Advanced"].map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-5 py-2 rounded-xl text-xs font-black uppercase tracking-wider transition-all border ${
                  selectedFilter === filter
                    ? "bg-blue-800 text-white border-blue-800 shadow-md"
                    : "bg-white text-slate-700 border-slate-200 hover:bg-slate-100"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* COURSES GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch max-w-7xl mx-auto">
          {filteredCourses.map((course, index) => {
            const Icon = course.icon;
            const styles = getThemeStyles(course.color)!;

            return (
              <div 
                key={index}
                className={`rounded-3xl p-6 transition-all duration-300 flex flex-col h-full group hover:-translate-y-1 hover:shadow-xl ${styles.cardBg}`}
              >
                {/* Price Header */}
                <div className="flex justify-between items-start mb-4">
                  <div className={`w-12 h-12 rounded-xl ${styles.iconBg} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="text-right">
                    <span className="block text-2xl font-black text-slate-900">{course.price}</span>
                    <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">/ course</span>
                  </div>
                </div>

                {/* Course Title & Description */}
                <div className="mb-4">
                  <h3 className="text-xl font-black text-slate-900 mb-2 leading-snug">{course.title}</h3>
                  <p className="text-slate-600 text-xs leading-relaxed font-medium line-clamp-3">
                    {course.description}
                  </p>
                </div>

                {/* Meta Bar */}
                <div className="grid grid-cols-3 gap-2 py-3 border-t border-b border-slate-200 mb-5 bg-slate-50 rounded-xl px-2 text-center">
                  <div className="flex flex-col items-center justify-center">
                    <span className="text-[9px] uppercase text-slate-400 font-extrabold tracking-wider">Duration</span>
                    <span className={`text-xs font-black px-2 py-0.5 rounded-lg border mt-0.5 ${styles.badge}`}>
                      {course.duration}
                    </span>
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <span className="text-[9px] uppercase text-slate-400 font-extrabold tracking-wider">Size</span>
                    <span className="text-xs font-black text-slate-800 mt-0.5">{course.classSize}</span>
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <span className="text-[9px] uppercase text-slate-400 font-extrabold tracking-wider">Rating</span>
                    <span className="text-xs font-black text-amber-600 flex items-center gap-0.5 mt-0.5">
                      <Star className="w-3 h-3 fill-amber-500 text-amber-500" /> {course.rating}
                    </span>
                  </div>
                </div>

                {/* Syllabus Highlights */}
                <div className="mb-6 flex-grow">
                  <h4 className="text-[11px] font-black text-slate-500 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3 text-blue-600" /> Syllabus Highlights
                  </h4>
                  <ul className="space-y-2">
                    {course.features.slice(0, 4).map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                        <Check className={`w-3.5 h-3.5 mt-0.5 shrink-0 ${styles.check}`} />
                        <span className="leading-tight">{feature}</span>
                      </li>
                    ))}

                    {expandedCourses[index] && course.features.slice(4).map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-slate-700 font-medium animate-in fade-in duration-300">
                        <Check className={`w-3.5 h-3.5 mt-0.5 shrink-0 ${styles.check}`} />
                        <span className="leading-tight">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {course.features.length > 4 && (
                    <button 
                      onClick={() => toggleFeatures(index)}
                      className="mt-3 text-[11px] font-extrabold text-blue-700 hover:text-blue-900 transition-colors uppercase tracking-wider flex items-center gap-1"
                    >
                      {expandedCourses[index] ? (
                        <>Show Less <ChevronUp className="w-3 h-3" /></>
                      ) : (
                        <>View Full Syllabus <ChevronDown className="w-3 h-3" /></>
                      )}
                    </button>
                  )}
                </div>

                {/* CTA Buttons */}
                <div className="pt-2 mt-auto grid grid-cols-2 gap-2">
                  <Link href="/contact" className="w-full">
                    <Button className={`w-full h-10 rounded-xl font-black text-xs transition-all ${styles.btn}`}>
                      Enroll Now
                    </Button>
                  </Link>
                  <Link href="/contact" className="w-full">
                    <Button variant="outline" className="w-full h-10 rounded-xl font-bold text-xs border-slate-200 bg-slate-50 text-slate-800 hover:bg-slate-100">
                      Details
                    </Button>
                  </Link>
                </div>

              </div>
            );
          })}
        </div>

        {/* View All Link */}
        <div className="mt-12 text-center">
          <Link href="/courses" className="inline-flex items-center text-blue-800 hover:text-blue-950 font-black transition-colors group text-xs sm:text-sm uppercase tracking-wider bg-white border border-blue-200 px-6 py-3.5 rounded-xl shadow-sm">
            View Complete Curriculum & Schedule <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform text-blue-600" />
          </Link>
        </div>

      </div>
    </section>
  );
}