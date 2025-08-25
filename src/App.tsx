/**
 * Main App Component
 * Sets up routing and provides the overall application structure
 */

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';

// Import components
import Layout from './components/Layout/Layout';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import TeamPage from './pages/TeamPage';
import CareersPage from './pages/CareersPage';
import BlogsPage from './pages/BlogsPage';
import BlogPostPage from './pages/BlogPostPage';
import WhyChooseUsPage from './pages/WhyChooseUsPage';
import ServicesPage from './pages/ServicesPage';
import NotFoundPage from './pages/NotFoundPage';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/careers" element={<CareersPage />} />
                              <Route path="/blogs" element={<BlogsPage />} />
                  <Route path="/blog/:id" element={<BlogPostPage />} />
                  <Route path="/why-choose-us" element={<WhyChooseUsPage />} />
                  <Route path="/why-choose-us/:sectionId" element={<WhyChooseUsPage />} />
                  <Route path="/services" element={<ServicesPage />} />
                  <Route path="/services/:serviceId" element={<ServicesPage />} />
                  <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Layout>
      </div>
    </Router>
  );
};

export default App; 