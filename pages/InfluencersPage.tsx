import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Instagram, Twitter, Twitch, Youtube, X, ChevronRight, Quote } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { GlitchText } from '../components/ui/GlitchText';
import { INFLUS_DATA } from '../src/data/influsData';

const InfluencersPage: React.FC = () => {
  const [selectedInflu, setSelectedInflu] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const influId = params.get('id');
    if (influId && INFLUS_DATA.find(i => i.id === influId)) {
      setSelectedInflu(influId);
    }
  }, [location]);

  const activeInflu = INFLUS_DATA.find(i => i.id === selectedInflu);

  return (
    <div className="bg-los-black min-h-screen text-white overflow-x-hidden selection:bg-los-orange selection:text-white">
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          
          {/* Submenu / Quick Access Names */}
          <nav className="hidden lg:flex items-center justify-center gap-6 mb-12 flex-wrap">
            {INFLUS_DATA.map((influ) => (
              <button 
                key={influ.id}
                onClick={() => setSelectedInflu(influ.id)}
                className={`font-mono text-[10px] font-bold tracking-[0.2em] uppercase transition-all hover:text-los-orange ${selectedInflu === influ.id ? 'text-los-orange' : 'text-white/40'}`}
              >
                {influ.name}
              </button>
            ))}
          </nav>

          {/* Page Title */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-12 h-[2px] bg-los-orange" />
              <span className="text-los-orange font-bold font-sans tracking-[0.3em] text-sm uppercase">
                Creators & Icons
              </span>
            </div>
            <GlitchText 
              text="INFLUENCIADORES" 
              className="font-display font-black text-4xl md:text-6xl text-white leading-none uppercase tracking-tighter whitespace-nowrap"
            />
          </div>

          {/* Influencers Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {INFLUS_DATA.map((influ, index) => (
              <motion.div
                key={influ.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setSelectedInflu(influ.id)}
                className="group relative aspect-[3/4] bg-los-gray overflow-hidden cursor-pointer border border-white/5 hover:border-los-orange/30 transition-all duration-500"
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img 
                    src={influ.image} 
                    alt={influ.name} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-110 opacity-60 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-los-black via-transparent to-transparent opacity-90" />
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end z-10">
                  <span className="font-mono text-[10px] font-bold text-los-orange tracking-[0.3em] uppercase mb-2 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                    {influ.category}
                  </span>
                  <h3 className="font-display font-black text-4xl md:text-5xl text-white uppercase leading-none group-hover:text-los-orange transition-colors italic">
                    {influ.name}
                  </h3>
                  
                  <div className="flex items-center gap-2 mt-4 text-white/40 opacity-0 group-hover:opacity-100 transition-all transform translate-x-[-10px] group-hover:translate-x-0">
                    <span className="font-mono text-[10px] font-bold uppercase tracking-widest">Ver História</span>
                    <ChevronRight size={14} />
                  </div>
                </div>

                {/* Frame Decor */}
                <div className="absolute inset-0 border-[10px] border-transparent group-hover:border-los-orange/5 transition-all duration-500 pointer-events-none" />
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      {/* Influencer Detail Overlay */}
      <AnimatePresence>
        {selectedInflu && activeInflu && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10"
          >
            {/* Backdrop */}
            <div 
              className="absolute inset-0 bg-los-black/98 backdrop-blur-xl"
              onClick={() => setSelectedInflu(null)}
            />

            {/* Modal Content */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0, x: 50 }}
              animate={{ scale: 1, opacity: 1, x: 0 }}
              exit={{ scale: 0.9, opacity: 0, x: 50 }}
              className="relative w-full max-w-6xl h-full max-h-[85vh] bg-los-gray border border-white/10 overflow-hidden flex flex-col md:flex-row"
            >
              {/* Left Side: Image */}
              <div className="relative w-full md:w-1/2 h-64 md:h-full bg-los-black overflow-hidden">
                <img 
                  src={activeInflu.image} 
                  className="w-full h-full object-cover grayscale opacity-50"
                  alt={activeInflu.name}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-los-gray" />
                
                <div className="absolute bottom-10 left-10">
                   <GlitchText 
                    text={activeInflu.name} 
                    className="font-display font-black text-6xl md:text-8xl text-white uppercase leading-none italic"
                  />
                </div>
              </div>

              {/* Right Side: Content */}
              <div className="flex-1 flex flex-col p-8 md:p-16 overflow-y-auto">
                <div className="flex justify-between items-start mb-12">
                  <div>
                    <span className="font-mono text-xs font-bold text-los-orange tracking-[0.4em] uppercase mb-2 block">Trajetória LOS</span>
                    <h2 className="font-display font-bold text-3xl md:text-4xl text-white uppercase tracking-tight">
                      {activeInflu.fullName}
                    </h2>
                  </div>
                  <button 
                    onClick={() => setSelectedInflu(null)}
                    className="w-12 h-12 border border-white/10 flex items-center justify-center hover:bg-los-orange hover:border-los-orange transition-all group"
                  >
                    <X size={24} className="group-hover:rotate-90 transition-transform" />
                  </button>
                </div>

                <div className="relative mb-12">
                  <Quote className="absolute -top-6 -left-6 text-los-orange/20 w-16 h-16" />
                  <p className="font-sans text-gray-300 text-lg md:text-xl leading-relaxed relative z-10 italic">
                    {activeInflu.story}
                  </p>
                </div>

                {/* Socials */}
                <div className="mt-auto pt-12 border-t border-white/5">
                  <span className="font-mono text-[10px] text-gray-500 tracking-widest uppercase mb-6 block">Conecte-se</span>
                  <div className="flex gap-6">
                    {activeInflu.socials.instagram && (
                      <a href={activeInflu.socials.instagram} target="_blank" rel="noreferrer" className="w-12 h-12 border border-white/10 flex items-center justify-center hover:text-los-orange hover:border-los-orange transition-all">
                        <Instagram size={20} />
                      </a>
                    )}
                    {activeInflu.socials.twitter && (
                      <a href={activeInflu.socials.twitter} target="_blank" rel="noreferrer" className="w-12 h-12 border border-white/10 flex items-center justify-center hover:text-los-orange hover:border-los-orange transition-all">
                        <Twitter size={20} />
                      </a>
                    )}
                    {activeInflu.socials.twitch && (
                      <a href={activeInflu.socials.twitch} target="_blank" rel="noreferrer" className="w-12 h-12 border border-white/10 flex items-center justify-center hover:text-los-orange hover:border-los-orange transition-all">
                        <Twitch size={20} />
                      </a>
                    )}
                    {activeInflu.socials.youtube && (
                      <a href={activeInflu.socials.youtube} target="_blank" rel="noreferrer" className="w-12 h-12 border border-white/10 flex items-center justify-center hover:text-los-orange hover:border-los-orange transition-all">
                        <Youtube size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Modal Decor */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-los-orange/5 -rotate-45 translate-x-12 -translate-y-12 pointer-events-none" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer Copy */}
      <footer className="py-12 border-t border-white/5 bg-los-black text-center">
        <p className="font-mono text-[10px] text-gray-600 tracking-[0.5em] uppercase">
          Los Grandes © 2025 // Creators Network
        </p>
      </footer>
    </div>
  );
};

export default InfluencersPage;
