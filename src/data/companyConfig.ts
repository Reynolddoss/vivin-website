/**
 * Company Configuration Data
 * Centralized company information and navigation data
 */

import { CompanyConfig } from '../types';

export const companyConfig: CompanyConfig = {
  // Company basic information
  name: 'Vivin Constructions',
  tagline: 'Visionary Ideas, Valuable Innovations',
  logo: '/images/logo.png',
  
  // Contact information
  contact: {
    address: '#39 Pride Icon Hubballi Karnataka',
    phone: '+91 9449836556',
    email: 'contact@vivinconstructions.com'
  },
  
  // Social media links
  social: {
    facebook: '#',
    twitter: '#',
    instagram: '#',
    linkedin: '#'
  },
  
  // Navigation menu items
  navigation: {
    navItems: [
      { href: '/', text: 'Home' },
      { href: '/#services', text: 'About Us' },
      { href: '/#process', text: 'Process' },
      // { href: '/blogs', text: 'Blogs' },
      // { href: '/team', text: 'Team' },
      { href: '/careers', text: 'Careers' }
    ],
    contactButton: { href: '/contact', text: 'Contact Us' }
  }
}; 