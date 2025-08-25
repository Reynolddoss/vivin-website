/**
 * HawksEyeSection Component
 * Displays the Hawk's Eye feature with dashboard preview and feature grid
 */

import React from 'react';
import { Link } from 'react-router-dom';

const HawksEyeSection: React.FC = () => {
  return (
    <section id="hawks-eye" className="py-5 bg-gradient-primary">
      <div className="container py-4">
        <div className="text-center mb-5">
          <div className="hawk-icon mb-3">
            <i className="fas fa-eye text-warning" style={{fontSize: '4rem'}}></i>
            <div className="eye-glow"></div>
          </div>
          <h2 className="section-title text-white mb-3 fade-in">Hawk's Eye Feature</h2>
          <h3 className="text-warning fw-bold mb-4 fade-in">"Keep a Sharp Eye on Your Dream Project"</h3>
          <p className="lead text-white-50 mx-auto fade-in" style={{maxWidth: '700px'}}>Experience unprecedented transparency with our revolutionary real-time project monitoring dashboard. Watch your dreams transform into reality, every step of the way.</p>
        </div>
        
        <div className="hawk-dashboard-container">
          <div className="dashboard-benefit-row">
            <div className="dashboard-preview fade-in">
              <div className="dashboard-mockup">
                <div className="dashboard-header">
                  <div className="status-indicator active"></div>
                  <span className="project-status">Project: Dream Villa - Phase 2</span>
                </div>
                <div className="dashboard-content">
                  <div className="progress-ring">
                    <svg className="progress-svg" viewBox="0 0 120 120">
                      <circle className="progress-bg" cx="60" cy="60" r="54"></circle>
                      <circle className="progress-fill" cx="60" cy="60" r="54" strokeDasharray="339.292" strokeDashoffset="101.788"></circle>
                    </svg>
                    <div className="progress-text">
                      <span className="progress-percentage">70%</span>
                      <span className="progress-label">Complete</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="benefit-highlight fade-in">
              <h4 className="text-warning mb-3">🎯 The Ultimate Benefit</h4>
              <p className="text-white fs-5">Full transparency, trust, and peace of mind — all from your personal dashboard. No more wondering, no more waiting, no more uncertainty.</p>
              <div className="cta-buttons mt-4">
                <Link to="/contact" className="btn btn-warning btn-lg rounded-pill px-5 me-3">Get Hawk's Eye Access</Link>
                <a href="#" className="btn btn-outline-light btn-lg rounded-pill px-5">Watch Demo</a>
              </div>
            </div>
          </div>
          
          <div className="hawk-features-grid">
            <div className="hawk-feature-item fade-in">
              <div className="feature-icon-small">
                <i className="fas fa-chart-line text-warning"></i>
              </div>
              <div className="feature-content">
                <h5>Latest Updates</h5>
                <p>Real-time progress reports and milestone tracking.</p>
              </div>
              <div className="feature-badge-small">Live</div>
            </div>
            
            <div className="hawk-feature-item fade-in">
              <div className="feature-icon-small">
                <i className="fas fa-images text-warning"></i>
              </div>
              <div className="feature-content">
                <h5>Photo Gallery</h5>
                <p>Daily site photos showing project evolution.</p>
              </div>
              <div className="feature-badge-small">Daily</div>
            </div>
            
            <div className="hawk-feature-item fade-in">
              <div className="feature-icon-small">
                <i className="fas fa-calendar-alt text-warning"></i>
              </div>
              <div className="feature-content">
                <h5>Timeline & Plans</h5>
                <p>Know what's happening now and what's next.</p>
              </div>
              <div className="feature-badge-small">Smart</div>
            </div>
            
            <div className="hawk-feature-item fade-in">
              <div className="feature-icon-small">
                <i className="fas fa-bell text-warning"></i>
              </div>
              <div className="feature-content">
                <h5>Instant Notifications</h5>
                <p>Immediate alerts for important updates.</p>
              </div>
              <div className="feature-badge-small">Instant</div>
            </div>
            
            <div className="hawk-feature-item fade-in">
              <div className="feature-icon-small">
                <i className="fas fa-file-alt text-warning"></i>
              </div>
              <div className="feature-content">
                <h5>Document Access</h5>
                <p>Secure access to all project documents.</p>
              </div>
              <div className="feature-badge-small">Secure</div>
            </div>
            
            <div className="hawk-feature-item fade-in">
              <div className="feature-icon-small">
                <i className="fas fa-shield-alt text-warning"></i>
              </div>
              <div className="feature-content">
                <h5>Full Transparency</h5>
                <p>24/7 access to your personal dashboard.</p>
              </div>
              <div className="feature-badge-small">Trust</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HawksEyeSection; 