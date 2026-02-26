export interface SlideData {
  id: number;
  image: string;
  alt: string;
  category?: string;
  objectPosition?: string; // CSS object-position value (e.g., 'center top')
}

export interface NavItem {
  label: string;
  href: string;
}