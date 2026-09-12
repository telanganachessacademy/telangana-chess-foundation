"use client";

import { useState } from "react";
import { X, ChevronLeft, ChevronRight, Camera, Trophy, Users, BookOpen } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

const galleryCategories = [
  { id: "all", name: "All Photos", icon: Camera },
  { id: "tournaments", name: "Tournaments", icon: Trophy },
  { id: "certificate", name: "Certificates", icon: Users },
  { id: "events", name: "Events", icon: BookOpen },
];

const galleryImages = [
  {
    id: 1,
    src: "/gallery-1.jpg",
    alt: "Chess Tournament 2024",
    category: "tournaments",
    title: "Organising Tournaments",
    description: "Our students competing in the championship",
  },
  {
    id: 2,
    src: "/gallery-2.jpg",
    alt: "Beginner Chess Class",
    category: "tournaments",
    title: "Tournaments",
    description: "Young minds learning the mastery of chess",
  },
  {
    id: 3,
    src: "/gallery-3.jpg",
    alt: "Chess Workshop",
    category: "tournaments",
    title: "Inhouse Tournaments",
    description: "Advanced strategy inhouse tournaments.",
  },
  {
    id: 4,
    src: "/certificate-1.jpg",
    alt: "Youth Tournament",
    category: "certificate",
    title: "Fide Arbiter",
    description: "Tejavath Naresh Sir",
  },
  {
    id: 5,
    src: "/certificate-2.jpeg",
    alt: "Advanced Chess Class",
    category: "certificate",
    title: "Certification",
    description: "Tejavath Naresh Sir",
  },
  {
    id: 6,
    src: "/certificate-3.jpeg",
    alt: "Chess Seminar",
    category: "certificate",
    title: "National Arbiter",
    description: "Tejavath Naresh Sir",
  },
  {
    id: 7,
    src: "/academy.jpeg",
    alt: "School Tournament",
    category: "events",
    title: "Inter-School Championship",
    description: "Schools competing for the championship title",
  },
  {
    id: 8,
    src: "/certificate.jpg",
    alt: "School Tournament",
    category: "certificate",
    title: "Arena International Master",
    description: "Tejavath Naresh Sir",
  }
];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filteredImages =
    selectedCategory === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory);

  const openLightbox = (image: typeof galleryImages[0]) => {
    setSelectedImage(image);
    setCurrentImageIndex(filteredImages.findIndex((img) => img.id === image.id));
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = "unset";
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    const nextIndex = (currentImageIndex + 1) % filteredImages.length;
    setCurrentImageIndex(nextIndex);
    setSelectedImage(filteredImages[nextIndex]);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    const prevIndex = (currentImageIndex - 1 + filteredImages.length) % filteredImages.length;
    setCurrentImageIndex(prevIndex);
    setSelectedImage(filteredImages[prevIndex]);
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-blue-600 selection:text-white pb-24">
      
      {/* HERO SECTION */}
      <section className="relative pt-36 pb-16 overflow-hidden bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <Badge className="mb-4 bg-blue-50 text-blue-800 border-blue-200 px-4 py-1 text-xs font-black uppercase tracking-widest shadow-sm">
            Visual Journey
          </Badge>
          <h1 className="text-4xl md:text-5xl font-black mb-4 text-slate-900 tracking-tight">
            Telangana Chess Foundation <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-800 via-indigo-700 to-amber-600">Moments of Mastery</span>
          </h1>
          <p className="text-base text-slate-600 max-w-2xl mx-auto font-medium leading-relaxed">
            Explore the vibrant life at Telangana Chess Foundation. From intense tournament battles to joyous award ceremonies and certifications.
          </p>
        </div>
      </section>

      {/* GALLERY CONTROLS */}
      <section className="sticky top-16 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200 py-4 shadow-sm">
        <div className="container mx-auto px-4 max-w-7xl flex flex-wrap justify-center gap-2">
          {galleryCategories.map(category => {
            const Icon = category.icon;
            const isSelected = selectedCategory === category.id;
            
            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-black uppercase tracking-wider border transition-all duration-200 ${
                  isSelected
                    ? "bg-blue-800 text-white border-blue-800 shadow-md scale-105"
                    : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100"
                }`}
              >
                <Icon className="w-4 h-4" />
                {category.name} ({category.id === "all" ? galleryImages.length : galleryImages.filter(i => i.category === category.id).length})
              </button>
            );
          })}
        </div>
      </section>

      {/* IMAGE GRID */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image) => (
              <div
                key={image.id}
                className="group relative cursor-pointer rounded-3xl overflow-hidden bg-white border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1.5"
                onClick={() => openLightbox(image)}
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                    <span className="self-start mb-2 px-2.5 py-0.5 rounded-full text-[10px] uppercase font-black tracking-widest text-white bg-blue-700">
                      {image.category}
                    </span>
                    <h3 className="text-white font-black text-base leading-tight mb-1">{image.title}</h3>
                    <p className="text-slate-300 text-xs line-clamp-2 font-medium">{image.description}</p>
                  </div>
                </div>

                <div className="p-4 bg-white border-t border-slate-100">
                  <h3 className="font-black text-slate-900 text-sm truncate">{image.title}</h3>
                  <p className="text-slate-500 text-xs truncate mt-0.5 font-medium">{image.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LIGHTBOX MODAL */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
          onClick={closeLightbox}
        >
          <div className="relative w-full max-w-5xl flex flex-col items-center justify-center" onClick={(e) => e.stopPropagation()}>
            
            <div className="relative aspect-[4/3] w-full max-h-[75vh] rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-slate-950">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                className="object-contain"
                priority
              />
            </div>

            <div className="mt-4 text-center text-white bg-slate-900 border border-slate-800 px-6 py-3 rounded-2xl max-w-lg w-full">
              <h3 className="font-black text-lg text-white">{selectedImage.title}</h3>
              <p className="text-slate-300 text-xs mt-1 font-medium">{selectedImage.description}</p>
            </div>

            <button 
              onClick={closeLightbox} 
              className="absolute -top-12 right-0 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            <button 
              onClick={prevImage} 
              className="absolute left-2 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/70 text-white hover:bg-blue-700 transition-all border border-white/20"
              aria-label="Previous Image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button 
              onClick={nextImage} 
              className="absolute right-2 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/70 text-white hover:bg-blue-700 transition-all border border-white/20"
              aria-label="Next Image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

          </div>
        </div>
      )}

    </div>
  );
}