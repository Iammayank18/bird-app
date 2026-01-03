
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  content: string;
  rating: number;
  avatar: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'Residential' | 'Industrial' | 'Installation' | 'Warranty';
}

export interface GalleryProject {
  id: string;
  title: string;
  category: string;
  location: string;
  imageUrl: string;
  beforeUrl?: string;
}
