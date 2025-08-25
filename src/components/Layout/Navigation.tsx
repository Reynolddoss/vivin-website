/**
 * Navigation Component
 * Main navigation bar with active state management
 */

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { companyConfig } from '../../data/companyConfig';

interface NavigationProps {
  currentPath: string;
}

const Navigation: React.FC<NavigationProps> = ({ currentPath }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');

  // Handle scroll effect for navbar and active section detection
  useEffect(() => {
    const handleScroll = () => {
      // Navbar scroll effect
      setIsScrolled(window.scrollY > 50);

      // Active section detection
      const sections = ['services', 'process'];
      const scrollPosition = window.scrollY + 100; // Offset for navbar

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const sectionTop = element.offsetTop;
          const sectionHeight = element.offsetHeight;
          
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }

      // If scrolled to top, set home as active
      if (window.scrollY < 100) {
        setActiveSection('');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu and scroll to top when path changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
    // Scroll to top when navigating to a new page
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPath]);

  // Check if nav item is active
  const isActive = (href: string): boolean => {
    // For home page with sections
    if (currentPath === '/') {
      if (href === '/') {
        return activeSection === ''; // Home is active when at top
      }
      if (href === '/#services') {
        return activeSection === 'services';
      }
      if (href === '/#process') {
        return activeSection === 'process';
      }
    }
    
    // For other pages
    if (href === '/' && currentPath === '/') return true;
    if (href !== '/' && currentPath === href) return true;
    return false;
  };

  // Handle navigation item rendering
  const renderNavItem = (item: { href: string; text: string }, index: number) => {
    const isAnchorLink = item.href.includes('#');
    
    // Special handling for Home link
    if (item.href === '/') {
      if (currentPath === '/') {
        // On home page, use anchor link to scroll to top
        return (
          <a
            className={`nav-link ${isActive(item.href) ? 'active' : ''}`}
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
              setIsMobileMenuOpen(false);
            }}
          >
            {item.text}
          </a>
        );
      } else {
        // On other pages, use React Router Link
        return (
          <Link
            className={`nav-link ${isActive(item.href) ? 'active' : ''}`}
            to={item.href}
          >
            {item.text}
          </Link>
        );
      }
    }
    
    if (isAnchorLink) {
      // Use regular anchor tag for anchor links
      return (
        <a
          className={`nav-link ${isActive(item.href) ? 'active' : ''}`}
          href={item.href}
          onClick={() => setIsMobileMenuOpen(false)}
        >
          {item.text}
        </a>
      );
    } else {
      // Use React Router Link for regular routes
      return (
        <Link
          className={`nav-link ${isActive(item.href) ? 'active' : ''}`}
          to={item.href}
        >
          {item.text}
        </Link>
      );
    }
  };

  return (
    <nav className={`navbar navbar-expand-lg navbar-dark fixed-top ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container">
        {/* Brand/Logo */}
        {currentPath === '/' ? (
          <a 
            className="navbar-brand" 
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <img src={companyConfig.logo} alt={companyConfig.name} height="40" />
          </a>
        ) : (
          <Link className="navbar-brand" to="/">
            <img src={companyConfig.logo} alt={companyConfig.name} height="40" />
          </Link>
        )}

        {/* Mobile menu button */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-controls="navbarNav"
          aria-expanded={isMobileMenuOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation items */}
        <div className={`collapse navbar-collapse ${isMobileMenuOpen ? 'show' : ''}`} id="navbarNav">
          {/* Main navigation items - centered */}
          <ul className="navbar-nav mx-auto">
            {companyConfig.navigation.navItems.map((item, index) => (
              <li className="nav-item" key={index}>
                {renderNavItem(item, index)}
              </li>
            ))}
          </ul>
          
          {/* Contact button - right aligned */}
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                className={`btn rounded-pill px-4 ${isActive(companyConfig.navigation.contactButton.href) ? 'active-contact-btn' : 'btn-warning'}`}
                to={companyConfig.navigation.contactButton.href}
              >
                {companyConfig.navigation.contactButton.text}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation; 