"use client";

import { CheckCircle, Target, Users, Award, ExternalLink, Globe, Lock, ChevronRight, GraduationCap } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function AboutSection() {
  const features = [
    {
      icon: Target,
      title: "Elite Instruction",
      description: "Train directly under FIDE-rated coaches who bring decades of competitive experience.",
      color: "blue"
    },
    {
      icon: Users,
      title: "Safe Environment",
      description: "A secure, encouraging space where students can focus entirely on mental growth.",
      color: "orange"
    },
    {
      icon: Award,
      title: "Champion's Path",
      description: "Structured roadmap from local district tournaments to international FIDE ratings.",
      color: "purple"
    },
    {
      icon: CheckCircle,
      title: "Proven Methodology",
      description: "Curriculum refined over years, blending classic theory with modern engine analysis.",
      color: "green"
    },
  ];

  const institutes = [
    { name: "Bharat Chess Academy", url: "https://www.bharatchessacademy.com" },
    { name: "Hyderabad Chess Institute", url: "https://www.hyderabadchessinstitute.com" },
  ];

  const getFeatureStyles = (color: string) => {
    switch (color) {
      case "blue": return { text: "text-blue-700", bg: "bg-blue-50", border: "border-blue-200" };
      case "orange": return { text: "text-amber-700", bg: "bg-amber-50", border: "border-amber-200" };
      case "purple": return { text: "text-indigo-700", bg: "bg-indigo-50", border: "border-indigo-200" };
      case "green": return { text: "text-emerald-700", bg: "bg-emerald-50", border: "border-emerald-200" };
      default: return { text: "text-blue-700", bg: "bg-blue-50", border: "border-blue-200" };
    }
  };

  return (
    <section id="about" className="py-24 bg-white overflow-hidden relative font-sans text-slate-900">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-50/50 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-amber-50/40 rounded-full blur-[100px] -translate-x-1/3 translate-y-1/3" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* PART 1: VISION & INSTITUTES */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          
          {/* Left: Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-blue-200 bg-blue-50 text-blue-800 text-xs font-bold uppercase tracking-widest shadow-sm">
              <Globe className="w-3.5 h-3.5 fill-blue-600 text-blue-600" />
              <span>Global Standards</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
              Reimagining <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-800 via-indigo-700 to-amber-600">
                Chess Education
              </span>
            </h2>
            
            <p className="text-base text-slate-600 leading-relaxed border-l-2 border-slate-200 pl-6 font-medium">
              Telangana Chess Foundation was established to transform traditional chess learning. We don't just teach moves; we build the strong strategic intellect required for lifelong success on and off the board.
            </p>

            {/* Network Links */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-4">
                 <GraduationCap className="w-4 h-4 text-blue-700" />
                 <h4 className="text-xs font-black text-slate-500 uppercase tracking-widest">Sister Institutions</h4>
              </div>
              <div className="space-y-3">
                {institutes.map((inst, idx) => (
                  <Link 
                    key={idx} 
                    href={inst.url}
                    target="_blank" 
                    className="flex items-center justify-between group p-4 bg-white rounded-xl border border-slate-200 hover:border-blue-300 hover:bg-blue-50/50 transition-all duration-300 shadow-sm"
                  >
                    <span className="font-bold text-slate-800 group-hover:text-blue-800 transition-colors text-sm">{inst.name}</span>
                    <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-blue-700 transition-colors" />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Image Composition */}
          <div className="relative group">
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-200 bg-slate-100 z-10 aspect-[4/3]">
              <Image
                src="https://images.unsplash.com/photo-1580541832626-2a7131ee809f?auto=format&fit=crop&q=80&w=800"
                alt="Instructor teaching student"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-75"></div>
              
              <div className="absolute bottom-8 left-8 right-8">
                 <div className="bg-white/95 backdrop-blur-md border border-white p-5 rounded-2xl shadow-xl">
                    <p className="font-black text-lg text-slate-900 mb-1">FIDE Certified Training</p>
                    <p className="text-xs text-blue-700 font-bold uppercase tracking-wider">Where masters are forged.</p>
                 </div>
              </div>
            </div>
          </div>
        </div>

        {/* PART 2: STUDENT PORTAL ACCESS */}
        <div className="mb-24">
          <div className="bg-white border border-slate-200 rounded-[2.5rem] overflow-hidden shadow-xl relative">
            <div className="grid lg:grid-cols-2">
              
              {/* Login Instructions */}
              <div className="p-10 md:p-16 relative z-10 bg-slate-50">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3.5 bg-white border border-slate-200 rounded-2xl shadow-sm text-blue-700">
                    <Lock className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black text-slate-900">Student Portal Access</h3>
                </div>
                
                <p className="text-slate-600 mb-10 text-base font-medium">
                  Telangana Chess Foundation students can access live classes, interactive boards, and analysis tools. Follow these steps to log in:
                </p>

                <div className="space-y-6">
                  {[
                    "Visit app.chesslang.com or our portal",
                    "Click 'Classroom' on top menu bar",
                    "Enter your assigned student credentials"
                  ].map((step, i) => (
                    <div key={i} className="flex items-center gap-4 group">
                      <div className="w-10 h-10 rounded-full bg-white border border-slate-200 group-hover:border-blue-500 flex items-center justify-center text-slate-700 group-hover:text-blue-700 font-black text-xs transition-all duration-300 shadow-sm">
                        {i + 1}
                      </div>
                      <span className="text-slate-800 font-bold text-sm group-hover:text-blue-800 transition-colors">{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Credential Card Visual */}
              <div className="bg-slate-950 p-10 md:p-16 flex flex-col justify-center relative">
                <div className="bg-slate-900 rounded-2xl border border-slate-800 p-8 shadow-2xl relative z-10">
                  <div className="flex items-center justify-between mb-6 border-b border-slate-800 pb-4">
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                        Demo Portal Entry
                    </span>
                    <div className="flex gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                    </div>
                  </div>
                  
                  <div className="space-y-5 font-mono text-sm">
                    <div>
                      <span className="text-slate-400 block mb-2 text-xs uppercase tracking-wide font-bold">Username</span>
                      <div className="bg-slate-950 rounded-lg p-3 text-emerald-400 border border-slate-800 flex justify-between items-center font-bold">
                        <span>tcf_student</span>
                        <CheckCircle className="w-4 h-4 text-emerald-500" />
                      </div>
                    </div>
                    <div>
                      <span className="text-slate-400 block mb-2 text-xs uppercase tracking-wide font-bold">Password</span>
                      <div className="bg-slate-950 rounded-lg p-3 text-emerald-400 border border-slate-800 flex justify-between items-center font-bold">
                        <span>••••••••</span>
                        <CheckCircle className="w-4 h-4 text-emerald-500" />
                      </div>
                    </div>
                  </div>

                  <Link href="https://app.chesslang.com" target="_blank">
                    <button className="w-full mt-8 bg-blue-700 hover:bg-blue-800 text-white font-black text-xs uppercase tracking-wider py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg">
                      Launch Online Classroom <ChevronRight className="w-4 h-4" />
                    </button>
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* PART 3: FEATURES GRID */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900">Why Choose Telangana Chess Foundation?</h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-base font-medium">We combine passion with professionalism to create the ultimate chess ecosystem.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const styles = getFeatureStyles(feature.color);

            return (
              <div
                key={index}
                className="bg-white border border-slate-200 p-8 rounded-3xl hover:border-slate-300 transition-all duration-300 hover:-translate-y-2 group shadow-md"
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${styles.bg} ${styles.border} border`}>
                  <Icon className={`w-7 h-7 ${styles.text}`} />
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-3">
                    {feature.title}
                </h3>
                <p className="text-slate-600 text-xs leading-relaxed font-medium">{feature.description}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}