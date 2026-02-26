import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Instagram, Twitter, Twitch, ArrowRight, ShoppingBag, Crown, Handshake } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_LINKS } from '../constants';
import { GlitchText } from './ui/GlitchText';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
          isScrolled 
            ? 'bg-los-black/90 backdrop-blur-xl py-3 border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)]' 
            : 'bg-transparent py-6 border-transparent'
        }`}
      >
        <div className="container mx-auto px-6 grid grid-cols-2 lg:grid-cols-12 items-center gap-4">
          
          {/* Logo Area (Left) - Spans 2 cols */}
          <div className="col-span-1 lg:col-span-2 flex justify-start">
             <Link to="/" className="flex items-center gap-3 group relative z-50">
               <div className="relative h-8 md:h-10 w-auto flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                  <img 
                    src="https://cdn.escharts.com/uploads/public/67e/6db/266/67e6db266344e047162553.png" 
                    alt="LOS GRANDES" 
                    className="w-auto h-full object-contain filter brightness-100 group-hover:brightness-125 transition-all"
                  />
               </div>
             </Link>
          </div>

          {/* Desktop Links (Center) - Focused Content */}
          <div className="hidden lg:flex col-span-6 items-center justify-center">
            <div className="flex items-center gap-8 xl:gap-10">
               {NAV_LINKS.map((link) => (
                 link.href.startsWith('/') ? (
                   <Link 
                     key={link.label} 
                     to={link.href}
                     className="relative font-sans text-xs font-bold uppercase tracking-[0.15em] text-gray-300 hover:text-white transition-colors group py-2"
                   >
                     {link.label}
                     <span className="absolute bottom-0 left-0 w-full h-[2px] bg-los-orange transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-right group-hover:origin-left"></span>
                   </Link>
                 ) : (
                   <a 
                     key={link.label} 
                     href={link.href}
                     className="relative font-sans text-xs font-bold uppercase tracking-[0.15em] text-gray-300 hover:text-white transition-colors group py-2"
                   >
                     {link.label}
                     <span className="absolute bottom-0 left-0 w-full h-[2px] bg-los-orange transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-right group-hover:origin-left"></span>
                   </a>
                 )
               ))}
            </div>
          </div>
          
          {/* Strategic Actions (Right) - Spans 4 cols */}
          <div className="hidden lg:flex col-span-4 items-center justify-end gap-6">
             
             {/* Sponsorship Link */}
             <a href="#" className="flex items-center gap-2 text-white hover:text-los-orange transition-colors group whitespace-nowrap">
                <Handshake size={18} className="text-los-orange group-hover:text-white transition-colors" />
                <span className="font-display font-bold text-sm tracking-wider uppercase">SEJA UM PATROCINADOR</span>
             </a>

             {/* Vertical Divider */}
             <div className="h-6 w-px bg-white/10 mx-1 hidden xl:block"></div>

             {/* SHOP CTA - INCREASED SIZE & IMPACT */}
             <Link 
               to="/loja"
               className="relative px-8 xl:px-12 py-5 overflow-hidden group bg-los-orange text-white clip-diagonal shadow-[0_0_25px_rgba(255,61,0,0.6)] hover:shadow-[0_0_50px_rgba(255,61,0,0.9)] transition-all duration-300 hover:-translate-y-1 active:translate-y-0 active:scale-95 whitespace-nowrap"
             >
                <div className="absolute inset-0 w-full h-full bg-white translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300 ease-out skew-x-12 origin-left"></div>
                <span className="relative font-display font-black text-sm xl:text-base tracking-[0.1em] xl:tracking-[0.2em] uppercase group-hover:text-los-black transition-colors duration-300 flex items-center justify-center">
                  LOJA OFICIAL
                </span>
             </Link>
          </div>

          {/* Mobile Toggle & Quick Actions (Right) */}
          <div className="col-span-1 lg:hidden flex justify-end items-center gap-4">
             
             {/* Mobile Quick Shop Button - Increased Impact */}
             <Link 
               to="/loja"
               className="relative px-6 py-2.5 overflow-hidden group bg-los-orange text-white clip-diagonal shadow-[0_0_20px_rgba(255,61,0,0.5)] hover:shadow-[0_0_30px_rgba(255,61,0,0.8)] transition-all duration-300 active:scale-95"
             >
                <div className="absolute inset-0 w-full h-full bg-white translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300 ease-out skew-x-12 origin-left"></div>
                <span className="relative font-display font-bold text-sm tracking-widest uppercase group-hover:text-los-black transition-colors duration-300 flex items-center justify-center">
                  LOJA
                </span>
             </Link>

             {/* Menu Trigger */}
             <button 
               className="text-white hover:text-los-orange transition-colors relative z-50 p-1"
               onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
             >
               {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
             </button>
          </div>
        </div>
      </nav>

      {/* Fullscreen Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" }}
            animate={{ opacity: 1, clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}
            exit={{ opacity: 0, clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 bg-los-black z-40 flex flex-col pt-24 pb-8 px-6 overflow-hidden"
          >
            {/* Background Decor */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
               <div className="absolute -right-20 top-1/4 text-[40vh] font-display font-black text-white/5 leading-none select-none blur-sm">
                 LOS
               </div>
               <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(255,61,0,0.1),transparent_70%)]"></div>
               <div className="absolute bottom-0 left-0 w-full h-full bg-noise opacity-5 mix-blend-overlay"></div>
            </div>

            {/* Strategic Mobile Actions - MOVED TO TOP */}
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.2 }}
               className="relative z-10 space-y-4 mb-8"
            >
               <div className="grid grid-cols-2 gap-4">
                  {/* Sponsor Button - Brand Colors */}
                  <button className="flex flex-col items-center justify-center gap-2 p-6 bg-los-black border border-white/10 hover:border-los-orange transition-colors rounded-sm group">
                     <Handshake size={28} className="text-los-orange group-hover:scale-110 transition-transform" />
                     <span className="font-display font-bold text-sm uppercase text-white">Seja Patrocinador</span>
                  </button>
                  
                  {/* Loja Button - Replaced Parceiros */}
                  <Link to="/loja" className="flex flex-col items-center justify-center gap-2 p-6 bg-los-black border border-white/10 hover:border-los-orange transition-colors rounded-sm group">
                     <ShoppingBag size={28} className="text-white group-hover:text-los-orange group-hover:scale-110 transition-all" />
                     <span className="font-display font-bold text-sm uppercase text-white">LOJA</span>
                  </Link>
               </div>
            </motion.div>

            {/* Menu Links */}
            <div className="flex-1 flex flex-col justify-start space-y-1 relative z-10 overflow-y-auto">
              {NAV_LINKS.map((link, idx) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + (idx * 0.05), duration: 0.5 }}
                  className="flex items-center gap-4 border-b border-white/5 py-3"
                >
                  {link.href.startsWith('/') ? (
                    <Link
                      to={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="font-display text-4xl md:text-5xl text-white uppercase tracking-tight"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="font-display text-4xl md:text-5xl text-white uppercase tracking-tight"
                    >
                      {link.label}
                    </a>
                   )}
                </motion.div>
              ))}
            </div>

            {/* Mobile Footer */}
            <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 0.6 }}
               className="relative z-10 flex justify-between items-center pt-4 border-t border-white/10"
            >
                 <span className="text-gray-500 font-mono text-[10px] tracking-widest uppercase">
                    © 2025 LOS GRANDES
                 </span>
                 <div className="flex gap-6 text-gray-400">
                    <a href="#" className="hover:text-los-orange hover:scale-110 transition-all"><Instagram size={20} /></a>
                    <a href="#" className="hover:text-los-orange hover:scale-110 transition-all"><Twitter size={20} /></a>
                    <a href="#" className="hover:text-los-orange hover:scale-110 transition-all"><Twitch size={20} /></a>
                 </div>
            </motion.div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;