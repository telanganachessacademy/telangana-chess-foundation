"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  ExternalLink,
  ChevronRight,
  Globe,
  ShieldCheck,
  ArrowUp,
  Crown
} from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/telanganachessacademy", label: "Facebook", color: "hover:bg-blue-600" },
    { icon: Twitter, href: "#", label: "Twitter", color: "hover:bg-sky-500" },
    { icon: Instagram, href: "#", label: "Instagram", color: "hover:bg-pink-600" },
    { icon: Youtube, href: "#", label: "YouTube", color: "hover:bg-red-600" },
  ];

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Our Courses", href: "/courses" },
    { name: "Meet Coaches", href: "/coaches" },
    { name: "About Us", href: "/about" },
    { name: "Latest Events", href: "/events" },
    { name: "Photo Gallery", href: "/gallery" },
    { name: "Chess Blogs", href: "/blogs" },
    { name: "Contact Desk", href: "/contact" },
  ];

  const networkLinks = [
    { name: "Telangana Chess Academy", href: "https://telanganachessacademy.com/" },
    { name: "Telangana Chess School", href: "https://www.telanganachessschool.com" },
    { name: "Bharat Chess Academy", href: "https://www.bharatchessacademy.com" },
    { name: "Bharat Chess Institute", href: "http://www.bharatchessinstitute.com" },
    { name: "Hyderabad Chess Institute", href: "https://www.hyderabadchessinstitute.com" },
  ];

  return (
    <footer className="bg-slate-950 text-slate-300 font-sans relative overflow-hidden border-t border-slate-800">
      
      {/* Background Subtle Gradient Highlights */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-amber-600/10 rounded-full blur-[140px]" />
      </div>

      {/* Decorative Gold & Red Top Accent Strip */}
      <div className="h-1 w-full bg-gradient-to-r from-red-600 via-amber-500 via-blue-600 to-amber-500"></div>

      <div className="container mx-auto max-w-7xl px-4 pt-16 pb-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center space-x-3.5">
              <div className="w-14 h-14 rounded-full bg-white p-0.5 shadow-lg border border-amber-500/40 shrink-0">
                <Image
                  src="/logo.jpg"
                  alt="Telangana Chess Foundation Seal"
                  width={56}
                  height={56}
                  className="object-cover w-full h-full rounded-full"
                />
              </div>
              <div className="flex flex-col">
                <h3 className="font-black text-xl text-white tracking-tight leading-tight">
                  Telangana Chess Foundation
                </h3>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-[10px] text-amber-400 font-bold uppercase tracking-widest bg-amber-500/10 px-2.5 py-0.5 rounded-full border border-amber-500/30 flex items-center gap-1">
                    <Crown className="w-3 h-3 text-amber-400" /> FIDE Certified
                  </span>
                </div>
              </div>
            </div>
            
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm font-medium">
              Forging champions through strategic chess education. We provide world-class training designed to build character, intellect, and competitive tournament success.
            </p>

            <div className="flex gap-2.5 pt-2">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 bg-slate-900 border border-slate-800 rounded-xl flex items-center justify-center transition-all duration-300 group ${social.color} hover:border-transparent hover:text-white hover:scale-105`}
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4 text-slate-400 transition-colors group-hover:text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="font-bold text-white text-xs uppercase tracking-widest mb-6 flex items-center gap-2">
              Navigation
              <div className="h-px flex-grow bg-slate-800"></div>
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="group flex items-center text-xs sm:text-sm font-medium text-slate-400 hover:text-white transition-colors"
                  >
                    <ChevronRight className="w-3 h-3 mr-1.5 text-slate-600 group-hover:text-amber-400 group-hover:translate-x-1 transition-all" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="lg:col-span-3">
            <h4 className="font-bold text-white text-xs uppercase tracking-widest mb-6 flex items-center gap-2">
              Contact Desk
              <div className="h-px flex-grow bg-slate-800"></div>
            </h4>
            <div className="space-y-4">
              <a href="tel:+919864646481" className="flex items-start space-x-3 group p-2.5 rounded-xl hover:bg-slate-900 transition-colors -ml-2 border border-transparent hover:border-slate-800">
                <div className="p-2 bg-slate-900 border border-slate-800 rounded-lg group-hover:border-blue-500/50 group-hover:text-blue-400 transition-colors">
                  <Phone className="w-4 h-4 text-slate-400" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Phone Support</p>
                  <p className="text-white text-xs sm:text-sm font-bold group-hover:text-amber-400 transition-colors">+91 9864646481</p>
                </div>
              </a>

              <a href="mailto:telanganachessfoundation@gmail.com" className="flex items-start space-x-3 group p-2.5 rounded-xl hover:bg-slate-900 transition-colors -ml-2 border border-transparent hover:border-slate-800">
                <div className="p-2 bg-slate-900 border border-slate-800 rounded-lg group-hover:border-amber-500/50 group-hover:text-amber-400 transition-colors">
                  <Mail className="w-4 h-4 text-slate-400" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Official Email</p>
                  <p className="text-white text-xs sm:text-sm font-bold group-hover:text-amber-400 transition-colors break-all">
                    telanganachessfoundation@gmail.com
                  </p>
                </div>
              </a>

              <div className="flex items-start space-x-3 p-2.5 -ml-2">
                <div className="p-2 bg-slate-900 border border-slate-800 rounded-lg">
                  <MapPin className="w-4 h-4 text-slate-400" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Headquarters</p>
                  <p className="text-slate-300 text-xs sm:text-sm font-medium">Kothapet, Hyderabad, Telangana</p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 4: Our Network */}
          <div className="lg:col-span-3">
            <h4 className="font-bold text-white text-xs uppercase tracking-widest mb-6 flex items-center gap-2">
              Sister Academies
              <div className="h-px flex-grow bg-slate-800"></div>
            </h4>
            <div className="space-y-2.5">
              {networkLinks.map((site, index) => (
                <a
                  key={index}
                  href={site.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 hover:bg-slate-800 transition-all group"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <Globe className="w-3.5 h-3.5 text-slate-500 group-hover:text-amber-400 transition-colors" />
                      <span className="text-xs font-bold text-slate-300 group-hover:text-white transition-colors">
                        {site.name}
                      </span>
                    </div>
                    <ExternalLink className="w-3 h-3 text-slate-600 group-hover:text-white opacity-0 group-hover:opacity-100 transition-all" />
                  </div>
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="border-t border-slate-800/80 mt-12 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-xs font-medium text-center md:text-left">
              © {new Date().getFullYear()} <span className="text-white font-bold">Telangana Chess Foundation</span>. All rights reserved. FIDE Certified Training Partner.
            </p>
            <div className="flex items-center space-x-4">
              <Link href="/terms" className="text-xs text-slate-500 hover:text-white transition-colors">
                Terms & Conditions
              </Link>
              <span className="text-slate-800">•</span>
              <div className="flex items-center gap-1 text-xs text-slate-500">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                <span>Verified Platform</span>
              </div>
              <span className="text-slate-800">•</span>
              <button
                onClick={scrollToTop}
                className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-all flex items-center gap-1 text-xs font-bold"
                aria-label="Back to top"
              >
                <ArrowUp className="w-3.5 h-3.5" />
                <span>Top</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}