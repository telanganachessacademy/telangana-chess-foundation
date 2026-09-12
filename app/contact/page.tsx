"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  MapPin,
  Phone,
  Mail,
  Send,
  CheckCircle,
  MessageSquare,
  Globe,
  Loader2
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    inquiryType: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const inquiryTypes = [
    "General Information",
    "Course Enrollment",
    "Private Coaching",
    "Tournament Registration",
    "Partnership Inquiry",
    "Other",
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    const SERVICE_ID = "service_277ip99"; 
    const TEMPLATE_ID = "template_s9g6lti";
    const PUBLIC_KEY = "TSfE8gYMWCMjb7G4h";

    const customizedMessage = `
SOURCE: Telangana Chess Foundation
INQUIRY TYPE: ${formData.inquiryType}
------------------------------------------
MESSAGE:
${formData.message}
    `;

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      subject: formData.subject || `New Inquiry: ${formData.inquiryType}`,
      inquiry_type: formData.inquiryType,
      message: customizedMessage,
    };

    try {
      const result = await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
      
      if (result.status === 200) {
        setIsSubmitted(true);
        setFormData({ name: "", email: "", phone: "", subject: "", message: "", inquiryType: "" });
        setTimeout(() => setIsSubmitted(false), 5000);
      }
    } catch (error) {
      console.error("EmailJS Error:", error);
      alert("Error sending message. Please check your internet connection and try again.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-blue-600 selection:text-white">
      
      {/* HERO HEADER */}
      <section className="relative pt-32 pb-24 overflow-hidden bg-slate-50/50 border-b border-slate-200">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
           <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50/60 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3"></div>
           <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-amber-50/50 rounded-full blur-[100px] -translate-x-1/3 translate-y-1/3"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <Badge className="mb-6 bg-blue-50 text-blue-800 border-blue-200 px-4 py-1.5 text-xs font-black uppercase tracking-widest shadow-sm">
            24/7 Support Desk
          </Badge>
          <h1 className="text-4xl md:text-5xl font-black mb-6 text-slate-900 tracking-tight leading-tight">
            Telangana Chess <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-800 via-indigo-700 to-amber-600 uppercase italic">Foundation</span>
          </h1>
          <p className="text-base text-slate-600 max-w-2xl mx-auto leading-relaxed pt-2 font-medium">
            Have questions about our curriculum, tournaments, or admissions? Our administration and FIDE support staff are ready to assist you.
          </p>
        </div>
      </section>

      {/* MAIN SPLIT SECTION */}
      <section className="relative z-20 py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-8 bg-white border border-slate-200 rounded-[2.5rem] overflow-hidden shadow-2xl">
            
            {/* LEFT COLUMN: Contact Info */}
            <div className="lg:col-span-5 bg-slate-50 p-8 md:p-12 text-slate-900 relative overflow-hidden flex flex-col justify-between border-b lg:border-r lg:border-b-0 border-slate-200">
              
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-black mb-2 uppercase italic tracking-tight text-slate-900">Institutional Desk</h3>
                <p className="text-slate-600 mb-10 text-xs font-bold uppercase tracking-wider">Official Foundation Communication Channels</p>
                
                <div className="space-y-8">
                  <div className="flex items-start gap-4 group">
                    <div className="p-3.5 rounded-2xl bg-white border border-slate-200 text-blue-700 shadow-sm transition-all group-hover:scale-105">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Call Us</p>
                      <p className="text-lg font-black text-slate-900 group-hover:text-blue-700 transition-colors">+91 9864646481</p>
                      <p className="text-xs text-slate-500 font-medium mt-0.5">Daily: 10 AM - 8 PM IST</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="p-3.5 rounded-2xl bg-white border border-slate-200 text-amber-600 shadow-sm transition-all group-hover:scale-105">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Official Email</p>
                      <p className="text-lg font-black text-slate-900 break-all group-hover:text-amber-600 transition-colors">
                        telanganachessfoundation@gmail.com
                      </p>
                      <p className="text-xs text-slate-500 font-medium mt-0.5">Direct Inquiry Desk</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="p-3.5 rounded-2xl bg-white border border-slate-200 text-indigo-700 shadow-sm transition-all group-hover:scale-105">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Visit Campus</p>
                      <p className="text-lg font-black text-slate-900 leading-snug">
                        Kothapet, Hyderabad<br/>
                        Telangana - 500035
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-slate-200 relative z-10 flex gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-blue-700 hover:text-white transition-all cursor-pointer shadow-sm">
                  <Globe className="w-5 h-5" />
                </div>
                <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-amber-600 hover:text-white transition-all cursor-pointer shadow-sm">
                  <MessageSquare className="w-5 h-5" />
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: Form */}
            <div className="lg:col-span-7 p-8 md:p-16 bg-white">
              {isSubmitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-20 animate-in fade-in zoom-in duration-500">
                  <div className="w-24 h-24 bg-emerald-50 rounded-full flex items-center justify-center mb-6 border border-emerald-200 shadow-lg">
                    <CheckCircle className="w-12 h-12 text-emerald-600" />
                  </div>
                  <h3 className="text-3xl font-black text-slate-900 mb-2 uppercase tracking-tight italic">Message Delivered</h3>
                  <p className="text-slate-600 max-w-xs mx-auto font-medium">
                    Thank you for reaching out. A Telangana Chess Foundation representative will be in touch shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-slate-600 font-black text-[10px] uppercase tracking-widest ml-1">Full Name *</Label>
                      <Input
                        id="name"
                        disabled={isSending}
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        className="bg-slate-50 border-slate-200 focus:border-blue-600 h-12 text-slate-900 placeholder:text-slate-400 rounded-xl font-medium"
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-slate-600 font-black text-[10px] uppercase tracking-widest ml-1">Email Address *</Label>
                      <Input
                        type="email"
                        id="email"
                        disabled={isSending}
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        className="bg-slate-50 border-slate-200 focus:border-blue-600 h-12 text-slate-900 placeholder:text-slate-400 rounded-xl font-medium"
                        placeholder="john@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-slate-600 font-black text-[10px] uppercase tracking-widest ml-1">Phone Number</Label>
                      <Input
                        id="phone"
                        disabled={isSending}
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        className="bg-slate-50 border-slate-200 focus:border-blue-600 h-12 text-slate-900 placeholder:text-slate-400 rounded-xl font-medium"
                        placeholder="+91"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-slate-600 font-black text-[10px] uppercase tracking-widest ml-1">Inquiry Type *</Label>
                      <Select
                        disabled={isSending}
                        value={formData.inquiryType}
                        onValueChange={(value) => handleInputChange("inquiryType", value)}
                      >
                        <SelectTrigger className="bg-slate-50 border-slate-200 h-12 text-slate-900 rounded-xl font-bold text-xs uppercase">
                          <SelectValue placeholder="Select Topic" />
                        </SelectTrigger>
                        <SelectContent className="bg-white border-slate-200 text-slate-900">
                          {inquiryTypes.map((type, i) => (
                            <SelectItem key={i} value={type} className="focus:bg-slate-100 focus:text-slate-900 cursor-pointer uppercase font-bold text-xs">{type}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-slate-600 font-black text-[10px] uppercase tracking-widest ml-1">Message Detail *</Label>
                    <Textarea
                      id="message"
                      disabled={isSending}
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      className="bg-slate-50 border-slate-200 focus:border-blue-600 min-h-[150px] resize-none p-4 text-slate-900 placeholder:text-slate-400 rounded-2xl font-medium"
                      placeholder="Share your inquiry or training goals..."
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSending}
                    className="w-full bg-blue-700 hover:bg-blue-800 text-white font-black uppercase tracking-widest h-14 text-xs rounded-xl transition-all shadow-lg shadow-blue-700/20 active:scale-95"
                  >
                    {isSending ? (
                      <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Processing...</>
                    ) : (
                      <>Submit Message <Send className="ml-2 h-4 w-4" /></>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* MAP SECTION */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-200 h-[400px] relative group filter grayscale hover:grayscale-0 transition-all duration-700">
            <iframe
              title="Academy Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.8902674607427!2d78.50310917499912!3d17.322055904365462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9992786f1711%3A0xc2a03126f2eff5c4!2s11-13-75%20Road%20No%202%2C%20Alkapuri%2C%20Kothapet%2C%20Hyderabad%2C%20Telangana%20500035!5e0!3m2!1sen!2sin!4v1694871600000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              className="w-full h-full"
            ></iframe>
            
            <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-md px-8 py-5 rounded-3xl shadow-2xl border border-slate-200 pointer-events-none z-10">
              <p className="text-[10px] font-black text-blue-700 uppercase tracking-widest mb-1">HQ Center</p>
              <p className="text-2xl font-black text-slate-900 italic">Hyderabad</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 max-w-4xl text-center">
             <h2 className="text-3xl font-black text-slate-900 mb-2 uppercase tracking-tight italic">Common Questions</h2>
             <p className="text-slate-600 mb-12 font-medium">Quick answers for aspiring chess champions.</p>
          
          <div className="grid md:grid-cols-2 gap-6 text-left">
            {[
              { q: "What age groups do you accept?", a: "We welcome students from age 4 to adults. Our curriculum is adapted for different learning stages." },
              { q: "Do you offer trial classes?", a: "Yes! We offer a complimentary assessment and demo class for all new students." },
              { q: "What are your class timings?", a: "We have batches running from 6 AM to 9 PM IST, catering to various time zones." },
              { q: "Do you provide online coaching?", a: "Start-to-finish live coaching with interactive chessboards and masterclass analysis." },
            ].map((faq, i) => (
              <div key={i} className="bg-white p-8 rounded-[2rem] border border-slate-200 hover:border-blue-300 transition-all duration-300 shadow-sm">
                <h3 className="font-black text-slate-900 mb-3 flex items-start text-base leading-snug uppercase tracking-tight">
                  <span className="text-blue-700 mr-2.5 italic">Q.</span> {faq.q}
                </h3>
                <p className="text-slate-600 text-xs leading-relaxed pl-7 border-l-2 border-slate-200 font-medium">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
