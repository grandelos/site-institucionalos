import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Flag, Trophy, Zap, Globe, Target, ChevronRight } from 'lucide-react';
import { GlitchText } from './ui/GlitchText';

const TIMELINE_DATA = [
  {
    year: "2018",
    title: "A ORIGEM",
    icon: Flag,
    description: "Tudo começa com uma visão. Rodrigo Fernandes, o El Gato, transforma uma guilda de amigos em uma organização profissional. Nasce a Los Grandes."
  },
  {
    year: "2020",
    title: "A CONSOLIDAÇÃO",
    icon: Trophy,
    description: "O reconhecimento vem com glória. Conquistamos a Copa Nobru, a NFA Ultimate e expandimos fronteiras com a Liga das Américas."
  },
  {
    year: "2022",
    title: "A EVOLUÇÃO (LOS)",
    icon: Zap,
    description: "Um salto estratégico. Adquirimos a Team oNe. O rebranding define nossa nova identidade: somos LOS. Uma só força, várias modalidades."
  },
  {
    year: "2023",
    title: "IMPACTO GLOBAL",
    icon: Globe,
    description: "O mundo nos assiste. Chegamos ao vice-campeonato no Major de Atlanta (R6), reafirmando nossa competitividade em nível global."
  },
  {
    year: "2024+",
    title: "A NOVA ERA",
    icon: Target,
    description: "Com a chegada da SPUN, iniciamos o capítulo mais ambicioso. Títulos no Valorant, FF Mobile e a criação do ecossistema EZOR."
  }
];

const HistorySection: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress of the section
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Transform vertical scroll into horizontal movement
  // Mapping 0-1 (vertical progress) to a horizontal translation
  // We start slightly right (10%) and move left until the last card is visible (-85%)
  const x = useTransform(scrollYProgress, [0, 1], ["20%", "-85%"]);
  
  // Parallax background text effect
  const textX = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);

  return (
    // The container height (300vh) determines the speed/duration of the scroll effect
    <section ref={targetRef} className="relative h-[300vh] bg-los-black">
      
      {/* Sticky Container - Stays fixed while parent scrolls */}
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        
        {/* Background Ambient Effects */}
        <div className="absolute inset-0 z-0 pointer-events-none">
           <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-los-orange/5 rounded-full blur-[120px] -translate-y-1/2" />
           <div className="absolute bottom-0 right-0 w-[600px] h-[400px] bg-blue-900/5 rounded-full blur-[120px]" />
           <div className="absolute inset-0 bg-noise opacity-10 mix-blend-overlay" />
        </div>

        {/* Parallax Background Text */}
        <motion.div 
          style={{ x: textX, opacity }}
          className="absolute top-1/4 left-0 whitespace-nowrap z-0 pointer-events-none"
        >
          <span className="font-display font-bold text-[20vw] text-white/[0.03] leading-none select-none uppercase">
            LEGACY OF LOS
          </span>
        </motion.div>

        {/* Horizontal Moving Content */}
        <motion.div style={{ x }} className="flex gap-16 px-12 md:px-24 items-center z-10">
          
          {/* Intro Card / Title Area - First item in the horizontal scroll */}
          <div className="shrink-0 w-[80vw] md:w-[40vw] flex flex-col justify-center pr-12">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-12 h-[2px] bg-los-orange" />
              <span className="text-los-orange font-bold font-sans tracking-[0.3em] text-sm uppercase">
                NOSSA TRAJETÓRIA
              </span>
            </div>
            
            <GlitchText 
              text="DO ZERO AO TOPO DO MUNDO" 
              className="font-display font-bold text-4xl sm:text-6xl md:text-8xl text-white mb-8 leading-[0.9] uppercase tracking-tight"
            />
            
            <p className="text-gray-400 font-sans text-lg md:text-xl max-w-md mb-8 border-l-2 border-white/20 pl-6">
              Role para navegar pela história da organização que redefiniu o cenário de esports na América Latina.
            </p>

            <div className="flex items-center gap-2 text-white/50 animate-pulse">
               <span className="text-sm font-mono">SCROLL</span>
               <div className="w-px h-12 bg-gradient-to-b from-los-orange to-transparent"></div>
            </div>
          </div>

          {/* Timeline Cards */}
          {TIMELINE_DATA.map((item, index) => (
            <TimelineCard key={index} data={item} index={index} total={TIMELINE_DATA.length} />
          ))}
          
          {/* End Spacer */}
          <div className="shrink-0 w-[20vw]" />
        </motion.div>
        
        {/* Progress Bar (Bottom) */}
        <div className="absolute bottom-10 left-10 right-10 h-[2px] bg-white/10 z-20">
            <motion.div 
              style={{ scaleX: scrollYProgress }}
              className="h-full bg-los-orange origin-left shadow-[0_0_10px_#FF3D00]"
            />
        </div>

      </div>
    </section>
  );
};

const TimelineCard: React.FC<{ data: typeof TIMELINE_DATA[0], index: number, total: number }> = ({ data, index, total }) => {
  return (
    <div className="group relative shrink-0 w-[85vw] md:w-[600px] h-[50vh] md:h-[400px]">
      
      {/* Connecting Line (Horizontal) */}
      <div className="absolute top-12 left-0 w-full h-[2px] bg-white/10 -z-10 group-hover:bg-white/20 transition-colors duration-500">
         {index !== total - 1 && (
            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-0">
               <ChevronRight className="text-white/10 w-8 h-8" />
            </div>
         )}
      </div>

      {/* Card Structure */}
      <div className="relative h-full flex flex-col">
        
        {/* Node on the line */}
        <div className="absolute top-12 left-8 w-4 h-4 -translate-y-1/2 bg-los-black border-2 border-los-orange rounded-full z-20 shadow-[0_0_15px_rgba(255,61,0,0.6)] group-hover:scale-150 transition-transform duration-300"></div>
        
        {/* Card Content Box */}
        <div className="mt-20 h-full bg-los-black/40 backdrop-blur-md border border-white/10 p-8 md:p-12 hover:border-los-orange hover:bg-white/[0.03] transition-all duration-500 flex flex-col justify-between group-hover:-translate-y-2">
            
            {/* Header */}
            <div>
              <div className="flex items-center justify-between mb-6">
                 <div className="flex items-center gap-4">
                    <div className="p-3 bg-white/5 rounded-sm text-los-orange group-hover:text-white group-hover:bg-los-orange transition-colors duration-300">
                      <data.icon size={28} />
                    </div>
                    <span className="font-display font-bold text-5xl md:text-6xl text-white/20 group-hover:text-white transition-colors duration-300">
                      {data.year}
                    </span>
                 </div>
              </div>

              <h3 className="text-3xl text-white font-display font-bold uppercase tracking-wide mb-4 group-hover:text-los-orange transition-colors">
                {data.title}
              </h3>
              
              <p className="text-gray-400 font-sans text-base md:text-lg leading-relaxed group-hover:text-gray-300 transition-colors">
                {data.description}
              </p>
            </div>

            {/* Decoration */}
            <div className="w-full h-1 bg-gradient-to-r from-los-orange to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
      </div>
    </div>
  );
};

export default HistorySection;