import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { Crown, ShieldCheck, Star, CheckCircle2, ArrowRight, Sparkles, Fingerprint } from 'lucide-react';
import { GlitchText } from './ui/GlitchText';

const PLANS = [
  {
    id: 1,
    name: "RECRUTA",
    price: "9,90",
    description: "O primeiro passo para entrar na elite.",
    features: [
      "Badge Exclusivo no Discord",
      "Wallpapers 4K Mensais",
      "5% OFF na Loja Oficial",
      "Newsletter de Bastidores"
    ],
    icon: ShieldCheck,
    color: "from-zinc-800 to-zinc-950",
    popular: false
  },
  {
    id: 2,
    name: "VETERANO",
    price: "29,90",
    description: "Para quem vive a LOS intensamente todos os dias.",
    features: [
      "15% OFF na Loja Oficial",
      "Prioridade 1 em Ingressos",
      "Sorteios de Periféricos",
      "Acesso ao Tactical Room"
    ],
    icon: Star,
    color: "from-los-orange to-red-900",
    popular: true
  },
  {
    id: 3,
    name: "COMANDANTE",
    price: "89,90",
    description: "A experiência definitiva. O topo da hierarquia.",
    features: [
      "25% OFF na Loja Oficial",
      "Meet & Greet Exclusivo",
      "Kit Físico Anual (Manto)",
      "Voto em decisões do clube"
    ],
    icon: Crown,
    color: "from-amber-500 to-orange-700",
    popular: false
  }
];

const MembershipSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const marqueeX = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  return (
    <section ref={containerRef} className="relative bg-los-black overflow-hidden border-t border-white/5">
      
      {/* --- CTA PART (FORMERLY JoinClubCTA) --- */}
      <div className="relative py-32 bg-los-orange overflow-hidden flex flex-col items-center justify-center clip-diagonal">
        {/* Background Layers */}
        <div className="absolute inset-0 flex flex-col justify-center opacity-10 pointer-events-none select-none overflow-hidden">
          <motion.div style={{ x: marqueeX }} className="whitespace-nowrap flex gap-8">
             {Array.from({ length: 10 }).map((_, i) => (
               <span key={i} className="font-display font-black text-[20vw] leading-none text-black stroke-text-white">
                 JOIN THE WAVE 
               </span>
             ))}
          </motion.div>
        </div>
        <div className="absolute inset-0 bg-noise opacity-20 mix-blend-multiply" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)]" />

        <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* LEFT: Copy & Button */}
          <div className="text-center lg:text-left order-2 lg:order-1">
             <motion.div
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8 }}
             >
                <div className="inline-flex items-center gap-2 bg-black/20 backdrop-blur-sm px-4 py-1.5 rounded-full border border-black/10 mb-6">
                   <Sparkles size={14} className="text-white animate-pulse" />
                   <span className="font-mono text-xs font-bold text-white uppercase tracking-widest">Limited Access</span>
                </div>

                <h2 className="font-display font-black text-5xl sm:text-7xl md:text-8xl text-white uppercase leading-[0.85] mb-8 drop-shadow-2xl tracking-tighter">
                   SAIA DA <br/>
                   <span className="text-transparent bg-clip-text bg-gradient-to-b from-black to-zinc-800 text-stroke-white">ARQUIBANCADA</span>
                </h2>

                <p className="font-sans text-black font-bold text-lg md:text-xl max-w-xl mb-10 leading-relaxed tracking-tight">
                   A Los Grandes não é para quem apenas assiste. É para quem vive. Garanta acesso VIP, drops exclusivos e faça parte da maior organização da América Latina.
                </p>

                <button className="group relative px-10 md:px-12 py-5 md:py-6 bg-black text-white font-display font-black text-xl md:text-2xl tracking-widest overflow-hidden hover:bg-white hover:text-los-orange transition-all duration-300 shadow-[0_20px_40px_rgba(0,0,0,0.4)] hover:shadow-[0_30px_60px_rgba(0,0,0,0.5)] hover:-translate-y-2 rounded-sm whitespace-nowrap border-2 border-black">
                   <span className="relative z-10 flex items-center gap-4 uppercase">
                     GARANTIR MEU ACESSO <ArrowRight size={28} className="group-hover:translate-x-2 transition-transform" />
                   </span>
                   <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
                </button>
             </motion.div>
          </div>

          {/* RIGHT: 3D Holographic Card */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2 perspective-1000">
             <HolographicCard />
          </div>
        </div>

        {/* Vertical Lines Decoration */}
        <div className="absolute top-0 bottom-0 left-12 w-px bg-black/10 hidden md:block" />
        <div className="absolute top-0 bottom-0 right-12 w-px bg-black/10 hidden md:block" />
      </div>

      {/* --- PLANS PART --- */}
      <div className="relative py-24">
        {/* Background Decor */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-px h-full bg-white/5" />
          <div className="absolute top-0 left-2/4 w-px h-full bg-white/5" />
          <div className="absolute top-0 left-3/4 w-px h-full bg-white/5" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-los-orange/5 rounded-full blur-[180px]" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          {/* Header */}
          <div className="max-w-3xl mb-16">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 border border-los-orange/30 rounded-full bg-los-orange/10 mb-6"
            >
              <Crown size={14} className="text-los-orange" />
              <span className="text-[10px] font-mono text-los-orange tracking-[0.2em] uppercase">Membership Program</span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-display font-bold text-4xl sm:text-6xl md:text-7xl text-white mb-6 uppercase tracking-tight leading-[0.9]"
            >
              SÓCIO <span className="text-los-orange">TORCEDOR</span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-400 font-sans text-xl max-w-xl"
            >
              Escolha seu nível de engajamento e desbloqueie vantagens exclusivas que só quem é LOS possui.
            </motion.p>
          </div>

          {/* Plans Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PLANS.map((plan, idx) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * idx }}
                className={`relative group p-8 rounded-2xl border transition-all duration-500 ${
                  plan.popular 
                    ? 'bg-los-gray border-los-orange/50 shadow-[0_0_40px_rgba(255,61,0,0.15)] scale-105 z-10' 
                    : 'bg-los-gray/50 border-white/10 hover:border-white/20'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-los-orange text-white text-[10px] font-bold uppercase tracking-widest rounded-full shadow-lg">
                    Mais Popular
                  </div>
                )}

                <div className="mb-8">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${plan.color} flex items-center justify-center mb-6 shadow-lg`}>
                    <plan.icon size={24} className="text-white" />
                  </div>
                  <h3 className="font-display font-bold text-3xl text-white mb-2 uppercase tracking-tight">{plan.name}</h3>
                  <p className="text-gray-500 text-sm font-sans leading-relaxed">{plan.description}</p>
                </div>

                <div className="mb-8 flex items-baseline gap-1">
                  <span className="text-gray-400 text-sm font-mono">R$</span>
                  <span className="text-5xl font-display font-bold text-white">{plan.price.split(',')[0]}</span>
                  <span className="text-gray-400 text-xl font-display">,{plan.price.split(',')[1]}</span>
                  <span className="text-gray-500 text-xs font-mono ml-1 uppercase">/mês</span>
                </div>

                <div className="h-px w-full bg-white/5 mb-8" />

                <ul className="space-y-4 mb-10">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 size={18} className={plan.popular ? "text-los-orange" : "text-gray-600"} />
                      <span className="text-gray-300 text-sm font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-4 font-display font-bold text-lg uppercase tracking-wider transition-all duration-300 clip-diagonal whitespace-nowrap px-4 ${
                  plan.popular 
                    ? 'bg-los-orange text-white hover:bg-white hover:text-los-black shadow-[0_10px_20px_rgba(255,61,0,0.2)]' 
                    : 'bg-white/5 text-white hover:bg-white hover:text-los-black border border-white/10'
                }`}>
                  Assinar Plano
                </button>
              </motion.div>
            ))}
          </div>

          {/* Footer Info */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6"
          >
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-los-black bg-los-gray overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <p className="text-gray-500 text-sm font-sans">
                <span className="text-white font-bold">+15.000</span> membros já fazem parte da elite.
              </p>
            </div>
            
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2">
                <ShieldCheck size={16} className="text-los-orange" />
                <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">Pagamento Seguro</span>
              </div>
              <div className="flex items-center gap-2">
                <Star size={16} className="text-los-orange" />
                <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">Cancelamento Fácil</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// --- 3D CARD COMPONENT (Moved from JoinClubCTA) ---
const HolographicCard = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [15, -15]), { stiffness: 150, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-15, 15]), { stiffness: 150, damping: 20 });
  
  const glareX = useTransform(rotateY, [-15, 15], ["0%", "100%"]);
  const glareY = useTransform(rotateX, [15, -15], ["0%", "100%"]);

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="relative w-[320px] h-[480px] md:w-[380px] md:h-[560px] rounded-2xl cursor-pointer group"
    >
      <div className="absolute inset-0 bg-los-black rounded-2xl border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.5)] overflow-hidden">
        <div className="absolute inset-0 bg-noise opacity-20" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-los-orange blur-[80px] opacity-40 mix-blend-screen animate-pulse" />
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-600 blur-[80px] opacity-20 mix-blend-screen" />

        <div className="relative z-10 h-full p-8 flex flex-col justify-between">
           <div className="flex justify-between items-start">
              <Crown size={32} className="text-los-orange" />
              <div className="flex flex-col items-end">
                 <img src="https://i.ibb.co/j9zdMgnC/NGCASH.png" alt="NG.CASH" className="h-6 md:h-8 object-contain mb-1 brightness-0 invert" />
                 <span className="font-mono text-[10px] text-white/70 tracking-widest">OFFICIAL MEMBER</span>
              </div>
           </div>
           <div className="w-12 h-9 rounded bg-gradient-to-br from-yellow-200 to-yellow-600 shadow-inner border border-yellow-700/50 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/circuit-board.png')] opacity-30" />
              <div className="w-8 h-px bg-black/20" />
              <div className="h-6 w-px bg-black/20" />
           </div>
           <div className="space-y-4">
              <div className="font-mono text-white/60 text-xs tracking-[0.2em] flex items-center gap-2">
                 <Fingerprint size={12} /> ID: 9940-2025-LOS
              </div>
              <div className="font-display font-black text-3xl md:text-4xl text-white uppercase tracking-wider drop-shadow-lg">
                 GABRIEL SILVA
              </div>
              <div className="flex items-center gap-2">
                 <div className="px-2 py-0.5 bg-los-orange text-black font-bold font-mono text-[10px] uppercase rounded-sm">
                    VIP ACCESS
                 </div>
                 <div className="px-2 py-0.5 border border-white/20 text-white font-mono text-[10px] uppercase rounded-sm">
                    TIER 1
                 </div>
              </div>
           </div>
        </div>

        <motion.div 
            className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none mix-blend-overlay"
            style={{ 
               x: glareX,
               y: glareY,
               opacity: useTransform(rotateY, (val: number) => Math.abs(val) > 2 ? 1 : 0)
            }}
        />
        <div className="absolute inset-0 rounded-2xl border-2 border-white/5 group-hover:border-los-orange/50 transition-colors duration-500" />
      </div>
    </motion.div>
  );
};

export default MembershipSection;