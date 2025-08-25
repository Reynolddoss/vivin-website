/**
 * BenefitsSection Component
 * Displays company benefits for potential employees
 */

import React from 'react';

interface BenefitsSectionProps {
  intro: {
    title: string;
    description: string;
    benefits: string[];
  };
}

const BenefitsSection: React.FC<BenefitsSectionProps> = ({ intro }) => {
  return (
    <div className="row align-items-center">
      <div className="col-lg-6 mb-4">
        <h2 className="mb-4">{intro.title}</h2>
        <p className="lead mb-4">{intro.description}</p>
      </div>
      
      <div className="col-lg-6">
        <div className="benefits-list">
          <h4 className="mb-3">What We Offer:</h4>
          <ul className="list-unstyled">
            {intro.benefits.map((benefit, index) => (
              <li key={index} className="benefit-item mb-2">
                <i className="fas fa-check-circle text-success me-2"></i>
                {benefit}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BenefitsSection; 