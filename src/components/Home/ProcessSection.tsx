/**
 * ProcessSection Component
 * Displays the company's process steps with timeline flow layout
 */

import React from 'react';
import { ProcessStep } from '../../types';

interface ProcessSectionProps {
  process: ProcessStep[];
}

const ProcessSection: React.FC<ProcessSectionProps> = ({ process }) => {
  return (
    <div className="timeline-flow">
      <div className="step-procedure">
        <div className="procedure-container">
          {process.map((step, index) => (
            <div key={index} className="procedure-step fade-in">
              <div className="step-indicator">
                <div className="step-badge">{step.number}</div>
                {index < process.length - 1 && (
                  <div className="step-line"></div>
                )}
              </div>
              <div className="step-content">
                <div className="step-image">
                  <img src={step.image} alt={step.title} />
                </div>
                <div className="step-details">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProcessSection; 