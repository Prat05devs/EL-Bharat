import { motion } from "motion/react";
import React, { useRef, useState } from "react";
import { Briefcase, GraduationCap, MapPin, ArrowRight } from "lucide-react";

const jobs = [
  {
    id: 1,
    title: "Senior Software Engineer",
    location: "Berlin, Germany",
    type: "Tech",
    salary: "€70k - €90k",
  },
  {
    id: 2,
    title: "Clinical Nurse",
    location: "London, UK",
    type: "Healthcare",
    salary: "£35k - £45k",
  },
  {
    id: 3,
    title: "Marketing Director",
    location: "Dubai, UAE",
    type: "Marketing",
    salary: "AED 30k - 40k/mo",
  },
  {
    id: 4,
    title: "Data Scientist",
    location: "Toronto, Canada",
    type: "Tech",
    salary: "CAD 90k - 120k",
  },
];

export function JobsEducation() {
  return (
    <div className="flex flex-col bg-slate-50 min-h-screen">
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-blue-900 mb-6">
            Global Careers & Education
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Discover life-changing opportunities across the globe. We connect
            talent with top employers and universities.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Jobs Section */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center">
                <Briefcase className="w-6 h-6 text-orange-500" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900">
                Featured Jobs
              </h2>
            </div>

            <div className="space-y-4">
              {jobs.map((job, index) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  <div>
                    <h3 className="text-xl font-bold text-blue-900 mb-2">
                      {job.title}
                    </h3>
                    <div className="flex items-center gap-4 text-sm text-slate-500">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" /> {job.location}
                      </span>
                      <span className="px-2 py-1 bg-slate-100 rounded-md">
                        {job.type}
                      </span>
                    </div>
                  </div>
                  <MagneticButton>
                    <button className="saffron-hover px-6 py-2 bg-blue-900 text-white rounded-full font-medium hover:bg-blue-800 transition-colors flex items-center gap-2 whitespace-nowrap">
                      Apply Now <ArrowRight className="w-4 h-4" />
                    </button>
                  </MagneticButton>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-green-600" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900">
                Study Abroad
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {[
                {
                  country: "UK",
                  desc: "Top-tier universities & post-study work visas.",
                  img: "https://picsum.photos/seed/london/400/300",
                },
                {
                  country: "Canada",
                  desc: "Affordable education & clear PR pathways.",
                  img: "https://picsum.photos/seed/toronto/400/300",
                },
                {
                  country: "Australia",
                  desc: "High quality of life & excellent research facilities.",
                  img: "https://picsum.photos/seed/sydney/400/300",
                },
                {
                  country: "Germany",
                  desc: "Free or low-cost tuition for international students.",
                  img: "https://picsum.photos/seed/berlin/400/300",
                },
              ].map((edu, index) => (
                <motion.div
                  key={edu.country}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative rounded-2xl overflow-hidden shadow-sm"
                >
                  <img
                    src={edu.img}
                    alt={edu.country}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 to-transparent flex flex-col justify-end p-6 text-white">
                    <h3 className="text-xl font-bold mb-1">{edu.country}</h3>
                    <p className="text-sm text-blue-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                      {edu.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function MagneticButton({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current!.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);

    // Magnetic pull strength
    setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className="inline-block"
    >
      {children}
    </motion.div>
  );
}
