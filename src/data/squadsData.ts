import { Swords, Crosshair, Smartphone, Target, Zap } from 'lucide-react';

export const SQUADS_DATA = [
  {
    id: "lol",
    game: "LEAGUE OF LEGENDS",
    icon: Swords,
    image: "https://cdn1.epicgames.com/offer/24b9b5e323bc40eea252a10cdd3b2f10/EGS_LeagueofLegends_RiotGames_S1_2560x1440-47eb328eac5ddd63ebd096ded7d0d5ab",
    players: [
      { id: 101, nick: "STORM", name: "Leonardo Pereira", role: "TOP", image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2680&auto=format&fit=crop" },
      { id: 102, nick: "KING", name: "Ricardo Mendes", role: "JUNGLE", image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2680&auto=format&fit=crop" },
      { id: 103, nick: "MIDGOD", name: "Thiago Ferreira", role: "MID", image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=2680&auto=format&fit=crop" },
      { id: 104, nick: "CARRY", name: "Vinicius Dias", role: "ADC", image: "https://images.unsplash.com/photo-1628157588553-5eeea00af15c?q=80&w=2680&auto=format&fit=crop" },
      { id: 105, nick: "SUPPORT", name: "Gabriel Lima", role: "SUP", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2574&auto=format&fit=crop" },
    ]
  },
  {
    id: "valorant",
    game: "VALORANT",
    icon: Target,
    image: "https://assets.xboxservices.com/assets/4e/bc/4ebcb533-e184-42f3-833b-9aa47a81f39e.jpg?n=153142244433_Poster-Image-1084_1920x720.jpg",
    players: [
      { id: 201, nick: "ASPAS", name: "Erick Santos", role: "DUELISTA", image: "https://images.unsplash.com/photo-1537511446984-935f663eb1f4?q=80&w=2670&auto=format&fit=crop" },
      { id: 202, nick: "LESS", name: "Felipe Basso", role: "SENTINELA", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=2574&auto=format&fit=crop" },
      { id: 203, nick: "SAADHAK", name: "Matias Delipetro", role: "IGL", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=2574&auto=format&fit=crop" },
      { id: 204, nick: "CAUANZIN", name: "Cauan Pereira", role: "INICIADOR", image: "https://images.unsplash.com/photo-1618077360395-f3068be8e001?q=80&w=2680&auto=format&fit=crop" },
      { id: 205, nick: "TUYZ", name: "Arthur Vieira", role: "CONTROLADOR", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2670&auto=format&fit=crop" },
    ]
  },
  {
    id: "ff",
    game: "FREE FIRE MOBILE",
    icon: Smartphone,
    image: "https://files.meiobit.com/wp-content/uploads/2020/01/20200125garena-free-fire-001.jpg",
    players: [
      { id: 301, nick: "GHOST", name: "Gabriel Santos", role: "RUSH", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2574&auto=format&fit=crop" },
      { id: 302, nick: "PHOENIX", name: "Lucas Silva", role: "CAPITÃO", image: "https://images.unsplash.com/photo-1537511446984-935f663eb1f4?q=80&w=2670&auto=format&fit=crop" },
      { id: 303, nick: "DRACO", name: "Matheus Oliveira", role: "GRANADEIRO", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=2574&auto=format&fit=crop" },
      { id: 304, nick: "TITAN", name: "Bruno Costa", role: "RUSH", image: "https://images.unsplash.com/photo-1618077360395-f3068be8e001?q=80&w=2680&auto=format&fit=crop" },
    ]
  },
  {
    id: "r6",
    game: "RAINBOW SIX",
    icon: Crosshair,
    image: "https://noticias.maisesports.com.br/wp-content/uploads/2021/04/20200612-rainbow-six-siege.jpg",
    players: [
      { id: 401, nick: "MAESTRO", name: "Rafael Lima", role: "IGL", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2574&auto=format&fit=crop" },
      { id: 402, nick: "VIPER", name: "André Souza", role: "ENTRY", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2574&auto=format&fit=crop" },
      { id: 403, nick: "SHIELD", name: "Pedro Alves", role: "SUPORTE", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=2574&auto=format&fit=crop" },
      { id: 404, nick: "ECHO", name: "Felipe Martins", role: "ROAMER", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2670&auto=format&fit=crop" },
    ]
  },
  {
    id: "cs2",
    game: "CS2",
    icon: Zap,
    image: "https://img-cdn.hltv.org/gallerypicture/eNFRc95--El3YT3fdEaXib.png?ixlib=java-2.1.0&w=1200&s=b368b07d32f397c599025770fe16bdc3",
    players: [
      { id: 501, nick: "FALLEN", name: "Gabriel Toledo", role: "AWPER", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2574&auto=format&fit=crop" },
      { id: 502, nick: "FER", name: "Fernando Alvarenga", role: "ENTRY", image: "https://images.unsplash.com/photo-1537511446984-935f663eb1f4?q=80&w=2670&auto=format&fit=crop" },
      { id: 503, nick: "COLD", name: "Marcelo David", role: "RIFLER", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=2574&auto=format&fit=crop" },
      { id: 504, nick: "TACO", name: "Epitácio de Melo", role: "SUPPORT", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=2574&auto=format&fit=crop" },
      { id: 505, nick: "FNX", name: "Lincoln Lau", role: "LURKER", image: "https://images.unsplash.com/photo-1618077360395-f3068be8e001?q=80&w=2680&auto=format&fit=crop" },
    ]
  }
];
