/**
 * JobOpenings Component
 * Displays job openings by branch with accordion structure
 */

import React, { useState } from 'react';
import { Branch } from '../../types';

interface JobOpeningsProps {
  branches: Branch[];
}

const JobOpenings: React.FC<JobOpeningsProps> = ({ branches }) => {
  return (
    <div className="job-openings">
      {branches.map((branch, branchIndex) => (
        <div key={branchIndex} className="branch-section mb-5">
          <div className="row">
            <div className="col-lg-12">
              <div className="card border-0 shadow-lg">
                <div className="card-header bg-warning text-dark">
                  <div className="row align-items-center">
                    <div className="col-md-8">
                      <h3 className="mb-1">{branch.name}</h3>
                      <p className="mb-0">
                        <i className="fas fa-map-marker-alt me-2"></i>
                        {branch.location}
                      </p>
                    </div>
                    <div className="col-md-4 text-md-end">
                      <span className="badge bg-dark fs-6">{branch.positions.length} Positions</span>
                    </div>
                  </div>
                </div>
                <div className="card-body p-0">
                  <div className="accordion" id={`branchAccordion${branchIndex}`}>
                    {branch.positions.map((position, positionIndex) => (
                      <div key={positionIndex} className="accordion-item border-0">
                        <h2 className="accordion-header" id={`heading${branchIndex}_${positionIndex}`}>
                          <button 
                            className={`accordion-button ${positionIndex === 0 ? '' : 'collapsed'}`} 
                            type="button" 
                            data-bs-toggle="collapse" 
                            data-bs-target={`#collapse${branchIndex}_${positionIndex}`} 
                            aria-expanded={positionIndex === 0 ? 'true' : 'false'} 
                            aria-controls={`collapse${branchIndex}_${positionIndex}`}
                          >
                            <div className="row w-100 align-items-center">
                              <div className="col-md-6">
                                <h5 className="mb-1">{position.title}</h5>
                                <small className="text-muted">
                                  <i className="fas fa-briefcase me-1"></i>
                                  {position.type} • {position.experience} experience
                                </small>
                              </div>
                              <div className="col-md-6 text-md-end">
                                <span className="badge bg-success me-2">Open</span>
                                <span className="badge bg-info">{branch.location}</span>
                              </div>
                            </div>
                          </button>
                        </h2>
                        <div 
                          id={`collapse${branchIndex}_${positionIndex}`} 
                          className={`accordion-collapse collapse ${positionIndex === 0 ? 'show' : ''}`} 
                          aria-labelledby={`heading${branchIndex}_${positionIndex}`} 
                          data-bs-parent={`#branchAccordion${branchIndex}`}
                        >
                          <div className="accordion-body">
                            <div className="row">
                              <div className="col-lg-6">
                                <h6 className="text-warning mb-3">
                                  <i className="fas fa-list-check me-2"></i>Requirements
                                </h6>
                                <ul className="list-unstyled">
                                  {position.requirements.map((req, reqIndex) => (
                                    <li key={reqIndex} className="mb-2">
                                      <i className="fas fa-check text-success me-2"></i>
                                      {req}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <div className="col-lg-6">
                                <h6 className="text-warning mb-3">
                                  <i className="fas fa-tasks me-2"></i>Responsibilities
                                </h6>
                                <ul className="list-unstyled">
                                  {position.responsibilities.map((resp, respIndex) => (
                                    <li key={respIndex} className="mb-2">
                                      <i className="fas fa-arrow-right text-primary me-2"></i>
                                      {resp}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                            <div className="mt-4 pt-3 border-top">
                              <div className="row align-items-center">
                                <div className="col-md-8">
                                  <p className="mb-0">
                                    <strong>Location:</strong> {branch.address}
                                  </p>
                                </div>
                                <div className="col-md-4 text-md-end">
                                  <a 
                                    href={`mailto:contact@vivinconstructions.com?subject=Application for ${position.title} - ${branch.name}`} 
                                    className="btn btn-warning"
                                  >
                                    <i className="fas fa-paper-plane me-2"></i>Apply Now
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default JobOpenings; 