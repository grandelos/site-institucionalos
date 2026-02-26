import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Play, Youtube, Clock, Eye, Share2, Film, Radio, ChevronRight, Zap } from 'lucide-react';
import { GlitchText } from './ui/GlitchText';

type Platform = 'youtube' | 'tiktok';

interface VideoContent {
  id: number;
  platform: Platform;
  title: string;
  thumbnail: string;
  views: string;
  date: string;
  duration?: string;
  category: string;
}

const VIDEOS: VideoContent[] = [
  {
    id: 1,
    platform: 'youtube',
    title: "VLOG: FINAL DA LBFF 2024 - BASTIDORES INÉDITOS",
    thumbnail: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2670&auto=format&fit=crop",
    views: "450K",
    date: "HÁ 2 DIAS",
    duration: "14:20",
    category: "BASTIDORES"
  },
  {
    id: 2,
    platform: 'tiktok',
    title: "O setup do @ElGato tá insano! 🔥 #LosGrandes",
    thumbnail: "https://images.unsplash.com/photo-1616583262645-0925cb736f1c?q=80&w=2574&auto=format&fit=crop",
    views: "1.2M",
    date: "HÁ 3 DIAS",
    category: "LIFESTYLE"
  },
  {
    id: 3,
    platform: 'youtube',
    title: "HIGHLIGHTS: LOS vs LOUD | VALORANT VCT",
    thumbnail: "https://images.unsplash.com/photo-1542751110-97427bbecf20?q=80&w=2684&auto=format&fit=crop",
    views: "890K",
    date: "HÁ 5 DIAS",
    duration: "08:45",
    category: "COMPETIÇÃO"
  },
  {
    id: 4,
    platform: 'tiktok',
    title: "POV: Dia de Media Day na GH 📸",
    thumbnail: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=2528&auto=format&fit=crop",
    views: "600K",
    date: "HÁ 1 SEMANA",
    category: "BASTIDORES"
  },
  {
    id: 5,
    platform: 'youtube',
    title: "DOCUMENTÁRIO: A NOVA ERA DA LOS",
    thumbnail: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2670&auto=format&fit=crop",
    views: "1.5M",
    date: "HÁ 2 SEMANAS",
    duration: "45:00",
    category: "ESPECIAL"
  },
   {
    id: 6,
    platform: 'tiktok',
    title: "Quando o drop cai longe... 😅 #FreeFire",
    thumbnail: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=2670&auto=format&fit=crop",
    views: "2.1M",
    date: "HÁ 2 SEMANAS",
    category: "FUNNY"
  }
];

const VideoSection: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  
  // Adjusted offset for perfect sticky behavior
  // The animation starts exactly when the section hits the top of the viewport
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, { damping: 20, stiffness: 80 });

  // Simple horizontal scroll mapping
  // Starts with a small left padding (5%) and scrolls to the end
  const x = useTransform(smoothProgress, [0, 1], ["0%", "-60%"]);
  
  // Parallax for background elements
  const bgX = useTransform(smoothProgress, [0, 1], ["0%", "10%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-los-black">
      
      {/* Decorative Marquee Separator */}
      {/* Increased tracking to [0.3em] and py-3 for better visual breathing room */}
      <div className="absolute top-0 left-0 w-full overflow-hidden bg-los-black/90 border-b border-los-orange/30 py-3 z-40 backdrop-blur-md">
         <motion.div 
           className="whitespace-nowrap flex gap-16 font-mono text-[10px] text-los-orange uppercase tracking-[0.3em]"
           animate={{ x: [0, -1000] }}
           transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
         >
            {Array.from({ length: 20 }).map((_, i) => (
               <span key={i} className="flex items-center gap-4 opacity-80">
                  <span className="w-1 h-1 bg-los-orange rounded-full animate-pulse" />
                  LOS GRANDES MEDIA NETWORK
                  <span className="text-white/20 mx-2">|</span>
                  LIVE BROADCAST
               </span>
            ))}
         </motion.div>
      </div>

      {/* Sticky Viewport - FORCE FULL HEIGHT AND WIDTH */}
      <div className="sticky top-0 h-screen w-full flex flex-col overflow-hidden bg-los-black">
        
        {/* Background Layer (Full Screen) */}
        <div className="absolute inset-0 z-0">
             <motion.div style={{ x: bgX }} className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></motion.div>
             <div className="absolute inset-0 bg-noise opacity-5 mix-blend-overlay" />
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,61,0,0.08),transparent_60%)]" />
        </div>

        {/* Content Container - Distributed vertically to fill space */}
        {/* Increased padding top (pt-24) to account for larger marquee */}
        <div className="relative z-10 w-full h-full flex flex-col justify-between pt-16 pb-0">
          
          {/* Header Area */}
          <div className="container mx-auto px-6 md:px-12 pt-4 shrink-0">
             <div className="flex flex-col md:flex-row justify-between items-end gap-6 border-l-2 border-los-orange/50 pl-6">
                <div>
                   <div className="flex items-center gap-2 mb-2">
                     <Radio size={14} className="text-los-orange animate-pulse" />
                     <span className="font-mono text-xs text-los-orange tracking-[0.2em] uppercase font-bold">
                       Feed Atualizado
                     </span>
                   </div>
                   
                   <GlitchText 
                     text="NOSSOS ÚLTIMOS VÍDEOS"
                     className="font-display font-bold text-3xl md:text-5xl lg:text-6xl text-white leading-[0.9] tracking-tight uppercase"
                   />
                </div>
                
                <p className="text-gray-400 font-sans max-w-sm text-sm md:text-base mb-2">
                   Bastidores exclusivos, competições e momentos que definem nossa história.
                </p>
             </div>
          </div>

          {/* The Horizontal Video Stream - Centered in remaining space */}
          <div className="flex-1 flex items-center w-full overflow-hidden py-8">
             <motion.div style={{ x }} className="flex gap-6 md:gap-12 items-center w-max pl-[10vw] pr-[10vw]">
                {VIDEOS.map((video, index) => (
                  <VideoCard key={video.id} video={video} index={index} />
                ))}
                
                {/* "View All" CTA Card */}
                <a href="#" className="group relative shrink-0 w-[300px] h-[300px] flex flex-col items-center justify-center border border-white/5 hover:border-los-orange/50 bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-300 rounded-lg">
                   <div className="w-20 h-20 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-los-orange group-hover:border-los-orange transition-all duration-300 group-hover:scale-110 mb-4">
                      <ChevronRight size={32} className="text-white ml-1" />
                   </div>
                   <span className="font-display font-bold text-2xl text-white group-hover:text-los-orange transition-colors uppercase">
                      VER CANAL COMPLETO
                   </span>
                   <span className="font-mono text-xs text-gray-500 mt-2">YOUTUBE.COM/LOSGRANDES</span>
                </a>
             </motion.div>
          </div>

          {/* Bottom Control Bar - Fixed at bottom of container */}
          <div className="w-full border-t border-white/5 bg-black/80 backdrop-blur-md py-4 px-6 md:px-12 flex justify-between items-center shrink-0 relative z-20">
             
             <div className="flex items-center gap-6 w-full md:w-1/2">
                <div className="flex items-center gap-2 text-los-orange">
                   <Play size={14} fill="currentColor" />
                   <span className="font-mono text-[10px] font-bold">TIMELINE</span>
                </div>
                <div className="w-full h-[2px] bg-white/10 relative overflow-hidden rounded-full">
                   <motion.div 
                      style={{ scaleX: scrollYProgress }}
                      className="absolute top-0 left-0 h-full w-full bg-los-orange origin-left"
                   />
                </div>
             </div>

             <div className="flex gap-8 items-center hidden md:flex">
                <div className="text-right">
                   <span className="block font-mono text-[10px] text-gray-500 uppercase">Total Views</span>
                   <span className="block font-display font-bold text-lg text-white">12.4M</span>
                </div>
                <div className="h-6 w-px bg-white/10" />
                <div className="text-right">
                   <span className="block font-mono text-[10px] text-gray-500 uppercase">Subscribers</span>
                   <span className="block font-display font-bold text-lg text-white">3.2M</span>
                </div>
             </div>

          </div>

        </div>
      </div>
    </section>
  );
};

const VideoCard: React.FC<{ video: VideoContent; index: number }> = ({ video, index }) => {
  const isYoutube = video.platform === 'youtube';
  
  // Adjusted dimensions to ensure they fit within the viewport height
  const widthClass = isYoutube ? "w-[65vw] md:w-[500px]" : "w-[35vw] md:w-[260px]";
  const aspectRatioClass = isYoutube ? "aspect-video" : "aspect-[9/16]";
  const iconColor = isYoutube ? "text-red-500" : "text-cyan-400";

  return (
    <motion.div 
       className={`relative shrink-0 ${widthClass} group cursor-pointer`}
       initial={{ opacity: 0.5, scale: 0.95 }}
       whileInView={{ opacity: 1, scale: 1 }}
       transition={{ duration: 0.5 }}
       viewport={{ once: false, margin: "-10% 0px -10% 0px" }}
    >
       {/* Card Container */}
       <div className={`relative ${aspectRatioClass} bg-los-gray overflow-hidden border border-white/10 group-hover:border-los-orange/50 transition-all duration-500 shadow-2xl`}>
          
          {/* Thumbnail Image */}
          <div className="absolute inset-0">
             <img 
               src={video.thumbnail} 
               alt={video.title} 
               className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-75 group-hover:brightness-100"
             />
             
             {/* Play Button Overlay */}
             <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-16 h-16 rounded-full bg-los-orange/90 backdrop-blur-md flex items-center justify-center shadow-[0_0_30px_rgba(255,61,0,0.5)] transform scale-75 group-hover:scale-100 transition-transform">
                   <Play fill="white" className="text-white ml-1 w-6 h-6" />
                </div>
             </div>
          </div>

          {/* Badges */}
          <div className="absolute top-4 left-4 z-20 flex flex-wrap gap-2">
             <span className="text-[10px] font-bold font-mono uppercase text-black bg-white/90 backdrop-blur px-2 py-1 shadow-sm">
                {video.category}
             </span>
             {isYoutube && (
                <span className="text-[10px] font-bold font-mono text-white bg-black/60 backdrop-blur px-2 py-1 border border-white/20">
                   {video.duration}
                </span>
             )}
          </div>

          <div className="absolute top-4 right-4 z-20">
             <div className={`p-2 bg-black/80 backdrop-blur rounded-full border border-white/10 ${iconColor}`}>
                {isYoutube ? <Youtube size={16} /> : <Film size={16} />}
             </div>
          </div>
       </div>

       {/* Video Info */}
       <div className="mt-4 px-1 group-hover:translate-x-1 transition-transform duration-300">
          <div className="flex items-center gap-3 text-xs font-mono text-gray-500 mb-2">
             <span className="flex items-center gap-1 text-los-orange"><Clock size={12} /> {video.date}</span>
             <span className="w-1 h-1 bg-gray-700 rounded-full" />
             <span className="flex items-center gap-1"><Eye size={12} /> {video.views}</span>
          </div>
          
          <h3 className="font-display font-bold text-lg md:text-xl text-white uppercase leading-none group-hover:text-los-orange transition-colors duration-300 line-clamp-2">
             {video.title}
          </h3>
       </div>
    </motion.div>
  );
};

export default VideoSection;