import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Plus, X, BarChart3, Users, ChevronRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { GlitchText } from '../components/ui/GlitchText';
import { SQUADS_DATA } from '../src/data/squadsData';

const SquadsPage: React.FC = () => {
  const [selectedGame, setSelectedGame] = useState<string | null>(null);
  const location = useLocation();

  // Handle direct navigation to a specific squad via hash or query if needed
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const squadId = params.get('id');
    if (squadId && SQUADS_DATA.find(s => s.id === squadId)) {
      setSelectedGame(squadId);
    }
  }, [location]);

  const activeSquad = SQUADS_DATA.find(s => s.id === selectedGame);

  return (
    <div className="bg-los-black min-h-screen text-white overflow-x-hidden selection:bg-los-orange selection:text-white">
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          
          {/* Submenu / Quick Access */}
          <nav className="hidden lg:flex items-center justify-center gap-8 mb-12">
            {SQUADS_DATA.map((squad) => (
              <button 
                key={squad.id}
                onClick={() => setSelectedGame(squad.id)}
                className={`font-mono text-[10px] font-bold tracking-[0.3em] uppercase transition-all hover:text-los-orange ${selectedGame === squad.id ? 'text-los-orange' : 'text-white/40'}`}
              >
                {squad.game}
              </button>
            ))}
          </nav>

          {/* Page Title */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-12 h-[2px] bg-los-orange" />
              <span className="text-los-orange font-bold font-sans tracking-[0.3em] text-sm uppercase">
                Elite Squads
              </span>
            </div>
            <GlitchText 
              text="NOSSAS LINE-UPS" 
              className="font-display font-black text-4xl md:text-6xl text-white leading-none uppercase tracking-tighter whitespace-nowrap"
            />
          </div>

          {/* Games Grid (Frames) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SQUADS_DATA.map((squad, index) => (
              <motion.div
                key={squad.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setSelectedGame(squad.id)}
                className="group relative aspect-[16/10] bg-los-gray overflow-hidden cursor-pointer border border-white/10 hover:border-los-orange/50 transition-all duration-500"
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img 
                    src={squad.image} 
                    alt={squad.game} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-110 opacity-40 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-los-black via-los-black/20 to-transparent" />
                </div>

                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
                  <div className="flex justify-between items-start">
                    <div className="p-3 bg-los-orange/10 border border-los-orange/20 text-los-orange group-hover:bg-los-orange group-hover:text-white transition-all">
                      <squad.icon size={24} />
                    </div>
                    <span className="font-mono text-[10px] font-bold text-white/40 group-hover:text-white transition-colors uppercase tracking-widest">
                      {squad.players.length} Players
                    </span>
                  </div>

                  <div>
                    <h3 className="font-display font-bold text-3xl md:text-4xl text-white uppercase leading-none group-hover:text-los-orange transition-colors">
                      {squad.game}
                    </h3>
                    <div className="flex items-center gap-2 mt-4 text-los-orange opacity-0 group-hover:opacity-100 transition-all transform translate-x-[-10px] group-hover:translate-x-0">
                      <span className="font-mono text-[10px] font-bold uppercase tracking-widest">Ver Line-up</span>
                      <ChevronRight size={14} />
                    </div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-12 h-12 border-t border-r border-white/10 group-hover:border-los-orange/50 transition-colors" />
                <div className="absolute bottom-0 left-0 w-12 h-12 border-b border-l border-white/10 group-hover:border-los-orange/50 transition-colors" />
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      {/* Player Detail Overlay (Modal-like) */}
      <AnimatePresence>
        {selectedGame && activeSquad && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10"
          >
            {/* Backdrop */}
            <div 
              className="absolute inset-0 bg-los-black/95 backdrop-blur-md"
              onClick={() => setSelectedGame(null)}
            />

            {/* Modal Content */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-7xl h-full max-h-[90vh] bg-los-gray border border-white/10 overflow-hidden flex flex-col"
            >
              {/* Modal Header */}
              <div className="p-6 md:p-10 border-b border-white/5 flex justify-between items-center bg-los-black/50">
                <div className="flex items-center gap-6">
                  <div className="p-4 bg-los-orange text-white">
                    <activeSquad.icon size={32} />
                  </div>
                  <div>
                    <span className="font-mono text-xs font-bold text-los-orange tracking-widest uppercase mb-1 block">Line-up Oficial</span>
                    <h2 className="font-display font-black text-3xl md:text-5xl text-white uppercase leading-none">
                      {activeSquad.game}
                    </h2>
                  </div>
                </div>
                <button 
                  onClick={() => setSelectedGame(null)}
                  className="w-12 h-12 border border-white/10 flex items-center justify-center hover:bg-los-orange hover:border-los-orange transition-all group"
                >
                  <X size={24} className="group-hover:rotate-90 transition-transform" />
                </button>
              </div>

              {/* Players Scroll Area */}
              <div className="flex-1 overflow-y-auto p-6 md:p-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                  {activeSquad.players.map((player, idx) => (
                    <motion.div
                      key={player.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="group relative aspect-[3/4] bg-los-black overflow-hidden border border-white/5 hover:border-los-orange/50 transition-all"
                    >
                      <img 
                        src={player.image} 
                        alt={player.nick} 
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-los-black via-transparent to-transparent opacity-80" />
                      
                      <div className="absolute inset-0 p-6 flex flex-col justify-end">
                        <span className="bg-white text-black font-mono text-[10px] font-bold px-2 py-1 uppercase tracking-widest self-start mb-4">
                          {player.role}
                        </span>
                        <h3 className="font-display font-bold text-4xl text-white italic leading-none group-hover:text-los-orange transition-colors">
                          {player.nick}
                        </h3>
                        <p className="font-sans text-gray-500 text-xs uppercase tracking-widest mt-2">
                          {player.name}
                        </p>
                        
                        <div className="h-0 overflow-hidden group-hover:h-auto group-hover:mt-4 transition-all duration-300">
                          <div className="flex items-center gap-2 text-white/60 font-mono text-[10px]">
                            <BarChart3 size={12} className="text-los-orange" />
                            <span>PRO PLAYER</span>
                            <span className="text-white/20">|</span>
                            <span>SQUAD 2025</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="absolute top-2 right-2 text-los-orange opacity-0 group-hover:opacity-100 transition-opacity">
                        <Plus size={12} />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Modal Footer Decor */}
              <div className="p-4 bg-los-black border-t border-white/5 flex justify-center">
                <span className="font-mono text-[10px] text-white/20 tracking-[1em] uppercase">
                  Los Grandes // Squad Database
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer Copy */}
      <footer className="py-12 border-t border-white/5 bg-los-black text-center">
        <p className="font-mono text-[10px] text-gray-600 tracking-[0.5em] uppercase">
          Los Grandes © 2025 // Elite Performance
        </p>
      </footer>
    </div>
  );
};

export default SquadsPage;
