/**
 * ContactHero Component
 * Hero section for contact page
 */

import React from 'react';
import { HeroSection } from '../../types';

interface ContactHeroProps {
  hero: HeroSection;
}

const ContactHero: React.FC<ContactHeroProps> = ({ hero }) => {
  return (
    <section 
      id="contact-hero" 
      className="hero-section text-white text-center py-5"
      style={{ 
        background: hero.background || undefined,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <h1 className="display-4 fw-bold mb-4">{hero.title}</h1>
            <p className="lead mb-5">{hero.subtitle}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero; 