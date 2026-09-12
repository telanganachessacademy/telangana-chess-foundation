"use client";

import { useState } from "react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Calendar as CalendarIcon,
  Clock,
  MapPin,
  Users,
  Trophy,
  BookOpen,
  Star,
  ArrowRight,
  Filter,
  Sparkles,
  LayoutGrid
} from "lucide-react";
import { format } from "date-fns";

export default function EventsPage() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [selectedCategory, setSelectedCategory] = useState("all");

  const events = [
    {
      id: 1,
      title: "State Championship 2025",
      category: "tournament",
      date: "2025-03-15",
      time: "09:00 AM",
      location: "Hyderabad Convention Center",
      participants: "200+ Slots",
      prize: "₹50,000",
      description: "The biggest annual state-level championship. Open to all age groups with FIDE rating opportunities.",
      image: "https://images.unsplash.com/photo-1580541832626-2a7131ee809f?auto=format&fit=crop&q=80&w=800",
      registrationFee: "₹500",
      color: "blue",
    },
    {
      id: 2,
      title: "GM Rajesh Kumar Workshop",
      category: "workshop",
      date: "2025-03-08",
      time: "02:00 PM",
      location: "Academy Main Hall",
      participants: "50 Seats",
      prize: "Certificate",
      description: "Exclusive masterclass on 'Advanced Sicilian Defense' theories and middle-game planning.",
      image: "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?auto=format&fit=crop&q=80&w=800",
      registrationFee: "₹800",
      color: "orange",
    },
    {
      id: 3,
      title: "Youth Rapid Fire",
      category: "tournament",
      date: "2025-03-22",
      time: "10:00 AM",
      location: "Online Platform (Lichess)",
      participants: "100+ Players",
      prize: "₹15,000",
      description: "Fast-paced blitz tournament for players under 18. Test your speed and intuition.",
      image: "https://images.unsplash.com/photo-1523875194681-bedd468c58bf?auto=format&fit=crop&q=80&w=800",
      registrationFee: "₹300",
      color: "purple",
    },
    {
      id: 4,
      title: "Psychology of Chess",
      category: "seminar",
      date: "2025-03-12",
      time: "11:00 AM",
      location: "Conference Room B",
      participants: "30 Seats",
      prize: "Certificate",
      description: "Learn how to handle tournament pressure, time trouble, and psychological warfare.",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=800",
      registrationFee: "₹600",
      color: "green",
    },
    {
      id: 5,
      title: "Simultaneous Exhibition",
      category: "exhibition",
      date: "2025-03-18",
      time: "04:00 PM",
      location: "City Chess Club",
      participants: "40 Boards",
      prize: "Beat the GM",
      description: "A rare opportunity to play a simultaneous game against Grandmaster Naresh.",
      image: "https://images.unsplash.com/photo-1586165368502-1bad197a6461?auto=format&fit=crop&q=80&w=800",
      registrationFee: "₹200",
      color: "blue",
    },
    {
      id: 6,
      title: "Women's Chess Day",
      category: "special",
      date: "2025-03-25",
      time: "09:30 AM",
      location: "Academy Main Hall",
      participants: "80 Players",
      prize: "₹10,000",
      description: "Celebrating women in chess with a dedicated tournament and networking session.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800",
      registrationFee: "₹400",
      color: "orange",
    },
  ];

  const categories = [
    { id: "all", name: "All Events", icon: Sparkles },
    { id: "tournament", name: "Tournaments", icon: Trophy },
    { id: "workshop", name: "Workshops", icon: BookOpen },
    { id: "seminar", name: "Seminars", icon: Users },
    { id: "exhibition", name: "Exhibitions", icon: Star },
  ];

  const filteredEvents =
    selectedCategory === "all"
      ? events
      : events.filter((event) => event.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-blue-600 selection:text-white">
      
      {/* HERO SECTION */}
      <section className="relative pt-36 pb-20 bg-slate-50 border-b border-slate-200 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <Badge className="mb-6 bg-blue-50 text-blue-800 border-blue-200 px-4 py-1.5 text-xs font-black uppercase tracking-wider shadow-sm">
            Mark Your Calendars
          </Badge>
          <h1 className="text-2xl sm:text-5xl md:text-4xl font-black mb-6 text-slate-900 tracking-tight">
            Telangana Chess Foundation <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-800 via-indigo-700 to-amber-600">Upcoming Battles & Events</span>
          </h1>
          <p className="text-base text-slate-600 max-w-2xl mx-auto font-medium leading-relaxed">
            Tournaments, masterclasses, and community gatherings. Compete, learn, and grow with Telangana's premier chess foundation.
          </p>
        </div>
      </section>

      {/* FILTER & TABS */}
      <section className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 py-4 shadow-sm">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            
            <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 no-scrollbar">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-black uppercase tracking-wider transition-all whitespace-nowrap border ${
                    selectedCategory === category.id
                      ? "bg-blue-800 text-white border-blue-800 shadow-md"
                      : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100"
                  }`}
                >
                  <category.icon className="w-3.5 h-3.5" />
                  {category.name}
                </button>
              ))}
            </div>
            
            <div className="hidden md:flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500">
               <Filter className="w-4 h-4 text-blue-700" />
               Showing {filteredEvents.length} Events
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-7xl">
          <Tabs defaultValue="grid" className="w-full">
            
            <div className="flex justify-end mb-8">
              <TabsList className="bg-slate-100 border border-slate-200 p-1 rounded-xl">
                <TabsTrigger value="grid" className="data-[state=active]:bg-white data-[state=active]:shadow-sm font-bold text-xs">
                  <LayoutGrid className="w-4 h-4 mr-2" /> Grid
                </TabsTrigger>
                <TabsTrigger value="calendar" className="data-[state=active]:bg-white data-[state=active]:shadow-sm font-bold text-xs">
                  <CalendarIcon className="w-4 h-4 mr-2" /> Calendar
                </TabsTrigger>
              </TabsList>
            </div>

            {/* GRID VIEW */}
            <TabsContent value="grid">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredEvents.map((event) => {
                  const btnClass = 
                    event.color === 'blue' ? 'bg-blue-700 hover:bg-blue-800 text-white' :
                    event.color === 'orange' ? 'bg-amber-600 hover:bg-amber-700 text-white' :
                    event.color === 'purple' ? 'bg-indigo-700 hover:bg-indigo-800 text-white' :
                    'bg-emerald-600 hover:bg-emerald-700 text-white';

                  return (
                    <Card key={event.id} className="group bg-white border border-slate-200 rounded-[2rem] overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
                      <div className="relative h-56 overflow-hidden bg-slate-100">
                        <img 
                          src={event.image} 
                          alt={event.title} 
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent"></div>
                        
                        <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md rounded-2xl p-2.5 text-center min-w-[64px] shadow-lg border border-white">
                          <span className="block text-[10px] font-black text-slate-500 uppercase tracking-widest">{format(new Date(event.date), "MMM")}</span>
                          <span className="block text-2xl font-black text-slate-900 leading-none">{format(new Date(event.date), "dd")}</span>
                        </div>

                        <div className="absolute top-4 right-4">
                          <Badge className="bg-slate-900 text-white border-0 hover:bg-slate-900 uppercase tracking-wider text-[10px] font-bold">
                            {event.category}
                          </Badge>
                        </div>
                      </div>

                      <CardContent className="p-6 flex flex-col flex-grow">
                        <div className="mb-4">
                          <h3 className="text-xl font-black text-slate-900 mb-2 leading-tight">{event.title}</h3>
                          <p className="text-slate-600 text-xs leading-relaxed font-medium line-clamp-2">{event.description}</p>
                        </div>

                        <div className="space-y-2.5 mb-6">
                          <div className="flex items-center gap-2.5 text-xs font-medium text-slate-700">
                            <Clock className="w-4 h-4 text-blue-700" />
                            <span>{event.time}</span>
                          </div>
                          <div className="flex items-center gap-2.5 text-xs font-medium text-slate-700">
                            <MapPin className="w-4 h-4 text-blue-700" />
                            <span className="line-clamp-1">{event.location}</span>
                          </div>
                          <div className="flex items-center gap-2.5 text-xs font-medium text-slate-700">
                            <Users className="w-4 h-4 text-blue-700" />
                            <span>{event.participants}</span>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-3 mb-6 mt-auto">
                          <div className="rounded-xl p-3 text-center border border-blue-200 bg-blue-50 text-blue-900 font-bold text-xs">
                            <div className="text-[9px] uppercase text-blue-700 font-extrabold tracking-wider">Prize Pool</div>
                            <div>{event.prize}</div>
                          </div>
                          <div className="rounded-xl p-3 text-center border border-slate-200 bg-slate-50 text-slate-800 font-bold text-xs">
                            <div className="text-[9px] uppercase text-slate-500 font-extrabold tracking-wider">Entry</div>
                            <div>{event.registrationFee}</div>
                          </div>
                        </div>

                        <Link href="/contact" className="w-full">
                          <Button className={`w-full rounded-xl font-black text-xs uppercase tracking-wider h-12 shadow-md ${btnClass}`}>
                            Register Now <ArrowRight className="w-4 h-4 ml-2" />
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </TabsContent>

            {/* CALENDAR VIEW */}
            <TabsContent value="calendar">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                
                <div className="lg:col-span-4">
                  <div className="bg-slate-50 p-6 rounded-[2rem] shadow-lg border border-slate-200 sticky top-24">
                    <h3 className="text-lg font-black text-slate-900 mb-4 flex items-center gap-2">
                       <CalendarIcon className="w-5 h-5 text-blue-700" /> Select Date
                    </h3>
                    <Calendar
                      mode="single"
                      selected={selectedDate}
                      onSelect={setSelectedDate}
                      className="rounded-xl border border-slate-200 bg-white p-4"
                      classNames={{
                        head_cell: "text-slate-500 font-bold text-xs pt-4 pb-2",
                        cell: "text-center text-sm p-0 relative focus-within:relative focus-within:z-20",
                        day: "h-9 w-9 p-0 font-bold aria-selected:opacity-100 hover:bg-slate-100 rounded-full transition-colors",
                        day_selected: "bg-blue-700 text-white hover:bg-blue-800 hover:text-white focus:bg-blue-700 focus:text-white",
                        day_today: "bg-slate-100 text-slate-900 font-black",
                      }}
                    />
                  </div>
                </div>

                <div className="lg:col-span-8">
                  <div className="bg-white p-8 rounded-[2rem] shadow-lg border border-slate-200 min-h-[500px]">
                    <div className="flex justify-between items-end mb-8 border-b border-slate-200 pb-4">
                      <div>
                        <h3 className="text-2xl font-black text-slate-900">Foundation Event Schedule</h3>
                        <p className="text-slate-600 text-xs font-medium mt-1">Events for {selectedDate ? format(selectedDate, "MMMM dd, yyyy") : "Selected Date"}</p>
                      </div>
                      {selectedDate && (
                         <Badge variant="outline" className="border-blue-200 text-blue-800 bg-blue-50 font-bold text-xs">
                            {format(selectedDate, "EEEE")}
                         </Badge>
                      )}
                    </div>
                    
                    <div className="space-y-4">
                      {filteredEvents
                        .filter(e => selectedDate ? e.date === format(selectedDate, "yyyy-MM-dd") : true)
                        .length > 0 ? (
                        filteredEvents
                          .filter(e => selectedDate ? e.date === format(selectedDate, "yyyy-MM-dd") : true)
                          .map(event => (
                            <div key={event.id} className="flex flex-col sm:flex-row items-start gap-6 p-6 border border-slate-200 rounded-2xl hover:border-blue-300 transition-all group bg-slate-50/50">
                               <div className="flex flex-row sm:flex-col items-center sm:items-start gap-2 min-w-[100px]">
                                  <span className="text-lg font-black text-slate-900">{event.time.split(" ")[0]}</span>
                                  <span className="text-xs font-bold text-slate-500 uppercase bg-slate-200 px-2 py-0.5 rounded">{event.time.split(" ")[1]}</span>
                               </div>

                               <div className="flex-1">
                                  <div className="flex justify-between items-start mb-2">
                                     <h4 className="text-lg font-black text-slate-900 group-hover:text-blue-800 transition-colors">{event.title}</h4>
                                     <Badge className="uppercase text-[10px] font-bold bg-blue-100 text-blue-800 border-0">
                                        {event.category}
                                     </Badge>
                                  </div>
                                  <p className="text-slate-600 text-xs mb-4 font-medium">{event.description}</p>
                                  
                                  <div className="flex items-center gap-4 text-xs font-bold text-slate-600">
                                     <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-blue-700" /> {event.location}</span>
                                     <span className="flex items-center gap-1"><Trophy className="w-3.5 h-3.5 text-amber-500" /> Prize: {event.prize}</span>
                                  </div>
                               </div>

                               <div className="mt-4 sm:mt-0">
                                 <Link href="/contact">
                                    <Button size="sm" className="bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs uppercase tracking-wider">
                                      Details
                                    </Button>
                                 </Link>
                               </div>
                            </div>
                          ))
                      ) : (
                        <div className="text-center py-20 bg-slate-50 rounded-2xl border-dashed border-2 border-slate-200">
                           <CalendarIcon className="w-12 h-12 text-slate-300 mx-auto mb-4" />
                           <h4 className="text-slate-900 font-bold mb-1">No Events Scheduled</h4>
                           <p className="text-slate-500 text-xs">There are no events scheduled for this specific date.</p>
                           <Button 
                             variant="link" 
                             onClick={() => setSelectedDate(undefined)}
                             className="text-blue-700 font-bold mt-2 text-xs uppercase"
                           >
                             View all events instead
                           </Button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
}