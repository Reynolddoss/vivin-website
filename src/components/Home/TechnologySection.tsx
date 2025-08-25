/**
 * TechnologySection Component
 * Displays technology features and images
 */

import React from 'react';
import { TechnologySection as TechnologySectionType } from '../../types';

interface TechnologySectionProps {
  technology: TechnologySectionType;
}

const TechnologySection: React.FC<TechnologySectionProps> = ({ technology }) => {
  return (
    <section id="technology" className="py-4 bg-dark text-white">
      <div className="container py-4">
        <div className="text-center mb-5">
          <div className="tech-badge mb-3 fade-in">
            <i className="fas fa-rocket me-2"></i>
            <span>FUTURE TECHNOLOGY</span>
          </div>
          <h2 className="section-title text-white mb-3 fade-in">Building with Tomorrow's Technology</h2>
          <p className="lead text-light mx-auto fade-in" style={{maxWidth: '700px'}}>We leverage cutting-edge technology to bring unparalleled precision, efficiency, and immersion to your project.</p>
        </div>
        
        <div className="row align-items-center g-5">
          <div className="col-lg-6 fade-in">
            <div className="tech-visual">
              <div className="tech-image-grid">
                {technology.images.map((image, index) => (
                  <div key={index} className={`tech-image-item ${index === 0 ? 'large' : index === 1 ? 'small' : 'medium'}`}>
                    <img src={image.src} className="img-fluid rounded-3" alt={image.alt} />
                    <div className="tech-overlay">
                      <div className="tech-stat">
                        <span className="stat-number">{image.stat}</span>
                        <span className="stat-label">{image.label}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-lg-6 fade-in">
            <div className="tech-content">
              {technology.features.map((feature, index) => (
                <div key={index} className="tech-card mb-3">
                  <div className="tech-card-header">
                    <div className="tech-icon">
                      <i className={feature.icon}></i>
                    </div>
                    <h5 className="fw-bold mb-0">{feature.title}</h5>
                  </div>
                  <p className="text-light mb-2 small">{feature.description}</p>
                  <div className="tech-highlights">
                    {feature.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="tech-tag">{tag}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection; 