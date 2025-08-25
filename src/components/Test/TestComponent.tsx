/**
 * Test Component
 * Simple component to test styling
 */

import React from 'react';

const TestComponent: React.FC = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12">
          <h1 className="text-primary">Styling Test</h1>
          <p className="text-muted">This is a test to verify styling is working correctly.</p>
          
          <div className="row mt-4">
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Card Test</h5>
                  <p className="card-text">This card should have proper styling.</p>
                  <button className="btn btn-primary">Test Button</button>
                </div>
              </div>
            </div>
            
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Another Card</h5>
                  <p className="card-text">Testing card hover effects.</p>
                  <button className="btn btn-secondary">Secondary Button</button>
                </div>
              </div>
            </div>
            
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Third Card</h5>
                  <p className="card-text">Testing outline button.</p>
                  <button className="btn btn-outline">Outline Button</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestComponent; 