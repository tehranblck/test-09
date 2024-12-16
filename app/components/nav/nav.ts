export interface NavigationItem {
  name: string;
  href: string;
  current: boolean;
}

export const navigation: NavigationItem[] = [
  { name: "Home", href: "/", current: false },
  { name: "About Us", href: "/about", current: false },
  { name: "Game", href: "/game", current: false },
  { name: "Privacy & Terms", href: "/privacy", current: false },
  { name: "Contact", href: "/contact", current: false },
];
