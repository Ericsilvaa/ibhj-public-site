import { LucideIcon } from "lucide-react";
import { JSX } from "react";

export type NavigationItem = {
  name: string;
  href: string;
  icon?: React.ElementType;
  external?: boolean;
  section?: "main" | "footer" | "mobile";
};

export type ContactItemFooter = {
  icon: LucideIcon;
  value: string;
};

export type NavLinkFooter = {
  name: string;
  href: string;
};
