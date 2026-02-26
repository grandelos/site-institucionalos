import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowUpRight, Mail, Phone, MessageCircle, Send, 
  ShieldAlert, FileText, HelpCircle, X, ExternalLink,
  Ghost, Cpu, Crosshair, Instagram, Twitter, Linkedin, Youtube, Twitch, Music2
} from 'lucide-react';
import { GlitchText } from './ui/GlitchText';

const PARTNER_ADS = [
  { id: 1, name: 'ALLU', text: "ASSINE SEU IPHONE", color: "text-green-400", bg: "bg-green-400/10", border: "border-green-400/30" },
  { id: 2, name: 'NG.CASH', text: "A CARTEIRA DA GERAÇÃO Z", color: "text-purple-400", bg: "bg-purple-400/10", border: "border-purple-400/30" },
  { id: 3, name: 'SOLDIERS', text: "GEAR UP FOR WAR", color: "text-gray-200", bg: "bg-gray-700/50", border: "border-gray-500/30" }
];

const Footer: React.FC = () => {
  const [currentAd, setCurrentAd] = useState(0);
  const [isChatOpen, setIsChatOpen] = useState(false);

  // Rotate Partner Ads
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentAd((prev) => (prev + 1) % PARTNER_ADS.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <footer className="relative bg-los-black pt-12 pb-8 overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 text-[20vw] font-display font-bold text-white/[0.02] leading-none select-none">
          LOS
        </div>
        <div className="absolute inset-0 bg-noise opacity-5 mix-blend-overlay"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* TOP GRID: The Command Center */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-16">
          
          {/* BRAND MODULE (Span 4) */}
          <div className="lg:col-span-4 flex flex-col justify-between h-full space-y-8">
            <div>
              <h2 className="font-display text-2xl sm:text-4xl text-white uppercase leading-none mb-2">
                Uma só paixão.<br/>Milhões de Corações.
              </h2>
              <p className="font-mono text-xs text-gray-500 max-w-xs">
                EST. 2018 // SÃO PAULO, BR
              </p>
            </div>

            {/* Dynamic Partner Spot */}
            <div className="relative h-24 w-full overflow-hidden border border-white/10 bg-white/[0.02] p-4 flex items-center justify-between group cursor-pointer hover:border-white/30 transition-colors">
               <AnimatePresence mode="wait">
                 <motion.div 
                   key={PARTNER_ADS[currentAd].id}
                   initial={{ y: 20, opacity: 0 }}
                   animate={{ y: 0, opacity: 1 }}
                   exit={{ y: -20, opacity: 0 }}
                   className="flex flex-col w-full"
                 >
                    <span className="text-[10px] font-mono text-gray-500 mb-1 flex items-center gap-2">
                       <span className={`w-2 h-2 rounded-full animate-pulse ${PARTNER_ADS[currentAd].bg.replace('/10', '')}`}></span>
                       PARCEIRO EM DESTAQUE
                    </span>
                    <div className="flex justify-between items-center">
                       <span className={`font-display text-2xl uppercase ${PARTNER_ADS[currentAd].color}`}>
                          {PARTNER_ADS[currentAd].name}
                       </span>
                       <span className="font-mono text-xs text-white/60">{PARTNER_ADS[currentAd].text}</span>
                    </div>
                 </motion.div>
               </AnimatePresence>
               <div className="absolute top-0 right-0 p-1 bg-white/10">
                  <ExternalLink size={10} className="text-white" />
               </div>
            </div>
          </div>

          {/* NEWSLETTER MODULE (Span 5) */}
          <div className="lg:col-span-5 bg-los-gray border border-white/10 p-8 flex flex-col justify-center relative overflow-hidden group hover:border-los-orange/50 transition-colors">
            <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-100 transition-opacity">
               <Mail className="text-los-orange" size={48} />
            </div>
            
            <span className="text-los-orange font-bold font-mono tracking-widest text-xs uppercase mb-4">
              Newsletter
            </span>
            <h3 className="font-display text-3xl sm:text-5xl text-white mb-2 uppercase">
              Entre pra Tropa
            </h3>
            <p className="text-gray-400 text-sm mb-6 max-w-sm">
              Drops exclusivos, notícias em primeira mão e convites para eventos da LOS.
            </p>

            <form className="relative flex items-center border-b-2 border-white/20 focus-within:border-los-orange transition-colors pb-2">
               <input 
                 type="email" 
                 placeholder="SEU MELHOR E-MAIL" 
                 className="bg-transparent border-none outline-none text-white font-mono w-full placeholder:text-gray-600 uppercase"
               />
               <button type="button" className="text-white hover:text-los-orange transition-colors">
                  <Send size={20} />
               </button>
            </form>
          </div>

          {/* CONTACTS MODULE (Span 3) */}
          <div className="lg:col-span-3 grid grid-rows-4 gap-2">
            
            <ContactCard 
               title="INSTITUCIONAL" 
               contact="contato@los.gg" 
               icon={Ghost} 
               color="hover:text-los-orange"
            />
             <ContactCard 
               title="MARKETING" 
               contact="marketing@spun.com.br" 
               icon={MessageCircle} 
               color="hover:text-green-400"
            />
             <ContactCard 
               title="SPUN MANAGEMENT" 
               contact="spun@los.gg" 
               icon={Crosshair} 
               color="hover:text-purple-400"
            />
             <ContactCard 
               title="IMPRENSA" 
               contact="press@los.gg" 
               icon={Cpu} 
               color="hover:text-blue-400"
            />

          </div>
        </div>

        {/* BOTTOM BAR: Navigation & Legal */}
        <div className="border-t border-white/10 pt-8 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
           
           {/* Legal Links */}
           <div className="flex flex-wrap gap-6 md:gap-8">
              <FooterLink href="#" icon={ShieldAlert} label="Termos de Uso" />
              <FooterLink href="#" icon={FileText} label="Privacidade" />
              <FooterLink href="#" icon={HelpCircle} label="FAQ & Suporte" />
              <span className="text-gray-600 text-xs font-mono py-1">POLÍTICA DE COOKIES</span>
           </div>

           {/* Social / Copyright */}
           <div className="flex flex-col items-end gap-4">
              <div className="flex gap-4">
                 <SocialIcon href="https://www.instagram.com/losgrandes.gg/" icon={Instagram} />
                 <SocialIcon href="https://x.com/losgrandesgg" icon={Twitter} />
                 <SocialIcon href="https://www.linkedin.com/company/losgrandes/" icon={Linkedin} />
                 <SocialIcon href="https://www.youtube.com/@LOSGRANDES/" icon={Youtube} />
                 <SocialIcon href="https://www.tiktok.com/@losgrandesesports" icon={Music2} />
                 <SocialIcon href="https://www.twitch.tv/losgrandesesports/" icon={Twitch} />
              </div>
              <div className="text-right">
                 <p className="text-white font-display text-xl uppercase">LOS GRANDES © 2025</p>
                 <p className="text-gray-500 text-[10px] font-mono tracking-widest">DESIGNED FOR GLORY.</p>
              </div>
           </div>
        </div>

      </div>

      {/* FLOATING ACTION BUTTON (Chat/WhatsApp) */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
         <AnimatePresence>
            {isChatOpen && (
               <motion.div 
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 20, scale: 0.9 }}
                  className="bg-white text-black p-4 rounded-lg shadow-2xl mb-2 w-64 origin-bottom-right relative"
               >
                  <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white rotate-45"></div>
                  <h4 className="font-display font-bold text-lg mb-2 uppercase">Precisa de ajuda?</h4>
                  <div className="space-y-2">
                     <button className="w-full flex items-center gap-3 p-2 hover:bg-gray-100 rounded transition-colors text-left text-sm font-bold border border-gray-200 whitespace-nowrap">
                        <MessageCircle size={16} className="text-green-600" /> WhatsApp
                     </button>
                     <button className="w-full flex items-center gap-3 p-2 hover:bg-gray-100 rounded transition-colors text-left text-sm font-bold border border-gray-200 whitespace-nowrap">
                        <HelpCircle size={16} className="text-los-orange" /> FAQ Center
                     </button>
                  </div>
               </motion.div>
            )}
         </AnimatePresence>
         
         <button 
            onClick={() => setIsChatOpen(!isChatOpen)}
            className="group relative w-14 h-14 bg-los-orange text-white flex items-center justify-center shadow-[0_0_20px_rgba(255,61,0,0.5)] hover:bg-white hover:text-los-orange transition-colors clip-diagonal"
         >
            <AnimatePresence mode="wait">
               {isChatOpen ? (
                  <motion.div key="close" initial={{ rotate: -90 }} animate={{ rotate: 0 }} exit={{ rotate: 90 }}>
                     <X size={24} />
                  </motion.div>
               ) : (
                  <motion.div key="chat" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
                     <MessageCircle size={24} />
                  </motion.div>
               )}
            </AnimatePresence>
            
            {/* Ping Animation */}
            {!isChatOpen && (
               <span className="absolute top-0 right-0 flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
               </span>
            )}
         </button>
      </div>

    </footer>
  );
};

// --- Sub-components ---

const ContactCard: React.FC<{ title: string, contact: string, icon: any, color: string }> = ({ title, contact, icon: Icon, color }) => (
   <a href={`mailto:${contact}`} className={`group bg-white/[0.03] border border-white/5 p-4 flex items-center justify-between hover:bg-white/[0.08] hover:border-white/20 transition-all ${color}`}>
      <div>
         <p className="text-[10px] font-mono text-gray-500 uppercase tracking-wider mb-1">{title}</p>
         <p className="font-display text-xl text-white group-hover:translate-x-1 transition-transform">{contact}</p>
      </div>
      <Icon size={20} className="text-gray-600 group-hover:text-white transition-colors" />
   </a>
);

const FooterLink: React.FC<{ href: string, icon: any, label: string }> = ({ href, icon: Icon, label }) => (
   <a href={href} className="flex items-center gap-2 text-xs font-mono text-gray-400 hover:text-los-orange transition-colors group">
      <Icon size={14} className="group-hover:rotate-12 transition-transform" />
      <span className="uppercase tracking-wide">{label}</span>
   </a>
);

const SocialIcon: React.FC<{ href: string, icon: any }> = ({ href, icon: Icon }) => (
   <a 
     href={href} 
     target="_blank" 
     rel="noreferrer" 
     className="w-10 h-10 border border-white/10 flex items-center justify-center text-gray-500 hover:text-los-orange hover:border-los-orange transition-all"
   >
      <Icon size={18} />
   </a>
);

export default Footer;