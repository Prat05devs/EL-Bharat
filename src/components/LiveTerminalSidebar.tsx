import { motion, AnimatePresence } from 'motion/react';
import { Activity } from 'lucide-react';
import { useState, useEffect } from 'react';

const updates = [
  "5 new nursing spots in Germany filled",
  "3 Golden Visas approved this morning",
  "Travel deal for Japan updated",
  "New corporate setup in Dubai completed",
  "UK Study Visa success rate hits 99%"
];

export function LiveTerminalSidebar() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % updates.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col items-end pointer-events-none">
      <div className="bg-[#000033] text-white p-4 rounded-l-2xl shadow-2xl border-y border-l border-white/10 w-64 pointer-events-auto">
        <div className="flex items-center gap-2 mb-4">
          <Activity className="w-4 h-4 text-[#FF9933] animate-pulse" />
          <span className="text-[10px] font-bold uppercase tracking-widest text-slate-300">Live from Dehradun</span>
        </div>
        <div className="h-12 relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute inset-0 text-xs font-medium leading-relaxed text-[#F8F9FA]"
            >
              {updates[currentIndex]}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
