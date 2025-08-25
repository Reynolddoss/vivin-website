/**
 * WhyUsSection Component
 * Displays why customers should choose the company
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { WhyUsItem } from '../../types';

interface WhyUsSectionProps {
  whyUs: WhyUsItem[];
}

const WhyUsSection: React.FC<WhyUsSectionProps> = ({ whyUs }) => {
  return (
    <section id="why-us" className="py-5 bg-white">
      <div className="container py-4">
        <div className="text-center mb-5">
          <h2 className="section-title mb-3 fade-in">Why Choose Us</h2>
          <p className="lead text-muted mx-auto fade-in" style={{maxWidth: '700px'}}>We are committed to making your construction journey transparent, seamless, and exceptional.</p>
        </div>
        <div className="row g-4 text-center">
          {whyUs.map((item, index) => (
            <div key={index} className="col-md-6 col-lg-3 fade-in">
              <div className="card why-us-card h-100 p-3 rounded-4">
                <div className="card-body">
                  <div className="icon-feature bg-light text-warning fs-2 rounded-circle mb-4 mx-auto d-flex align-items-center justify-content-center" style={{width: '70px', height: '70px'}}>
                    <i className={item.icon}></i>
                  </div>
                  <h3 className="fs-5 fw-semibold mb-2">{item.title}</h3>
                  <p className="text-muted small">{item.description}</p>
                  <Link to={item.link} className="text-warning fw-semibold text-decoration-none mt-3 d-inline-block small">
                    Learn More <i className="fas fa-arrow-right ms-1"></i>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection; 