/**
 * ApplicationProcess Component
 * Displays the application process steps and contact information
 */

import React from 'react';
import { ApplicationProcess as ApplicationProcessType } from '../../types';

interface ApplicationProcessProps {
  application: ApplicationProcessType;
}

const ApplicationProcess: React.FC<ApplicationProcessProps> = ({ application }) => {
  return (
    <div className="application-process">
      <div className="row">
        <div className="col-lg-8 mx-auto text-center">
          <h2 className="section-title mb-4">{application.title}</h2>
          <p className="lead mb-5">{application.description}</p>
          
          <div className="row g-4">
            {application.steps.map((step, index) => (
              <div key={index} className="col-lg-6 col-md-6">
                <div className="card h-100 border-0 text-center">
                  <div className="card-body p-4">
                    <div className="bg-warning text-dark rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '50px', height: '50px' }}>
                      <span className="fw-bold fs-5">{step.step}</span>
                    </div>
                    <h5 className="card-title">{step.title}</h5>
                    <p className="card-text small">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationProcess; 