import { Instagram } from 'lucide-react';

export interface InstagramPost {
  id: string;
  caption: string;
  media_type: 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM';
  media_url: string;
  thumbnail_url?: string; // For videos
  permalink: string;
  timestamp: string;
}

const INSTAGRAM_API_URL = 'https://graph.instagram.com/me/media';

export const fetchInstagramPosts = async (accessToken: string, limit = 4) => {
  try {
    const fields = 'id,caption,media_type,media_url,thumbnail_url,permalink,timestamp';
    const url = `${INSTAGRAM_API_URL}?fields=${fields}&access_token=${accessToken}&limit=${limit}`;
    
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error('Failed to fetch Instagram posts');
    }

    const data = await response.json();
    return data.data as InstagramPost[];
  } catch (error) {
    console.error('Instagram API Error:', error);
    return null;
  }
};

export const formatTimeAgo = (dateString: string) => {
  const date = new Date(dateString);
  const now = new Date();
  const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);
  
  let interval = seconds / 31536000;
  if (interval > 1) return Math.floor(interval) + " anos atrás";
  
  interval = seconds / 2592000;
  if (interval > 1) return Math.floor(interval) + " meses atrás";
  
  interval = seconds / 86400;
  if (interval > 1) return Math.floor(interval) + " dias atrás";
  
  interval = seconds / 3600;
  if (interval > 1) return Math.floor(interval) + "h atrás";
  
  interval = seconds / 60;
  if (interval > 1) return Math.floor(interval) + "min atrás";
  
  return "Agora mesmo";
};
