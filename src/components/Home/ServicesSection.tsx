/**
 * ServicesSection Component
 * Displays the services offered by the company
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { ServiceItem } from '../../types';

interface ServicesSectionProps {
  services: ServiceItem[];
}

const ServicesSection: React.FC<ServicesSectionProps> = ({ services }) => {
  return (
    <section id="services" className="py-5 bg-light">
      <div className="container py-4 text-center">
        <h2 className="section-title mb-3 fade-in">What We Do</h2>
        <p className="lead text-muted mb-5 mx-auto fade-in" style={{maxWidth: '600px'}}>Building Dreams, One Brick at a Time. From concept to completion, we offer end-to-end construction solutions tailored to your needs.</p>
        <div className="row g-4">
          {services.map((service, index) => (
            <div key={index} className="col-lg-3 col-md-6 fade-in">
              <div className="card service-card h-100 p-3 rounded-4">
                <div className="card-body">
                  <div className="icon-feature bg-light text-warning fs-2 rounded-circle mb-4 mx-auto d-flex align-items-center justify-content-center" style={{width: '70px', height: '70px'}}>
                    <i className={service.icon}></i>
                  </div>
                  <h3 className="fs-4 fw-semibold">{service.title}</h3>
                  <p className="text-muted">{service.description}</p>
                  <Link to={service.link} className="text-warning fw-semibold text-decoration-none mt-3 d-inline-block">
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

export default ServicesSection; 