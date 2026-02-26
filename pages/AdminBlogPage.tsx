import React, { useState } from 'react';
import { useBlog } from '../src/context/BlogContext';
import { ArrowLeft, Plus, Image, Tag, Type, User, Clock, Check, X } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const AdminBlogPage: React.FC = () => {
  const { addPost } = useBlog();
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    content: '',
    image: '',
    category: '',
    author: '',
    readTime: '',
  });

  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (name === 'image') {
      setPreviewImage(value);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.title || !formData.excerpt || !formData.image || !formData.category || !formData.author || !formData.readTime) {
      alert('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    addPost({
      title: formData.title,
      excerpt: formData.excerpt,
      content: formData.content,
      image: formData.image,
      category: formData.category,
      author: formData.author,
      readTime: formData.readTime,
    });

    navigate('/blog');
  };

  return (
    <div className="bg-los-black min-h-screen text-white selection:bg-los-orange selection:text-white">
      
      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-50 px-6 py-8 flex justify-between items-center bg-gradient-to-b from-los-black to-transparent backdrop-blur-sm">
        <Link to="/blog" className="group flex items-center gap-3 text-white hover:text-los-orange transition-colors">
          <div className="w-10 h-10 border border-white/10 flex items-center justify-center group-hover:border-los-orange transition-colors">
            <ArrowLeft size={20} />
          </div>
          <span className="font-mono text-xs font-bold tracking-widest uppercase">Voltar ao Blog</span>
        </Link>
      </header>

      <main className="pt-32 pb-20 container mx-auto px-6 max-w-4xl">
        
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-12 h-[2px] bg-los-orange" />
            <span className="text-los-orange font-bold font-sans tracking-[0.3em] text-sm uppercase">
              Admin Panel
            </span>
          </div>
          <h1 className="font-display font-black text-4xl md:text-6xl text-white leading-none uppercase tracking-tighter">
            NOVO POST
          </h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          
          {/* Title & Category */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-2">
              <label className="flex items-center gap-2 text-white/60 font-mono text-xs uppercase tracking-widest">
                <Type size={14} /> Título do Post
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                placeholder="DIGITE O TÍTULO AQUI..."
                className="w-full bg-los-gray border border-white/10 p-4 font-display font-bold text-xl uppercase focus:outline-none focus:border-los-orange transition-colors"
              />
            </div>
            
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-white/60 font-mono text-xs uppercase tracking-widest">
                <Tag size={14} /> Categoria
              </label>
              <select
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                className="w-full bg-los-gray border border-white/10 p-4 font-mono text-sm uppercase focus:outline-none focus:border-los-orange transition-colors appearance-none"
              >
                <option value="">SELECIONE...</option>
                <option value="ESPORTS">ESPORTS</option>
                <option value="LIFESTYLE">LIFESTYLE</option>
                <option value="TECNOLOGIA">TECNOLOGIA</option>
                <option value="COMUNIDADE">COMUNIDADE</option>
                <option value="PARCEIROS">PARCEIROS</option>
              </select>
            </div>
          </div>

          {/* Image URL & Preview */}
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-white/60 font-mono text-xs uppercase tracking-widest">
              <Image size={14} /> URL da Imagem de Capa
            </label>
            <div className="flex gap-4">
              <input
                type="text"
                name="image"
                value={formData.image}
                onChange={handleInputChange}
                placeholder="HTTPS://..."
                className="flex-1 bg-los-gray border border-white/10 p-4 font-mono text-sm focus:outline-none focus:border-los-orange transition-colors"
              />
            </div>
            {previewImage && (
              <div className="mt-4 relative aspect-video w-full overflow-hidden border border-white/10 bg-los-black">
                <img src={previewImage} alt="Preview" className="w-full h-full object-cover opacity-80" onError={(e) => (e.currentTarget.style.display = 'none')} />
                <div className="absolute top-2 right-2 bg-black/80 px-2 py-1 text-[10px] font-mono uppercase text-white/60">Preview</div>
              </div>
            )}
          </div>

          {/* Excerpt */}
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-white/60 font-mono text-xs uppercase tracking-widest">
              <Type size={14} /> Resumo (Excerpt)
            </label>
            <textarea
              name="excerpt"
              value={formData.excerpt}
              onChange={handleInputChange}
              rows={3}
              placeholder="BREVE DESCRIÇÃO DO POST..."
              className="w-full bg-los-gray border border-white/10 p-4 font-sans text-sm focus:outline-none focus:border-los-orange transition-colors resize-none"
            />
          </div>

          {/* Content (Optional for now) */}
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-white/60 font-mono text-xs uppercase tracking-widest">
              <Type size={14} /> Conteúdo Completo (Opcional)
            </label>
            <textarea
              name="content"
              value={formData.content}
              onChange={handleInputChange}
              rows={6}
              placeholder="ESCREVA O CONTEÚDO DO POST AQUI..."
              className="w-full bg-los-gray border border-white/10 p-4 font-sans text-sm focus:outline-none focus:border-los-orange transition-colors resize-y"
            />
          </div>

          {/* Meta Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-white/60 font-mono text-xs uppercase tracking-widest">
                <User size={14} /> Autor
              </label>
              <input
                type="text"
                name="author"
                value={formData.author}
                onChange={handleInputChange}
                placeholder="NOME DO AUTOR"
                className="w-full bg-los-gray border border-white/10 p-4 font-mono text-sm uppercase focus:outline-none focus:border-los-orange transition-colors"
              />
            </div>
            
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-white/60 font-mono text-xs uppercase tracking-widest">
                <Clock size={14} /> Tempo de Leitura
              </label>
              <input
                type="text"
                name="readTime"
                value={formData.readTime}
                onChange={handleInputChange}
                placeholder="EX: 5 MIN"
                className="w-full bg-los-gray border border-white/10 p-4 font-mono text-sm uppercase focus:outline-none focus:border-los-orange transition-colors"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="pt-8 flex items-center justify-end gap-4 border-t border-white/5">
            <Link 
              to="/blog"
              className="px-8 py-4 border border-white/10 text-white font-mono text-xs font-bold tracking-widest uppercase hover:bg-white/5 transition-colors flex items-center gap-2"
            >
              <X size={16} /> Cancelar
            </Link>
            <button 
              type="submit"
              className="px-10 py-4 bg-los-orange text-white font-display font-bold text-sm tracking-widest uppercase hover:bg-white hover:text-los-black transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(255,61,0,0.4)] hover:shadow-[0_0_30px_rgba(255,61,0,0.6)]"
            >
              <Check size={16} /> Publicar Post
            </button>
          </div>

        </form>
      </main>
    </div>
  );
};

export default AdminBlogPage;
