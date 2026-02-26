import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface AuthContextType {
  isAuthenticated: boolean;
  login: (password: string) => boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const ADMIN_PASS_HASH = "btoa('L0S_GR4ND3S_2025!')"; // Simple obfuscation for demo. In real app, use bcrypt on server.
// Actually, for client-side only demo, we can just check against a string, but let's be slightly cleaner.
// Real password will be: L0S_GR4ND3S_2025!

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    const session = localStorage.getItem('los_admin_session');
    if (session === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const login = (password: string): boolean => {
    // Hardcoded secure credential for this demo environment
    if (password === 'L0S_GR4ND3S_2025!') {
      setIsAuthenticated(true);
      localStorage.setItem('los_admin_session', 'true');
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('los_admin_session');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
