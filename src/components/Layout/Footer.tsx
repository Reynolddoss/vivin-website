/**
 * Footer Component
 * Main footer with company information and links
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { companyConfig } from '../../data/companyConfig';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white-50">
      <div className="container py-5">
        <div className="row g-4">
          <div className="col-lg-4 col-md-6">
            <div className="d-flex align-items-center mb-3">
              <img 
                src={companyConfig.logo} 
                alt={`${companyConfig.name} Logo`} 
                className="footer-logo me-3 logo-zoom"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.onerror = null;
                  target.src = 'https://placehold.co/150x50/FFFFFF/000000?text=VIVIN';
                }}
              />
              <div>
                <h4 className="text-white mb-1">{companyConfig.name}</h4>
                <p className="text-warning mb-0 small">{companyConfig.tagline}</p>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-6">
            <h5 className="text-white mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              {/* <li><Link to="/" className="text-white-50 text-decoration-none">Home</Link></li> */}
              {/* <li><Link to="/#about" className="text-white-50 text-decoration-none">About Us</Link></li> */}
              {/* <li><Link to="/#services" className="text-white-50 text-decoration-none">About Us</Link></li> */}
              {/* <li><Link to="/#projects" className="text-white-50 text-decoration-none">Projects</Link></li> */}
              {/* <li><Link to="/team" className="text-white-50 text-decoration-none">Our Team</Link></li> */}
              <li><Link to="/careers" className="text-white-50 text-decoration-none">Careers</Link></li>
              <li><Link to="/contact" className="text-white-50 text-decoration-none">Contact</Link></li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6">
            <h5 className="text-white mb-3">Contact Info</h5>
            <ul className="list-unstyled small">
              <li className="d-flex mb-2">
                <i className="fas fa-map-marker-alt me-2 mt-1"></i>
                <span>{companyConfig.contact.address}</span>
              </li>
              <li className="d-flex mb-2">
                <i className="fas fa-phone me-2 mt-1"></i>
                <a href={`tel:${companyConfig.contact.phone.replace(/\s/g, '')}`} className="text-white-50 text-decoration-none">
                  {companyConfig.contact.phone}
                </a>
              </li>
              <li className="d-flex">
                <i className="fas fa-envelope me-2 mt-1"></i>
                <a href={`mailto:${companyConfig.contact.email}`} className="text-white-50 text-decoration-none">
                  {companyConfig.contact.email}
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6">
            <h5 className="text-white mb-3">Follow Us</h5>
            <div className="social-links">
              <a href={companyConfig.social.facebook} target='_blank' rel="noopener noreferrer" className="text-white-50 me-3">
                <i className="fab fa-facebook-f"></i>
              </a>
              {/* <a href={companyConfig.social.twitter} className="text-white-50 me-3">
                <i className="fab fa-twitter"></i>
              </a> */}
              <a href={companyConfig.social.instagram} target='_blank' rel="noopener noreferrer" className="text-white-50 me-3">
                <i className="fab fa-instagram"></i>
              </a>
              <a href={companyConfig.social.youtube} target='_blank' rel="noopener noreferrer" className="text-white-50">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
        <hr className="my-4" />
        <div className="row">
          <div className="col-md-6">
            <p className="small mb-0">&copy; {currentYear} {companyConfig.name}. All rights reserved.</p>
          </div>
          <div className="col-md-6 text-md-end">
            <p className="small mb-0">Licensed & Insured | BBB Accredited</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 