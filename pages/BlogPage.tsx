import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Search, Calendar, Clock, User, ChevronRight, Share2, Bookmark, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';
import { GlitchText } from '../components/ui/GlitchText';
import { useBlog } from '../src/context/BlogContext';
import { useAuth } from '../src/context/AuthContext';

const BlogPage: React.FC = () => {
  const { posts } = useBlog();
  const { isAuthenticated } = useAuth();
  const [activeCategory, setActiveCategory] = useState<string>("TODOS");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = ["TODOS", ...Array.from(new Set(posts.map(post => post.category)))];

  const filteredPosts = posts.filter(post => {
    const matchesCategory = activeCategory === "TODOS" || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = posts[0];
  const remainingPosts = filteredPosts.filter(post => post.id !== featuredPost.id || activeCategory !== "TODOS" || searchQuery !== "");

  return (
    <div className="bg-los-black min-h-screen text-white overflow-x-hidden selection:bg-los-orange selection:text-white">
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          
          {/* Page Header */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-8">
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <span className="w-12 h-[2px] bg-los-orange" />
                <span className="text-los-orange font-bold font-sans tracking-[0.3em] text-sm uppercase">
                  News & Insights
                </span>
              </div>
              <GlitchText 
                text="BLOG OFICIAL" 
                className="font-display font-black text-4xl md:text-6xl lg:text-7xl text-white leading-none uppercase tracking-tighter whitespace-nowrap"
              />
            </div>

            {/* Search Bar & Admin Action */}
            <div className="flex flex-col md:flex-row gap-4 w-full lg:w-auto">
              <div className="relative w-full lg:w-96">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                <input 
                  type="text" 
                  placeholder="BUSCAR NOTÍCIAS..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-los-gray border border-white/10 py-4 pl-12 pr-4 font-mono text-xs focus:outline-none focus:border-los-orange transition-colors uppercase tracking-widest"
                />
              </div>
              
              {isAuthenticated && (
                <Link 
                  to="/admin/blog"
                  className="px-6 py-4 bg-white/5 border border-white/10 hover:bg-los-orange hover:border-los-orange text-white transition-all flex items-center justify-center gap-2 group"
                >
                  <Plus size={18} className="group-hover:rotate-90 transition-transform" />
                  <span className="font-mono text-xs font-bold tracking-widest uppercase">Novo Post</span>
                </Link>
              )}
            </div>
          </div>

          {/* Featured Post (Only if no search/filter active or if it matches) */}
          {activeCategory === "TODOS" && searchQuery === "" && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="relative aspect-[21/9] w-full bg-los-gray mb-20 overflow-hidden group cursor-pointer border border-white/5 hover:border-los-orange/30 transition-all duration-500"
            >
              <img 
                src={featuredPost.image} 
                alt={featuredPost.title}
                className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105 opacity-60 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-los-black via-los-black/40 to-transparent" />
              
              <div className="absolute inset-0 p-8 md:p-16 flex flex-col justify-end">
                <div className="flex items-center gap-4 mb-6">
                  <span className="bg-los-orange text-white font-mono text-[10px] font-bold px-3 py-1 uppercase tracking-widest">
                    DESTAQUE / {featuredPost.category}
                  </span>
                  <div className="flex items-center gap-2 text-white/40 font-mono text-[10px] uppercase tracking-widest">
                    <Calendar size={12} />
                    <span>{new Date(featuredPost.date).toLocaleDateString('pt-BR')}</span>
                  </div>
                </div>
                
                <h2 className="font-display font-black text-3xl md:text-6xl text-white uppercase leading-none mb-6 max-w-4xl group-hover:text-los-orange transition-colors">
                  {featuredPost.title}
                </h2>
                
                <p className="font-sans text-gray-400 text-lg max-w-2xl line-clamp-2 mb-8">
                  {featuredPost.excerpt}
                </p>
                
                <div className="flex items-center gap-6">
                   <button className="flex items-center gap-3 text-white font-mono text-xs font-bold tracking-widest uppercase hover:text-los-orange transition-colors">
                    Ler matéria completa <ChevronRight size={16} />
                  </button>
                  <div className="flex items-center gap-4 text-white/20">
                    <Share2 size={18} className="hover:text-white cursor-pointer transition-colors" />
                    <Bookmark size={18} className="hover:text-white cursor-pointer transition-colors" />
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 font-mono text-[10px] font-bold tracking-widest uppercase transition-all border ${
                  activeCategory === cat 
                    ? 'bg-los-orange border-los-orange text-white' 
                    : 'bg-transparent border-white/10 text-gray-500 hover:text-white hover:border-white/30'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {(activeCategory === "TODOS" && searchQuery === "" ? remainingPosts : filteredPosts).map((post, index) => (
                <motion.article
                  key={post.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ delay: index * 0.05 }}
                  className="group flex flex-col bg-los-gray border border-white/5 hover:border-los-orange/30 transition-all duration-500 overflow-hidden"
                >
                  {/* Image Container */}
                  <div className="relative aspect-video overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-110 opacity-60 group-hover:opacity-100"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-los-black/80 backdrop-blur-md text-white font-mono text-[10px] font-bold px-3 py-1 uppercase tracking-widest border border-white/10">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 flex-1 flex flex-col">
                    <div className="flex items-center gap-4 mb-4 text-white/40 font-mono text-[10px] uppercase tracking-widest">
                      <div className="flex items-center gap-1">
                        <Calendar size={12} />
                        <span>{new Date(post.date).toLocaleDateString('pt-BR')}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock size={12} />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    <h3 className="font-display font-bold text-2xl text-white uppercase leading-tight mb-4 group-hover:text-los-orange transition-colors line-clamp-3">
                      {post.title}
                    </h3>

                    <p className="font-sans text-gray-500 text-sm line-clamp-3 mb-8">
                      {post.excerpt}
                    </p>

                    <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-los-orange/20 flex items-center justify-center text-los-orange">
                          <User size={12} />
                        </div>
                        <span className="font-mono text-[10px] text-gray-400 uppercase tracking-widest">{post.author}</span>
                      </div>
                      <button className="text-los-orange hover:text-white transition-colors">
                        <ChevronRight size={20} />
                      </button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </div>

          {filteredPosts.length === 0 && (
            <div className="py-32 text-center border border-dashed border-white/10">
              <p className="font-mono text-gray-500 uppercase tracking-widest">Nenhuma notícia encontrada para sua busca</p>
            </div>
          )}

          {/* Newsletter Section */}
          <section className="mt-32 p-12 md:p-20 bg-los-orange relative overflow-hidden">
            <div className="absolute inset-0 bg-noise opacity-20 mix-blend-multiply" />
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
              <div className="max-w-2xl">
                <h2 className="font-display font-black text-4xl md:text-6xl text-white uppercase leading-none mb-6">
                  FIQUE POR DENTRO <br />
                  DA <span className="text-black">OPERAÇÃO</span>
                </h2>
                <p className="font-sans text-white/80 text-lg">
                  Assine nossa newsletter e receba conteúdos exclusivos, anúncios de novas contratações e promoções da loja diretamente no seu e-mail.
                </p>
              </div>
              
              <div className="w-full lg:w-auto flex flex-col sm:flex-row gap-4">
                <input 
                  type="email" 
                  placeholder="SEU MELHOR E-MAIL"
                  className="px-8 py-5 bg-black text-white font-mono text-xs tracking-widest uppercase focus:outline-none min-w-[300px]"
                />
                <button className="px-10 py-5 bg-white text-black font-display font-black text-xl tracking-widest uppercase hover:bg-black hover:text-white transition-all">
                  ASSINAR
                </button>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer Copy */}
      <footer className="py-12 border-t border-white/5 bg-los-black text-center">
        <p className="font-mono text-[10px] text-gray-600 tracking-[0.5em] uppercase">
          Los Grandes © 2025 // Media & Content Division
        </p>
      </footer>
    </div>
  );
};

export default BlogPage;
