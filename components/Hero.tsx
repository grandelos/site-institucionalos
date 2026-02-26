import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Play, X, Instagram, Twitter, Twitch } from 'lucide-react';
import { HERO_SLIDES } from '../constants';

const Hero: React.FC = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const currentData = HERO_SLIDES[0];

  // Animation Variants for Staggered Entrance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } // Custom cubic-bezier for snappy yet smooth feel
    }
  };

  return (
    <section className="relative w-full h-screen overflow-hidden bg-los-black">
      
      {/* --- FLASH INTRO EFFECT --- */}
      <motion.div 
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute inset-0 bg-white z-50 pointer-events-none"
      />

      {/* --- BACKGROUND LAYER (Static) --- */}
      <div className="absolute inset-0 z-0">
        {/* Main Image - Slow Cinematic Zoom */}
        <motion.img 
          initial={{ scale: 1.15 }}
          animate={{ scale: 1.05 }}
          transition={{ duration: 15, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
          src={currentData.image} 
          alt={currentData.alt}
          className="w-full h-full object-cover"
          style={{ objectPosition: currentData.objectPosition || 'center' }}
        />
        
        {/* Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-los-black via-los-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-los-black/80" />
        
        {/* Texture */}
        <div className="absolute inset-0 bg-noise opacity-[0.12] mix-blend-overlay pointer-events-none" />
      </div>

      {/* --- HUD / DECORATIVE UI ELEMENTS --- */}
      <div className="absolute inset-0 z-10 pointer-events-none px-6 py-6 md:px-12 md:py-12">
         {/* Top Corners */}
         <motion.div 
            initial={{ opacity: 0, x: -20, y: -20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute top-8 left-8 w-12 h-12 border-t-2 border-l-2 border-white/20" 
         />
         <motion.div 
            initial={{ opacity: 0, x: 20, y: -20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute top-8 right-8 w-12 h-12 border-t-2 border-r-2 border-white/20" 
         />
         
         {/* Side Decor */}
         <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="absolute left-6 top-1/2 -translate-y-1/2 flex flex-col gap-2"
         >
            <div className="w-1 h-2 bg-los-orange" />
            <div className="w-1 h-2 bg-white/20" />
            <div className="w-1 h-2 bg-white/20" />
         </motion.div>
      </div>

      {/* --- CONTENT CONTAINER --- */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-20 container mx-auto px-6 h-full flex flex-col justify-center pt-24 pb-12"
      >
        <div className="max-w-7xl relative text-center mx-auto w-full">
          
          {/* Category Tag */}
          <motion.div variants={itemVariants} className="overflow-hidden mb-4 md:mb-6 flex justify-center relative z-30">
            <div className="flex items-center gap-4">
              <div className="h-px w-6 bg-los-orange/50 hidden md:block" />
              <div className="relative">
                <div className="absolute -inset-1 bg-los-orange/20 blur-sm rounded-sm" />
                <span className="relative text-los-orange font-mono font-bold tracking-[0.4em] text-xs md:text-sm lg:text-base uppercase bg-los-black/90 backdrop-blur-md px-6 py-2 border border-los-orange/40 shadow-[0_0_20px_rgba(255,61,0,0.3)] block whitespace-nowrap">
                  {currentData.category}
                </span>
              </div>
              <div className="h-px w-6 bg-los-orange/50 hidden md:block" />
            </div>
          </motion.div>

          {/* Main Headline with SEAMLESS LOOPING Animation */}
          <div className="flex flex-col items-center relative z-20 mb-8 md:mb-12">
             <motion.h2 
                variants={itemVariants}
                animate={{ 
                  letterSpacing: ["0.1em", "0.25em", "0.1em"],
                }}
                transition={{
                  duration: 5,
                  ease: "easeInOut",
                  repeat: Infinity,
                }}
                className="font-display font-black text-4xl md:text-6xl lg:text-7xl text-white uppercase text-center drop-shadow-2xl will-change-transform"
             >
                WE ARE CHAMPIONS
             </motion.h2>

             {/* Animated Line Below Text */}
             <motion.div
                initial={{ width: "0px", opacity: 0 }}
                animate={{ 
                    width: ["120px", "360px", "120px"],
                    opacity: 1
                }}
                transition={{
                    duration: 5,
                    ease: "easeInOut",
                    repeat: Infinity,
                }}
                className="h-1.5 bg-los-orange mt-6 shadow-[0_0_15px_rgba(255,61,0,0.5)]"
             />
          </div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center gap-6 pt-4 justify-center"
          >
             <button className="group relative px-10 py-5 bg-los-orange text-white overflow-hidden clip-diagonal shadow-[0_0_20px_rgba(255,61,0,0.3)] hover:shadow-[0_0_50px_rgba(255,61,0,0.6)] transition-all transform hover:-translate-y-1 whitespace-nowrap">
                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
                <span className="relative font-display font-bold text-xl tracking-wide flex items-center gap-3 group-hover:text-los-black transition-colors uppercase">
                  JUNTE-SE À ONDA <ArrowRight size={20} />
                </span>
             </button>
             
             <button 
                onClick={() => setIsVideoOpen(true)}
                className="flex items-center gap-4 group text-white hover:text-los-orange transition-colors whitespace-nowrap"
             >
                <div className="relative w-14 h-14 flex items-center justify-center">
                   <div className="absolute inset-0 border border-white/30 rounded-full group-hover:border-los-orange transition-colors" />
                   <div className="absolute inset-0 border border-white/10 rounded-full animate-ping opacity-0 group-hover:opacity-50" />
                   <Play size={20} fill="currentColor" className="ml-1 relative z-10" />
                </div>
                <span className="font-display font-bold text-lg tracking-wider uppercase group-hover:underline decoration-los-orange underline-offset-4 decoration-2">
                   ASSISTIR TRAILER
                </span>
             </button>
          </motion.div>
        </div>
      </motion.div>

      {/* --- SOCIAL SIDEBAR --- */}
      <motion.div 
         initial={{ opacity: 0, x: -20 }}
         animate={{ opacity: 1, x: 0 }}
         transition={{ delay: 1.5, duration: 1 }}
         className="absolute left-6 md:left-12 top-1/2 -translate-y-1/2 z-30 hidden lg:flex flex-col gap-8 items-center"
      >
         <div className="w-px h-20 bg-gradient-to-b from-transparent to-white/30" />
         <a href="#" className="text-gray-400 hover:text-los-orange hover:scale-125 transition-all"><Instagram size={20} /></a>
         <a href="#" className="text-gray-400 hover:text-los-orange hover:scale-125 transition-all"><Twitter size={20} /></a>
         <a href="#" className="text-gray-400 hover:text-los-orange hover:scale-125 transition-all"><Twitch size={20} /></a>
         <div className="w-px h-20 bg-gradient-to-t from-transparent to-white/30" />
      </motion.div>

      {/* --- SCROLL INDICATOR --- */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-white/50 animate-bounce-slow opacity-0 md:opacity-100">
         <span className="text-[10px] font-mono tracking-widest uppercase">Scroll Down</span>
         <div className="w-px h-8 bg-gradient-to-b from-los-orange to-transparent" />
      </div>

      {/* --- VIDEO MODAL --- */}
      <AnimatePresence>
         {isVideoOpen && (
            <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               exit={{ opacity: 0 }}
               className="fixed inset-0 z-[60] bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 md:p-20"
               onClick={() => setIsVideoOpen(false)}
            >
               <div className="absolute top-6 right-6">
                  <button className="text-white hover:text-los-orange transition-colors">
                     <X size={48} />
                  </button>
               </div>
               
               <motion.div 
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  className="w-full max-w-6xl aspect-video bg-black shadow-[0_0_50px_rgba(255,61,0,0.2)] border border-white/10 relative"
                  onClick={(e) => e.stopPropagation()}
               >
                  <iframe 
                     width="100%" 
                     height="100%" 
                     src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" 
                     title="YouTube video player" 
                     frameBorder="0" 
                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                     allowFullScreen
                     className="absolute inset-0"
                  ></iframe>
               </motion.div>
            </motion.div>
         )}
      </AnimatePresence>

    </section>
  );
};

export default Hero;