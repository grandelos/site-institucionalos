import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, ArrowRight, Star, ShieldCheck, Truck, Zap } from 'lucide-react';
import { GlitchText } from '../components/ui/GlitchText';

const PRODUCTS = [
  {
    id: 1,
    name: "JERSEY LOS GRANDES 2025",
    color: "BLACK EDITION",
    price: "R$ 199,90",
    image: "https://i.ibb.co/tpTFHS1T/CAMISA-PRETA-NORMAL.png",
    description: "A armadura oficial da Onda Laranja. Tecnologia dry-fit de alta performance, corte exclusivo e o peso da tradição em cada detalhe.",
    badge: "BEST SELLER"
  },
  {
    id: 2,
    name: "JERSEY LOS GRANDES 2025",
    color: "ORANGE EDITION",
    price: "R$ 199,90",
    image: "https://i.ibb.co/8gRXTY5m/CAMISETA-LARANJA.png",
    description: "Destaque-se na multidão. A edição laranja traz a energia vibrante da nossa torcida para o seu dia a dia. Conforto e estilo pro-player.",
    badge: "LIMITED DROP"
  }
];

const ShopPage: React.FC = () => {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  return (
    <div className="bg-los-black min-h-screen text-white overflow-x-hidden selection:bg-los-orange selection:text-white">
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          
          {/* Header */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-12 h-[2px] bg-los-orange" />
              <span className="text-los-orange font-bold font-sans tracking-[0.3em] text-sm uppercase">
                Official Store
              </span>
            </div>
            <GlitchText 
              text="LOJA OFICIAL" 
              className="font-display font-black text-4xl md:text-6xl text-white leading-none uppercase tracking-tighter whitespace-nowrap"
            />
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {PRODUCTS.map((product) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                onMouseEnter={() => setHoveredProduct(product.id)}
                onMouseLeave={() => setHoveredProduct(null)}
                className="group relative bg-los-gray border border-white/5 hover:border-los-orange/50 transition-all duration-500 flex flex-col overflow-hidden"
              >
                {/* Badge */}
                <div className="absolute top-6 left-6 z-20">
                  <span className="bg-los-orange text-white font-mono text-[10px] font-bold px-3 py-1 uppercase tracking-widest shadow-lg">
                    {product.badge}
                  </span>
                </div>

                {/* Image Area */}
                <div className="relative aspect-[4/5] bg-gradient-to-b from-white/5 to-transparent overflow-hidden p-8 flex items-center justify-center">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent_70%)]" />
                  
                  {/* Image Placeholder / Real Image */}
                  <motion.img 
                    src={product.image}
                    alt={product.name}
                    className="relative z-10 w-full h-full object-contain drop-shadow-2xl"
                    animate={{ 
                      scale: hoveredProduct === product.id ? 1.1 : 1,
                      rotate: hoveredProduct === product.id ? -2 : 0
                    }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  />
                </div>

                {/* Product Info */}
                <div className="p-8 bg-los-black/50 border-t border-white/5 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-display font-bold text-2xl md:text-3xl text-white uppercase leading-none mb-2">
                        {product.name}
                      </h3>
                      <span className="font-mono text-xs text-los-orange font-bold tracking-widest uppercase">
                        {product.color}
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="block font-display font-bold text-2xl text-white">
                        {product.price}
                      </span>
                      <div className="flex items-center justify-end gap-1 text-yellow-500 mt-1">
                        <Star size={12} fill="currentColor" />
                        <Star size={12} fill="currentColor" />
                        <Star size={12} fill="currentColor" />
                        <Star size={12} fill="currentColor" />
                        <Star size={12} fill="currentColor" />
                      </div>
                    </div>
                  </div>

                  <p className="font-sans text-gray-400 text-sm mb-8 line-clamp-2">
                    {product.description}
                  </p>

                  {/* Buy Button */}
                  <div className="mt-auto">
                    <button className="w-full py-4 bg-white text-black font-display font-bold text-lg uppercase tracking-widest hover:bg-los-orange hover:text-white transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,61,0,0.4)] group-hover:translate-y-0">
                      <ShoppingBag size={20} /> COMPRAR AGORA
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 border-t border-white/5 pt-12">
            <div className="flex flex-col items-center text-center gap-4">
              <div className="w-16 h-16 bg-los-gray rounded-full flex items-center justify-center text-los-orange border border-white/5">
                <ShieldCheck size={32} />
              </div>
              <div>
                <h4 className="font-display font-bold text-lg text-white uppercase mb-1">Compra Segura</h4>
                <p className="font-sans text-gray-500 text-sm">Seus dados protegidos com criptografia de ponta.</p>
              </div>
            </div>
            <div className="flex flex-col items-center text-center gap-4">
              <div className="w-16 h-16 bg-los-gray rounded-full flex items-center justify-center text-los-orange border border-white/5">
                <Truck size={32} />
              </div>
              <div>
                <h4 className="font-display font-bold text-lg text-white uppercase mb-1">Envio para todo Brasil</h4>
                <p className="font-sans text-gray-500 text-sm">Entrega rápida e rastreada para todo o país.</p>
              </div>
            </div>
            <div className="flex flex-col items-center text-center gap-4">
              <div className="w-16 h-16 bg-los-gray rounded-full flex items-center justify-center text-los-orange border border-white/5">
                <Star size={32} />
              </div>
              <div>
                <h4 className="font-display font-bold text-lg text-white uppercase mb-1">Qualidade Premium</h4>
                <p className="font-sans text-gray-500 text-sm">Produtos oficiais com garantia de qualidade.</p>
              </div>
            </div>
          </div>

        </div>
      </main>

      {/* Footer Copy */}
      <footer className="py-12 border-t border-white/5 bg-los-black text-center">
        <p className="font-mono text-[10px] text-gray-600 tracking-[0.5em] uppercase">
          Los Grandes © 2025 // Official Store
        </p>
      </footer>
    </div>
  );
};

export default ShopPage;
