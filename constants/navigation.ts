import { MapPin, Phone, Mail } from "lucide-react";
import {
  ContactItemFooter,
  NavigationItem,
  NavLinkFooter,
} from "../types/navigation";

export const NAVIGATION: NavigationItem[] = [
  { name: "Início", href: "/" },
  { name: "Quem Somos", href: "/quem-somos" },
  // { name: "Ministérios", href: "/ministerios" },
  // { name: "Programação", href: "/programacao" },
  // { name: "Galeria", href: "/galeria" },
  // { name: "Blog", href: "/blog" },
  { name: "Mídias", href: "/midia" },
  { name: "Contato", href: "/contato" },
];

// LINKS FOOTER
export const QUICK_LINKS: NavLinkFooter[] = [
  { name: "Início", href: "/" },
  { name: "Quem Somos", href: "/quem-somos" },
  // { name: "Ministérios", href: "/ministerios" },
  // { name: "Programação", href: "/programacao" },
];

export const MORE_LINKS: NavLinkFooter[] = [
  // { name: "Galeria", href: "/galeria" },
  { name: "Podcast / Mídia", href: "/midia" },
  { name: "Contato", href: "/contato" },
  // { name: "Área do Membro", href: "/membro" },
];

export const CONTACT_INFOS_FOOTER: ContactItemFooter[] = [
  {
    icon: MapPin,
    value: "Rua Porto Alegre, 997 - Henrique Jorge - Fortaleza/CE",
  },
  {
    icon: Phone,
    value: "(85) 3290-4543",
  },
  {
    icon: Mail,
    value: "contato@ibhj.org",
  },
];
