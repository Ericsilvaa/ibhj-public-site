import {
  ContactInfo,
  Podcast,
  ScheduleItem,
  SocialProfile,
  Video,
} from "@/types/midias";
import {
  MapPin,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Youtube,
} from "lucide-react";

// Lista de vídeos recentes do canal
export const RECENT_VIDEOS: Video[] = [
  {
    id: "video1",
    title:
      "Membresia e a importância da reunião presencial - Podcast IBHJ #173",
    videoId: "MJxB1BjJW5Y",
    description:
      "Neste episódio do Podcast IBHJ, discutimos por que a membresia e a reunião presencial são essenciais para a vida cristã.",
  },
  {
    id: "video2",
    title:
      "Culto Matinal - 9h | A integridade do evangelho na família - 11/05/2025",
    videoId: "vPHY_1E2bkE",
    description:
      "Mensagem ministrada no culto matinal sobre como manter a integridade do evangelho no ambiente familiar.",
  },
  {
    id: "video3",
    title: "O que é a igreja? | Podcast IBHJ #171",
    videoId: "Dw3WVnSrJKE",
    description:
      "Entenda o verdadeiro significado da igreja e o papel do corpo de Cristo na vida do cristão.",
  },
];

// Lista de podcasts
export const RECENT_PODCASTS: Podcast[] = [
  {
    id: 1,
    title: "Membresia e a importância da reunião presencial",
    date: "05/05/2025",
    duration: "46 min",
    description:
      "Neste episódio, discutimos os capítulos 2 e 3 do livro 'Igreja é essencial', abordando quem pode fazer parte da igreja e a importância das reuniões presenciais.",
    spotifyUrl: "https://open.spotify.com/episode/3brQP0hN8QSd1XkXUwUE4P",
    youtubeUrl: "https://www.youtube.com/watch?v=vPHY_1E2bkE",
  },
  {
    id: 2,
    title: "Você está preparado para defender sua fé?",
    date: "21/04/2025",
    duration: "49 min",
    description:
      "Iniciamos uma nova série sobre Apologética, explorando como defender a fé cristã diante dos desafios contemporâneos.",
    spotifyUrl: "https://open.spotify.com/episode/2sXFDudoU08aIjJByQ3cFK",
    youtubeUrl: "https://www.youtube.com/watch?v=PfokFaV6wsc",
  },
  {
    id: 3,
    title: "O que é a igreja?",
    date: "07/04/2025",
    duration: "38 min",
    description:
      "Reflexão sobre o significado da igreja, com base no livro 'Igreja é essencial', destacando a importância do corpo de Cristo na vida do cristão.",
    spotifyUrl: "https://open.spotify.com/episode/3UyB7W8mZL38iljz79pInm",
    youtubeUrl: "https://www.youtube.com/watch?v=Dw3WVnSrJKE",
  },
];

export const SOCIAL_PROFILES: SocialProfile[] = [
  {
    label: "Instagram",
    url: "https://www.instagram.com/ibhenriquejorge",
    display: "@ibhenriquejorge",
    icon: Instagram,
  },
  {
    label: "Facebook",
    url: "https://www.facebook.com/IB.Henrique.Jorge",
    display: "fb.com/IB.Henrique.Jorge",
    icon: Facebook,
  },
  {
    label: "YouTube",
    url: "https://www.youtube.com/@CanalIBHJ",
    display: "Canal da IBHJ",
    icon: Youtube,
  },
];

export const OPERATING_HOURS: ScheduleItem[] = [
  { day: "Segunda a Sexta", time: "08h00 às 17h00" },
  { day: "Sábado", time: "08h00 às 12h00" },
  { day: "Domingo", time: "08h00 às 12h00 e 17h00 às 21h00" },
];

export const CONTACT_INFOS: ContactInfo[] = [
  {
    label: "Endereço",
    value: `Rua Porto Alegre, 997 - Henrique Jorge\nFortaleza/CE - CEP: 60510-300`,
    icon: MapPin,
  },
  {
    label: "Telefone",
    value: "(85) 3290-4543",
    icon: Phone,
  },
  {
    label: "E-mail",
    value: "contato@ibhj.org",
    icon: Mail,
  },
];
