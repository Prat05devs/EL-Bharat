import { motion, useScroll, useTransform } from "motion/react";
import React, { useRef } from "react";
import { CheckCircle2, FileText, Home, Plane } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Initial Consultation",
    desc: "Assess eligibility and choose the right program.",
    icon: FileText,
  },
  {
    id: 2,
    title: "Document Preparation",
    desc: "Gather and verify all required documentation.",
    icon: CheckCircle2,
  },
  {
    id: 3,
    title: "Property Investment",
    desc: "Select and purchase qualifying real estate.",
    icon: Home,
  },
  {
    id: 4,
    title: "Visa Issuance",
    desc: "Receive your Golden Visa and travel freely.",
    icon: Plane,
  },
];

export function Immigration() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div className="flex flex-col">
      {/* Hero with Parallax */}
      <section className="relative h-[60vh] overflow-hidden flex items-center justify-center">
        <ParallaxBackground src="https://picsum.photos/seed/greece/1920/1080" />
        <div className="absolute inset-0 bg-blue-900/60 mix-blend-multiply" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Golden Visas & PR
          </h1>
          <p className="text-xl max-w-2xl mx-auto text-blue-100">
            Your gateway to Europe. Secure residency in Greece, Cyprus, and
            beyond through strategic investment.
          </p>
        </div>
      </section>

      {/* Progress Journey */}
      <section className="py-32 bg-slate-50" ref={containerRef}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-blue-900">
              Your Journey to Europe
            </h2>
          </div>

          <div className="relative">
            {/* Dashed background line */}
            <div className="absolute left-8 top-0 bottom-0 w-1 border-l-2 border-dashed border-slate-300" />

            {/* Animated Saffron line */}
            <motion.div
              className="absolute left-8 top-0 w-1 bg-orange-500 origin-top"
              style={{ height: lineHeight }}
            />

            <div className="space-y-24">
              {steps.map((step, index) => {
                // Calculate when this step should activate based on scroll progress
                const stepProgress = index / (steps.length - 1);

                return (
                  <StepItem
                    key={step.id}
                    step={step}
                    progress={scrollYProgress}
                    activationPoint={stepProgress}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

interface StepItemProps {
  step: any;
  progress: any;
  activationPoint: number;
}

const StepItem: React.FC<StepItemProps> = ({
  step,
  progress,
  activationPoint,
}) => {
  // Activate slightly before the line reaches the exact point
  const isActive = useTransform(
    progress,
    (p: number) => p >= activationPoint - 0.1,
  );

  return (
    <div className="relative flex items-start gap-8">
      <motion.div
        className="relative z-10 w-16 h-16 rounded-full flex items-center justify-center bg-white border-4 shrink-0 transition-colors duration-500"
        style={{
          borderColor: isActive.get() ? "#138808" : "#000080",
          color: isActive.get() ? "#138808" : "#000080",
        }}
        animate={{
          scale: isActive.get() ? [1, 1.2, 1] : 1,
        }}
        transition={{ duration: 0.5 }}
      >
        <step.icon className="w-6 h-6" />
      </motion.div>
      <div className="pt-3">
        <h3 className="text-2xl font-bold text-slate-900 mb-2">{step.title}</h3>
        <p className="text-lg text-slate-600">{step.desc}</p>
      </div>
    </div>
  );
};

function ParallaxBackground({ src }: { src: string }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <motion.div
      ref={ref}
      className="absolute inset-0 w-full h-[120%]"
      style={{ y }}
    >
      <img
        src={src}
        alt="Background"
        className="w-full h-full object-cover"
        referrerPolicy="no-referrer"
      />
    </motion.div>
  );
}
