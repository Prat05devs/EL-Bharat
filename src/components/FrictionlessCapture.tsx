import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowRight } from 'lucide-react';

export function FrictionlessCapture() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 10000); // Show after 10s
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#000033]/80 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div 
            className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full relative shadow-2xl border border-slate-100 mx-4"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", bounce: 0.5 }}
          >
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-[#000033] transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            
            <h3 className="text-2xl font-extrabold text-[#000033] mb-2 leading-tight">
              You are one step away from global authority.
            </h3>
            <p className="text-sm text-slate-500 mb-8">
              Give us your Name and WhatsApp. We handle the rest.
            </p>
            
            <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setIsOpen(false); }}>
              <input 
                type="text" 
                placeholder="Full Name" 
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border-none focus:ring-2 focus:ring-[#000033] outline-none text-sm"
                required
              />
              <div className="flex gap-2">
                <div className="flex items-center justify-center px-4 py-3 rounded-xl bg-slate-50 text-slate-600 font-medium text-sm">
                  +91
                </div>
                <input 
                  type="tel" 
                  placeholder="WhatsApp Number" 
                  className="flex-1 px-4 py-3 rounded-xl bg-slate-50 border-none focus:ring-2 focus:ring-[#000033] outline-none text-sm"
                  required
                />
              </div>
              <button 
                type="submit"
                className="w-full py-4 rounded-xl bg-[#FF9933] text-white font-bold text-base hover:bg-orange-500 transition-colors flex items-center justify-center gap-2 glint-button mt-4"
              >
                Get Global Access <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
