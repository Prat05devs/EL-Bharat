import { motion } from "motion/react";
import { Building, Globe2, Handshake, TrendingUp } from "lucide-react";

export function Corporate() {
  return (
    <div className="flex flex-col">
      {/* Global Section */}
      <section className="py-24 bg-blue-900 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-5xl font-bold mb-6">
              Global Corporate Structuring
            </h1>
            <p className="text-xl text-blue-200">
              Expand your business footprint across international borders with
              our expert corporate setup and advisory services.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Company Formation",
                icon: Building,
                desc: "Setup in Dubai, Singapore, UK, and US.",
              },
              {
                title: "Tax Optimization",
                icon: TrendingUp,
                desc: "Legal frameworks for global tax efficiency.",
              },
              {
                title: "Banking Solutions",
                icon: Globe2,
                desc: "International corporate bank account opening.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-blue-800/50 p-8 rounded-2xl backdrop-blur-sm border border-blue-700 hover:bg-blue-800 transition-colors"
              >
                <item.icon className="w-12 h-12 text-orange-500 mb-6" />
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-blue-200">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Diagonal Wipe Transition */}
      <div className="relative h-32 bg-blue-900 overflow-hidden">
        <motion.div
          initial={{ x: "-100%" }}
          whileInView={{ x: "0%" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "circOut" }}
          className="absolute inset-0 bg-white origin-left"
          style={{ clipPath: "polygon(0 0, 100% 100%, 100% 0)" }}
        />
        <div
          className="absolute inset-0 bg-white"
          style={{ clipPath: "polygon(0 100%, 100% 100%, 0 0)" }}
        />
      </div>

      {/* Local Dehradun Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="flex-1">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative rounded-3xl overflow-hidden shadow-2xl"
              >
                <img
                  src="https://picsum.photos/seed/dehradun/800/600"
                  alt="Dehradun"
                  className="w-full h-auto"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/40 to-transparent mix-blend-overlay" />
              </motion.div>
            </div>
            <div className="flex-1">
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                Local Dehradun Nexus
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                We serve as your strategic partner on the ground in Uttarakhand.
                From navigating local bureaucracy to establishing a strong
                regional presence, we bridge the gap between global ambition and
                local execution.
              </p>
              <ul className="space-y-4">
                {[
                  "Government Liaisoning & Approvals",
                  "Local Market Entry Strategy",
                  "Real Estate & Infrastructure Setup",
                  "Regional Talent Acquisition",
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-3 text-slate-700 font-medium"
                  >
                    <Handshake className="w-5 h-5 text-green-600" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
