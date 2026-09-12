"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon, Clock, ArrowRight, Globe, Headphones, Monitor, ExternalLink, CheckCircle2 } from "lucide-react";
import { format } from "date-fns";
import Link from "next/link";

export default function OnlineCoachingPage() {
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedCoach, setSelectedCoach] = useState("");
  const [selectedPackage, setSelectedPackage] = useState("");
  const [isBooked, setIsBooked] = useState(false);

  const packages = [
    { name: "Single Evaluation", price: "₹800", duration: "60 minutes", description: "Ideal for game analysis, skill assessment, and personalized advice.", features: ["1-on-1 video call", "Stockfish engine analysis", "Targeted puzzle homework", "Game PGN report"], color: "from-blue-700 to-indigo-800", popular: false },
    { name: "Monthly Standard", price: "₹2,800", duration: "4 sessions", description: "Structured weekly coaching to build calculation habits and opening strategy.", features: ["4 live sessions (1/wk)", "LMS Portal access", "Customized study plan", "WhatsApp coach Q&A"], color: "from-amber-600 to-orange-700", popular: true },
    { name: "Competitive Intensive", price: "₹5,200", duration: "8 sessions", description: "Twice-weekly rigorous training for active tournament participants.", features: ["8 live sessions (2/wk)", "Opening repertoire prep", "Endgame technique drills", "24/7 priority support"], color: "from-indigo-700 to-purple-800", popular: false },
    { name: "Grandmaster Path", price: "₹9,600", duration: "12 sessions", description: "Elite mentorship program designed for aspiring title contenders.", features: ["12 sessions (3/wk)", "Deep positional analysis", "Tournament psychology", "Direct Naresh Sir desk"], color: "from-blue-800 to-slate-900", popular: false },
  ];

  const coaches = [
    { name: "Tejavath Naresh (Head Coach)", rating: "2200 ELO", price: "₹1,000/hr", speciality: "Opening & Tournament Strategy" },
    { name: "Tejavath Aruna (Senior Coach)", rating: "2450 ELO", price: "₹850/hr", speciality: "Tactical & Youth Development" },
    { name: "Ranghanathan K S (Master Trainer)", rating: "2400 ELO", price: "₹750/hr", speciality: "Endgame Principles" },
    { name: "Kethavath Lokesh (Tactics Coach)", rating: "2300 ELO", price: "₹650/hr", speciality: "Rapid Calculation & Puzzles" },
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-blue-600 selection:text-white">
      
      {/* Hero Section */}
      <section className="relative pt-36 pb-20 bg-slate-50 border-b border-slate-200 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
          <Badge className="mb-6 bg-blue-50 text-blue-800 border-blue-200 px-4 py-1.5 text-xs font-black uppercase tracking-widest shadow-sm">
            <Globe className="w-3.5 h-3.5 mr-1.5 text-blue-700" />
            Global Virtual Academy
          </Badge>
          
          <h1 className="text-2xl sm:text-5xl md:text-4xl font-black mb-6 text-slate-900 tracking-tight leading-tight">
            Telangana Chess Foundation <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-800 via-indigo-700 to-amber-600">Online Classroom</span>
          </h1>
          
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-medium mb-8">
            Interactive 1-on-1 and small group live video sessions powered by Chesslang LMS technology. Learn from the comfort of your home anywhere in the world.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link href="https://app.chesslang.com" target="_blank">
              <Button size="lg" className="bg-blue-700 hover:bg-blue-800 text-white font-black text-xs uppercase tracking-wider rounded-xl h-14 px-8 shadow-md">
                Enter Student Classroom <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Why Train Online With Us?
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: Globe, title: "Learn Anywhere", description: "Access elite training from any device with high-speed video & board sync." },
              { icon: Clock, title: "Flexible Timings", description: "Morning, evening, and weekend slots tailored for global time zones." },
              { icon: Monitor, title: "Interactive Board", description: "Real-time move notation, engine evaluation, and instant puzzle feedback." },
              { icon: Headphones, title: "1-on-1 Mentorship", description: "Personalized attention tailored to your exact rating & strategic goals." },
            ].map((f, i) => (
              <div key={i} className="bg-white p-6 rounded-3xl border border-slate-200 hover:border-blue-300 transition-all hover:-translate-y-1 shadow-md text-left">
                <div className="w-12 h-12 mb-4 rounded-2xl bg-blue-50 text-blue-700 flex items-center justify-center border border-blue-200">
                  <f.icon className="w-6 h-6" />
                </div>
                <h3 className="font-black text-lg mb-2 text-slate-900">{f.title}</h3>
                <p className="text-slate-600 text-xs leading-relaxed font-medium">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-20 px-4 bg-slate-50/70 border-t border-slate-200">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Online Coaching Packages
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {packages.map((pkg, i) => (
              <div key={i} className={`relative bg-white border rounded-3xl p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 shadow-md ${pkg.popular ? "border-amber-400 ring-2 ring-amber-400/50" : "border-slate-200"}`}>
                {pkg.popular && (
                  <div className="absolute top-0 right-0 bg-amber-600 text-white px-3.5 py-1 rounded-bl-2xl font-black text-[10px] uppercase tracking-wider shadow-md">
                    Most Popular
                  </div>
                )}
                <div>
                  <div className={`h-1.5 w-full rounded-full bg-gradient-to-r ${pkg.color} mb-6`} />
                  <h3 className="text-xl font-black text-slate-900 mb-1">{pkg.name}</h3>
                  <div className="text-3xl font-black text-slate-900 mb-1">{pkg.price}</div>
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4">{pkg.duration}</div>
                  <p className="text-xs text-slate-600 mb-6 leading-relaxed font-medium">{pkg.description}</p>

                  <div className="space-y-3 mb-6 pt-4 border-t border-slate-200">
                    {pkg.features.map((f, fi) => (
                      <div key={fi} className="flex items-center gap-2 text-xs text-slate-700 font-bold">
                        <CheckCircle2 className="w-4 h-4 text-blue-700 shrink-0" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Button 
                  className={`w-full bg-gradient-to-r ${pkg.color} text-white font-black text-xs uppercase tracking-wider h-12 rounded-xl shadow-md`}
                  onClick={() => setSelectedPackage(pkg.name)}
                >
                  Select Package
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-20 px-4 bg-white border-t border-slate-200">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-slate-900">Book A Free Assessment Session</h2>
            <p className="text-slate-600 text-xs font-medium mt-2">Fill in your details to schedule a live 1-on-1 evaluation with our head coach desk.</p>
          </div>

          <div className="bg-white rounded-[2.5rem] p-8 sm:p-12 border border-slate-200 shadow-2xl">
            {isBooked ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto border border-emerald-200">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-black text-slate-900">Session Request Received!</h3>
                <p className="text-slate-600 text-xs max-w-md mx-auto font-medium">
                  Our administrative desk will contact you via WhatsApp/Email to confirm your calendar slot link.
                </p>
                <Button onClick={() => setIsBooked(false)} variant="outline" className="mt-4 border-slate-300 font-bold text-xs uppercase">
                  Book Another Session
                </Button>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setIsBooked(true); }} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label className="block font-black text-xs uppercase tracking-wider text-slate-600 mb-2">Student Name *</Label>
                    <Input required placeholder="John Doe" className="h-12 rounded-xl bg-slate-50 border-slate-200 text-slate-900 font-medium" />
                  </div>
                  <div>
                    <Label className="block font-black text-xs uppercase tracking-wider text-slate-600 mb-2">Email Address *</Label>
                    <Input required type="email" placeholder="john@example.com" className="h-12 rounded-xl bg-slate-50 border-slate-200 text-slate-900 font-medium" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label className="block font-black text-xs uppercase tracking-wider text-slate-600 mb-2">Phone Number *</Label>
                    <Input required placeholder="+91 9864646481" className="h-12 rounded-xl bg-slate-50 border-slate-200 text-slate-900 font-medium" />
                  </div>
                  <div>
                    <Label className="block font-black text-xs uppercase tracking-wider text-slate-600 mb-2">Preferred Coach</Label>
                    <Select value={selectedCoach} onValueChange={setSelectedCoach}>
                      <SelectTrigger className="h-12 rounded-xl bg-slate-50 border-slate-200 text-slate-900 font-bold text-xs">
                        <SelectValue placeholder="Choose coach" />
                      </SelectTrigger>
                      <SelectContent>
                        {coaches.map((c, i) => (
                          <SelectItem key={i} value={c.name} className="font-bold text-xs">{c.name} ({c.rating})</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label className="block font-black text-xs uppercase tracking-wider text-slate-600 mb-2">Select Date</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button className="w-full h-12 justify-start rounded-xl bg-slate-50 border-slate-200 text-slate-800 hover:bg-slate-100 font-bold text-xs" variant="outline">
                          <CalendarIcon className="mr-2 h-4 w-4 text-blue-700" />
                          {selectedDate ? format(selectedDate, 'PPP') : "Pick a date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent>
                        <Calendar mode="single" selected={selectedDate} onSelect={setSelectedDate} />
                      </PopoverContent>
                    </Popover>
                  </div>
                  <div>
                    <Label className="block font-black text-xs uppercase tracking-wider text-slate-600 mb-2">Chess Level</Label>
                    <Select>
                      <SelectTrigger className="h-12 rounded-xl bg-slate-50 border-slate-200 text-slate-900 font-bold text-xs">
                        <SelectValue placeholder="Select current level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="beginner">Beginner (0 - 1000 ELO)</SelectItem>
                        <SelectItem value="intermediate">Intermediate (1000 - 1500 ELO)</SelectItem>
                        <SelectItem value="advanced">Advanced (1500 - 2000 ELO)</SelectItem>
                        <SelectItem value="expert">Rated / Expert (2000+ ELO)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label className="block font-black text-xs uppercase tracking-wider text-slate-600 mb-2">Specific Goals / Comments</Label>
                  <Textarea placeholder="Share your tournament goals or current rating details..." className="rounded-xl bg-slate-50 border-slate-200 min-h-[100px] text-slate-900 font-medium" />
                </div>

                <Button type="submit" size="lg" className="w-full bg-blue-700 hover:bg-blue-800 text-white font-black h-14 rounded-xl text-xs uppercase tracking-wider shadow-md">
                  Confirm Free Booking <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>

    </div>
  );
}
