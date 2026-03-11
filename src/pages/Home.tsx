import { motion, AnimatePresence } from 'motion/react';
import { MapPin, CheckCircle2, ArrowRight, Briefcase, GraduationCap, FileText, Users, Calculator, Plane, Quote, Activity, Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export function Home() {
  return (
    <div className="flex flex-col bg-[#F8F9FA]">
      {/* Power Hero Section */}
      <section className="relative min-h-screen flex items-center pt-32 pb-16 lg:pt-24 lg:pb-24 overflow-hidden bg-[#000033]">
        {/* Cinematic Background */}
        <div className="absolute inset-0 z-0">
          <motion.img 
            src="https://picsum.photos/seed/global/1920/1080" 
            alt="Global Architecture"
            className="w-full h-full object-cover opacity-40 mix-blend-luminosity"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#000033]/80 via-[#000033]/60 to-[#000033]" />
          <div className="absolute inset-0 bg-topo opacity-20 mix-blend-overlay" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-5">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white leading-[1.1] mb-6 tracking-tight"
              >
                The Architecture of Your <span className="text-[#FF9933]">Global Future.</span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-base sm:text-lg text-slate-300 mb-8 max-w-lg leading-relaxed"
              >
                Direct. Decisive. Done. From the heart of Dehradun to the power centers of Europe and the Gulf. We don't just consult; we execute. Your gateway to the world is officially open.
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8"
              >
                <button className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#FF9933] text-white font-bold text-base hover:bg-orange-500 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-orange-500/20 glint-button">
                  Initiate Protocol <ArrowRight className="w-5 h-5" />
                </button>
              </motion.div>
            </div>

            {/* Right Grid - 6 Glassmorphism Tiles */}
            <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-4">
              {/* Tile 1: Live Terminal */}
              <div className="col-span-2 sm:col-span-2 row-span-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 relative overflow-hidden group hover:bg-white/10 transition-colors">
                <div className="absolute inset-0 bg-gradient-to-br from-[#FF9933]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="flex items-center gap-2 mb-4">
                  <Activity className="w-5 h-5 text-[#FF9933] animate-pulse" />
                  <h3 className="text-white font-bold tracking-wider text-sm uppercase">Live Terminal</h3>
                </div>
                <LiveTerminalFeed />
              </div>

              {/* Other Tiles */}
              {[
                { icon: FileText, title: 'Visas & PR', path: '/immigration' },
                { icon: Briefcase, title: 'Global Jobs', path: '/jobs' },
                { icon: Building2, title: 'Corporate', path: '/corporate' },
                { icon: Users, title: 'Liaisoning', path: '/liaisoning' },
              ].map((service, i) => (
                <Link key={i} to={service.path} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 flex flex-col items-center justify-center text-center group hover:bg-white/10 transition-colors data-burst-hover relative min-h-[160px] overflow-hidden">
                  <service.icon className="w-8 h-8 text-slate-300 mb-4 group-hover:text-[#FF9933] transition-colors relative z-10" />
                  <h3 className="text-white font-bold text-sm relative z-10">{service.title}</h3>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 lg:py-24 relative bg-[#F8F9FA]">
        <div className="absolute inset-0 z-0 bg-micro-grid opacity-50" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#000033] mb-4 uppercase tracking-tight">Unified Service Orchestrator</h2>
              <p className="text-slate-500 text-base">
                A single, powerful system designed to execute your global mobility strategy with precision and government-level authority.
              </p>
            </div>
            <Link to="/services" className="inline-flex items-center gap-2 text-[#000033] font-bold hover:text-[#FF9933] transition-colors whitespace-nowrap text-sm">
              Access All Protocols <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Briefcase, title: 'Global Jobs', desc: 'International career placements in Tech, Healthcare, and Hospitality across Europe, Gulf, and North America.' },
              { icon: GraduationCap, title: 'Study Abroad', desc: 'Admissions and guidance for world-class universities in UK, Canada, Australia, and USA.' },
              { icon: FileText, title: 'Visa Services', desc: 'Hassle-free documentation and processing for PR, Work, Student, and Tourist visas.' },
              { icon: Users, title: 'Liaisoning', desc: 'Expert government and corporate liaisoning services for seamless cross-border operations.' },
              { icon: Calculator, title: 'Tax Consultation', desc: 'Stay compliant with international tax laws and maximize your global earnings.' },
              { icon: Plane, title: 'Travel Planning', desc: 'End-to-end travel solutions including ticketing, insurance, and accommodation.' },
            ].map((service, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 group data-burst-hover relative overflow-hidden">
                <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center mb-6 group-hover:bg-[#000033] transition-colors duration-300 relative z-10">
                  <service.icon className="w-6 h-6 text-[#000033] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-bold text-[#000033] mb-3 relative z-10">{service.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed relative z-10">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 lg:py-24 relative bg-white">
        <div className="absolute inset-0 z-0 bg-topo opacity-5" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#000033] mb-4 uppercase tracking-tight">Verified Success Protocols</h2>
            <p className="text-slate-500 text-sm">
              Join the elite network of professionals and businesses who have executed their global strategies through our command center.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { quote: "EL Bharat executed my transition to Germany with military precision. From document verification to final placement, they are the undeniable authority in Dehradun.", name: "Aman Sharma", location: "NOW IN BERLIN, GERMANY", img: "https://picsum.photos/seed/aman/100/100" },
              { quote: "Their network and influence in UK admissions are unmatched. They didn't just consult; they secured my position at a top-tier university.", name: "Priya Negi", location: "STUDYING IN LONDON, UK", img: "https://picsum.photos/seed/priya/100/100" },
              { quote: "Corporate structuring across borders requires serious power-brokers. EL Bharat's liaisoning team delivered a flawless Canadian expansion.", name: "Rohan Bisht", location: "BUSINESS IN TORONTO, CANADA", img: "https://picsum.photos/seed/rohan/100/100" },
            ].map((testimonial, i) => (
              <div key={i} className="bg-[#F8F9FA] p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col relative overflow-hidden">
                <Quote className="w-8 h-8 text-[#000033]/10 mb-6 fill-[#000033]/10" />
                <p className="text-slate-600 text-sm italic mb-8 flex-grow relative z-10">"{testimonial.quote}"</p>
                <div className="flex items-center gap-4 relative z-10">
                  <img src={testimonial.img} alt={testimonial.name} className="w-10 h-10 rounded-full object-cover border-2 border-[#000033]" referrerPolicy="no-referrer" />
                  <div>
                    <h4 className="font-bold text-sm text-[#000033]">{testimonial.name}</h4>
                    <p className="text-[9px] font-bold text-[#006400] uppercase tracking-wider">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 lg:py-16 bg-[#000033] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-micro-grid opacity-20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl sm:text-4xl font-extrabold text-[#006400] mb-2">5000+</div>
              <div className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-slate-300">Auth. Clearances</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-extrabold text-[#006400] mb-2">98%</div>
              <div className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-slate-300">Execution Rate</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-extrabold text-[#006400] mb-2">12+</div>
              <div className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-slate-300">Years Authority</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-extrabold text-[#006400] mb-2">40+</div>
              <div className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-slate-300">Global Nodes</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function LiveTerminalFeed() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const opportunities = [
    { type: 'JOB', text: 'Senior Software Engineer - Berlin, Germany', status: 'URGENT' },
    { type: 'PR', text: 'Golden Visa Investment - Athens, Greece', status: 'FAST-TRACK' },
    { type: 'TRAVEL', text: 'Executive Retreat - Swiss Alps', status: 'SECURED' },
    { type: 'JOB', text: 'Registered Nurse - London, UK', status: 'OPEN' },
    { type: 'CORP', text: 'Freezone Company Setup - Dubai, UAE', status: 'PROCESSING' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % opportunities.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-4 h-48 overflow-hidden relative">
      <AnimatePresence mode="popLayout">
        {opportunities.map((opp, idx) => {
          const isVisible = idx === currentIndex || idx === (currentIndex + 1) % opportunities.length || idx === (currentIndex + 2) % opportunities.length;
          
          if (!isVisible) return null;

          return (
            <motion.div
              key={opp.text}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="flex items-center gap-4 border-b border-white/10 pb-3 last:border-0"
            >
              <span className="text-[10px] font-bold px-2 py-1 rounded bg-[#FF9933]/20 text-[#FF9933] min-w-[50px] text-center">
                {opp.type}
              </span>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-slate-200 font-medium truncate">{opp.text}</p>
                <p className="text-[10px] text-[#006400] font-mono font-bold">{opp.status}</p>
              </div>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}
