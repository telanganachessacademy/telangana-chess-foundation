"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Trophy,
  Star,
  Users,
  Clock,
  BookOpen,
  Target,
  Crown,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  Zap,
  Sparkles
} from "lucide-react";
import Link from "next/link";

export default function CoursesPage() {
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
      schedule: "2 classes/week (1.5 hrs)",
      ageGroup: "6+ years",
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
      schedule: "2 classes/week (1.5 hrs)",
      ageGroup: "6+ years",
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
      schedule: "3 classes/week (2 hrs)",
      ageGroup: "8+ years",
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
      schedule: "3 classes/week (2 hrs)",
      ageGroup: "8+ years",
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
      schedule: "3 classes/week (2 hrs)",
      ageGroup: "8+ years",
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
      schedule: "3 classes/week (2 hrs)",
      ageGroup: "8+ years",
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
      schedule: "4 classes/week (2.5 hrs)",
      ageGroup: "12+ years",
      classSize: "4-6 students",
    },
    {
      title: "Advanced Level – 2",
      level: "Expert",
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
      schedule: "4 classes/week (2.5 hrs)",
      ageGroup: "12+ years",
      classSize: "4-6 students",
    },
  ];

  const getThemeStyles = (color: string) => {
    switch (color) {
      case "blue":
        return {
          cardBg: "bg-white border-blue-200/90 hover:border-blue-500 shadow-md hover:shadow-xl",
          iconBg: "bg-gradient-to-br from-blue-700 to-blue-900 text-white shadow-md",
          btn: "bg-blue-700 hover:bg-blue-800 text-white shadow-md",
          check: "text-blue-700",
          durationBadge: "bg-blue-100 text-blue-900 border-blue-300 font-bold"
        };
      case "orange":
        return {
          cardBg: "bg-white border-amber-200/90 hover:border-amber-500 shadow-md hover:shadow-xl",
          iconBg: "bg-gradient-to-br from-amber-600 to-orange-700 text-white shadow-md",
          btn: "bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white shadow-md",
          check: "text-amber-700",
          durationBadge: "bg-amber-100 text-amber-900 border-amber-300 font-bold"
        };
      case "purple":
        return {
          cardBg: "bg-white border-indigo-200/90 hover:border-indigo-500 shadow-md hover:shadow-xl",
          iconBg: "bg-gradient-to-br from-indigo-700 to-purple-800 text-white shadow-md",
          btn: "bg-indigo-700 hover:bg-indigo-800 text-white shadow-md",
          check: "text-indigo-700",
          durationBadge: "bg-indigo-100 text-indigo-900 border-indigo-300 font-bold"
        };
      default: return {};
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-blue-600 selection:text-white">
      
      {/* HERO SECTION */}
      <section className="relative pt-36 pb-24 overflow-hidden bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <Badge className="mb-6 bg-blue-50 text-blue-800 border-blue-200 px-4 py-1.5 text-xs font-black uppercase tracking-widest shadow-sm">
            Curriculum Roadmap
          </Badge>
          <h1 className="text-2xl sm:text-5xl md:text-4xl font-black mb-6 text-slate-900 tracking-tight">
            Telangana Chess Foundation <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-800 via-indigo-700 to-amber-600">Course Offerings</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium">
            From your first move to your first state tournament trophy. Our structured FIDE curriculum is designed to take you step-by-step from beginner to master.
          </p>
        </div>
      </section>

      {/* LEVEL SELECTOR STRIP */}
      <section className="relative z-20 -mt-12 px-4 pb-12">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { level: "Beginner", desc: "Foundations & Rules", color: "text-blue-700", border: "border-blue-400", bg: "bg-blue-50" },
              { level: "Intermediate", desc: "Tactics & Strategy", color: "text-amber-700", border: "border-amber-400", bg: "bg-amber-50" },
              { level: "Advanced", desc: "Competition & Mastery", color: "text-indigo-700", border: "border-indigo-400", bg: "bg-indigo-50" },
            ].map((item, idx) => (
              <div 
                key={idx} 
                className={`bg-white rounded-2xl shadow-lg p-8 border-t-4 hover:-translate-y-1 transition-transform duration-300 border border-slate-200 ${item.border}`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-black text-xl mb-4 border border-slate-200 ${item.bg} ${item.color}`}>
                  {idx + 1}
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-1">{item.level}</h3>
                <p className="text-slate-600 text-xs font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COURSES LIST */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 gap-8">
            {courses.map((course, index) => {
              const styles = getThemeStyles(course.color)!;

              return (
                <div 
                  key={index} 
                  className={`group rounded-[2.2rem] border overflow-hidden transition-all duration-500 hover:-translate-y-1 flex flex-col ${styles.cardBg}`}
                >
                  
                  {/* Card Header */}
                  <div className="p-8 pb-4">
                    <div className="flex justify-between items-start mb-6">
                      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${styles.iconBg}`}>
                        <course.icon className="w-8 h-8" />
                      </div>
                      <div className="text-right">
                        <span className="block text-3xl font-black text-slate-900">{course.price}</span>
                        <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">/ course</span>
                      </div>
                    </div>

                    <h3 className="text-2xl font-black text-slate-900 mb-3">{course.title}</h3>
                    <p className="text-slate-600 text-xs leading-relaxed mb-6 border-l-2 border-slate-300 pl-4 font-medium">{course.description}</p>

                    {/* Meta Stats Row */}
                    <div className="grid grid-cols-3 gap-4 py-3.5 border-t border-b border-slate-200 bg-slate-50 rounded-xl px-3 text-center">
                       <div className="flex flex-col items-center justify-center">
                          <span className="text-[9px] uppercase text-slate-400 font-extrabold tracking-wider">Duration</span>
                          <span className={`text-xs font-black px-2 py-0.5 rounded-lg border mt-0.5 ${styles.durationBadge}`}>{course.duration}</span>
                       </div>
                       <div className="flex flex-col items-center justify-center">
                          <span className="text-[9px] uppercase text-slate-400 font-extrabold tracking-wider">Batch Size</span>
                          <span className="text-xs font-black text-slate-800 mt-0.5">{course.classSize}</span>
                       </div>
                       <div className="flex flex-col items-center justify-center">
                          <span className="text-[9px] uppercase text-slate-400 font-extrabold tracking-wider">Rating</span>
                          <span className="text-xs font-black text-amber-600 flex items-center gap-0.5 mt-0.5">
                            <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" /> {course.rating}
                          </span>
                       </div>
                    </div>
                  </div>

                  {/* Syllabus Highlights */}
                  <div className="px-8 py-6 flex-grow">
                    <h4 className="text-xs font-black text-slate-500 uppercase tracking-widest mb-4 flex items-center gap-2">
                      <Sparkles className="w-3.5 h-3.5 text-blue-700" /> Syllabus Highlights
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4">
                      {course.features.slice(0, 4).map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-slate-700 font-bold">
                          <CheckCircle2 className={`w-4 h-4 mt-0.5 flex-shrink-0 ${styles.check}`} />
                          <span className="leading-tight">{feature}</span>
                        </li>
                      ))}
                      
                      {expandedCourses[index] && course.features.slice(4).map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-slate-700 font-bold animate-in fade-in duration-300">
                          <CheckCircle2 className={`w-4 h-4 mt-0.5 flex-shrink-0 ${styles.check}`} />
                          <span className="leading-tight">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {course.features.length > 4 && (
                      <button 
                        onClick={() => toggleFeatures(index)}
                        className="mt-5 flex items-center gap-1 text-xs font-black text-blue-700 hover:text-blue-900 transition-colors uppercase tracking-wider"
                      >
                        {expandedCourses[index] ? (
                          <>Show Less <ChevronUp className="w-3 h-3" /></>
                        ) : (
                          <>View Full Syllabus <ChevronDown className="w-3 h-3" /></>
                        )}
                      </button>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="p-8 pt-4 flex gap-4 mt-auto">
                    <Link href="/contact" className="flex-1">
                      <Button className={`w-full h-12 rounded-xl font-black text-xs uppercase tracking-wider transition-all hover:scale-[1.02] ${styles.btn}`}>
                        Enroll Now
                      </Button>
                    </Link>
                    <Link href="/contact" className="flex-1">
                      <Button variant="outline" className="h-12 w-full rounded-xl font-bold text-xs uppercase tracking-wider border-slate-200 bg-slate-50 text-slate-800 hover:bg-slate-100">
                        Details
                      </Button>
                    </Link>
                  </div>

                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 bg-slate-50 relative overflow-hidden border-t border-slate-200">
         <div className="container mx-auto px-4 relative z-10 text-center">
            <h2 className="text-3xl font-black text-slate-900 mb-12">Why Train With Telangana Chess Foundation?</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: Users, title: "Small Batches", desc: "We limit class sizes to ensure every student gets personal attention from the coach.", color: "text-blue-700" },
                { icon: Trophy, title: "Proven Success", desc: "Our structured curriculum has produced state champions and rated players consistently.", color: "text-amber-600" },
                { icon: Zap, title: "Interactive Learning", desc: "We use modern tools, puzzles, and game analysis to make learning engaging.", color: "text-indigo-700" },
              ].map((item, i) => (
                <div key={i} className="bg-white p-8 rounded-3xl border border-slate-200 hover:border-slate-300 transition-colors shadow-md">
                  <item.icon className={`w-12 h-12 mx-auto mb-6 ${item.color}`} />
                  <h3 className="text-xl font-black text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-slate-600 text-xs leading-relaxed font-medium">{item.desc}</p>
                </div>
              ))}
            </div>
         </div>
      </section>

    </div>
  );
}