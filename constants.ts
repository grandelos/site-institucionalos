import { SlideData } from './types';

// Updated with high-impact Esports imagery (Stages, Players, Arenas)
export const HERO_SLIDES: SlideData[] = [
  {
    id: 1,
    // The uploaded Orange/Champions Image
    image: "https://richardhey.com.br/wp-content/uploads/2026/01/capa-los.png", 
    alt: "Los Grandes Champions Team 2025",
    category: "CHAMPIONS",
    objectPosition: "center top"
  },
  {
    id: 2,
    // Esports Stage/Team Atmosphere
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2670&auto=format&fit=crop", 
    alt: "Los Grandes Official Team Stage Presence",
    category: "SQUAD 2025",
    objectPosition: "center center"
  },
  {
    id: 3,
    // Cinematic Stage Lighting (LoL Vibes)
    image: "https://images.unsplash.com/photo-1560253023-3ec5d502959f?q=80&w=2670&auto=format&fit=crop", 
    alt: "League of Legends Championship Atmosphere",
    category: "LEAGUE OF LEGENDS",
    objectPosition: "center center"
  }
];

// Revised Hierarchy: Removed 'Home', 'Shop' (moved to CTA), renamed others for impact
export const NAV_LINKS = [
  { label: 'SQUADS', href: '/squads' },
  { label: 'INFLUS', href: '/influs' },
  { label: 'AGENDA', href: '/agenda' },
  { label: 'BLOG', href: '/blog' },
  { label: 'NOSSA HISTÓRIA', href: '/historia' },
];