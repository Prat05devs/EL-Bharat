import { ReactNode, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Building2, Globe, Share2, Menu, X } from "lucide-react";
import { ScrollChakra } from "./ScrollChakra";
import { LiveTerminalSidebar } from "./LiveTerminalSidebar";
import { MagneticWhatsApp } from "./MagneticWhatsApp";
import { FrictionlessCapture } from "./FrictionlessCapture";

const footerImages: Record<string, string> = {
  "/": "https://picsum.photos/seed/india/1920/1080",
  "/immigration": "https://picsum.photos/seed/greece/1920/1080",
  "/jobs": "https://picsum.photos/seed/office/1920/1080",
  "/corporate": "https://picsum.photos/seed/dubai/1920/1080",
  "/travel": "https://picsum.photos/seed/paris/1920/1080",
  "/liaisoning": "https://picsum.photos/seed/meeting/1920/1080",
};

export function Layout({ children }: { children: ReactNode }) {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const currentFooterImage = footerImages[location.pathname] || "https://picsum.photos/seed/world/1920/1080";

  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-800 bg-slate-50 relative overflow-hidden bg-micro-grid">
      <ScrollChakra />
      <LiveTerminalSidebar />
      <MagneticWhatsApp />
      <FrictionlessCapture />

      {/* Floating Navbar */}
      <header className="fixed top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50 bg-white/90 backdrop-blur-md border border-slate-200 rounded-full shadow-lg">
        <div className="px-6 sm:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-8 h-8 rounded-full bg-[#000066] flex items-center justify-center">
                <Building2 className="w-4 h-4 text-white" />
              </div>
              <span className="font-extrabold text-xl tracking-tight text-[#000066]">
                EL BHARAT
              </span>
            </Link>
            <nav className="hidden md:flex gap-6">
              <NavLink to="/jobs">Jobs</NavLink>
              <NavLink to="/study">Study</NavLink>
              <NavLink to="/visa">Visa</NavLink>
              <NavLink to="/liaisoning">Liaisoning</NavLink>
              <NavLink to="/tax">Tax</NavLink>
              <NavLink to="/travel">Travel</NavLink>
            </nav>
            <button className="hidden md:block bg-[#000066] text-white px-6 py-2 rounded-full font-bold hover:bg-blue-900 transition-colors text-sm glint-button">
              Contact Us
            </button>
            <button 
              className="md:hidden text-[#000066] p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-slate-100 bg-white/95 backdrop-blur-xl rounded-b-3xl overflow-hidden"
            >
              <nav className="flex flex-col p-6 gap-4">
                <MobileNavLink to="/jobs" onClick={() => setIsMobileMenuOpen(false)}>Jobs</MobileNavLink>
                <MobileNavLink to="/study" onClick={() => setIsMobileMenuOpen(false)}>Study</MobileNavLink>
                <MobileNavLink to="/visa" onClick={() => setIsMobileMenuOpen(false)}>Visa</MobileNavLink>
                <MobileNavLink to="/liaisoning" onClick={() => setIsMobileMenuOpen(false)}>Liaisoning</MobileNavLink>
                <MobileNavLink to="/tax" onClick={() => setIsMobileMenuOpen(false)}>Tax</MobileNavLink>
                <MobileNavLink to="/travel" onClick={() => setIsMobileMenuOpen(false)}>Travel</MobileNavLink>
                <button className="bg-[#000066] text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-900 transition-colors text-sm glint-button mt-4">
                  Contact Us
                </button>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Content with Page Transitions */}
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          className="flex-grow relative z-10 pt-32"
        >
          {/* Curtains for exit */}
          <motion.div
            className="fixed inset-y-0 left-0 w-1/2 bg-[#FF9933] z-[100] origin-left"
            initial={{ scaleX: 1 }}
            animate={{ scaleX: 0 }}
            exit={{ scaleX: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          />
          <motion.div
            className="fixed inset-y-0 right-0 w-1/2 bg-[#006400] z-[100] origin-right"
            initial={{ scaleX: 1 }}
            animate={{ scaleX: 0 }}
            exit={{ scaleX: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          />
          <motion.div
            className="fixed inset-0 bg-[#000033] z-[99]"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0, transitionEnd: { display: 'none' } }}
            exit={{ display: 'block', opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.5 }}
          >
            {children}
          </motion.div>
        </motion.main>
      </AnimatePresence>

      {/* Dynamic Floating Footer */}
      <footer className="relative w-full h-[80vh] min-h-[600px] flex items-end justify-center pb-8 mt-auto">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src={currentFooterImage} 
            alt="Footer Background" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Floating Footer Card */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 w-[95%] max-w-7xl bg-white/95 backdrop-blur-xl border border-white/20 rounded-3xl p-8 md:p-12 shadow-2xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-8">
            <div className="col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-[#000066] flex items-center justify-center">
                  <Building2 className="w-4 h-4 text-white" />
                </div>
                <span className="font-extrabold text-xl tracking-tight text-[#000066]">
                  EL BHARAT
                </span>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">
                Dehradun's premier global career and education consultants. Empowering local talent with international wings.
              </p>
              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50 cursor-pointer transition-colors">
                  <Globe className="w-4 h-4" />
                </div>
                <div className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50 cursor-pointer transition-colors">
                  <Share2 className="w-4 h-4" />
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-[#000066] mb-6 text-sm">Quick Links</h4>
              <ul className="space-y-4 text-xs text-slate-500 font-medium">
                <li><Link to="/study" className="hover:text-[#FF9933] transition-colors">Study Abroad</Link></li>
                <li><Link to="/jobs" className="hover:text-[#FF9933] transition-colors">Work Visas</Link></li>
                <li><Link to="/visa" className="hover:text-[#FF9933] transition-colors">PR Services</Link></li>
                <li><Link to="/tax" className="hover:text-[#FF9933] transition-colors">Tax Advisory</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-[#000066] mb-6 text-sm">Company</h4>
              <ul className="space-y-4 text-xs text-slate-500 font-medium">
                <li><Link to="/about" className="hover:text-[#FF9933] transition-colors">About Us</Link></li>
                <li><Link to="/contact" className="hover:text-[#FF9933] transition-colors">Contact</Link></li>
                <li><Link to="/careers" className="hover:text-[#FF9933] transition-colors">Careers</Link></li>
                <li><Link to="/legal" className="hover:text-[#FF9933] transition-colors">Legal</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-[#000066] mb-6 text-sm">Visit Our Office</h4>
              <div className="text-xs text-slate-500 space-y-4 font-medium">
                <p>Rajpur Road, Near Clock Tower,<br />Dehradun, Uttarakhand-248001</p>
                <p><strong className="text-slate-700">Email:</strong> info@elbharat.com</p>
                <p><strong className="text-slate-700">Phone:</strong> +91 98765 43210</p>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-slate-400 font-medium">
            <p>© {new Date().getFullYear()} EL Bharat Consultancy. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-slate-600 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-slate-600 transition-colors">Terms of Service</a>
            </div>
          </div>
        </motion.div>
      </footer>
    </div>
  );
}

function NavLink({ to, children }: { to: string; children: ReactNode }) {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`font-bold text-xs transition-colors ${
        isActive ? "text-[#FF9933]" : "text-slate-600 hover:text-[#000066]"
      }`}
    >
      {children}
    </Link>
  );
}

function MobileNavLink({ to, onClick, children }: { to: string; onClick: () => void; children: ReactNode }) {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      onClick={onClick}
      className={`font-bold text-lg transition-colors p-2 rounded-lg ${
        isActive ? "text-[#FF9933] bg-orange-50" : "text-slate-600 hover:text-[#000066] hover:bg-slate-50"
      }`}
    >
      {children}
    </Link>
  );
}
