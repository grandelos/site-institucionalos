import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { BLOG_POSTS } from '../data/blogData';

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content?: string; // Optional for now as the main list uses excerpt
  image: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
}

interface BlogContextType {
  posts: BlogPost[];
  addPost: (post: Omit<BlogPost, 'id' | 'date'>) => void;
  deletePost: (id: string) => void;
}

const BlogContext = createContext<BlogContextType | undefined>(undefined);

export const BlogProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [posts, setPosts] = useState<BlogPost[]>(BLOG_POSTS);

  // Load from LocalStorage on mount
  useEffect(() => {
    const savedPosts = localStorage.getItem('los_blog_posts');
    if (savedPosts) {
      try {
        const parsedPosts = JSON.parse(savedPosts);
        // Combine initial static posts with saved dynamic posts
        // Filter out duplicates if any (though IDs should be unique)
        const combined = [...parsedPosts, ...BLOG_POSTS];
        // Remove duplicates based on ID, preferring the saved version if edited (future proofing)
        const uniquePosts = Array.from(new Map(combined.map(item => [item.id, item])).values());
        
        // Sort by date descending
        uniquePosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
        
        setPosts(uniquePosts);
      } catch (e) {
        console.error("Failed to parse blog posts from local storage", e);
      }
    }
  }, []);

  const addPost = (newPostData: Omit<BlogPost, 'id' | 'date'>) => {
    const newPost: BlogPost = {
      ...newPostData,
      id: Date.now().toString(), // Simple ID generation
      date: new Date().toISOString(),
    };

    const updatedPosts = [newPost, ...posts];
    setPosts(updatedPosts);

    // Save only the *new* posts to local storage to avoid duplicating static data
    // Actually, simpler to just save the *custom* posts separately
    // But for this demo, let's just save the custom ones.
    
    // Filter out the original static posts to save only new ones
    const customPosts = updatedPosts.filter(p => !BLOG_POSTS.some(staticPost => staticPost.id === p.id));
    localStorage.setItem('los_blog_posts', JSON.stringify(customPosts));
  };

  const deletePost = (id: string) => {
    const updatedPosts = posts.filter(p => p.id !== id);
    setPosts(updatedPosts);
    
    const customPosts = updatedPosts.filter(p => !BLOG_POSTS.some(staticPost => staticPost.id === p.id));
    localStorage.setItem('los_blog_posts', JSON.stringify(customPosts));
  };

  return (
    <BlogContext.Provider value={{ posts, addPost, deletePost }}>
      {children}
    </BlogContext.Provider>
  );
};

export const useBlog = () => {
  const context = useContext(BlogContext);
  if (context === undefined) {
    throw new Error('useBlog must be used within a BlogProvider');
  }
  return context;
};
