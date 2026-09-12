"use client";

import { useState } from "react";
import { Chessboard } from "react-chessboard";
import { Trophy, RefreshCw, Lightbulb, CheckCircle2, AlertCircle, Sparkles, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Puzzle {
  id: number;
  title: string;
  level: string;
  fen: string;
  targetMove: { from: string; to: string };
  hint: string;
  description: string;
}

const PUZZLES: Puzzle[] = [
  {
    id: 1,
    title: "Smothered Checkmate Motif",
    level: "Beginner",
    fen: "6rk/5Npp/8/8/8/8/8/7K w - - 0 1",
    targetMove: { from: "f7", to: "h6" },
    hint: "Target the h7 square with your Knight!",
    description: "White to move: Find the winning tactical move!"
  },
  {
    id: 2,
    title: "Back-Rank Mate",
    level: "Intermediate",
    fen: "6k1/5ppp/8/8/8/8/5PPP/1R4K1 w - - 0 1",
    targetMove: { from: "b1", to: "b8" },
    hint: "Use the Rook to strike along the 8th rank!",
    description: "White to move: Deliver back-rank checkmate."
  },
  {
    id: 3,
    title: "f7 Vulnerability Attack",
    level: "Advanced",
    fen: "r1bqk2r/pppp1ppp/2n5/4p3/2B1P3/5Q2/PPPP1PPP/R1B1K2R w KQkq - 0 1",
    targetMove: { from: "f3", to: "f7" },
    hint: "Focus your attack on the vulnerable f7 square!",
    description: "White to move: Execute Scholar's Checkmate pattern."
  }
];

export function InteractiveChessboard() {
  const [currentPuzzleIdx, setCurrentPuzzleIdx] = useState(0);
  const puzzle = PUZZLES[currentPuzzleIdx];
  
  const [status, setStatus] = useState<"idle" | "success" | "wrong">("idle");
  const [showHint, setShowHint] = useState(false);
  const [position, setPosition] = useState(puzzle.fen);

  const handleMove = (sourceSquare: string, targetSquare: string): boolean => {
    if (
      sourceSquare.toLowerCase() === puzzle.targetMove.from.toLowerCase() &&
      targetSquare.toLowerCase() === puzzle.targetMove.to.toLowerCase()
    ) {
      setStatus("success");
      return true;
    } else {
      setStatus("wrong");
      return false;
    }
  };

  const handleReset = () => {
    setPosition(puzzle.fen);
    setStatus("idle");
    setShowHint(false);
  };

  const nextPuzzle = () => {
    const nextIdx = (currentPuzzleIdx + 1) % PUZZLES.length;
    setCurrentPuzzleIdx(nextIdx);
    setPosition(PUZZLES[nextIdx].fen);
    setStatus("idle");
    setShowHint(false);
  };

  return (
    <div className="bg-white rounded-[2.5rem] p-6 sm:p-8 border border-slate-200 shadow-xl relative overflow-hidden font-sans">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>Interactive Challenge</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
            {puzzle.title}
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 font-medium">
            {puzzle.description}
          </p>
        </div>

        <button
          onClick={nextPuzzle}
          className="flex items-center gap-1.5 text-xs font-black text-blue-800 hover:text-blue-950 bg-blue-50 px-3.5 py-2 rounded-xl transition-all border border-blue-200 shrink-0 uppercase tracking-wider"
        >
          <span>Next Puzzle ({currentPuzzleIdx + 1}/{PUZZLES.length})</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        <div className="md:col-span-7 flex justify-center">
          <div className="w-full max-w-[340px] sm:max-w-[380px] aspect-square rounded-2xl overflow-hidden shadow-xl border-4 border-slate-900 relative">
            <Chessboard
              options={{
                position: position,
                onPieceDrop: (args: any) => handleMove(args.sourceSquare, args.targetSquare),
                boardStyle: {
                  borderRadius: "0.75rem",
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.3)",
                },
                darkSquareStyle: { backgroundColor: "#769656" },
                lightSquareStyle: { backgroundColor: "#eeeed2" },
              }}
            />
          </div>
        </div>

        <div className="md:col-span-5 flex flex-col justify-between h-full space-y-5">
          {status === "idle" && (
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-slate-700 text-xs sm:text-sm leading-relaxed font-medium">
              <span className="font-black text-slate-900 block mb-1">🎮 Your Move!</span>
              Drag and drop White's piece onto the correct target square to solve the tactical puzzle.
            </div>
          )}

          {status === "success" && (
            <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-sm animate-in fade-in duration-300">
              <div className="flex items-center gap-2 font-black text-emerald-800 mb-1">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                <span>EXCELLENT! PUZZLE SOLVED!</span>
              </div>
              <p className="text-xs font-bold text-emerald-700">
                Spot-on calculation! You executed the exact tactical checkmate move.
              </p>
            </div>
          )}

          {status === "wrong" && (
            <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200 text-rose-900 text-sm animate-in fade-in duration-300">
              <div className="flex items-center gap-2 font-black text-rose-800 mb-1">
                <AlertCircle className="w-5 h-5 text-rose-600" />
                <span>NOT QUITE, TRY AGAIN!</span>
              </div>
              <p className="text-xs font-bold text-rose-700">
                That's not the optimal move. Reset the board or check the hint!
              </p>
            </div>
          )}

          {showHint && (
            <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 text-xs font-bold animate-in fade-in duration-300">
              💡 <strong>Hint:</strong> {puzzle.hint}
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <Button
              onClick={() => setShowHint(!showHint)}
              variant="outline"
              size="sm"
              className="flex-1 border-amber-300 text-amber-900 bg-amber-50 hover:bg-amber-100 font-black rounded-xl h-11 text-xs uppercase"
            >
              <Lightbulb className="w-4 h-4 mr-1.5 text-amber-600" />
              {showHint ? "Hide Hint" : "Get Hint"}
            </Button>
            <Button
              onClick={handleReset}
              variant="outline"
              size="sm"
              className="flex-1 border-slate-200 text-slate-800 hover:bg-slate-100 font-black rounded-xl h-11 text-xs uppercase"
            >
              <RefreshCw className="w-4 h-4 mr-1.5 text-slate-600" />
              Reset Board
            </Button>
          </div>

          <div className="pt-2 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500 font-bold">
            <span className="flex items-center gap-1 font-black text-slate-700">
              <Trophy className="w-3.5 h-3.5 text-amber-500" /> FIDE Level Curriculum
            </span>
            <span className="font-black text-blue-800 uppercase">{puzzle.level}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
