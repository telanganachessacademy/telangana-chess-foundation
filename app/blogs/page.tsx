"use client";

import { useState } from "react";
import { CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Calendar,
  Clock,
  Search,
  Eye,
  Heart,
  BookOpen,
  Share2,
  PenTool
} from "lucide-react";
import { format } from "date-fns";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function BlogsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const blogPosts = [
    {
      id: 1,
      title: "Mastering the Board: A Guide to Chess Pieces",
      content: `
# The Army on the Board

![Starting chess board](https://images.unsplash.com/photo-1529699211952-734e80c4d42b?auto=format&fit=crop&q=80&w=1000)

To become great at chess, you must understand the unique powers of your army. Each piece moves differently, and knowing how to coordinate them is the key to victory.

There are 6 unique chess pieces. They are:
- **The King**: The leader
- **The Queen**: The powerhouse
- **The Rook**: The castle
- **The Bishop**: The sniper
- **The Knight**: The jumper
- **The Pawn**: The soul of chess

## The King ♔
The king is the most important piece. If you lose your king, you lose the game.
* **Start:** e1 (White) / e8 (Black)
* **Movement:** One square in any direction.
* **Strategy:** Protect him early (Castle!), use him as an attacker in the endgame.

## The Rook ♖
The rook is a major piece, worth 5 points.
* **Start:** Corners of the board (a1, h1).
* **Movement:** Straight lines (up, down, left, right) for any distance.
* **Pro Tip:** Rooks love open files. Don't leave them trapped behind your own pawns!

## The Bishop ♗
The bishop is a minor piece, worth 3 points.
* **Start:** Next to King and Queen.
* **Movement:** Diagonals only.
* **Limitation:** A bishop starting on a light square will *never* touch a dark square.

## The Queen ♕
The most powerful piece, worth 9 points.
* **Movement:** Combines the Rook and Bishop. She can move in any direction for any distance.
* **Warning:** Don't bring her out too early! She becomes a target for opponent's minor pieces.

## The Knight ♘
The trickiest piece, worth 3 points.
* **Movement:** "L" shape (2 squares one way, 1 square the other).
* **Superpower:** The only piece that can jump over others.
* **Strategy:** Knights are best in the center of the board. A knight on the rim is dim!

## The Pawn ♙
The foot soldier, worth 1 point.
* **Movement:** Forward only. 1 square at a time (option for 2 on first move).
* **Attack:** Captures diagonally forward.
* **Special Moves:** Promotion (turning into a Queen!) and En Passant.

---
### Summary
Understanding movement is step one. Step two is understanding *coordination*. A Bishop and Knight working together are often stronger than a Rook alone. Practice these movements until they become second nature!
      `,
      author: "Tejavath Naresh",
      authorRole: "Head Coach & Founder",
      authorImage: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=150",
      date: "2025-09-10",
      readTime: "8 min read",
      category: "Basics",
      tags: ["Fundamentals", "Pieces", "Strategy"],
      coverImage: "https://images.unsplash.com/photo-1586165368502-1bad197a6461?auto=format&fit=crop&q=80&w=1200",
      views: 1542,
      likes: 128,
    },
  ];

  const categories = [
    { id: "all", name: "All Articles" },
    { id: "Basics", name: "Chess Basics" },
    { id: "Strategy", name: "Strategy" },
    { id: "Openings", name: "Openings" },
  ];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.content.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-blue-600 selection:text-white">
      
      {/* HERO SECTION */}
      <section className="relative pt-36 pb-20 bg-slate-50 border-b border-slate-200 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-blue-200 bg-blue-50 text-blue-800 text-xs font-bold uppercase tracking-widest shadow-sm mb-6">
            <PenTool className="w-3.5 h-3.5 fill-blue-600 text-blue-600" />
            <span>The Knowledge Hub</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 text-slate-900 tracking-tight leading-tight">
            Telangana Chess Foundation <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-800 via-indigo-700 to-amber-600">Insights & Analysis</span>
          </h1>
          
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-medium">
            Deep dive into strategies, opening theories, and grandmaster secrets curated by the faculty of Telangana Chess Foundation.
          </p>
        </div>
      </section>

      {/* SEARCH & FILTER BAR */}
      <section className="sticky top-16 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 py-4 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between max-w-5xl mx-auto">
            
            <div className="relative w-full md:w-96 group">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 group-focus-within:text-blue-700 transition-colors w-4 h-4" />
              <Input
                placeholder="Search articles, tactics..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-11 h-11 bg-slate-50 border-slate-200 text-slate-900 focus:border-blue-700 focus:ring-1 focus:ring-blue-700 rounded-full transition-all placeholder:text-slate-400 font-medium"
              />
            </div>

            <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 no-scrollbar">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-5 py-2 rounded-full text-xs font-black uppercase tracking-wider whitespace-nowrap transition-all border ${
                    selectedCategory === category.id
                      ? "bg-blue-800 border-blue-800 text-white shadow-md"
                      : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BLOG CONTENT */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          {filteredPosts.map((post) => (
            <article 
              key={post.id}
              className="bg-white rounded-[2.5rem] shadow-xl border border-slate-200 overflow-hidden hover:border-slate-300 transition-all duration-500 group"
            >
              <div className="relative h-64 md:h-96 w-full overflow-hidden bg-slate-100">
                <img
                  src={post.coverImage}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
                
                <div className="absolute bottom-6 left-6 md:left-10 md:bottom-10 text-white z-10">
                  <Badge className="bg-blue-700 hover:bg-blue-800 border-0 mb-4 text-white px-3.5 py-1 text-xs font-black uppercase tracking-widest shadow-lg">
                    {post.category}
                  </Badge>
                  <h2 className="text-3xl md:text-5xl font-black leading-tight mb-4 text-white drop-shadow-lg">
                    {post.title}
                  </h2>
                  
                  <div className="flex flex-wrap items-center gap-6 text-xs md:text-sm text-slate-200 font-bold">
                    <div className="flex items-center gap-2.5">
                       <img src={post.authorImage} alt={post.author} className="w-8 h-8 rounded-full border border-white/30" />
                       <span className="font-bold text-white">{post.author}</span>
                    </div>
                    <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-amber-400" /> {post.readTime}</span>
                    <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-amber-400" /> {format(new Date(post.date), "MMM d, yyyy")}</span>
                  </div>
                </div>
              </div>

              <CardContent className="p-6 md:p-12">
                <div className="prose prose-lg max-w-none 
                  prose-headings:text-slate-900 prose-headings:font-black 
                  prose-p:text-slate-700 prose-p:leading-relaxed 
                  prose-li:text-slate-700 
                  prose-strong:text-slate-900 
                  prose-a:text-blue-700 hover:prose-a:text-blue-900 
                  prose-img:rounded-2xl prose-img:shadow-xl prose-img:border prose-img:border-slate-200"
                >
                  <ReactMarkdown 
                    remarkPlugins={[remarkGfm]} 
                    components={{
                      h1: ({node, ...props}) => <h1 className="text-3xl font-black mt-8 mb-4 text-slate-900 border-b border-slate-200 pb-4" {...props} />,
                      h2: ({node, ...props}) => <h2 className="text-2xl font-black mt-10 mb-4 text-blue-900 flex items-center gap-2" {...props}><span className="w-1.5 h-6 bg-blue-700 rounded-full inline-block"></span>{props.children}</h2>,
                      p: ({node, ...props}) => <p className="mb-6 text-base text-slate-700 leading-relaxed font-medium" {...props} />,
                      ul: ({node, ...props}) => <ul className="list-disc pl-6 mb-6 space-y-2 text-slate-700 font-medium marker:text-blue-700" {...props} />,
                      li: ({node, ...props}) => <li className="pl-2" {...props} />,
                      strong: ({node, ...props}) => <strong className="font-black text-slate-900 bg-slate-100 px-1 rounded" {...props} />,
                    }}
                  >
                    {post.content}
                  </ReactMarkdown>
                </div>

                <div className="mt-16 pt-8 border-t border-slate-200 flex flex-wrap gap-4 items-center justify-between">
                  <div className="flex gap-2">
                    {post.tags.map((tag, i) => (
                      <span key={i} className="bg-slate-100 border border-slate-200 text-slate-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-slate-200 transition-colors">
                        #{tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center gap-6 text-slate-500 font-bold">
                    <button className="flex items-center gap-2 hover:text-red-600 transition-colors group">
                      <Heart className="w-5 h-5 group-hover:fill-red-600 transition-all" /> <span className="text-xs">{post.likes}</span>
                    </button>
                    <button className="flex items-center gap-2 hover:text-blue-700 transition-colors">
                      <Eye className="w-5 h-5" /> <span className="text-xs">{post.views}</span>
                    </button>
                    <button className="flex items-center gap-2 hover:text-slate-900 transition-colors">
                      <Share2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </CardContent>
            </article>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-slate-50 border-t border-slate-200 relative overflow-hidden">
        <div className="container mx-auto px-4 text-center max-w-2xl relative z-10">
          <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 border border-slate-200 shadow-md">
             <BookOpen className="w-8 h-8 text-blue-700" />
          </div>
          <h2 className="text-3xl font-black text-slate-900 mb-4">Never Miss a Move</h2>
          <p className="text-slate-600 mb-8 text-base font-medium">Subscribe to the Telangana Chess Foundation newsletter for weekly tactics, tournament updates, and exclusive articles.</p>
          <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
            <Input 
               placeholder="Enter your email" 
               className="rounded-full bg-white border-slate-300 h-12 text-slate-900 placeholder:text-slate-400 focus:border-blue-700 focus:ring-1 focus:ring-blue-700 font-medium" 
            />
            <Button className="rounded-full bg-blue-700 hover:bg-blue-800 text-white h-12 px-8 font-black text-xs uppercase tracking-wider shadow-md">Subscribe</Button>
          </div>
        </div>
      </section>

    </div>
  );
}