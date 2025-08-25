/**
 * ContactPage Component
 * Contact page with office information and locations
 */

import React from 'react';
import { pageData } from '../data/pageData';
import ContactHero from '../components/Contact/ContactHero';
import OfficeInfo from '../components/Contact/OfficeInfo';

const ContactPage: React.FC = () => {
  const { contact } = pageData;

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <ContactHero hero={contact.hero} />

      {/* Offices Section */}
      <section id="offices" className="py-5 bg-light">
        <div className="container py-4">
          <OfficeInfo offices={contact.offices} />
        </div>
      </section>


    </div>
  );
};

export default ContactPage; 