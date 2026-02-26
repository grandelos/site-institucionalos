import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Instagram, Twitter, Heart, MessageCircle, Repeat, Share2, ExternalLink, ArrowUpRight } from 'lucide-react';
import { GlitchText } from './ui/GlitchText';
import { fetchInstagramPosts, formatTimeAgo, InstagramPost } from '../src/services/instagramService';

type SocialType = 'instagram' | 'twitter';

interface SocialPost {
  id: string;
  type: SocialType;
  handle: string;
  avatar: string;
  content: string;
  image?: string;
  date: string;
  stats: {
    likes: string;
    comments?: string;
    retweets?: string;
  };
  featured?: boolean;
}

const MOCK_SOCIAL_DATA: SocialPost[] = [
  {
    id: '1',
    type: 'instagram',
    handle: '@losgrandes.gg',
    avatar: 'https://github.com/losgrandes.png',
    content: "A tropa tá unida! Preparação insana para o próximo split. Quem tá com a gente? 🧡 #GoLOS",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2670&auto=format&fit=crop",
    date: "2h atrás",
    stats: { likes: "45.2K", comments: "1.2K" }
  },
  {
    id: '2',
    type: 'instagram',
    handle: '@losgrandes.gg',
    avatar: 'https://github.com/losgrandes.png',
    content: "Detalhes do novo uniforme 2026. Já garantiu o seu na loja oficial? O manto tá pesado! 🔥",
    image: "https://images.unsplash.com/photo-1626025437642-0b05076ca301?q=80&w=2670&auto=format&fit=crop",
    date: "5h atrás",
    stats: { likes: "28.5K", comments: "890" }
  },
  {
    id: '3',
    type: 'instagram',
    handle: '@losgrandes.gg',
    avatar: 'https://github.com/losgrandes.png',
    content: "MVP da partida! @ghost_ff amassou demais hoje. Deixem o 🔥 nos comentários!",
    image: "https://images.unsplash.com/photo-1533174072545-e8d4aa97edf9?q=80&w=2670&auto=format&fit=crop",
    date: "Ontem",
    stats: { likes: "62K", comments: "3.4K" }
  },
  {
    id: '4',
    type: 'instagram',
    handle: '@losgrandes.gg',
    avatar: 'https://github.com/losgrandes.png',
    content: "Bastidores do Media Day. A energia tá surreal! Confiram os stories. 📸",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2670&auto=format&fit=crop",
    date: "2 dias atrás",
    stats: { likes: "35K", comments: "950" }
  }
];

const SocialFeedSection: React.FC = () => {
  const [posts, setPosts] = useState<SocialPost[]>(MOCK_SOCIAL_DATA);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadInstagramPosts = async () => {
      const token = import.meta.env.VITE_INSTAGRAM_ACCESS_TOKEN;
      
      if (!token) {
        console.log("No Instagram token found, using mock data.");
        return;
      }

      setLoading(true);
      const data = await fetchInstagramPosts(token);
      
      if (data && data.length > 0) {
        const mappedPosts: SocialPost[] = data.slice(0, 4).map((post: any) => ({
          id: post.id,
          type: 'instagram',
          handle: '@losgrandes.gg',
          avatar: 'https://github.com/losgrandes.png', // Instagram API doesn't return profile pic easily without extra permissions
          content: post.caption || "",
          image: post.media_type === 'VIDEO' ? post.thumbnail_url : post.media_url,
          date: formatTimeAgo(post.timestamp),
          stats: { likes: "---", comments: "---" } // Basic Display API doesn't return likes/comments count without Graph API
        }));
        setPosts(mappedPosts);
      }
      setLoading(false);
    };

    loadInstagramPosts();
  }, []);

  return (
    <section className="relative py-24 bg-los-black overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
         <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-los-orange/5 rounded-full blur-[120px] opacity-20" />
         <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[100px] opacity-20" />
         <div className="absolute inset-0 bg-noise opacity-5 mix-blend-overlay" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
               <span className={`w-2 h-2 rounded-full animate-pulse shadow-[0_0_10px_#FF3D00] ${loading ? 'bg-yellow-500' : 'bg-los-orange'}`} />
               <span className="text-los-orange font-bold font-mono tracking-widest text-xs uppercase">
                 {loading ? 'Carregando Feed...' : 'Social Wall'}
               </span>
            </div>
            
            <GlitchText 
               text="INSTAGRAM @LOSGRANDES.GG" 
               className="font-display font-bold text-3xl md:text-5xl lg:text-6xl text-white leading-[0.9] uppercase tracking-tight break-words"
            />
            
            <h2 className="font-sans text-xl text-gray-400 font-medium">
              Acompanhe nossos últimos posts oficiais.
            </h2>
          </div>

          <div className="max-w-xs text-right hidden md:block">
             <p className="text-gray-500 text-sm font-sans mb-4 border-r-2 border-white/10 pr-4">
                Siga nosso perfil oficial e não perca nenhum detalhe da onda laranja.
             </p>
             <div className="flex justify-end gap-4">
                <SocialPill icon={Instagram} label="Seguir no Instagram" href="https://www.instagram.com/losgrandes.gg/" />
             </div>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
           {posts.map((post, index) => (
              <SocialCard key={post.id} post={post} index={index} />
           ))}
        </div>

        {/* Mobile CTA */}
        <div className="mt-12 flex justify-center md:hidden gap-4">
            <SocialPill icon={Instagram} label="Seguir no Instagram" href="https://www.instagram.com/losgrandes.gg/" />
        </div>

      </div>
    </section>
  );
};

// --- Sub-components ---

const SocialPill: React.FC<{ icon: any, label: string, href: string }> = ({ icon: Icon, label, href }) => (
   <a 
      href={href}
      className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:border-los-orange/50 hover:text-los-orange transition-all duration-300 group"
   >
      <Icon size={16} />
      <span className="text-xs font-bold uppercase tracking-wider">{label}</span>
      <ArrowUpRight size={14} className="opacity-50 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
   </a>
);

const SocialCard: React.FC<{ post: SocialPost, index: number }> = ({ post, index }) => {
  const isInsta = post.type === 'instagram';
  const isFeatured = post.featured;

  // Staggered entrance animation
  const variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { delay: index * 0.1, duration: 0.6, ease: [0.215, 0.61, 0.355, 1] as [number, number, number, number] }
    }
  };

  return (
    <motion.div
      layout
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10%" }}
      className={`relative group overflow-hidden bg-los-gray border border-white/5 hover:border-los-orange/30 transition-colors duration-300 ${isFeatured ? 'md:col-span-2 md:row-span-2' : ''}`}
    >
      
      {/* --- INSTAGRAM CARD --- */}
      {isInsta && (
         <div className="relative h-full aspect-square md:aspect-auto min-h-[300px] flex flex-col">
            {/* Image Background */}
            <div className="absolute inset-0 z-0">
               <img 
                  src={post.image} 
                  alt="Post" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter brightness-[0.8] group-hover:brightness-100" 
               />
               <div className="absolute inset-0 bg-gradient-to-t from-los-black/90 via-transparent to-black/20" />
            </div>
            
            {/* Top Bar */}
            <div className="relative z-10 p-6 flex justify-between items-center">
               <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full border border-white/20 p-0.5 bg-black/50 backdrop-blur">
                     <img src={post.avatar} alt={post.handle} className="w-full h-full rounded-full" />
                  </div>
                  <span className="text-xs font-bold text-white shadow-black drop-shadow-md">{post.handle}</span>
               </div>
               <div className="w-8 h-8 flex items-center justify-center bg-white/10 backdrop-blur rounded-full">
                  <Instagram size={16} className="text-white" />
               </div>
            </div>

            {/* Bottom Content (Slide Up on Hover) */}
            <div className="relative z-10 mt-auto p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
               <p className={`text-white font-sans font-medium mb-4 line-clamp-2 drop-shadow-md ${isFeatured ? 'text-xl' : 'text-sm'}`}>
                  {post.content}
               </p>
               
               <div className="flex items-center justify-between text-white/80 border-t border-white/20 pt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  <div className="flex gap-4 text-xs font-mono">
                     <span className="flex items-center gap-1"><Heart size={14} className="fill-white/20" /> {post.stats.likes}</span>
                     <span className="flex items-center gap-1"><MessageCircle size={14} /> {post.stats.comments}</span>
                  </div>
                  <span className="text-[10px] uppercase tracking-widest text-gray-400">{post.date}</span>
               </div>
            </div>
         </div>
      )}

      {/* --- TWITTER CARD --- */}
      {!isInsta && (
         <div className="relative h-full min-h-[250px] p-8 flex flex-col bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
            {/* Header */}
            <div className="flex justify-between items-start mb-6">
               <div className="flex items-center gap-3">
                  <img src={post.avatar} alt={post.handle} className="w-10 h-10 rounded-full grayscale group-hover:grayscale-0 transition-all" />
                  <div>
                     <h4 className="font-bold text-white text-sm leading-tight">LOS GRANDES</h4>
                     <p className="text-gray-500 text-xs">{post.handle}</p>
                  </div>
               </div>
               <Twitter size={20} className="text-gray-600 group-hover:text-blue-400 transition-colors" />
            </div>
            
            {/* Content */}
            <div className="flex-1">
               <p className="text-gray-200 font-sans text-lg leading-relaxed mb-6">
                  {post.content}
               </p>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between text-gray-500 text-xs font-mono border-t border-white/5 pt-4">
               <div className="flex gap-6">
                  <span className="flex items-center gap-2 group-hover:text-pink-500 transition-colors"><Heart size={14} /> {post.stats.likes}</span>
                  <span className="flex items-center gap-2 group-hover:text-green-500 transition-colors"><Repeat size={14} /> {post.stats.retweets}</span>
               </div>
               <span>{post.date}</span>
            </div>
         </div>
      )}

   </motion.div>
  );
};

export default SocialFeedSection;