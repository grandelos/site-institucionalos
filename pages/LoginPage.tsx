import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../src/context/AuthContext';
import { ArrowLeft, Lock, ShieldCheck, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { GlitchText } from '../components/ui/GlitchText';

const LoginPage: React.FC = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Redirect to where the user came from, or default to admin panel
  const from = (location.state as any)?.from?.pathname || '/admin/blog';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (login(password)) {
      navigate(from, { replace: true });
    } else {
      setError('Credenciais inválidas. Acesso negado.');
    }
  };

  return (
    <div className="bg-los-black min-h-screen text-white flex flex-col items-center justify-center selection:bg-los-orange selection:text-white relative overflow-hidden">
      
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,61,0,0.05),transparent_70%)] pointer-events-none" />
      <div className="absolute inset-0 bg-noise opacity-10 pointer-events-none" />

      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-50 px-6 py-8 flex justify-between items-center">
        <Link to="/" className="group flex items-center gap-3 text-white hover:text-los-orange transition-colors">
          <div className="w-10 h-10 border border-white/10 flex items-center justify-center group-hover:border-los-orange transition-colors">
            <ArrowLeft size={20} />
          </div>
          <span className="font-mono text-xs font-bold tracking-widest uppercase">Voltar</span>
        </Link>
      </header>

      <div className="w-full max-w-md p-8 relative z-10">
        
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-los-orange/10 border border-los-orange/30 text-los-orange mb-6">
            <ShieldCheck size={32} />
          </div>
          <h1 className="font-display font-black text-4xl uppercase tracking-tight mb-2">
            Área Restrita
          </h1>
          <p className="font-mono text-xs text-gray-500 uppercase tracking-widest">
            Acesso exclusivo para administradores
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-white/60 font-mono text-xs uppercase tracking-widest">
              <Lock size={14} /> Senha de Acesso
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError('');
              }}
              placeholder="••••••••••••"
              className="w-full bg-los-gray border border-white/10 p-4 font-mono text-sm focus:outline-none focus:border-los-orange transition-colors text-center tracking-[0.5em]"
              autoFocus
            />
          </div>

          {error && (
            <div className="flex items-center gap-2 text-red-500 bg-red-500/10 p-3 border border-red-500/20 text-xs font-mono uppercase tracking-wide">
              <AlertTriangle size={14} /> {error}
            </div>
          )}

          <button 
            type="submit"
            className="w-full py-4 bg-los-orange text-white font-display font-bold text-sm tracking-widest uppercase hover:bg-white hover:text-los-black transition-all shadow-[0_0_20px_rgba(255,61,0,0.2)] hover:shadow-[0_0_30px_rgba(255,61,0,0.4)]"
          >
            Autenticar
          </button>
        </form>

        <div className="mt-12 pt-8 border-t border-white/5 text-center">
          <p className="font-mono text-[10px] text-gray-600 uppercase tracking-widest">
            Los Grandes © 2025 // Admin System
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
