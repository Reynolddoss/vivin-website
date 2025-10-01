/**
 * TypeScript interfaces for Vivin Constructions React App
 * Defines the structure of all data used throughout the application
 */

// Company configuration interface
export interface CompanyConfig {
  name: string;
  tagline: string;
  logo: string;
  contact: {
    address: string;
    phone: string;
    email: string;
  };
  social: {
    facebook: string;
    youtube: string;
    instagram: string;
    // linkedin: string;
  };
  navigation: {
    navItems: NavigationItem[];
    contactButton: NavigationItem;
  };
}

// Navigation item interface
export interface NavigationItem {
  href: string;
  text: string;
}

// Hero section interface
export interface HeroSection {
  title: string;
  subtitle: string;
  tagline?: string;
  ctaText?: string;
  ctaLink?: string;
  background?: string;
}

// Service item interface
export interface ServiceItem {
  icon: string;
  title: string;
  description: string;
  link: string;
}

// Why us item interface
export interface WhyUsItem {
  icon: string;
  title: string;
  description: string;
  link: string;
}

// Process step interface
export interface ProcessStep {
  number: string;
  image: string;
  title: string;
  description: string;
}

// Technology feature interface
export interface TechnologyFeature {
  icon: string;
  title: string;
  description: string;
  tags: string[];
}

// Technology image interface
export interface TechnologyImage {
  src: string;
  alt: string;
  stat: string;
  label: string;
}

// Technology section interface
export interface TechnologySection {
  images: TechnologyImage[];
  features: TechnologyFeature[];
}

// Testimonial interface
export interface Testimonial {
  quote: string;
  author: string;
}

// Office address interface
export interface OfficeAddress {
  street: string;
  city: string;
  state: string;
  country: string;
}

// Office phone interface
export interface OfficePhone {
  main: string;
  support: string;
}

// Office email interface
export interface OfficeEmail {
  info: string;
  contact: string;
}

// Office hours interface
export interface OfficeHours {
  weekdays: string;
  saturday: string;
  sunday: string;
}

// Corporate office interface
export interface CorporateOffice {
  title: string;
  badge: string;
  icon: string;
  address: OfficeAddress;
  phone: OfficePhone;
  email: OfficeEmail;
  hours: OfficeHours;
  mapUrl: string;
  directionsUrl: string;
  qrCode: string;
}

// Branch office interface
export interface BranchOffice {
  name: string;
  badge: string;
  icon: string;
  phone?: string[];
  email: string;
  callUrl?: string;
  status?: string;
  openingSoon?: boolean;
}

// Offices interface
export interface Offices {
  corporate: CorporateOffice;
  branches: BranchOffice[];
}

// Team member interface
export interface TeamMember {
  name: string;
  role: string;
  badge: string;
  image: string;
  stats: Array<{
    icon: string;
    text: string;
  }>;
  bio: string;
  social: {
    linkedin?: string;
    twitter?: string;
    email?: string;
    behance?: string;
    github?: string;
    instagram?: string;
  };
}

// Job position interface
export interface JobPosition {
  title: string;
  type: string;
  experience: string;
  requirements: string[];
  responsibilities: string[];
}

// Branch interface for careers
export interface Branch {
  name: string;
  location: string;
  address: string;
  positions: JobPosition[];
}

// Application step interface
export interface ApplicationStep {
  step: number;
  title: string;
  description: string;
}

// Application contact interface
export interface ApplicationContact {
  email: string;
  phone: string;
  address: string;
}

// Application process interface
export interface ApplicationProcess {
  title: string;
  description: string;
  steps: ApplicationStep[];
  contact: ApplicationContact;
}

// Careers page interface
export interface CareersPage {
  title: string;
  hero: HeroSection;
  intro: {
    title: string;
    description: string;
    benefits: string[];
  };
  branches: Branch[];
  application: ApplicationProcess;
}

// Contact page interface
export interface ContactPage {
  title: string;
  hero: HeroSection;
  offices: Offices;
}

// Team page interface
export interface TeamPage {
  title: string;
  hero: HeroSection;
  team: TeamMember[];
}

// Home page interface
export interface HomePage {
  title: string;
  hero: HeroSection;
  services: ServiceItem[];
  whyUs: WhyUsItem[];
  process: ProcessStep[];
  technology: TechnologySection;
  testimonials: Testimonial[];
}

// Error page interface
export interface ErrorPage {
  title: string;
  message: string;
}

// Page data interface
export interface PageData {
  home: HomePage;
  contact: ContactPage;
  team: TeamPage;
  careers: CareersPage;
  error: {
    notFound: ErrorPage;
    serverError: ErrorPage;
  };
} 