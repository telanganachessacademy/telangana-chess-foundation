"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone, Mail, ExternalLink, Crown, ChevronRight, Sparkles } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

interface NavItem {
  name: string;
  href: string;
  isExternal?: boolean;
  isHighlight?: boolean;
}

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 15);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems: NavItem[] = [
    { name: "HOME", href: "/" },
    { name: "CLASSROOM", href: "https://app.chesslang.com", isExternal: true },
    { name: "EVENTS", href: "/events" },
    { name: "COURSE", href: "/courses" },
    { name: "OUR COACHES", href: "/coaches" },
    { name: "GALLERY", href: "/gallery" },
    { name: "BLOGS", href: "/blogs" },
    { name: "CONTACT", href: "/contact" },
  ];

  return (
    <header className="fixed w-full z-50 top-0 left-0 font-sans transition-all duration-300">
      
      {/* --- TOP ANNOUNCEMENT BAR --- */}
      <div className={`transition-all duration-300 ${isScrolled ? "h-0 opacity-0 overflow-hidden py-0" : "h-auto bg-slate-900 text-slate-200 py-2 border-b border-slate-800"}`}>
        <div className="container mx-auto max-w-7xl px-4 flex flex-col sm:flex-row justify-between items-center text-xs">
          <div className="flex items-center gap-3 sm:gap-5">
            <span className="inline-flex items-center gap-1.5 bg-amber-500/15 text-amber-300 border border-amber-500/30 px-2.5 py-0.5 rounded-full font-bold text-[10px] uppercase tracking-wider shadow-sm">
              <Crown className="w-3 h-3 text-amber-400" /> FIDE Certified Foundation
            </span>
            <a href="tel:+919864646481" className="flex items-center hover:text-amber-300 transition-colors font-medium">
              <Phone className="w-3 h-3 mr-1.5 text-amber-400" /> +91 9864646481
            </a>
            <span className="hidden sm:inline text-slate-700">|</span>
            <a href="mailto:telanganachessfoundation@gmail.com" className="hidden sm:flex items-center hover:text-amber-300 transition-colors font-medium">
              <Mail className="w-3 h-3 mr-1.5 text-blue-400" /> telanganachessfoundation@gmail.com
            </a>
          </div>
          
          <div className="hidden lg:flex items-center gap-3 font-semibold text-[11px] text-slate-300">
            <span className="text-emerald-400 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Admissions Open 2026
            </span>
            <span className="text-slate-700">•</span>
            <Link href="/quick-pay" className="hover:text-amber-400 transition-colors flex items-center gap-1 font-bold text-amber-300">
              <Sparkles className="w-3 h-3 text-amber-400" /> Quick Fee Payment
            </Link>
          </div>
        </div>
      </div>

      {/* --- MAIN GLASS NAVIGATION BAR --- */}
      <div className={`transition-all duration-300 ${isScrolled ? "bg-white/95 backdrop-blur-2xl shadow-xl shadow-slate-900/5 border-b border-slate-200/90 py-2.5" : "bg-white/90 backdrop-blur-xl py-3 border-b border-slate-200/70"}`}>
        <div className="container mx-auto max-w-7xl px-4 flex items-center justify-between">
          
          {/* Brand Logo & Title */}
          <Link href="/" className="flex items-center gap-3.5 group">
            <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full p-0.5 bg-gradient-to-tr from-amber-500 via-blue-700 to-red-600 shadow-md group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full rounded-full overflow-hidden bg-white p-0.5">
                <Image
                  src="/logo.jpg"
                  alt="Telangana Chess Foundation Logo"
                  width={60}
                  height={60}
                  className="object-cover w-full h-full rounded-full"
                  priority
                />
              </div>
            </div>
            <span className="text-base sm:text-lg md:text-xl font-black text-slate-900 tracking-tight whitespace-nowrap group-hover:text-blue-700 transition-colors uppercase">
              Telangana Chess Foundation
            </span>
          </Link>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href;

              if (item.isExternal) {
                return (
                  <Link 
                    key={item.name} 
                    href={item.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-3.5 py-2 text-xs font-bold uppercase tracking-wider text-slate-700 hover:text-blue-700 hover:bg-slate-100/90 rounded-xl transition-all flex items-center gap-1"
                  >
                    {item.name}
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </Link>
                );
              }

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                    isActive
                      ? "bg-blue-50 text-blue-800 border border-blue-200/80 shadow-sm"
                      : "text-slate-700 hover:text-slate-950 hover:bg-slate-100/90"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Menu Toggle Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2.5 text-slate-800 hover:text-slate-950 hover:bg-slate-100 rounded-xl transition-colors border border-slate-200"
            aria-label="Toggle Navigation Menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* --- MOBILE NAVIGATION DRAWER --- */}
      <div 
        className={`fixed inset-x-0 top-[115px] bg-white/98 backdrop-blur-2xl border-t border-slate-200 shadow-2xl transition-all duration-300 ease-in-out lg:hidden overflow-hidden ${
          isMobileMenuOpen ? "max-h-[85vh] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="p-5 space-y-2 overflow-y-auto max-h-[75vh]">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              target={item.isExternal ? "_blank" : "_self"}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`px-4 py-3 rounded-xl text-sm font-bold uppercase tracking-wider transition-all flex items-center justify-between ${
                pathname === item.href
                  ? "bg-blue-50 text-blue-800 border border-blue-200"
                  : "text-slate-800 hover:bg-slate-100"
              }`}
            >
              <span>{item.name}</span>
              {item.isExternal ? <ExternalLink className="w-4 h-4 opacity-70" /> : <ChevronRight className="w-4 h-4 text-slate-400" />}
            </Link>
          ))}
          
          <div className="pt-5 mt-4 border-t border-slate-200 grid grid-cols-2 gap-3">
             <a href="tel:+919864646481" className="flex flex-col items-center justify-center p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-800 hover:bg-blue-50 hover:text-blue-700 transition-colors">
                <Phone className="w-4 h-4 mb-1 text-blue-600" />
                <span>Call Desk</span>
             </a>
             <a href="mailto:telanganachessfoundation@gmail.com" className="flex flex-col items-center justify-center p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-800 hover:bg-amber-50 hover:text-amber-700 transition-colors">
                <Mail className="w-4 h-4 mb-1 text-amber-600" />
                <span>Email Desk</span>
             </a>
          </div>
        </div>
      </div>
    </header>
  );
}
