/**
 * HomePage Component
 * Main landing page with hero, services, process, and other sections
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { pageData } from '../data/pageData';
import HeroSection from '../components/Home/HeroSection';
import ServicesSection from '../components/Home/ServicesSection';
import WhyUsSection from '../components/Home/WhyUsSection';
import ProcessSection from '../components/Home/ProcessSection';
import TechnologySection from '../components/Home/TechnologySection';
import HawksEyeSection from '../components/Home/HawksEyeSection';
import TestimonialsSection from '../components/Home/TestimonialsSection';

const HomePage: React.FC = () => {
  const { home } = pageData;

  return (
    <div className="home-page">
      {/* Hero Section */}
      <HeroSection hero={home.hero} />

      {/* Services Section */}
      <ServicesSection services={home.services} />

      {/* Why Choose Us Section */}
      <WhyUsSection whyUs={home.whyUs} />

      {/* Technology Section */}
      <TechnologySection technology={home.technology} />

      {/* How It Works Section */}
      <section id="process" className="py-5 bg-light">
        <div className="container py-4">
          <div className="text-center mb-5">
            <h2 className="section-title mb-3 fade-in">Your Journey to Your Dream Home</h2>
            <p className="lead text-muted mx-auto fade-in" style={{maxWidth: '600px'}}>Follow our proven roadmap to bring your vision to life, step by step.</p>
          </div>
          <ProcessSection process={home.process} />
        </div>
      </section>

      {/* Hawk's Eye Feature Section */}
      <HawksEyeSection />

      {/* Testimonials Section */}
      <section id="testimonials" className="py-5 bg-light">
        <div className="container py-4">
          <div className="text-center mb-5">
            <h2 className="section-title mb-3 fade-in">What Our Clients Say</h2>
          </div>
          <TestimonialsSection testimonials={home.testimonials} />
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="py-5 bg-warning text-white">
        <div className="container py-4 text-center">
          <h2 className="fw-bold mb-3 fade-in">Ready to Start Your Dream Project?</h2>
          <p className="lead mb-4 fade-in">Let's build something amazing together. Contact us for a free, no-obligation quote.</p>
          <div className="cta-buttons">
            <Link to="/contact" className="btn btn-light btn-lg rounded-pill px-5 fade-in me-3">Get Your Free Quote</Link>
            <a 
              href="/brochure.pdf" 
              download="Vivin_Constructions_Brochure.pdf"
              className="btn btn-outline-light btn-lg rounded-pill px-5 fade-in"
            >
              <i className="fas fa-download me-2"></i>
              Download Brochure
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage; 