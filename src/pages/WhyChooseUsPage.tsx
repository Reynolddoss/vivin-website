/**
 * WhyChooseUsPage Component
 * Detailed page explaining why customers should choose Vivin Constructions
 */

import React, { useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import './WhyChooseUsPage.css';

interface WhyChooseUsSection {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  description: string;
  features: string[];
  image?: string;
  stats?: { label: string; value: string }[];
}

const WhyChooseUsPage: React.FC = () => {
  const { sectionId } = useParams<{ sectionId: string }>();
  const location = useLocation();

  // Scroll to specific section when page loads
  useEffect(() => {
    if (sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, [sectionId]);

  const sections: WhyChooseUsSection[] = [
    {
      id: 'unmatched-quality',
      title: 'Unmatched Quality',
      subtitle: 'Building Excellence in Every Detail',
      icon: 'fas fa-shield-alt',
      description: 'At Vivin Constructions, quality isn\'t just a promise—it\'s our foundation. We believe that every project, regardless of size, deserves the highest standards of craftsmanship and materials.',
      features: [
        'Premium grade materials from trusted suppliers',
        'Skilled craftsmen with years of experience',
        'Rigorous quality control at every stage',
        'Industry-leading construction standards',
        'Comprehensive warranty on all work',
        'Regular quality audits and inspections'
      ],
      stats: [
        { label: 'Quality Rating', value: '98%' },
        { label: 'Client Satisfaction', value: '99%' },
        { label: 'Projects Completed', value: '200+' }
      ]
    },
    {
      id: 'transparent-process',
      title: 'Transparent Process',
      subtitle: 'Complete Clarity from Start to Finish',
      icon: 'fas fa-eye',
      description: 'We believe in complete transparency throughout your construction journey. No hidden costs, no surprises—just clear communication and honest pricing at every step.',
      features: [
        'Detailed project breakdown and estimates',
        'Real-time progress tracking via Hawk\'s Eye',
        'Regular client meetings and updates',
        'Transparent pricing with no hidden fees',
        'Open communication channels',
        'Comprehensive documentation and reports'
      ],
      stats: [
        { label: 'Transparency Score', value: '100%' },
        { label: 'On-Budget Projects', value: '95%' },
        { label: 'Client Communication', value: '24/7' }
      ]
    },
    {
      id: 'on-time-delivery',
      title: 'On-Time Delivery',
      subtitle: 'Your Time is Our Priority',
      icon: 'fas fa-clock',
      description: 'We understand that time is valuable. Our commitment to on-time delivery is backed by efficient project management, experienced teams, and proven processes.',
      features: [
        'Advanced project planning and scheduling',
        'Experienced project managers',
        'Efficient resource allocation',
        'Proactive issue resolution',
        'Regular milestone tracking',
        'Contingency planning for delays'
      ],
      stats: [
        { label: 'On-Time Delivery', value: '97%' },
        { label: 'Average Project Time', value: '-15%' },
        { label: 'Milestone Achievement', value: '98%' }
      ]
    },
    {
      id: 'value-for-money',
      title: 'Value for Money',
      subtitle: 'Exceptional Quality at Competitive Prices',
      icon: 'fas fa-coins',
      description: 'We provide exceptional value without compromising on quality. Our cost-effective solutions ensure you get the best possible outcome within your budget.',
      features: [
        'Competitive pricing strategies',
        'Bulk material purchasing discounts',
        'Efficient construction methods',
        'Waste reduction and recycling',
        'Long-term cost savings',
        'Value engineering solutions'
      ],
      stats: [
        { label: 'Cost Savings', value: '20%' },
        { label: 'Budget Adherence', value: '95%' },
        { label: 'ROI Improvement', value: '25%' }
      ]
    }
  ];

  return (
    <div className="why-choose-us-page">
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
              <h1 className="display-4 fw-bold mb-4">Why Choose Vivin Constructions?</h1>
              <p className="lead mb-5">
                Discover what makes us the preferred choice for construction projects across Karnataka
              </p>
            </div>
          </div>
        </div>
      </section>



      {/* Detailed Sections */}
      {sections.map((section, index) => (
        <section key={section.id} id={section.id} className={`detailed-section py-5 ${index % 2 === 0 ? 'bg-white' : 'bg-light'}`}>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="section-content">
                  <div className="section-header mb-4">
                    <div className="section-icon mb-3">
                      <i className={section.icon}></i>
                    </div>
                    <h2 className="section-title">{section.title}</h2>
                    <p className="section-subtitle text-muted">{section.subtitle}</p>
                  </div>
                  
                  <p className="section-description mb-4">{section.description}</p>
                  
                  <div className="section-features mb-4">
                    <h5 className="mb-3">Key Features:</h5>
                    <ul className="feature-list">
                      {section.features.map((feature, idx) => (
                        <li key={idx} className="feature-item">
                          <i className="fas fa-check text-warning me-2"></i>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {section.stats && (
                    <div className="section-stats">
                      <h5 className="mb-3">Our Performance:</h5>
                      <div className="stats-grid">
                        {section.stats.map((stat, idx) => (
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
                    <p className="mt-3 text-muted">Visual representation of {section.title.toLowerCase()}</p>
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
              <h3 className="mb-4">Ready to Experience the Difference?</h3>
              <p className="lead mb-4">
                Join hundreds of satisfied customers who chose Vivin Constructions for their projects.
              </p>
              <div className="cta-buttons">
                <a href="/contact" className="btn btn-warning btn-lg rounded-pill px-5 me-3">
                  Get Started Today
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

export default WhyChooseUsPage; 