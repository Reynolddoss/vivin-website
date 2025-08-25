/**
 * ServicesPage Component
 * Detailed page explaining all services offered by Vivin Constructions
 */

import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ServicesPage.css';

interface ServiceSection {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  description: string;
  features: string[];
  process: string[];
  benefits: string[];
  image?: string;
  stats?: { label: string; value: string }[];
}

const ServicesPage: React.FC = () => {
  const { serviceId } = useParams<{ serviceId: string }>();

  // Scroll to specific section when page loads
  useEffect(() => {
    if (serviceId) {
      const element = document.getElementById(serviceId);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, [serviceId]);

  const services: ServiceSection[] = [
    {
      id: 'residential-construction',
      title: 'Residential Construction',
      subtitle: 'Building Your Dream Home from Foundation to Finish',
      icon: 'fas fa-home',
      description: 'Transform your vision into a beautiful, functional home that reflects your lifestyle and personality. Our residential construction services cover everything from custom homes to renovations and extensions.',
      features: [
        'Custom home design and construction',
        'House renovations and remodeling',
        'Kitchen and bathroom upgrades',
        'Home extensions and additions',
        'Interior and exterior finishing',
        'Landscaping and outdoor spaces'
      ],
      process: [
        'Initial consultation and site assessment',
        'Design development and planning',
        'Material selection and procurement',
        'Construction and quality control',
        'Final inspection and handover',
        'Post-completion support'
      ],
      benefits: [
        'Personalized design solutions',
        'Quality craftsmanship and materials',
        'Timely project completion',
        'Comprehensive warranty coverage',
        'Energy-efficient construction',
        'Increased property value'
      ],
      stats: [
        { label: 'Homes Built', value: '150+' },
        { label: 'Client Satisfaction', value: '98%' },
        { label: 'Average Build Time', value: '6-8 months' }
      ]
    },
    {
      id: 'commercial-projects',
      title: 'Commercial Projects',
      subtitle: 'Creating Functional Spaces for Business Success',
      icon: 'fas fa-building',
      description: 'From office buildings to retail spaces, we deliver commercial construction projects that meet business needs while ensuring quality, efficiency, and compliance with all regulations.',
      features: [
        'Office buildings and corporate spaces',
        'Retail stores and shopping centers',
        'Restaurants and hospitality venues',
        'Industrial facilities and warehouses',
        'Healthcare and educational facilities',
        'Mixed-use developments'
      ],
      process: [
        'Business requirements analysis',
        'Regulatory compliance planning',
        'Commercial design and engineering',
        'Construction management and oversight',
        'Safety and quality assurance',
        'Project delivery and handover'
      ],
      benefits: [
        'Business-focused design solutions',
        'Regulatory compliance assurance',
        'Cost-effective construction methods',
        'Minimal business disruption',
        'Enhanced operational efficiency',
        'Long-term investment value'
      ],
      stats: [
        { label: 'Commercial Projects', value: '75+' },
        { label: 'On-Time Delivery', value: '95%' },
        { label: 'Budget Adherence', value: '92%' }
      ]
    },
    {
      id: 'architectural-consultation',
      title: 'Architectural Consultation & Design',
      subtitle: 'Innovative Designs That Balance Aesthetics with Functionality',
      icon: 'fas fa-drafting-compass',
      description: 'Our architectural services combine creativity with technical expertise to create designs that are both beautiful and practical. We work closely with clients to bring their vision to life.',
      features: [
        'Architectural design and planning',
        '3D modeling and visualization',
        'Space planning and optimization',
        'Sustainable design solutions',
        'Interior design coordination',
        'Construction documentation'
      ],
      process: [
        'Client consultation and brief development',
        'Concept design and exploration',
        'Detailed design development',
        '3D visualization and presentation',
        'Technical documentation',
        'Construction support and supervision'
      ],
      benefits: [
        'Creative and innovative designs',
        'Functional space optimization',
        'Sustainable and eco-friendly solutions',
        'Cost-effective design approaches',
        'Enhanced property aesthetics',
        'Future-proof design considerations'
      ],
      stats: [
        { label: 'Designs Created', value: '200+' },
        { label: 'Client Approval Rate', value: '99%' },
        { label: 'Design Awards', value: '15+' }
      ]
    },
    {
      id: 'smart-sustainable-buildings',
      title: 'Smart & Sustainable Buildings',
      subtitle: 'Future-Ready Construction with Environmental Responsibility',
      icon: 'fas fa-seedling',
      description: 'Build for the future with our smart and sustainable construction services. We integrate cutting-edge technology and eco-friendly practices to create buildings that are efficient, comfortable, and environmentally responsible.',
      features: [
        'Energy-efficient building systems',
        'Smart home automation integration',
        'Renewable energy solutions',
        'Green building materials',
        'Water conservation systems',
        'Indoor air quality optimization'
      ],
      process: [
        'Sustainability assessment and planning',
        'Smart technology integration design',
        'Green material selection',
        'Energy-efficient construction',
        'Smart system installation',
        'Performance monitoring and optimization'
      ],
      benefits: [
        'Reduced energy consumption',
        'Lower utility costs',
        'Enhanced comfort and convenience',
        'Increased property value',
        'Environmental responsibility',
        'Future-ready infrastructure'
      ],
      stats: [
        { label: 'Energy Savings', value: '40%' },
        { label: 'Carbon Footprint Reduction', value: '60%' },
        { label: 'Smart Buildings', value: '50+' }
      ]
    }
  ];

  return (
    <div className="services-page">
      {/* Hero Section */}
      <section 
        className="hero-section text-white text-center py-5"
        style={{ 
          background: 'linear-gradient(135deg, rgba(13, 27, 42, 0.8) 0%, rgba(27, 38, 59, 0.8) 50%, rgba(44, 62, 80, 0.8) 100%), url("https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <h1 className="display-4 fw-bold mb-4">What We Do</h1>
              <p className="lead mb-5">
                Comprehensive construction services tailored to your needs, from concept to completion
              </p>
            </div>
          </div>
        </div>
      </section>



      {/* Detailed Service Sections */}
      {services.map((service, index) => (
        <section key={service.id} id={service.id} className={`detailed-section py-5 ${index % 2 === 0 ? 'bg-white' : 'bg-light'}`}>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="section-content">
                  <div className="section-header mb-4">
                    <div className="section-icon mb-3">
                      <i className={service.icon}></i>
                    </div>
                    <h2 className="section-title">{service.title}</h2>
                    <p className="section-subtitle text-muted">{service.subtitle}</p>
                  </div>
                  
                  <p className="section-description mb-4">{service.description}</p>
                  
                  <div className="section-features mb-4">
                    <h5 className="mb-3">Our Services Include:</h5>
                    <ul className="feature-list">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="feature-item">
                          <i className="fas fa-check text-warning me-2"></i>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <div className="section-process mb-4">
                        <h5 className="mb-3">Our Process:</h5>
                        <ol className="process-list">
                          {service.process.map((step, idx) => (
                            <li key={idx} className="process-item">
                              {step}
                            </li>
                          ))}
                        </ol>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="section-benefits mb-4">
                        <h5 className="mb-3">Key Benefits:</h5>
                        <ul className="benefits-list">
                          {service.benefits.map((benefit, idx) => (
                            <li key={idx} className="benefit-item">
                              <i className="fas fa-star text-warning me-2"></i>
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {service.stats && (
                    <div className="section-stats">
                      <h5 className="mb-3">Our Track Record:</h5>
                      <div className="stats-grid">
                        {service.stats.map((stat, idx) => (
                          <div key={idx} className="stat-item">
                            <div className="stat-value">{stat.value}</div>
                            <div className="stat-label">{stat.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
              
              <div className="col-lg-6">
                <div className="section-image">
                  <div className="image-placeholder">
                    <i className="fas fa-building"></i>
                    <p className="mt-3 text-muted">Visual representation of {service.title.toLowerCase()}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="cta-section py-5 bg-dark text-white text-center">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <h3 className="mb-4">Ready to Start Your Project?</h3>
              <p className="lead mb-4">
                Let's discuss your requirements and create something amazing together.
              </p>
              <div className="cta-buttons">
                <a href="/contact" className="btn btn-warning btn-lg rounded-pill px-5 me-3">
                  Get Free Consultation
                </a>
                <a 
                  href="/brochure.pdf" 
                  download="Vivin_Constructions_Brochure.pdf"
                  className="btn btn-outline-light btn-lg rounded-pill px-5 me-3"
                >
                  <i className="fas fa-download me-2"></i>
                  Download Brochure
                </a>
                <a href="/" className="btn btn-outline-light btn-lg rounded-pill px-5">
                  Back to Home
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage; 