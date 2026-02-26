import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, Tv, ChevronRight, Filter, Trophy, Bell } from 'lucide-react';
import { Link } from 'react-router-dom';
import { GlitchText } from '../components/ui/GlitchText';
import { AGENDA_DATA } from '../src/data/agendaData';

const AgendaPage: React.FC = () => {
  const [filter, setFilter] = useState<string>("ALL");

  const categories = ["ALL", ...Array.from(new Set(AGENDA_DATA.map(item => item.game)))];

  const filteredData = filter === "ALL" 
    ? AGENDA_DATA 
    : AGENDA_DATA.filter(item => item.game === filter);

  return (
    <div className="bg-los-black min-h-screen text-white overflow-x-hidden selection:bg-los-orange selection:text-white">
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          
          {/* Page Title & Header */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-8">
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <span className="w-8 h-[2px] bg-los-orange" />
                <span className="text-los-orange font-bold font-sans tracking-[0.2em] text-xs uppercase">
                  Agenda
                </span>
              </div>
              <GlitchText 
                text="CALENDÁRIO" 
                className="font-display font-black text-4xl md:text-6xl text-white leading-none uppercase tracking-tighter whitespace-nowrap"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-4 py-1.5 font-mono text-[10px] font-bold tracking-widest uppercase transition-all border ${
                    filter === cat 
                      ? 'bg-los-orange border-los-orange text-white' 
                      : 'bg-transparent border-white/10 text-gray-500 hover:text-white hover:border-white/30'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Agenda List */}
          <div className="space-y-3">
            <AnimatePresence mode="popLayout">
              {filteredData.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ delay: index * 0.05 }}
                  className="group relative bg-los-gray border border-white/5 hover:border-los-orange/30 transition-all duration-300 overflow-hidden"
                >
                  {/* Background Accent */}
                  <div className="absolute top-0 left-0 w-0.5 h-full bg-los-orange transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />
                  
                  <div className="p-4 md:p-5 flex flex-col md:flex-row items-center gap-4 md:gap-8">
                    
                    {/* Date & Time - Compact */}
                    <div className="flex md:flex-col items-center md:items-start gap-3 md:gap-0 min-w-[80px] border-b md:border-b-0 md:border-r border-white/5 pb-3 md:pb-0 md:pr-6 w-full md:w-auto justify-center md:justify-start">
                      <span className="font-mono text-los-orange text-[10px] font-bold tracking-widest uppercase">
                        {new Date(item.date).toLocaleDateString('pt-BR', { day: '2-digit', month: 'short' }).toUpperCase()}
                      </span>
                      <span className="font-display font-black text-xl text-white">
                        {item.time}
                      </span>
                    </div>

                    {/* Game Info */}
                    <div className="flex items-center gap-3 min-w-[180px] w-full md:w-auto justify-center md:justify-start">
                       <div className="text-white/20 group-hover:text-los-orange transition-colors">
                          <item.icon size={18} />
                       </div>
                       <div className="flex flex-col">
                          <span className="font-mono text-[9px] text-gray-600 uppercase tracking-widest">{item.game}</span>
                          <span className="font-bold text-sm text-white uppercase tracking-tight">{item.event}</span>
                       </div>
                    </div>

                    {/* Matchup - Leaner */}
                    <div className="flex-1 flex items-center justify-center gap-3 w-full md:w-auto py-3 md:py-0 bg-black/20 md:bg-transparent rounded md:rounded-none">
                        <div className="flex items-center gap-2">
                           <span className="font-display font-bold text-lg text-white">LOS</span>
                        </div>
                        
                        <span className="font-mono text-[10px] text-los-orange/50">VS</span>
                        
                        <div className="flex items-center gap-2">
                           <span className="font-display font-bold text-lg text-white/60 group-hover:text-white transition-colors">
                              {item.opponent ? item.opponent.name : "TBD"}
                           </span>
                        </div>
                    </div>

                    {/* Actions - Minimal */}
                    <div className="flex items-center gap-2 w-full md:w-auto justify-center border-t md:border-t-0 border-white/5 pt-3 md:pt-0">
                      {item.streamUrl && (
                        <a 
                          href={item.streamUrl} 
                          target="_blank" 
                          rel="noreferrer"
                          className="px-4 py-1.5 bg-white/5 hover:bg-los-orange text-white font-mono text-[9px] font-bold tracking-widest uppercase transition-all border border-white/10 hover:border-los-orange flex items-center gap-2 rounded-sm"
                        >
                          <Tv size={12} /> ASSISTIR
                        </a>
                      )}
                      <button className="w-8 h-8 border border-white/10 flex items-center justify-center hover:bg-white hover:text-los-black transition-all rounded-sm">
                        <Bell size={14} />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {filteredData.length === 0 && (
            <div className="py-20 text-center border border-dashed border-white/10">
              <p className="font-mono text-gray-500 uppercase tracking-widest">Nenhum evento encontrado nesta categoria</p>
            </div>
          )}
        </div>
      </main>

      {/* Footer Copy */}
      <footer className="py-12 border-t border-white/5 bg-los-black text-center">
        <p className="font-mono text-[10px] text-gray-600 tracking-[0.5em] uppercase">
          Los Grandes © 2025 // Operation Schedule
        </p>
      </footer>
    </div>
  );
};

export default AgendaPage;
