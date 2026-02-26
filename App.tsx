import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import HistoryPage from './pages/HistoryPage';
import SquadsPage from './pages/SquadsPage';
import InfluencersPage from './pages/InfluencersPage';
import AgendaPage from './pages/AgendaPage';
import BlogPage from './pages/BlogPage';
import AdminBlogPage from './pages/AdminBlogPage';
import LoginPage from './pages/LoginPage';
import ShopPage from './pages/ShopPage';
import ProtectedRoute from './components/ProtectedRoute';
import { BlogProvider } from './src/context/BlogContext';
import { AuthProvider } from './src/context/AuthContext';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <BlogProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/historia" element={<HistoryPage />} />
            <Route path="/squads" element={<SquadsPage />} />
            <Route path="/influs" element={<InfluencersPage />} />
            <Route path="/agenda" element={<AgendaPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/loja" element={<ShopPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route 
              path="/admin/blog" 
              element={
                <ProtectedRoute>
                  <AdminBlogPage />
                </ProtectedRoute>
              } 
            />
          </Routes>
        </Router>
      </BlogProvider>
    </AuthProvider>
  );
};

export default App;