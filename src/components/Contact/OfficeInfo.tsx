/**
 * OfficeInfo Component
 * Displays office information with detailed cards, maps, and QR codes
 */

import React from 'react';
import { Offices } from '../../types';

interface OfficeInfoProps {
  offices: Offices;
}

const OfficeInfo: React.FC<OfficeInfoProps> = ({ offices }) => {
  return (
    <div className="offices-section">
      <div className="text-center mb-5">
        <h2 className="fw-bold text-dark mb-3">Our Offices</h2>
        <p className="text-muted">Visit us at any of our locations across the region.</p>
      </div>
      
      <div className="row g-4">
        {/* Corporate Office Column */}
        <div className="col-lg-6">
          <div className="office-card corporate-card h-100">
            <div className="card-header">
              <div className="office-icon">
                <i className={offices.corporate.icon}></i>
              </div>
              <h4>{offices.corporate.title}</h4>
              <span className="badge bg-info">{offices.corporate.badge}</span>
            </div>
            <div className="card-body">
              <div className="contact-info-section">
                <div className="contact-details">
                  <div className="contact-item">
                    <i className="fas fa-map-marker-alt"></i>
                    <div>
                      <strong>Address</strong>
                      <p>{offices.corporate.address.street}<br/>{offices.corporate.address.city}<br/>{offices.corporate.address.state}<br/>{offices.corporate.address.country}</p>
                    </div>
                  </div>
                  <div className="contact-item">
                    <i className="fas fa-phone"></i>
                    <div>
                      <strong>Phone</strong>
                      <p>Main: {offices.corporate.phone.main}<br/>Support: {offices.corporate.phone.support}</p>
                    </div>
                  </div>
                  <div className="contact-item">
                    <i className="fas fa-envelope"></i>
                    <div>
                      <strong>Email</strong>
                      <p>{offices.corporate.email.info}<br/>{offices.corporate.email.contact}</p>
                    </div>
                  </div>
                  <div className="contact-item">
                    <i className="fas fa-clock"></i>
                    <div>
                      <strong>Hours</strong>
                      <p>{offices.corporate.hours.weekdays}<br/>{offices.corporate.hours.saturday}<br/>{offices.corporate.hours.sunday}</p>
                    </div>
                  </div>
                </div>
                <div className="qr-code-section">
                  <img src={offices.corporate.qrCode} alt="Vivin Office Location QR Code" className="qr-code-image" />
                  <p className="qr-code-label">Scan for Directions</p>
                </div>
              </div>
              
              <div className="map-section">
                <div className="map-container">
                  <iframe 
                    src={offices.corporate.mapUrl} 
                    width="100%" 
                    height="350" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
              
              <div className="card-actions">
                <a href={offices.corporate.directionsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-warning btn-sm">
                  <i className="fas fa-map-marked-alt me-2"></i>Get Directions
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Branch Offices Column */}
        <div className="col-lg-6">
          <div className="branch-offices-grid">
            {offices.branches.map((branch, index) => (
              <div key={index} className="office-card branch-card">
                <div className="card-header">
                  <div className="office-icon">
                    <i className={branch.icon}></i>
                  </div>
                  <h4>{branch.name}</h4>
                  <span className="badge bg-info">{branch.badge}</span>
                </div>
                <div className="card-body">
                  {branch.openingSoon ? (
                    <div className="contact-item">
                      <i className="fas fa-hourglass-half"></i>
                      <div>
                        <strong>{branch.status}</strong>
                      </div>
                    </div>
                  ) : (
                    <div className="contact-item">
                      <i className="fas fa-phone"></i>
                      <div>
                        <strong>Phone</strong>
                        {branch.phone && branch.phone.map((phone, phoneIndex) => (
                          <p key={phoneIndex}>{phone}</p>
                        ))}
                      </div>
                    </div>
                  )}
                  <div className="contact-item">
                    <i className="fas fa-envelope"></i>
                    <div>
                      <strong>Email</strong>
                      <p>{branch.email}</p>
                    </div>
                  </div>
                  {!branch.openingSoon && branch.callUrl && (
                    <div className="card-actions">
                      <a href={branch.callUrl} className="btn btn-outline-warning btn-sm">
                        <i className="fas fa-phone me-2"></i>Call Now
                      </a>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfficeInfo; 