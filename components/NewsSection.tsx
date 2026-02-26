import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Clock, Tag, ChevronRight, Zap, TrendingUp, LayoutGrid } from 'lucide-react';
import { GlitchText } from './ui/GlitchText';

interface NewsItem {
  id: string;
  category: string;
  title: string;
  excerpt?: string;
  date: string;
  readTime: string;
  image: string;
  hot?: boolean;
}

const FEATURED_NEWS: NewsItem = {
  id: '1',
  category: 'CS2: MAJOR',
  title: "A ESTRATÉGIA POR TRÁS DO BOOTCAMP NA EUROPA",
  excerpt: "Bastidores exclusivos, entrevistas com a comissão técnica e o que mudou na rotina dos players para o RMR.",
  date: "HOJE, 14:00",
  readTime: "8 MIN LEITURA",
  image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2670&auto=format&fit=crop",
  hot: true
};

const SIDE_NEWS: NewsItem[] = [
  {
    id: '2',
    category: 'MERCADO',
    title: "LOS ANUNCIA NOVA PARCERIA COM GIGANTE DE HARDWARE",
    date: "ONTEM",
    readTime: "3 MIN",
    image: "https://images.unsplash.com/photo-1591405351990-4726e331f141?q=80&w=2670&auto=format&fit=crop",
  },
  {
    id: '3',
    category: 'VALORANT',
    title: "ANÁLISE TÁTICA: O RETAKE QUE GARANTIU O MAPA",
    date: "12 MAR",
    readTime: "5 MIN",
    image: "https://images.unsplash.com/photo-1542751110-97427bbecf20?q=80&w=2684&auto=format&fit=crop",
  },
  {
    id: '4',
    category: 'COMUNIDADE',
    title: "GUIA DO TORCEDOR: COMO RESGATAR OS DROPS NA LIVE",
    date: "10 MAR",
    readTime: "2 MIN",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2671&auto=format&fit=crop",
  }
];

const NewsSection: React.FC = () => {
  return (
    <section className="relative py-24 bg-los-black text-white clip-torn-top border-t border-white/5">
      
      {/* Background Tech Grid */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none">
          <div className="absolute top-0 right-0 w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header - Editorial Style */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6 border-b border-white/10 pb-6">
          <div className="space-y-2">
             <div className="flex items-center gap-2">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-los-orange opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-los-orange"></span>
                </span>
                <span className="font-mono font-bold text-los-orange tracking-[0.2em] text-xs uppercase">
                  Los Newsroom
                </span>
             </div>
             
             <GlitchText 
                text="CENTRAL DE NOTÍCIAS" 
                className="font-display font-black text-4xl md:text-5xl lg:text-6xl text-white leading-[0.9] tracking-tighter"
             />
          </div>
          
             <div className="flex gap-4">
                <button className="flex items-center gap-2 px-4 py-2 border border-white/10 hover:border-los-orange hover:text-los-orange transition-colors bg-white/5 text-xs font-bold font-mono uppercase rounded-sm whitespace-nowrap">
                   <TrendingUp size={14} /> Em Alta
                </button>
                <button className="flex items-center gap-2 px-4 py-2 border border-white/10 hover:border-los-orange hover:text-los-orange transition-colors bg-white/5 text-xs font-bold font-mono uppercase rounded-sm whitespace-nowrap">
                   <LayoutGrid size={14} /> Todas
                </button>
             </div>
        </div>

        {/* Content Layout: Hero + Side Feed */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
           
           {/* Main Hero Article (2/3 width) */}
           <div className="lg:col-span-8 group cursor-pointer">
              <div className="relative h-[400px] md:h-[500px] overflow-hidden rounded-lg border border-white/10 hover:border-los-orange/50 transition-colors duration-500">
                 
                 {/* Image */}
                 <div className="absolute inset-0">
                    <img 
                       src={FEATURED_NEWS.image} 
                       alt={FEATURED_NEWS.title}
                       className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-[0.7] group-hover:brightness-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-los-black via-los-black/40 to-transparent" />
                 </div>

                 {/* Content Overlay */}
                 <div className="absolute bottom-0 left-0 w-full p-8 md:p-10">
                    <div className="flex items-center gap-3 mb-4">
                       <span className="px-3 py-1 bg-los-orange text-white text-[10px] font-bold font-mono uppercase tracking-widest">
                          {FEATURED_NEWS.category}
                       </span>
                       {FEATURED_NEWS.hot && (
                          <span className="flex items-center gap-1 text-red-500 text-[10px] font-bold font-mono uppercase animate-pulse">
                             <Zap size={12} fill="currentColor" /> Hot Topic
                          </span>
                       )}
                    </div>

                    <h3 className="font-display font-bold text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-[0.95] mb-4 uppercase group-hover:text-los-orange transition-colors">
                       {FEATURED_NEWS.title}
                    </h3>
                    
                    <p className="text-gray-300 font-sans text-lg line-clamp-2 max-w-2xl mb-6 opacity-80 group-hover:opacity-100 transition-opacity">
                       {FEATURED_NEWS.excerpt}
                    </p>

                    <div className="flex items-center gap-6 text-xs font-mono text-gray-400">
                       <span className="flex items-center gap-2"><Clock size={14} /> {FEATURED_NEWS.readTime}</span>
                       <span className="flex items-center gap-2"><Calendar size={14} /> {FEATURED_NEWS.date}</span>
                       <span className="flex items-center gap-2 text-white group-hover:translate-x-2 transition-transform duration-300 whitespace-nowrap">
                          Ler Matéria <ArrowRight size={14} />
                       </span>
                    </div>
                 </div>
              </div>
           </div>

           {/* Side Feed (1/3 width) */}
           <div className="lg:col-span-4 flex flex-col gap-4">
              <h4 className="font-mono text-xs text-gray-500 uppercase tracking-widest border-b border-white/10 pb-2 mb-2">
                 Últimas Atualizações
              </h4>
              
              {SIDE_NEWS.map((news) => (
                 <SideNewsItem key={news.id} news={news} />
              ))}

              {/* Newsletter Mini-Box */}
              <div className="mt-auto bg-los-orange/10 border border-los-orange/20 p-6 rounded-lg relative overflow-hidden group hover:bg-los-orange/20 transition-colors">
                 <div className="absolute top-0 right-0 p-4 opacity-10">
                    <Zap size={64} />
                 </div>
                 <h5 className="font-display font-bold text-xl text-white uppercase mb-2">Não perca nada</h5>
                 <p className="text-xs text-gray-400 mb-4 font-sans">Receba as notícias táticas direto no seu email.</p>
                 <button className="w-full py-3 bg-white text-los-black font-bold font-mono text-xs uppercase hover:bg-los-orange hover:text-white transition-colors whitespace-nowrap px-4">
                    Inscrever-se
                 </button>
              </div>
           </div>

        </div>

      </div>
    </section>
  );
};

const SideNewsItem: React.FC<{ news: NewsItem }> = ({ news }) => {
   return (
      <a href="#" className="group flex gap-4 p-4 bg-white/[0.02] border border-white/5 hover:border-white/20 hover:bg-white/[0.05] transition-all rounded-lg">
         <div className="w-24 h-24 shrink-0 overflow-hidden rounded-sm relative">
            <img 
               src={news.image} 
               alt={news.title} 
               className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-300 group-hover:scale-110" 
            />
         </div>
         <div className="flex flex-col justify-between py-1">
            <div>
               <span className="text-[10px] font-bold font-mono text-los-orange uppercase mb-1 block">
                  {news.category}
               </span>
               <h4 className="font-display font-bold text-lg leading-tight text-white group-hover:text-gray-300 transition-colors line-clamp-2">
                  {news.title}
               </h4>
            </div>
            <div className="flex items-center gap-3 text-[10px] font-mono text-gray-500">
               <span>{news.date}</span>
               <span className="w-1 h-1 bg-gray-600 rounded-full" />
               <span className="flex items-center gap-1"><Clock size={10} /> {news.readTime}</span>
            </div>
         </div>
      </a>
   );
};

export default NewsSection;