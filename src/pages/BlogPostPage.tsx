/**
 * BlogPostPage Component
 * Displays full blog post content with modern reading layout
 */

import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './BlogPostPage.css';

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

const BlogPostPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  
  // Blog posts data (same as BlogsPage)
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "The Future of Sustainable Construction: Green Building Trends 2024",
      excerpt: "Discover the latest innovations in sustainable construction and how they're reshaping the industry landscape.",
      content: `Sustainable construction is no longer just a trend—it's becoming the standard. From energy-efficient materials to smart building technologies, the construction industry is undergoing a green revolution. This comprehensive guide explores the latest sustainable building practices, renewable energy integration, and eco-friendly materials that are transforming how we build for the future.

## The Rise of Green Building Standards

As environmental concerns continue to grow, green building standards like LEED (Leadership in Energy and Environmental Design) and BREEAM (Building Research Establishment Environmental Assessment Method) are becoming increasingly important. These standards provide frameworks for creating buildings that are not only environmentally responsible but also resource-efficient and healthy for occupants.

### Key Components of Sustainable Construction

1. **Energy Efficiency**: Modern sustainable buildings incorporate advanced insulation, energy-efficient windows, and smart HVAC systems that significantly reduce energy consumption.

2. **Renewable Energy Integration**: Solar panels, wind turbines, and geothermal systems are being integrated into building designs to generate clean, renewable energy on-site.

3. **Water Conservation**: Low-flow fixtures, rainwater harvesting systems, and greywater recycling are becoming standard features in sustainable construction projects.

4. **Sustainable Materials**: The use of recycled, locally sourced, and low-impact materials is growing rapidly. Materials like bamboo, reclaimed wood, and recycled steel are gaining popularity.

## Innovative Technologies in Green Building

### Smart Building Management Systems

Modern sustainable buildings are equipped with intelligent systems that monitor and optimize energy usage in real-time. These systems can automatically adjust lighting, heating, and cooling based on occupancy and environmental conditions.

### Green Roofs and Living Walls

Green roofs and living walls are not just aesthetic features—they provide natural insulation, improve air quality, and help manage stormwater runoff. These features are becoming increasingly common in urban construction projects.

### Passive Design Strategies

Passive design strategies, such as optimal building orientation, natural ventilation, and daylighting, are fundamental to sustainable construction. These strategies reduce the need for mechanical systems and create more comfortable living spaces.

## The Economic Benefits of Sustainable Construction

While sustainable construction may have higher upfront costs, it offers significant long-term benefits:

- **Lower Operating Costs**: Energy-efficient buildings have significantly lower utility bills
- **Higher Property Values**: Green buildings often command premium prices in the real estate market
- **Improved Occupant Health**: Better indoor air quality and natural lighting contribute to occupant well-being
- **Regulatory Compliance**: Meeting green building standards ensures compliance with current and future regulations

## Future Trends in Sustainable Construction

### Net-Zero Energy Buildings

The concept of net-zero energy buildings—structures that produce as much energy as they consume—is gaining momentum. Advances in renewable energy technology and energy storage systems are making this goal increasingly achievable.

### Circular Economy in Construction

The construction industry is moving toward a circular economy model, where materials are reused and recycled rather than disposed of. This approach reduces waste and creates new opportunities for material innovation.

### Biophilic Design

Biophilic design, which incorporates natural elements into building design, is becoming more popular. This approach not only improves aesthetics but also enhances occupant well-being and productivity.

## Conclusion

Sustainable construction is not just about environmental responsibility—it's about creating better buildings that benefit everyone. As technology continues to advance and awareness grows, sustainable construction practices will become the norm rather than the exception.

The future of construction is green, and those who embrace these practices today will be well-positioned for success tomorrow.`,
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
      content: `The integration of IoT technology in construction is creating homes that are not just beautiful, but intelligent. From automated lighting systems to smart security features, modern homes are becoming more connected and efficient than ever. This article delves into the latest IoT innovations and how they're being incorporated into residential construction projects.

## The IoT Revolution in Home Construction

The Internet of Things (IoT) is transforming how we think about home construction and design. Smart homes are no longer a luxury—they're becoming a standard feature in modern residential projects. This technology integration is creating homes that are more comfortable, secure, and energy-efficient.

### Core IoT Components in Smart Homes

1. **Smart Lighting Systems**: Automated lighting that adjusts based on occupancy, time of day, and natural light levels. These systems can be controlled remotely and programmed for different scenarios.

2. **Intelligent Climate Control**: Smart thermostats and HVAC systems that learn occupant preferences and optimize energy usage while maintaining comfort.

3. **Security and Surveillance**: Advanced security systems with smart locks, motion sensors, and video surveillance that can be monitored remotely.

4. **Energy Management**: Smart meters and energy monitoring systems that provide real-time data on energy consumption and help identify opportunities for savings.

## Key Technologies Driving Smart Home Innovation

### Artificial Intelligence and Machine Learning

AI-powered systems are making smart homes truly intelligent. These systems can learn from occupant behavior and automatically adjust settings to optimize comfort and efficiency.

### Voice Control and Virtual Assistants

Voice-controlled virtual assistants like Amazon Alexa and Google Assistant are becoming central to smart home operation. These systems allow residents to control various home functions through simple voice commands.

### Wireless Connectivity

Advances in wireless technology, including Wi-Fi 6, Bluetooth 5.0, and Zigbee, are enabling seamless communication between smart devices throughout the home.

## Benefits of IoT Integration in Construction

### Enhanced Comfort and Convenience

Smart homes provide unprecedented levels of comfort and convenience. Automated systems handle routine tasks, while intelligent controls adapt to occupant preferences.

### Improved Energy Efficiency

IoT-enabled homes can achieve significant energy savings through intelligent management of lighting, heating, and cooling systems. These savings can offset the initial investment in smart technology.

### Enhanced Security

Smart security systems provide comprehensive protection with features like remote monitoring, automated alerts, and integration with emergency services.

### Increased Property Value

Smart homes often command higher prices in the real estate market, as buyers recognize the value of integrated technology and energy efficiency.

## Implementation Challenges and Solutions

### Infrastructure Requirements

Smart homes require robust electrical and network infrastructure. This includes adequate electrical outlets, network cabling, and wireless access points.

### Integration Complexity

Coordinating multiple smart systems can be complex. Working with experienced contractors who understand IoT integration is essential for successful implementation.

### Privacy and Security Concerns

As homes become more connected, privacy and cybersecurity become increasingly important. Implementing proper security measures and choosing reputable technology providers is crucial.

## Future Trends in Smart Home Construction

### Edge Computing

Edge computing, which processes data locally rather than in the cloud, is becoming more common in smart homes. This approach improves response times and reduces privacy concerns.

### 5G Integration

The rollout of 5G networks will enable faster, more reliable connectivity for smart home devices, supporting more sophisticated applications and real-time monitoring.

### Sustainable Smart Homes

The combination of smart technology and sustainable design is creating homes that are both intelligent and environmentally responsible.

## Conclusion

The integration of IoT technology in home construction represents a fundamental shift in how we think about residential spaces. Smart homes offer numerous benefits, from enhanced comfort and security to improved energy efficiency and increased property value.

As technology continues to advance, the line between traditional and smart homes will continue to blur. The future of residential construction is intelligent, connected, and designed to enhance the quality of life for occupants.`,
      author: "Priya Sharma",
      date: "March 12, 2024",
      category: "Technology",
      readTime: "6 min read",
      image: "/images/blog-iot.jpg",
      tags: ["IoT", "Smart Homes", "Technology"]
    }
  ];

  const post = blogPosts.find(p => p.id === Number(id));

  if (!post) {
    return (
      <div className="blog-post-not-found">
        <div className="container">
          <div className="text-center">
            <h2>Blog Post Not Found</h2>
            <p>The blog post you're looking for doesn't exist.</p>
            <Link to="/blogs" className="btn btn-warning">
              Back to Blogs
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="blog-post-page">
      {/* Hero Section */}
      <section className="post-hero">
        <div className="container">
          <div className="hero-content">
            <div className="breadcrumb">
              <Link to="/blogs" className="breadcrumb-link">
                <i className="fas fa-arrow-left"></i> Back to Blogs
              </Link>
            </div>
            <div className="post-header">
              <div className="post-category">{post.category}</div>
              <h1 className="post-title">{post.title}</h1>
              <p className="post-excerpt">{post.excerpt}</p>
              <div className="post-meta">
                <div className="author-info">
                  <div className="author-avatar">
                    <i className="fas fa-user"></i>
                  </div>
                  <div className="author-details">
                    <span className="author-name">{post.author}</span>
                    <span className="post-date">{post.date}</span>
                  </div>
                </div>
                <div className="post-stats">
                  <span className="read-time">
                    <i className="fas fa-clock"></i> {post.readTime}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="post-content">
        <div className="container">
          <div className="content-wrapper">
            <article className="main-content">
              <div className="content-image">
                <div className="image-placeholder">
                  <i className="fas fa-image"></i>
                </div>
              </div>
              <div className="content-text">
                {post.content.split('\n\n').map((paragraph, index) => {
                  if (paragraph.startsWith('## ')) {
                    return (
                      <h2 key={index} className="content-heading">
                        {paragraph.replace('## ', '')}
                      </h2>
                    );
                  } else if (paragraph.startsWith('### ')) {
                    return (
                      <h3 key={index} className="content-subheading">
                        {paragraph.replace('### ', '')}
                      </h3>
                    );
                  } else if (paragraph.startsWith('1. ') || paragraph.startsWith('2. ') || paragraph.startsWith('3. ') || paragraph.startsWith('4. ')) {
                    const items = paragraph.split('\n').filter(item => item.trim());
                    return (
                      <ol key={index} className="content-list">
                        {items.map((item, itemIndex) => (
                          <li key={itemIndex}>{item.replace(/^\d+\.\s/, '')}</li>
                        ))}
                      </ol>
                    );
                  } else if (paragraph.startsWith('- ')) {
                    const items = paragraph.split('\n').filter(item => item.trim());
                    return (
                      <ul key={index} className="content-list">
                        {items.map((item, itemIndex) => (
                          <li key={itemIndex}>{item.replace(/^-\s/, '')}</li>
                        ))}
                      </ul>
                    );
                  } else {
                    return (
                      <p key={index} className="content-paragraph">
                        {paragraph}
                      </p>
                    );
                  }
                })}
              </div>
            </article>

            {/* Sidebar */}
            <aside className="post-sidebar">
              <div className="sidebar-section">
                <h3>About the Author</h3>
                <div className="author-card">
                  <div className="author-avatar-large">
                    <i className="fas fa-user"></i>
                  </div>
                  <h4>{post.author}</h4>
                  <p>Construction industry expert with years of experience in sustainable building practices and innovative construction technologies.</p>
                </div>
              </div>

              <div className="sidebar-section">
                <h3>Tags</h3>
                <div className="tags-container">
                  {post.tags.map(tag => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              </div>

              <div className="sidebar-section">
                <h3>Share This Post</h3>
                <div className="share-buttons">
                  <button className="share-btn facebook">
                    <i className="fab fa-facebook-f"></i>
                  </button>
                  <button className="share-btn twitter">
                    <i className="fab fa-twitter"></i>
                  </button>
                  <button className="share-btn linkedin">
                    <i className="fab fa-linkedin-in"></i>
                  </button>
                  <button className="share-btn email">
                    <i className="fas fa-envelope"></i>
                  </button>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="related-posts">
        <div className="container">
          <h3>Related Posts</h3>
          <div className="related-grid">
            {blogPosts
              .filter(p => p.id !== post.id)
              .map(relatedPost => (
                <div key={relatedPost.id} className="related-card">
                  <h4>{relatedPost.title}</h4>
                  <p>{relatedPost.excerpt}</p>
                  <Link to={`/blog/${relatedPost.id}`} className="read-more-link">
                    Read More <i className="fas fa-arrow-right"></i>
                  </Link>
                </div>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPostPage; 