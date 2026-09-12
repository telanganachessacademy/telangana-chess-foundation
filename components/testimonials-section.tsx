"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote, MessageCircle, CheckCircle2 } from "lucide-react";
import Image from "next/image";

export function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: "Jyothi Yadav",
      role: "Intermediate Player",
      content: "My daughter has improved tremendously since joining Telangana Chess Foundation. The instructors are patient, knowledgeable, and make learning chess fun and engaging.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200", 
    },
    {
      id: 2,
      name: "Khilend Sahu",
      role: "Adult Beginner",
      content: "I started as a complete beginner. The structured curriculum and personalized attention helped me compete in local tournaments within months.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200", 
    },
    {
      id: 3,
      name: "Arjun Biru",
      role: "Intermediate Player",
      content: "The online coaching sessions are fantastic! I learn from expert coaches from home. My rating increased by 300 points in just 6 months.",
      image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=200", 
    },
    {
      id: 4,
      name: "Dandu Ravi",
      role: "Tournament Player",
      content: "The focus on tactical and strategic understanding elevated my game. Thanks to the foundation, I recently won my first regional tournament!",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200", 
    },
    {
      id: 5,
      name: "Krarjun Gaud",
      role: "Parent of Student",
      content: "The coaches understand how to work with young children. My son looks forward to every lesson and has developed excellent concentration.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200", 
    },
    {
      id: 6,
      name: "Chandu Shekhar",
      role: "Student",
      content: "Never thought I could learn chess, but the instructors proved me wrong. It has become my favorite hobby and mental exercise.",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200", 
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-[120px] -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-amber-50/40 rounded-full blur-[100px]" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-blue-200 bg-blue-50 text-blue-800 text-xs font-bold uppercase tracking-widest shadow-sm">
            <MessageCircle className="w-3.5 h-3.5 fill-blue-600 text-blue-600" />
            <span>Community Feedback</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            Stories from the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-800 via-indigo-700 to-amber-600">Board</span>
          </h2>
          
          <p className="text-base text-slate-600 max-w-2xl mx-auto leading-relaxed font-medium">
            Join hundreds of satisfied students and parents who have transformed their strategic thinking with Telangana Chess Foundation.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="relative group bg-white border border-slate-200 rounded-3xl p-8 hover:border-blue-300 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl shadow-md flex flex-col justify-between"
            >
                <Quote className="absolute top-6 right-6 w-10 h-10 text-slate-200 group-hover:text-blue-200 transition-colors rotate-180" />

                <div className="relative z-10 flex flex-col h-full">
                    {/* Stars */}
                    <div className="flex gap-1 mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>

                    {/* Content */}
                    <p className="text-slate-600 text-sm leading-relaxed mb-8 flex-grow italic font-medium">
                      "{testimonial.content}"
                    </p>

                    {/* User Profile */}
                    <div className="flex items-center gap-4 mt-auto pt-6 border-t border-slate-200">
                      <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-slate-200 group-hover:border-blue-500 transition-colors">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-black text-slate-900 text-sm">{testimonial.name}</h4>
                        <p className="text-xs text-blue-700 font-bold uppercase tracking-wide">{testimonial.role}</p>
                      </div>
                    </div>
                </div>
            </div>
          ))}
        </div>

        {/* Bottom Impact Bar */}
        <div className="bg-slate-50 border border-slate-200 rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden shadow-lg">
          <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-10 text-center md:text-left">
            <div>
              <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-2">Ready to write your success story?</h3>
              <p className="text-slate-600 text-base font-medium">Join a community of champions today.</p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-8 md:gap-16">
              <div className="flex flex-col items-center md:items-start group">
                <span className="text-3xl font-black text-slate-900 mb-1 group-hover:text-blue-700 transition-colors">600+</span>
                <span className="text-xs text-slate-500 uppercase tracking-widest font-extrabold">Active Students</span>
              </div>
              <div className="flex flex-col items-center md:items-start group">
                <span className="text-3xl font-black text-slate-900 mb-1 group-hover:text-amber-600 transition-colors">98%</span>
                <span className="text-xs text-slate-500 uppercase tracking-widest font-extrabold">Satisfaction Rate</span>
              </div>
              <div className="flex flex-col items-center md:items-start group">
                <span className="text-3xl font-black text-slate-900 mb-1 group-hover:text-emerald-600 transition-colors">60+</span>
                <span className="text-xs text-slate-500 uppercase tracking-widest font-extrabold">State Champions</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}