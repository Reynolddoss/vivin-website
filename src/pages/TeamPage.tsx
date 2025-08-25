/**
 * TeamPage Component
 * Team page with team member information
 */

import React from 'react';
import { pageData } from '../data/pageData';
import TeamHero from '../components/Team/TeamHero';
import TeamMemberCard from '../components/Team/TeamMemberCard';

const TeamPage: React.FC = () => {
  const { team } = pageData;

  return (
    <div className="team-page">
      {/* Hero Section */}
      <TeamHero hero={team.hero} />

      {/* Team Section */}
      <section id="team" className="py-5">
        <div className="container py-5">
          <div className="row justify-content-center mb-5">
            <div className="col-lg-8 text-center">
              <div className="team-header">
                <span className="team-badge">Minds at work</span>
                <h2 className="team-title mb-3 fade-in">Meet The Experts Behind Our Success</h2>
                <p className="team-subtitle fade-in">A powerhouse of talent, experience, and innovation working together to build your dreams into reality.</p>
              </div>
            </div>
          </div>
          
          <div className="team-grid">
            {team.team.map((member, index) => (
              <div key={index} className="team-member fade-in">
                <TeamMemberCard member={member} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeamPage; 