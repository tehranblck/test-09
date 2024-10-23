export interface NavigationItem {
    name: string;
    href: string;
    current: boolean;
  }
  
  export const navigation: NavigationItem[] = [
    { name: "Home", href: "/", current: false },
    { name: "About Us", href: "/about", current: false },
    { name: "Games", href: "/games", current: false },
    { name: "Privacy & Terms", href: "/privacy", current: false },
    { name: "Contact", href: "/contact", current: false },
  ];
  