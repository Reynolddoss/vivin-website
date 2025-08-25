/**
 * HeroSection Component
 * Main hero section with call-to-action
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { HeroSection as HeroSectionType } from '../../types';

interface HeroSectionProps {
  hero: HeroSectionType;
}

const HeroSection: React.FC<HeroSectionProps> = ({ hero }) => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-overlay"></div>
      <div className="container hero-content">
        <div className="col-lg-8 mx-auto">
          <h1 className="hero-title mb-3">
            <span className="hero-title-main">{hero.title}</span>
            <span className="hero-title-sub">{hero.subtitle}</span>
          </h1>
          <p className="lead fs-4 mb-4">{hero.tagline}</p>
          {/* Only render the Link component if ctaLink is provided */}
          {hero.ctaLink && (
            <Link to={hero.ctaLink} className="btn btn-warning btn-lg rounded-pill px-5">
              {hero.ctaText}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 