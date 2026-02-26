import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Target, Zap, Users, Plus, BarChart2, Cpu, Smartphone, Hexagon, X } from 'lucide-react';
import { GlitchText } from './ui/GlitchText';

// Updated Data with the 4 specific partners
const PARTNERS = [
  {
    id: "ngcash",
    name: "NGCASH",
    category: "FINTECH GAMER",
    logo: "https://i.ibb.co/j9zdMgnC/NGCASH.png",
    bgImage: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2670&auto=format&fit=crop", 
    caseTitle: "A CARTEIRA DA NOVA GERAÇÃO",
    description: "A NGCASH revolucionou a forma como os gamers lidam com o dinheiro. Uma parceria focada em independência financeira e educação para o público jovem.",
    history: "Iniciada em 2022, a parceria com a NGCASH nasceu da necessidade de oferecer soluções financeiras reais para nosso público. Juntos, lançamos o cartão exclusivo da org e promovemos workshops de educação financeira para nossos atletas e comunidade.",
    statValue: "1.2M+",
    statLabel: "Contas Abertas",
    icon: Target,
    color: "#8B5CF6" // Violet
  },
  {
    id: "soldier",
    name: "SOLDIER",
    category: "PERFORMANCE GEAR",
    logo: "https://i.ibb.co/dsmqxx5h/SOLDIER.png",
    bgImage: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2670&auto=format&fit=crop",
    caseTitle: "PRECISÃO MILITAR",
    description: "Equipamentos desenvolvidos para a elite. A Soldier fornece os periféricos que garantem a vantagem competitiva em cada clutch.",
    history: "A Soldier juntou-se à nossa tropa em 2023 como fornecedora oficial de periféricos. Colaboramos no desenvolvimento da linha 'Pro Series', testada e aprovada por nossos pro-players em campeonatos internacionais.",
    statValue: "100%",
    statLabel: "Precisão",
    icon: Cpu,
    color: "#10B981" // Emerald
  },
  {
    id: "spun",
    name: "SPUN",
    category: "LIFESTYLE & WEAR",
    logo: "https://i.ibb.co/0yFLXhGQ/SPUN.png",
    bgImage: "https://images.unsplash.com/photo-1523398002811-999ca8dec234?q=80&w=2636&auto=format&fit=crop",
    caseTitle: "VESTINDO A TORCIDA",
    description: "Muito mais que uniformes. A SPUN traduz a identidade da nossa org em peças de streetwear que dominam as ruas e as arenas.",
    history: "Desde o início, a SPUN entendeu que nossa marca é um estilo de vida. A parceria evoluiu de uniformes de jogo para coleções completas de streetwear, collabs com artistas e presença nas principais semanas de moda gamer.",
    statValue: "50k+",
    statLabel: "Peças Vendidas",
    icon: Users,
    color: "#F43F5E" // Rose
  },
  {
    id: "allu",
    name: "ALLU",
    category: "TECH RENTAL",
    logo: "https://i.ibb.co/35VyYRMb/ALLU.png",
    bgImage: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2670&auto=format&fit=crop",
    caseTitle: "ACESSO ILIMITADO",
    description: "Tecnologia de ponta por assinatura. A ALLU garante que nossos criadores de conteúdo tenham sempre os melhores dispositivos em mãos.",
    history: "A parceria com a ALLU em 2024 mudou o jogo para nossos influenciadores. Com o modelo de assinatura de iPhones e MacBooks, garantimos que nossa produção de conteúdo esteja sempre na vanguarda tecnológica, sem o peso do ativo fixo.",
    statValue: "24/7",
    statLabel: "Uptime",
    icon: Smartphone,
    color: "#3B82F6" // Blue
  }
];

// Ticker logos can mirror the main partners now
const TICKER_LOGOS = PARTNERS.map(p => ({ id: p.id, logo: p.logo }));

const PartnersSection: React.FC = () => {
  const [selectedPartner, setSelectedPartner] = useState<typeof PARTNERS[0] | null>(null);

  return (
    <section className="relative py-24 bg-los-black min-h-screen flex flex-col justify-center overflow-hidden clip-torn-top">
      
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-los-black">
         <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] opacity-30" />
         <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-los-black via-transparent to-los-black pointer-events-none" />
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col h-full">
        
        {/* Header Section */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-8">
            <div className="space-y-2">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-[2px] bg-los-orange shadow-[0_0_15px_#FF3D00]" />
                <span className="text-los-orange font-sans font-bold tracking-[0.2em] text-xs uppercase">
                  Ecossistema
                </span>
              </div>
              
              <GlitchText 
                text="NOSSOS PARCEIROS" 
                className="font-display font-bold text-4xl sm:text-5xl md:text-7xl text-white leading-none tracking-tight uppercase"
              />
            </div>
            
            <div className="hidden md:block max-w-sm text-right">
               <p className="text-gray-400 font-sans text-sm border-r-2 border-white/10 pr-4 leading-relaxed">
                 Marcas que constroem o futuro ao nosso lado. Clique para conhecer nossa história.
               </p>
            </div>
          </div>

          {/* Logo Ticker */}
          <div className="w-full border-y border-white/5 bg-white/[0.02] backdrop-blur-sm overflow-hidden py-6 mb-12 relative group">
             <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-los-black to-transparent z-10" />
             <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-los-black to-transparent z-10" />
             
             <motion.div 
               className="flex gap-20 w-max items-center"
               animate={{ x: ["0%", "-50%"] }}
               transition={{ duration: 20, ease: "linear", repeat: Infinity }}
             >
                {[...TICKER_LOGOS, ...TICKER_LOGOS, ...TICKER_LOGOS].map((item, idx) => (
                   <img 
                      key={`${item.id}-${idx}`} 
                      src={item.logo} 
                      alt="Partner" 
                      referrerPolicy="no-referrer"
                      className="h-8 md:h-10 w-auto object-contain brightness-0 invert opacity-40 hover:opacity-100 transition-opacity duration-300"
                   />
                ))}
             </motion.div>
          </div>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PARTNERS.map((partner) => (
            <PartnerCard 
              key={partner.id} 
              data={partner} 
              onClick={() => setSelectedPartner(partner)}
            />
          ))}
        </div>

      </div>

      {/* Partner Modal */}
      <AnimatePresence>
        {selectedPartner && (
          <PartnerModal 
            partner={selectedPartner} 
            onClose={() => setSelectedPartner(null)} 
          />
        )}
      </AnimatePresence>

    </section>
  );
};

interface PartnerCardProps {
  data: typeof PARTNERS[0];
  onClick: () => void;
}

const PartnerCard: React.FC<PartnerCardProps> = ({ data, onClick }) => {
  return (
    <motion.div
      onClick={onClick}
      whileHover={{ y: -10 }}
      className="relative h-[400px] rounded-lg overflow-hidden cursor-pointer group border border-white/10 bg-los-gray"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 transition-colors duration-500"
          style={{ 
            background: `linear-gradient(135deg, ${data.color}15 0%, transparent 60%)`,
            backgroundColor: '#111' 
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.03)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-noise opacity-[0.03] mix-blend-overlay" />
        
        {/* Hover Gradient */}
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ 
            background: `radial-gradient(circle at center, ${data.color}20 0%, transparent 70%)` 
          }}
        />
      </div>

      {/* Content */}
      <div className="absolute inset-0 p-6 flex flex-col justify-between z-10">
        <div className="flex justify-between items-start">
          <span className="font-mono text-[9px] tracking-widest border border-white/10 bg-black/30 px-2 py-1 text-gray-400 uppercase backdrop-blur-sm">
            {data.category}
          </span>
          <div className="p-2 rounded-full border border-white/10 bg-white/5 text-white opacity-0 group-hover:opacity-100 transition-opacity">
            <Plus size={16} />
          </div>
        </div>

        <div className="flex flex-col items-center gap-4">
           <img 
             src={data.logo} 
             alt={data.name} 
             referrerPolicy="no-referrer"
             className="h-20 w-auto object-contain brightness-0 invert drop-shadow-[0_0_10px_rgba(0,0,0,0.5)] transition-transform duration-500 group-hover:scale-110"
           />
           <div className="h-0.5 w-12 bg-los-orange scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
        </div>

        <div>
          <h3 className="text-white font-display font-bold text-xl uppercase text-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
            {data.name}
          </h3>
          <p className="text-gray-400 text-xs text-center mt-2 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100 translate-y-4 group-hover:translate-y-0 line-clamp-2">
            {data.description}
          </p>
        </div>
      </div>
      
      {/* Hover Border */}
      <div className="absolute inset-0 border-2 border-los-orange opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg pointer-events-none" />
    </motion.div>
  );
};

interface PartnerModalProps {
  partner: typeof PARTNERS[0];
  onClose: () => void;
}

const PartnerModal: React.FC<PartnerModalProps> = ({ partner, onClose }) => {
  // Lock body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  // Handle Escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/90 backdrop-blur-sm"
      />
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="relative w-full max-w-4xl bg-los-gray border border-white/10 rounded-2xl overflow-hidden shadow-2xl z-10 flex flex-col md:flex-row max-h-[90vh]"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
      >
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 bg-black/50 hover:bg-los-orange text-white rounded-full transition-colors backdrop-blur-md"
        >
          <X size={20} />
        </button>

        {/* Image Side */}
        <div className="w-full md:w-2/5 relative h-64 md:h-auto shrink-0 overflow-hidden">
          <div 
            className="absolute inset-0"
            style={{ 
              background: `linear-gradient(135deg, ${partner.color}20 0%, #0a0a0a 100%)`,
            }}
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.05)_0%,transparent_50%)]" />
          <div className="absolute inset-0 bg-noise opacity-[0.05] mix-blend-overlay" />
          
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 p-8 opacity-20">
             <Hexagon size={200} stroke={partner.color} strokeWidth={0.5} fill="transparent" />
          </div>

          <div className="absolute inset-0 flex items-center justify-center p-8 relative z-10">
            <img 
              src={partner.logo} 
              alt={partner.name} 
              referrerPolicy="no-referrer"
              className="w-full max-w-[200px] object-contain brightness-0 invert drop-shadow-[0_0_30px_rgba(255,255,255,0.15)]"
            />
          </div>
        </div>

        {/* Content Side */}
        <div className="w-full md:w-3/5 p-8 md:p-12 overflow-y-auto custom-scrollbar bg-los-gray">
          <div className="flex items-center gap-3 mb-6">
            <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-mono text-los-orange uppercase tracking-wider">
              {partner.category}
            </span>
            <div className="h-[1px] flex-1 bg-white/10" />
          </div>

          <h2 className="font-display font-bold text-3xl md:text-5xl text-white mb-6 uppercase leading-none">
            {partner.caseTitle}
          </h2>

          <div className="space-y-6 text-gray-300 font-sans leading-relaxed">
            <p className="text-lg text-white/90">
              {partner.description}
            </p>
            
            <div className="bg-black/20 p-6 rounded-xl border border-white/5">
              <h4 className="text-los-orange font-bold uppercase text-sm mb-3 tracking-wider flex items-center gap-2">
                <Hexagon size={14} fill="currentColor" />
                História da Parceria
              </h4>
              <p className="text-sm text-gray-400">
                {partner.history}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-8 pt-8 border-t border-white/5">
            <div>
              <p className="text-3xl font-display font-bold text-white">{partner.statValue}</p>
              <p className="text-xs text-gray-500 uppercase font-mono mt-1">{partner.statLabel}</p>
            </div>
            <div className="flex justify-end items-center">
               <button className="px-6 py-3 bg-white text-black font-bold uppercase text-sm hover:bg-los-orange hover:text-white transition-colors rounded-sm flex items-center gap-2">
                 Visitar Site <ArrowUpRight size={16} />
               </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default PartnersSection;