import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Trophy, Users, Globe, Zap, Flag, Target } from 'lucide-react';
import { Link } from 'react-router-dom';
import { GlitchText } from '../components/ui/GlitchText';

const HISTORY_IMAGE = "https://richardhey.com.br/wp-content/uploads/2026/01/capa-los.png";

const TIMELINE = [
  {
    year: "2018",
    title: "A GÊNESE DA ONDA",
    description: "Tudo começou com uma visão. Rodrigo 'El Gato' Fernandes, já um fenômeno no YouTube, decidiu criar algo maior que ele mesmo. Nascia a guilda Los Grandes, um espaço para amigos que rapidamente se transformou em um movimento cultural. A 'Onda Laranja' começou a tomar forma, não apenas como um time, mas como uma família que abraçava a comunidade de Free Fire como ninguém jamais havia feito.",
    icon: Flag
  },
  {
    year: "2019",
    title: "PROFISSIONALIZAÇÃO",
    description: "O que era diversão virou coisa séria. A Los Grandes deu seus primeiros passos rumo ao profissionalismo, estruturando gaming houses e investindo em talentos brutos. Foi o ano em que mostramos ao Brasil que a paixão e a performance podiam andar juntas, conquistando os primeiros troféus e, mais importante, o coração de milhões de torcedores.",
    icon: Target
  },
  {
    year: "2021",
    title: "FENÔMENO DE MÍDIA",
    description: "A Los Grandes transcendeu os esports. Com a chegada de influenciadores de peso e uma produção de conteúdo inigualável, nos tornamos uma das maiores organizações de mídia da América Latina. Quebramos recordes de audiência, dominamos as redes sociais e provamos que o engajamento da nossa torcida é a nossa maior força.",
    icon: Users
  },
  {
    year: "2022",
    title: "A GRANDE FUSÃO",
    description: "Um marco histórico. A aquisição da Team oNe não foi apenas uma expansão, foi uma declaração de intenções. Entramos de cabeça no cenário de CS:GO, League of Legends e Rainbow Six Siege. Unimos a tradição e a estrutura da T1 com a explosão e o carisma da Los, criando uma superpotência pronta para disputar o mundo.",
    icon: Zap
  },
  {
    year: "HOJE",
    title: "LEGADO E INOVAÇÃO",
    description: "Hoje, a Los Grandes é sinônimo de excelência e inovação. Continuamos a revelar estrelas, a disputar os maiores campeonatos do planeta e a criar tendências. Nossa história está sendo escrita a cada 'Booyah', a cada 'Ace', a cada grito da torcida. Somos mais que um time, somos um estilo de vida.",
    icon: Globe
  }
];

const HistoryPage: React.FC = () => {
  return (
    <div className="bg-los-black min-h-screen text-white overflow-hidden selection:bg-los-orange selection:text-white">
      <main>
        {/* Hero Section - Disruptive Design */}
        <section className="relative min-h-[60vh] flex items-center justify-center pt-20">
          {/* Disruptive Background Image Layer */}
          <div className="absolute inset-0 z-0 flex">
            {/* Left Side - Glitched/Filtered Image */}
            <div className="relative w-1/2 h-full overflow-hidden border-r border-white/5">
              <motion.img 
                initial={{ scale: 1.2, x: -50 }}
                animate={{ scale: 1.1, x: 0 }}
                transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse' }}
                src={HISTORY_IMAGE} 
                className="absolute inset-0 w-full h-full object-cover grayscale opacity-30 mix-blend-luminosity"
              />
              <div className="absolute inset-0 bg-los-orange/10 mix-blend-overlay" />
            </div>
            
            {/* Right Side - Clean but Darkened Image */}
            <div className="relative w-1/2 h-full overflow-hidden">
              <motion.img 
                initial={{ scale: 1.2, x: 50 }}
                animate={{ scale: 1.1, x: 0 }}
                transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse' }}
                src={HISTORY_IMAGE} 
                className="absolute inset-0 w-full h-full object-cover opacity-20"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-los-black via-transparent to-transparent" />
            </div>

            {/* Diagonal Slash Decor */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-white/10" />
              <div className="absolute top-1/2 left-0 w-full h-px bg-white/10" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#000000_80%)]" />
            </div>
          </div>

          {/* Content Overlay */}
          <div className="container mx-auto px-6 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block mb-4">
                <span className="font-mono text-xs font-bold text-los-orange tracking-[0.5em] uppercase border-b border-los-orange/50 pb-2">
                  The Legacy
                </span>
              </div>
              
              <GlitchText 
                text="NOSSA HISTÓRIA" 
                className="font-display font-black text-4xl md:text-6xl lg:text-7xl leading-none tracking-tighter uppercase mb-6 whitespace-nowrap"
              />
              
              <p className="font-sans text-gray-400 text-base md:text-xl max-w-3xl mx-auto leading-relaxed">
                De uma guilda de amigos a uma potência global. <br className="hidden md:block" />
                A trajetória da organização que mudou o jogo para sempre.
              </p>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
            <span className="font-mono text-[10px] text-gray-500 tracking-widest uppercase">Scroll to explore</span>
            <div className="w-px h-12 bg-gradient-to-b from-los-orange to-transparent animate-pulse" />
          </div>
        </section>

        {/* Manifesto Section */}
        <section className="py-20 bg-los-black border-y border-white/5 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h2 className="font-display font-bold text-3xl md:text-5xl text-white uppercase tracking-tight">
                Mais que um time, <span className="text-los-orange">um movimento.</span>
              </h2>
              <p className="font-sans text-gray-400 text-lg md:text-xl leading-relaxed">
                A Los Grandes nasceu da paixão e da vontade de fazer diferente. Não seguimos caminhos predefinidos; nós os criamos. Nossa história é feita de ousadia, de quebra de recordes e, acima de tudo, de pessoas. Cada capítulo da nossa jornada reforça nosso compromisso em ser a maior e mais influente organização de esports da América Latina.
              </p>
            </div>
          </div>
        </section>

        {/* Story Sections - Timeline Style */}
        <section className="relative py-32 bg-los-black overflow-hidden">
          {/* Vertical Timeline Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-white/10 transform md:-translate-x-1/2">
            <motion.div 
              className="absolute top-0 left-0 w-full bg-los-orange"
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="space-y-32">
              {TIMELINE.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className={`relative flex flex-col md:flex-row items-center gap-12 md:gap-24 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-0 md:left-1/2 w-3 h-3 bg-los-orange rounded-full transform -translate-x-[5px] md:-translate-x-1/2 z-20 shadow-[0_0_10px_rgba(255,61,0,0.8)]">
                    <div className="absolute inset-0 w-full h-full bg-los-orange rounded-full animate-ping opacity-50" />
                  </div>

                  {/* Visual Element */}
                  <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${index % 2 !== 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                    <div className="relative aspect-video bg-los-gray overflow-hidden group border border-white/10 hover:border-los-orange/50 transition-all duration-500">
                      <div className="absolute inset-0 bg-los-orange/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                      <img 
                        src={HISTORY_IMAGE} 
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                        alt={item.title}
                      />
                      
                      {/* Year Overlay */}
                      <div className="absolute top-4 left-4 z-30">
                        <span className="font-display font-bold text-4xl md:text-5xl text-white drop-shadow-lg">
                          {item.year}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'}`}>
                    <div className={`flex items-center gap-4 mb-6 ${index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
                      <div className="w-12 h-12 bg-los-orange/10 border border-los-orange/20 flex items-center justify-center text-los-orange shrink-0">
                        <item.icon size={24} />
                      </div>
                      <h3 className="font-display font-bold text-3xl md:text-5xl uppercase tracking-tight leading-none">
                        {item.title}
                      </h3>
                    </div>
                    
                    <p className="font-sans text-gray-400 text-lg leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer Copy */}
      <footer className="py-12 border-t border-white/5 bg-los-black text-center">
        <p className="font-mono text-[10px] text-gray-600 tracking-[0.5em] uppercase">
          Los Grandes © 2025 // Legacy is Forever
        </p>
      </footer>
    </div>
  );
};

export default HistoryPage;
