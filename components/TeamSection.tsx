import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Crosshair, Swords, Smartphone, BarChart3, Plus } from 'lucide-react';
import { GlitchText } from './ui/GlitchText';

const TEAMS_DATA = {
  "FREE FIRE": [
    { id: 1, nick: "MTSEXY", name: "Gabriel Santos", role: "RUSH", image: "https://i.ibb.co/q4Px8xH/los-midiaday-luqueta-tm-10-54631454619-l.jpg" },
    { id: 2, nick: "RAONE7", name: "Lucas Silva", role: "CAPITÃO", image: "https://i.ibb.co/GSMdwcy/los-midiaday-luqueta-tm-18-54631454364-l.jpg" },
    { id: 3, nick: "JAYA", name: "Matheus Oliveira", role: "GRANADEIRO", image: "https://i.ibb.co/rG1ZnV1K/los-midiaday-luqueta-tm-39-54631453424-l.jpg" },
    { id: 4, nick: "RIGBY245", name: "Bruno Costa", role: "RUSH", image: "https://i.ibb.co/gFMFF4Lk/los-midiaday-luqueta-tm-52-54631469198-l.jpg" },
  ],
  "RAINBOW SIX": [
    { id: 5, nick: "MAESTRO", name: "Rafael Lima", role: "IGL", image: "https://images.unsplash.com/photo-1542751110-97427bbecf20?q=80&w=2684&auto=format&fit=crop" },
    { id: 6, nick: "VIPER", name: "André Souza", role: "ENTRY", image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2670&auto=format&fit=crop" },
    { id: 7, nick: "SHIELD", name: "Pedro Alves", role: "SUPORTE", image: "https://images.unsplash.com/photo-1533174072545-e8d4aa97edf9?q=80&w=2670&auto=format&fit=crop" },
    { id: 8, nick: "ECHO", name: "Felipe Martins", role: "ROAMER", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2574&auto=format&fit=crop" },
  ],
  "LEAGUE OF LEGENDS": [
    { id: 10, nick: "STORM", name: "Leonardo Pereira", role: "TOP", image: "https://cdn1.epicgames.com/offer/24b9b5e323bc40eea252a10cdd3b2f10/EGS_LeagueofLegends_RiotGames_S1_2560x1440-47eb328eac5ddd63ebd096ded7d0d5ab" },
    { id: 11, nick: "KING", name: "Ricardo Mendes", role: "JUNGLE", image: "https://cdn1.epicgames.com/offer/24b9b5e323bc40eea252a10cdd3b2f10/EGS_LeagueofLegends_RiotGames_S1_2560x1440-47eb328eac5ddd63ebd096ded7d0d5ab" },
    { id: 12, nick: "MIDGOD", name: "Thiago Ferreira", role: "MID", image: "https://cdn1.epicgames.com/offer/24b9b5e323bc40eea252a10cdd3b2f10/EGS_LeagueofLegends_RiotGames_S1_2560x1440-47eb328eac5ddd63ebd096ded7d0d5ab" },
    { id: 13, nick: "CARRY", name: "Vinicius Dias", role: "ADC", image: "https://cdn1.epicgames.com/offer/24b9b5e323bc40eea252a10cdd3b2f10/EGS_LeagueofLegends_RiotGames_S1_2560x1440-47eb328eac5ddd63ebd096ded7d0d5ab" },
  ],
  "VALORANT": [
    { id: 14, nick: "JETT", name: "Lucas Almeida", role: "DUELIST", image: "https://images.unsplash.com/photo-1542751110-97427bbecf20?q=80&w=2684&auto=format&fit=crop" },
    { id: 15, nick: "SOVA", name: "Pedro Santos", role: "INITIATOR", image: "https://images.unsplash.com/photo-1566577739112-5180d4bf9390?q=80&w=2526&auto=format&fit=crop" },
    { id: 16, nick: "OMEN", name: "Marcos Silva", role: "CONTROLLER", image: "https://images.unsplash.com/photo-1624138784181-dc7f5b75e52e?q=80&w=2670&auto=format&fit=crop" },
    { id: 17, nick: "SAGE", name: "Felipe Costa", role: "SENTINEL", image: "https://images.unsplash.com/photo-1595231712325-9fdec6f6d9d3?q=80&w=2574&auto=format&fit=crop" },
  ],
  "CS2": [
    { id: 18, nick: "AWPER", name: "Gabriel Lima", role: "SNIPER", image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2670&auto=format&fit=crop" },
    { id: 19, nick: "RIFLER", name: "André Souza", role: "ENTRY", image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2670&auto=format&fit=crop" },
    { id: 20, nick: "IGL", name: "Pedro Alves", role: "CAPITÃO", image: "https://images.unsplash.com/photo-1533174072545-e8d4aa97edf9?q=80&w=2670&auto=format&fit=crop" },
    { id: 21, nick: "SUPPORT", name: "Felipe Martins", role: "SUPORTE", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2574&auto=format&fit=crop" },
  ]
};

const CATEGORIES = [
  { id: "FREE FIRE", icon: Smartphone, label: "FREE FIRE" },
  { id: "RAINBOW SIX", icon: Crosshair, label: "RAINBOW SIX" },
  { id: "LEAGUE OF LEGENDS", icon: Swords, label: "LEAGUE OF LEGENDS" },
  { id: "VALORANT", icon: Crosshair, label: "VALORANT" },
  { id: "CS2", icon: Crosshair, label: "CS2" },
];

const TeamSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<keyof typeof TEAMS_DATA>("FREE FIRE");

  return (
    <section className="relative py-32 bg-los-black overflow-hidden">
      
      {/* Background with Halftone and Noise */}
      <div className="absolute inset-0 bg-los-gray z-0">
        <div className="absolute inset-0 opacity-5 bg-halftone bg-[length:10px_10px]" />
        <div className="absolute inset-0 bg-noise opacity-10 mix-blend-overlay" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
          <div className="space-y-2 relative group isolate">
             {/* Moving Pixel Background Animation */}
             <div className="absolute -inset-x-12 -inset-y-8 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden pointer-events-none">
                <motion.div 
                  className="grid grid-cols-12 gap-4 opacity-20"
                  animate={{ y: [0, -20] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                >
                   {Array.from({ length: 48 }).map((_, i) => (
                      <div
                        key={i}
                        className={`w-2 h-2 bg-los-orange rounded-[1px] ${Math.random() > 0.5 ? 'opacity-100' : 'opacity-0'}`}
                      />
                   ))}
                </motion.div>
             </div>

             <div className="flex items-center gap-3">
                <span className="w-8 h-[2px] bg-los-orange" />
                <span className="text-los-orange font-bold font-sans tracking-[0.2em] text-xs uppercase">
                  Elite Squads
                </span>
             </div>
             
             <GlitchText 
                text="LINE-UPS" 
                className="font-rama-style text-4xl sm:text-6xl text-white leading-none tracking-tight"
             />
          </div>
          
          {/* Tab Selector */}
          <div className="flex flex-nowrap gap-2 md:gap-4 justify-start overflow-x-auto max-w-full pb-2 no-scrollbar w-full">
             {CATEGORIES.map((cat) => (
                <button
                   key={cat.id}
                   onClick={() => setActiveTab(cat.id as keyof typeof TEAMS_DATA)}
                   className={`
                      px-6 py-2 font-rama-style text-xl tracking-wide uppercase transition-all duration-300 border skew-x-[-15deg] whitespace-nowrap flex-shrink-0
                      ${activeTab === cat.id ? 'bg-los-orange border-los-orange text-white' : 'bg-transparent border-white/20 text-gray-400 hover:text-white hover:border-white'}
                   `}
                >
                   <div className="skew-x-[15deg] flex items-center gap-2">
                      <cat.icon size={18} />
                      {cat.label}
                   </div>
                </button>
             ))}
          </div>
        </div>

        {/* Players Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          <AnimatePresence mode="popLayout">
            {TEAMS_DATA[activeTab].map((player, index) => (
              <PlayerCard key={player.id} player={player} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};

// Simplified but punchy Card Design matching "Game Day" aesthetic
const PlayerCard: React.FC<{ player: any, index: number }> = ({ player, index }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      className="group relative h-[500px] w-full bg-los-black cursor-pointer overflow-hidden border border-white/10 hover:border-los-orange/50 transition-colors"
    >
      {/* Background Image - Grayscale default, Color on Hover */}
      <div className="absolute inset-0">
         <img 
            src={player.image} 
            alt={player.nick} 
            className="w-full h-full object-cover filter grayscale contrast-125 group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-110"
         />
         {/* Gradient Overlay */}
         <div className="absolute inset-0 bg-gradient-to-t from-los-black via-transparent to-transparent opacity-90" />
         
         {/* Orange Overlay on Hover */}
         <div className="absolute inset-0 bg-los-orange/20 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 p-6 flex flex-col justify-between z-10">
         {/* Top Label */}
         <div className="self-end">
            <span className="bg-white text-black font-mono text-[10px] font-bold px-2 py-1 uppercase tracking-widest">
               {player.role}
            </span>
         </div>

         {/* Bottom Info */}
         <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <h3 className="font-rama-style text-6xl text-white leading-none italic group-hover:text-los-orange transition-colors">
               {player.nick}
            </h3>
            <p className="font-sans text-gray-400 text-sm uppercase tracking-widest mt-2 border-t border-white/20 pt-2 inline-block">
               {player.name}
            </p>
            
            {/* Hidden Stat appearing on hover */}
            <div className="h-0 overflow-hidden group-hover:h-auto group-hover:mt-4 transition-all duration-300">
               <div className="flex items-center gap-2 text-white/80 font-mono text-xs">
                  <BarChart3 size={14} className="text-los-orange" />
                  <span>KDA: 4.5</span>
                  <span className="text-white/20">|</span>
                  <span>HS: 68%</span>
               </div>
            </div>
         </div>
      </div>
      
      {/* Decorative Plus Signs */}
      <div className="absolute top-2 left-2 text-los-orange opacity-0 group-hover:opacity-100 transition-opacity">
         <Plus size={12} />
      </div>
      <div className="absolute bottom-2 right-2 text-los-orange opacity-0 group-hover:opacity-100 transition-opacity">
         <Plus size={12} />
      </div>

    </motion.div>
  );
};

export default TeamSection;