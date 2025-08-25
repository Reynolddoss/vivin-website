/**
 * CareersPage Component
 * Careers page with job openings and application process
 */

import React from 'react';
import { pageData } from '../data/pageData';
import CareersHero from '../components/Careers/CareersHero';
import JobOpenings from '../components/Careers/JobOpenings';
import ApplicationProcess from '../components/Careers/ApplicationProcess';

const CareersPage: React.FC = () => {
  const { careers } = pageData;

  return (
    <div className="careers-page">
      {/* Hero Section */}
      <CareersHero hero={careers.hero} />

      {/* Job Openings Section */}
      <section className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title">Current Job Openings</h2>
            <p className="lead">Explore opportunities across our multiple branches</p>
          </div>
          <JobOpenings branches={careers.branches} />
        </div>
      </section>

      {/* How to Apply Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <ApplicationProcess application={careers.application} />
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h3 className="section-title mb-4">Get in Touch</h3>
              <p className="lead mb-5">Ready to join our team? Contact our HR department for more information.</p>
              
              <div className="row g-4">
                <div className="col-md-4">
                  <div className="card border-0 shadow-sm h-100">
                    <div className="card-body text-center p-4">
                      <i className="fas fa-envelope text-warning mb-3" style={{ fontSize: '2rem' }}></i>
                      <h5>Email</h5>
                      <p className="mb-0">
                        <a href={`mailto:${careers.application.contact.email}`} className="text-decoration-none">
                          {careers.application.contact.email}
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card border-0 shadow-sm h-100">
                    <div className="card-body text-center p-4">
                      <i className="fas fa-phone text-warning mb-3" style={{ fontSize: '2rem' }}></i>
                      <h5>Phone</h5>
                      <p className="mb-0">
                        <a href={`tel:${careers.application.contact.phone.replace(/\s/g, '')}`} className="text-decoration-none">
                          {careers.application.contact.phone}
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card border-0 shadow-sm h-100">
                    <div className="card-body text-center p-4">
                      <i className="fas fa-map-marker-alt text-warning mb-3" style={{ fontSize: '2rem' }}></i>
                      <h5>Address</h5>
                      <p className="mb-0 small">{careers.application.contact.address}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareersPage; 