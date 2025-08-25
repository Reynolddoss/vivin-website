/**
 * BlogsPage Component
 * Displays blog articles and construction insights
 */

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './BlogsPage.css';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
  image: string;
  tags: string[];
}

const BlogsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "The Future of Sustainable Construction: Green Building Trends 2024",
      excerpt: "Discover the latest innovations in sustainable construction and how they're reshaping the industry landscape.",
      content: "Sustainable construction is no longer just a trend—it's becoming the standard. From energy-efficient materials to smart building technologies, the construction industry is undergoing a green revolution. This comprehensive guide explores the latest sustainable building practices, renewable energy integration, and eco-friendly materials that are transforming how we build for the future.",
      author: "Reynold Kumar",
      date: "March 15, 2024",
      category: "Sustainability",
      readTime: "8 min read",
      image: "/images/blog-sustainable.jpg",
      tags: ["Sustainability", "Green Building", "Innovation"]
    },
    {
      id: 2,
      title: "Smart Home Technology: Integrating IoT in Modern Construction",
      excerpt: "Learn how Internet of Things (IoT) is revolutionizing home construction and creating smarter living spaces.",
      content: "The integration of IoT technology in construction is creating homes that are not just beautiful, but intelligent. From automated lighting systems to smart security features, modern homes are becoming more connected and efficient than ever. This article delves into the latest IoT innovations and how they're being incorporated into residential construction projects.",
      author: "Priya Sharma",
      date: "March 12, 2024",
      category: "Technology",
      readTime: "6 min read",
      image: "/images/blog-iot.jpg",
      tags: ["IoT", "Smart Homes", "Technology"]
    }
  ];

  const categories = ['all', 'Sustainability', 'Technology'];

  const filteredPosts = selectedCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="blogs-page">
      {/* Hero Section */}
      <section 
        className="hero-section text-white text-center py-5"
        style={{ 
          background: 'linear-gradient(135deg, rgba(13, 27, 42, 0.8) 0%, rgba(27, 38, 59, 0.8) 50%, rgba(44, 62, 80, 0.8) 100%), url("https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <h1 className="display-4 fw-bold mb-4">Construction Insights & Trends</h1>
              <p className="lead mb-5">
                Stay updated with the latest construction industry insights, trends, and expert perspectives
              </p>
            </div>
          </div>
        </div>
      </section>



      {/* Blog Posts Grid */}
      <section className="blog-posts">
        <div className="container">
          <div className="posts-grid">
            {filteredPosts.map(post => (
              <article key={post.id} className="blog-card">
                <div className="card-image">
                  <div className="image-placeholder">
                    <i className="fas fa-image"></i>
                  </div>
                  <div className="card-category">{post.category}</div>
                </div>
                <div className="card-content">
                  <div className="card-meta">
                    <span className="author">{post.author}</span>
                    <span className="date">{post.date}</span>
                    <span className="read-time">{post.readTime}</span>
                  </div>
                  <h3 className="card-title">{post.title}</h3>
                  <p className="card-excerpt">{post.excerpt}</p>
                  <div className="card-tags">
                    {post.tags.map(tag => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </div>
                  <Link to={`/blog/${post.id}`} className="read-more-btn">
                    Read More <i className="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter-section">
        <div className="container">
          <div className="newsletter-content text-center">
            <h3>Stay Updated with Our Latest Insights</h3>
            <p>Subscribe to our newsletter for exclusive construction tips and industry updates</p>
            <div className="newsletter-form">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="newsletter-input"
              />
              <button className="newsletter-btn">Subscribe</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogsPage; 