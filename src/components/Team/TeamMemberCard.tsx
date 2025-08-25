/**
 * TeamMemberCard Component
 * Displays individual team member information
 */

import React from 'react';
import { TeamMember } from '../../types';

interface TeamMemberCardProps {
  member: TeamMember;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member }) => {
  return (
    <div className="member-card">
      <div className="member-image-wrapper">
        <img 
          src={member.image} 
          alt={member.role} 
          className="member-image"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.onerror = null;
            target.src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=face';
          }}
        />
        <div className="member-overlay">
          <div className="member-social">
            {member.social.linkedin && (
              <a href={member.social.linkedin} className="social-btn">
                <i className="fab fa-linkedin-in"></i>
              </a>
            )}
            {member.social.twitter && (
              <a href={member.social.twitter} className="social-btn">
                <i className="fab fa-twitter"></i>
              </a>
            )}
            {member.social.behance && (
              <a href={member.social.behance} className="social-btn">
                <i className="fab fa-behance"></i>
              </a>
            )}
            {member.social.github && (
              <a href={member.social.github} className="social-btn">
                <i className="fab fa-github"></i>
              </a>
            )}
            {member.social.instagram && (
              <a href={member.social.instagram} className="social-btn">
                <i className="fab fa-instagram"></i>
              </a>
            )}
            {member.social.email && (
              <a href={`mailto:${member.social.email}`} className="social-btn">
                <i className="fas fa-envelope"></i>
              </a>
            )}
          </div>
        </div>
        <div className="member-badge">{member.badge}</div>
      </div>
      <div className="member-info">
        <h4 className="member-name">{member.name}</h4>
        <p className="member-role">{member.role}</p>
        <div className="member-stats">
          {member.stats.map((stat, index) => (
            <span key={index} className="stat-item">
              <i className={stat.icon}></i> {stat.text}
            </span>
          ))}
        </div>
        <p className="member-bio">{member.bio}</p>
      </div>
    </div>
  );
};

export default TeamMemberCard; 