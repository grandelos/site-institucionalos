import { Swords, Crosshair, Smartphone, Target, Zap, Trophy, Tv } from 'lucide-react';

export const AGENDA_DATA = [
  {
    id: 1,
    date: "2025-03-15",
    time: "13:00",
    game: "LEAGUE OF LEGENDS",
    event: "CBLOL 2025 - SPLIT 1",
    opponent: {
      name: "LOUD",
      logo: "https://cdn.escharts.com/uploads/public/620/b9b/37b/620b9b37b344e047162553.png"
    },
    status: "UPCOMING",
    icon: Swords,
    streamUrl: "https://twitch.tv/cblol"
  },
  {
    id: 2,
    date: "2025-03-15",
    time: "18:00",
    game: "VALORANT",
    event: "VCT AMERICAS - STAGE 1",
    opponent: {
      name: "SENTINELS",
      logo: "https://cdn.escharts.com/uploads/public/605/88a/67e/60588a67e344e047162553.png"
    },
    status: "UPCOMING",
    icon: Target,
    streamUrl: "https://twitch.tv/valorant_br"
  },
  {
    id: 3,
    date: "2025-03-16",
    time: "14:00",
    game: "FREE FIRE",
    event: "LBFF 2025 - RODADA 12",
    opponent: {
      name: "FLUXO",
      logo: "https://cdn.escharts.com/uploads/public/600/123/456/600123456344e047162553.png"
    },
    status: "UPCOMING",
    icon: Smartphone,
    streamUrl: "https://youtube.com/freefirebr"
  },
  {
    id: 4,
    date: "2025-03-18",
    time: "20:00",
    game: "RAINBOW SIX",
    event: "BRASILEIRÃO R6",
    opponent: {
      name: "W7M",
      logo: "https://cdn.escharts.com/uploads/public/600/789/012/600789012344e047162553.png"
    },
    status: "UPCOMING",
    icon: Crosshair,
    streamUrl: "https://twitch.tv/r6esportsbr"
  },
  {
    id: 5,
    date: "2025-03-20",
    time: "15:00",
    game: "CS2",
    event: "PGL MAJOR COPENHAGEN",
    opponent: {
      name: "NAVI",
      logo: "https://cdn.escharts.com/uploads/public/600/345/678/600345678344e047162553.png"
    },
    status: "UPCOMING",
    icon: Zap,
    streamUrl: "https://twitch.tv/gaules"
  },
  {
    id: 6,
    date: "2025-03-22",
    time: "10:00",
    game: "EVENTO",
    event: "LOS DAY - ENCONTRO DE FÃS",
    opponent: null,
    status: "UPCOMING",
    icon: Trophy,
    streamUrl: null
  }
];
