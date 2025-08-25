/**
 * NotFoundPage Component
 * 404 error page
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { pageData } from '../data/pageData';

const NotFoundPage: React.FC = () => {
  const { error } = pageData;

  return (
    <div className="not-found-page">
      <section className="hero-section" style={{ height: '100vh' }}>
        <div className="hero-content">
          <div className="text-center">
            <h1 className="display-1 fw-bold mb-4">404</h1>
            <h2 className="mb-4">{error.notFound.title}</h2>
            <p className="lead mb-5">{error.notFound.message}</p>
            
            <div className="d-flex justify-content-center gap-3 flex-wrap">
              <Link to="/" className="btn btn-primary btn-lg">
                <i className="fas fa-home me-2"></i>
                Go Home
              </Link>
              <Link to="/contact" className="btn btn-outline-light btn-lg">
                <i className="fas fa-envelope me-2"></i>
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NotFoundPage; 