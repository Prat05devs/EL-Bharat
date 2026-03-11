import { motion } from "motion/react";
import { Plane, Hotel, Map as MapIcon, Star } from "lucide-react";

export function Travel() {
  return (
    <div className="flex flex-col bg-slate-50 min-h-screen">
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://picsum.photos/seed/travel/1920/1080"
            alt="Travel"
            className="w-full h-full object-cover opacity-20"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-50/80 to-slate-50" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-5xl font-bold text-blue-900 mb-6">
              Luxury Travel & Concierge
            </h1>
            <p className="text-xl text-slate-600">
              Experience the world with unparalleled comfort. From bespoke
              itineraries to priority bookings, we handle every detail.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Premium Flights",
                icon: Plane,
                desc: "First & Business class bookings with exclusive corporate rates.",
              },
              {
                title: "Luxury Hotels",
                icon: Hotel,
                desc: "Curated stays at the world's finest 5-star properties.",
              },
              {
                title: "Bespoke Tours",
                icon: MapIcon,
                desc: "Customized itineraries tailored to your unique preferences.",
              },
              {
                title: "VIP Concierge",
                icon: Star,
                desc: "24/7 priority assistance, event access, and private transfers.",
              },
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow border border-slate-100 group"
              >
                <div className="w-14 h-14 rounded-full bg-orange-50 flex items-center justify-center mb-6 group-hover:bg-orange-500 transition-colors duration-300">
                  <service.icon className="w-7 h-7 text-orange-500 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-slate-600">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
