import React, { useRef, useMemo } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue, useMotionTemplate } from 'framer-motion';
import { Instagram, Youtube, Twitch, Radio, Signal, Disc } from 'lucide-react';
import { GlitchText } from './ui/GlitchText';

const INFLUENCERS = [
  {
    id: 1,
    name: "EL GATO",
    handle: "@rodrigof",
    role: "FOUNDER & VISIONARY",
    quote: "Não é sobre o jogo, é sobre o legado que deixamos.",
    image: "https://i.ibb.co/4w7Zp4wb/54607357695-cee664ceac-o.jpg",
    accent: "#FF3D00" // Orange
  },
  {
    id: 2,
    name: "LUNA",
    handle: "@luna",
    role: "CONTENT CREATOR",
    quote: "A resenha nunca para. Somos a voz da comunidade.",
    image: "https://i.ibb.co/HTd4ysR8/MG-7320-Aprimorado-NR.jpg",
    accent: "#8B5CF6" // Purple
  },
  {
    id: 3,
    name: "JULIETA",
    handle: "@julieta",
    role: "LIFESTYLE",
    quote: "Estilo e gameplay andam juntos na onda laranja.",
    image: "https://i.ibb.co/bRYgV4gG/Julieta8.jpg",
    accent: "#EC4899" // Pink
  },
  {
    id: 4,
    name: "VANQUILHA",
    handle: "@vanquilha",
    role: "VARIETY GOD",
    quote: "Do caos nasce o entretenimento puro.",
    image: "https://i.ibb.co/TBrtjZsd/Vanquilha6.jpg",
    accent: "#10B981" // Emerald
  }
];

const InfluencerSection: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: targetRef });
  
  // Smooth scroll for the horizontal movement
  const smoothProgress = useSpring(scrollYProgress, { damping: 20, stiffness: 100 });
  
  // Map vertical scroll (0 to 1) to horizontal translation (0% to -300%)
  const x = useTransform(smoothProgress, [0, 1], ["0%", "-300vw"]);

  return (
    <section ref={targetRef} className="relative h-[500vh] bg-los-black">
      
      {/* Sticky Viewport */}
      <div className="sticky top-0 h-screen overflow-hidden bg-los-black">
        
        {/* Global Broadcast Overlay UI */}
        <BroadcastOverlay />

        {/* Horizontal Moving Container */}
        <motion.div style={{ x }} className="flex h-full w-[400vw]">
          {INFLUENCERS.map((influencer, index) => (
             <InfluencerSlide 
               key={influencer.id} 
               data={influencer} 
               index={index} 
               total={INFLUENCERS.length} 
             />
          ))}
        </motion.div>

        {/* Custom Scroll Progress Bar (Video Player Style) */}
        <div className="absolute bottom-0 left-0 w-full h-2 bg-white/10 z-50">
           <motion.div 
             style={{ scaleX: scrollYProgress }}
             className="h-full bg-los-orange origin-left shadow-[0_0_20px_#FF3D00]"
           />
        </div>

      </div>
    </section>
  );
};

// --- Sub-Components ---

const InfluencerSlide: React.FC<{ data: typeof INFLUENCERS[0], index: number, total: number }> = ({ data, index }) => {
  
  // Skew effect removed as requested.

  return (
    <div className="relative w-screen h-screen flex items-center justify-center overflow-hidden border-r border-white/5">
      
      {/* Background Ambience */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
           background: `radial-gradient(circle at 70% 50%, ${data.accent} 0%, transparent 60%)`
        }}
      />
      <div className="absolute inset-0 bg-noise opacity-10 mix-blend-overlay" />

      {/* Content Grid */}
      <div className="container mx-auto px-6 h-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
         
         {/* LEFT: Text & Narrative */}
         <div className="lg:col-span-5 flex flex-col justify-center space-y-8 relative z-20 order-2 lg:order-1 pointer-events-none">
            
            {/* Massive Background Text (Depth Layer) */}
            <h2 className="absolute -top-32 -left-20 text-[20vw] lg:text-[12rem] font-display font-bold text-transparent stroke-text opacity-10 select-none whitespace-nowrap uppercase">
               {data.name}
            </h2>

            <motion.div 
               initial={{ opacity: 0, x: -50 }}
               whileInView={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.8 }}
               className="pointer-events-auto"
            >
               <div className="flex items-center gap-3 mb-4">
                  <div className="w-2 h-2 bg-los-orange animate-ping" />
                  <span className="font-mono text-xs text-los-orange tracking-widest uppercase">
                    {data.role}
                  </span>
               </div>
               
               <GlitchText 
                  text={data.name}
                  className="font-display font-bold text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-white leading-[0.85] mb-2 uppercase tracking-tight"
               />
               <p className="font-mono text-gray-500 text-xl mb-6">{data.handle}</p>

               <div className="h-px w-24 bg-gradient-to-r from-los-orange to-transparent mb-8" />

               <p className="font-sans text-2xl text-gray-200 italic font-light leading-relaxed max-w-md">
                  "{data.quote}"
               </p>
            </motion.div>

            {/* Social Stats Row */}
            <motion.div 
               className="flex gap-6 pt-8 pointer-events-auto"
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.2 }}
            >
               <SocialStat icon={Instagram} value="1.2M" label="IG" />
               <SocialStat icon={Twitch} value="850K" label="TTV" />
               <SocialStat icon={Youtube} value="2.5M" label="YT" />
            </motion.div>
         </div>

         {/* CENTER/RIGHT: Image & Stream Chat */}
         <div className="lg:col-span-7 h-[70vh] lg:h-[85vh] relative flex items-center justify-center order-1 lg:order-2">
            
            {/* The Image Wrapper - Skew Removed */}
            <div 
               className="relative w-full h-full max-w-[600px] group"
            >
               {/* Frame/Border UI */}
               <div className="absolute inset-0 border border-white/10 z-20 pointer-events-none">
                  <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-los-orange" />
                  <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-los-orange" />
               </div>

               {/* Main Image */}
               <div className="absolute inset-0 overflow-hidden bg-los-gray clip-diagonal-reverse">
                  <div className="absolute inset-0 bg-gradient-to-t from-los-black via-transparent to-transparent z-10" />
                  <motion.img 
                     src={data.image} 
                     alt={data.name}
                     initial={{ scale: 1.2, filter: "grayscale(100%)" }}
                     whileInView={{ scale: 1, filter: "grayscale(0%)" }}
                     transition={{ duration: 0.8 }}
                     className="w-full h-full object-cover"
                  />
               </div>

               {/* Simulated Stream Chat Overlay */}
               <StreamChatOverlay color={data.accent} />
            </div>
         </div>

      </div>
    </div>
  );
};

const SocialStat: React.FC<{ icon: any, value: string, label: string }> = ({ icon: Icon, value, label }) => (
   <div className="flex items-center gap-3 group cursor-pointer">
      <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 group-hover:text-los-orange group-hover:border-los-orange transition-colors">
         <Icon size={18} />
      </div>
      <div>
         <p className="font-display text-xl text-white leading-none">{value}</p>
         <p className="font-mono text-[10px] text-gray-500">{label}</p>
      </div>
   </div>
);

// --- Chat Simulator Component ---
const StreamChatOverlay: React.FC<{ color: string }> = ({ color }) => {
  const messages = useMemo(() => [
     { user: "FanClub_Los", msg: "A LENDA!! 🔥" },
     { user: "User123", msg: "Onda laranja 🧡" },
     { user: "ProGamer", msg: "Joga muito, slc" },
     { user: "Moderator", msg: "Bem-vindos à live!" },
     { user: "Los_Torcida", msg: "É O FLUXO? NÃO, É A LOS!" },
     { user: "Anon", msg: "Brabo demais" },
     { user: "Gamer_X", msg: "Manda salve!" },
     { user: "TwitchViewer", msg: "Clipa isso!" },
     { user: "LoudLover", msg: "LOS > RESTO" },
     { user: "Admin", msg: "Respeito no chat galera" },
  ], []);

  return (
     <div className="absolute bottom-6 right-6 w-64 h-[300px] z-30 pointer-events-none hidden md:block overflow-hidden rounded-xl">
        {/* Glass Background with more presence */}
        <div className="absolute inset-0 bg-black/50 backdrop-blur-md border border-white/10 rounded-xl" />
        
        {/* Top Fade Gradient */}
        <div className="absolute top-0 left-0 w-full h-12 bg-gradient-to-b from-black/80 to-transparent z-10 rounded-t-xl" />

        {/* Chat Content */}
        <div className="relative h-full flex flex-col justify-end p-4">
           <div className="space-y-2.5 overflow-hidden">
              {messages.map((m, i) => (
                 <motion.div 
                   key={i}
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ 
                      duration: 0.4, 
                      delay: i * 0.8, 
                      repeat: Infinity, 
                      repeatDelay: 8,
                      repeatType: "loop",
                      ease: "easeOut"
                   }}
                   className="text-xs font-sans text-white/90 flex flex-wrap gap-1"
                 >
                    <span style={{ color }} className="font-bold drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">{m.user}:</span>
                    <span className="drop-shadow-md text-gray-200">{m.msg}</span>
                 </motion.div>
              ))}
           </div>
           
           {/* Fake input area for realism */}
           <div className="mt-3 pt-3 border-t border-white/10 flex items-center gap-2 opacity-50">
               <div className="w-full h-2 bg-white/20 rounded-full" />
               <div className="w-4 h-4 bg-los-orange rounded-full" />
           </div>
        </div>
     </div>
  );
}

// --- Broadcast UI Overlay ---
const BroadcastOverlay: React.FC = () => {
   return (
      <div className="absolute inset-0 pointer-events-none z-40 px-6 py-6 flex flex-col justify-between">
         {/* Top Bar */}
         <div className="flex justify-between items-start">
            <div className="flex gap-2 items-center bg-black/50 backdrop-blur px-3 py-1 rounded-sm border border-white/5">
               <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse shadow-[0_0_10px_red]" />
               <span className="font-mono text-[10px] text-white tracking-widest">LIVE FEED // 4K</span>
            </div>
            
            <div className="flex gap-4">
               <div className="text-right">
                  <div className="flex items-center gap-1 justify-end text-los-orange">
                     <Signal size={14} />
                     <span className="font-mono text-[10px]">BITRATE: 6000 KBPS</span>
                  </div>
                  <div className="font-mono text-[10px] text-gray-500">LOS-OS V.2.0.4</div>
               </div>
            </div>
         </div>

         {/* Bottom Corners decoration */}
         <div className="flex justify-between items-end">
            <div className="w-16 h-16 border-b border-l border-white/20 relative">
               <div className="absolute bottom-0 left-0 w-1 h-1 bg-white" />
            </div>
            <div className="flex items-center gap-2 opacity-50">
               <Disc className="animate-spin-slow text-white" size={16} />
               <span className="font-mono text-[10px] text-white">SYSTEM ONLINE</span>
            </div>
            <div className="w-16 h-16 border-b border-r border-white/20 relative">
               <div className="absolute bottom-0 right-0 w-1 h-1 bg-white" />
            </div>
         </div>
      </div>
   );
};

export default InfluencerSection;