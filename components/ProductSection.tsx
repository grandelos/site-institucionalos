import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue, useMotionTemplate } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { GlitchText } from './ui/GlitchText';

const SHIRT_VIDEO_URL = "https://richardhey.com.br/wp-content/uploads/2026/01/Untitled.mp4";

const ProductSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  // Scroll Progress for Parallax
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Smooth scroll values
  const smoothProgress = useSpring(scrollYProgress, { damping: 15, stiffness: 100 });

  // 3D Transformations based on scroll
  const scale = useTransform(smoothProgress, [0, 0.5, 1], [0.9, 1.1, 0.9]);
  const opacity = useTransform(smoothProgress, [0, 0.2, 0.8, 0.9], [0, 1, 1, 0]);

  // Rotation: Reduced rotation range for video to avoid excessive distortion
  const rotateY = useTransform(smoothProgress, [0, 0.5, 1], [15, 0, -15]);
  const rotateX = useTransform(smoothProgress, [0, 0.5, 1], [5, 0, -5]);
  const y = useTransform(smoothProgress, [0, 1], [50, -50]);

  // Mouse move effect for interactive 3D
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;
    mouseX.set(x * 15); 
    mouseY.set(y * 15);
  };

  const combinedRotateY = useMotionTemplate`calc(${rotateY}deg + ${mouseX}deg)`;
  const combinedRotateX = useMotionTemplate`calc(${rotateX}deg + ${mouseY}deg * -1)`;

  return (
    <section 
      ref={sectionRef} 
      className="relative min-h-screen bg-black overflow-hidden py-24 flex items-center"
      onMouseMove={handleMouseMove}
    >
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Copy */}
          <div className="space-y-10 order-2 lg:order-1 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="w-12 h-[2px] bg-los-orange"></span>
                <span className="text-los-orange font-sans tracking-[0.3em] text-sm font-bold uppercase">
                  Season 2026
                </span>
              </div>
              
              <GlitchText 
                text="MANTO OFICIAL 2026"
                className="font-rama-style text-5xl sm:text-7xl md:text-8xl leading-[0.85] tracking-tighter"
              />
              
              <h3 className="text-xl md:text-2xl text-gray-400 font-sans font-light max-w-lg leading-relaxed border-l-2 border-white/10 pl-6 mt-8">
                Design exclusivo. Tecnologia de elite. <br/>
                <strong className="text-white font-medium">A pele do verdadeiro torcedor.</strong>
              </h3>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-8 pt-4"
            >
              <button className="group relative px-8 md:px-12 py-5 md:py-6 bg-white text-los-black font-rama-style text-xl md:text-2xl tracking-wider overflow-hidden hover:bg-los-orange hover:text-white transition-colors duration-300 clip-diagonal shadow-[0_0_30px_rgba(255,255,255,0.05)] hover:shadow-[0_0_40px_rgba(255,61,0,0.5)] whitespace-nowrap">
                <span className="relative flex items-center gap-4 z-10 uppercase">
                  GARANTIR A MINHA <ArrowRight size={24} />
                </span>
              </button>
              
              <div className="flex flex-col">
                <span className="text-los-orange font-bold font-rama-style text-4xl leading-none">R$ 189,90</span>
                <span className="text-gray-500 text-sm font-sans tracking-wide">3x de R$ 63,30 sem juros</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Floating Shirt Video */}
          <div className="relative h-[500px] md:h-[650px] flex items-center justify-center perspective-1000 order-1 lg:order-2">
             
             <motion.div
               style={{ 
                 rotateY: combinedRotateY, 
                 rotateX: combinedRotateX,
                 y,
                 scale,
                 opacity,
                 transformStyle: "preserve-3d"
               }}
               className="relative w-full h-full max-w-xl cursor-grab active:cursor-grabbing z-20 flex items-center justify-center"
             >
                {/* Clean Video Element */}
                <div className="relative w-full h-full flex items-center justify-center">
                  <video
                    src={SHIRT_VIDEO_URL}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-contain pointer-events-none drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
                    style={{ transform: "translateZ(20px)" }}
                  />
                </div>
             </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;