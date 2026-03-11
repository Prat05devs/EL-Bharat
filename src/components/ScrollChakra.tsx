import { useScroll, useTransform, motion } from 'motion/react';

export function ScrollChakra() {
  const { scrollY } = useScroll();
  const rotate = useTransform(scrollY, [0, 1000], [0, 360]);
  
  return (
    <motion.div 
      className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vw] h-[150vw] sm:w-[800px] sm:h-[800px] opacity-[0.03] pointer-events-none z-0 mix-blend-multiply"
      style={{ rotate }}
    >
      <img src="https://upload.wikimedia.org/wikipedia/commons/1/17/Ashoka_Chakra.svg" alt="Chakra" className="w-full h-full" />
    </motion.div>
  );
}
