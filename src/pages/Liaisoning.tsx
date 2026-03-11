import { motion } from "motion/react";
import { FileCheck, Scale, Users, ShieldCheck } from "lucide-react";

export function Liaisoning() {
  return (
    <div className="flex flex-col bg-white min-h-screen">
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-5xl font-bold text-blue-900 mb-6">
                Expert Liaisoning Services
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Navigating complex bureaucratic landscapes requires local
                expertise and strong networks. We provide seamless liaisoning
                services to ensure your projects move forward without friction.
              </p>

              <div className="space-y-6">
                {[
                  {
                    title: "Government Approvals",
                    icon: FileCheck,
                    desc: "Expedited processing of permits, licenses, and clearances.",
                  },
                  {
                    title: "Legal Compliance",
                    icon: Scale,
                    desc: "Ensuring all operations meet local and national regulatory standards.",
                  },
                  {
                    title: "Stakeholder Management",
                    icon: Users,
                    desc: "Building and maintaining critical relationships with key authorities.",
                  },
                  {
                    title: "Risk Mitigation",
                    icon: ShieldCheck,
                    desc: "Proactive identification and resolution of potential bureaucratic hurdles.",
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="shrink-0 w-12 h-12 rounded-lg bg-green-50 flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 mb-1">
                        {item.title}
                      </h3>
                      <p className="text-slate-600">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="rounded-3xl overflow-hidden shadow-2xl"
              >
                <img
                  src="https://picsum.photos/seed/meeting/800/1000"
                  alt="Liaisoning"
                  className="w-full h-auto"
                  referrerPolicy="no-referrer"
                />
              </motion.div>

              {/* Floating Stats Card */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-8 -left-8 bg-white p-8 rounded-2xl shadow-xl border border-slate-100"
              >
                <div className="text-4xl font-bold text-orange-500 mb-2">
                  15+
                </div>
                <div className="text-slate-600 font-medium">
                  Years of Local Expertise
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
