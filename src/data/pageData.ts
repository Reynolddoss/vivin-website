/**
 * Page Data Configuration
 * Centralized data for all pages - converted from Express.js version
 */

import { PageData } from '../types';

export const pageData: PageData = {
  // Home page data
  home: {
    title: 'Vivin Constructions - Visionary Ideas, Valuable Innovations',
    hero: {
      title: 'VIVIN',
      subtitle: 'CONSTRUCTIONS',
      tagline: 'Visionary Ideas, Valuable Innovations',
      ctaText: 'Get a Free Quote',
      ctaLink: '/contact'
    },
    services: [
      {
        icon: 'fas fa-home',
        title: 'Residential Construction',
        description: 'Crafting beautiful, high-quality homes that reflect your lifestyle and personality.',
        link: '/services/residential-construction'
      },
      {
        icon: 'fas fa-building',
        title: 'Commercial Projects',
        description: 'Building functional and inspiring commercial spaces that drive business growth.',
        link: '/services/commercial-projects'
      },
      {
        icon: 'fas fa-drafting-compass',
        title: 'Architectural Consultation & Design',
        description: 'Innovative designs that balance aesthetics with functionality.',
        link: '/services/architectural-consultation'
      },
      {
        icon: 'fas fa-seedling',
        title: 'Smart & Sustainable Buildings',
        description: 'Energy-efficient designs with eco-friendly materials.',
        link: '/services/smart-sustainable-buildings'
      }
    ],
    whyUs: [
      {
        icon: 'fas fa-shield-alt',
        title: 'Unmatched Quality',
        description: 'We use only the highest quality materials and skilled craftsmanship to ensure lasting value.',
        link: '/why-choose-us/unmatched-quality'
      },
      {
        icon: 'fas fa-eye',
        title: 'Transparent Process',
        description: 'No hidden costs. We believe in clear communication and complete transparency at every stage.',
        link: '/why-choose-us/transparent-process'
      },
      {
        icon: 'fas fa-clock',
        title: 'On-Time Delivery',
        description: 'Your time is valuable. We are committed to completing projects on schedule, every time.',
        link: '/why-choose-us/on-time-delivery'
      },
      {
        icon: 'fas fa-coins',
        title: 'Value for Money',
        description: 'We provide cost-effective solutions without compromising on the quality and integrity of our work.',
        link: '/why-choose-us/value-for-money'
      }
    ],
    process: [
      {
        number: '01',
        image: '/images/process-1.png',
        title: 'Consultation & Planning',
        description: 'We start by understanding your vision, requirements, and budget to create a detailed project plan.'
      },
      {
        number: '02',
        image: '/images/process-2.png',
        title: 'Design & Approval',
        description: 'Our team creates architectural designs and 3D models, collaborating with you for perfect approval.'
      },
      {
        number: '03',
        image: '/images/process-3.png',
        title: 'Construction & Execution',
        description: 'Our expert team brings the design to life with precision, quality craftsmanship, and regular updates.'
      },
      {
        number: '04',
        image: '/images/process-4.png',
        title: 'Handover & Support',
        description: 'We conduct a final walkthrough to ensure your satisfaction before handing over the keys.'
      }
    ],
    technology: {
      images: [
        { src: '/images/robot-panning.png', alt: 'VR Experience', stat: 'AI', label: 'Assisted' },
        { src: '/images/vr-look.png', alt: 'AI Technology in Construction', stat: 'VR', label: 'Experience' },
        { src: '/images/3dmodelling.png', alt: '3D Modeling', stat: '3D', label: 'Modeling' }
      ],
      features: [
        {
          icon: 'fas fa-brain',
          title: 'AI-Powered Planning',
          description: 'Enhanced by artificial intelligence for optimized architectural models.',
          tags: ['3D Modeling', 'Analytics']
        },
        {
          icon: 'fas fa-vr-cardboard',
          title: 'VR Walkthroughs',
          description: 'Experience your future home before construction begins.',
          tags: ['Immersive', '360° View']
        }
      ]
    },
    testimonials: [
      {
        quote: '"Vivin Constructions exceeded all our expectations. Their attention to detail, professionalism, and commitment to our vision was evident throughout the entire process. We couldn\'t be happier with our beautiful new home."',
        author: 'The Johnson Family'
      }
    ]
  },

  // Contact page data
  contact: {
    title: 'Contact Us - Vivin Constructions',
    hero: {
      title: 'Get In Touch',
      subtitle: 'Ready to start your dream project? Let\'s build something amazing together.',
      background: 'linear-gradient(135deg, rgba(13, 27, 42, 0.8) 0%, rgba(27, 38, 59, 0.8) 50%, rgba(44, 62, 80, 0.8) 100%), url("https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")'
    },
    offices: {
      corporate: {
        title: 'Corporate Office',
        badge: 'Main Office',
        icon: 'fas fa-building',
        address: {
          street: '#39 Pride Icon',
          city: '3rd floor Gokul Road Hubballi',
          state: 'Karnataka, 580030',
          country: 'India'
        },
        phone: {
          main: '+91 9449836556',
          support: '+91 7353476950'
        },
        email: {
          info: 'info@vivinconstructions.com',
          contact: 'contact@vivinconstructions.com'
        },
        hours: {
          weekdays: 'Mon-Fri: 8:00 AM - 6:00 PM',
          saturday: 'Sat: 9:00 AM - 3:00 PM',
          sunday: 'Sun: Closed'
        },
        mapUrl: 'https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3847.4920084792266!2d75.11000177512102!3d15.349817685230203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTXCsDIwJzU5LjMiTiA3NcKwMDYnNDUuMyJF!5e0!3m2!1sen!2sin!4v1755597989727!5m2!1sen!2sin',
        directionsUrl: 'https://www.google.com/maps/place/15%C2%B020\'59.3%22N+75%C2%B006\'45.3%22E/@15.3498177,75.1100018,17z/data=!3m1!4b1!4m4!3m3!8m2!3d15.3498177!4d75.1125767?hl=en&entry=ttu&g_ep=EgoyMDI1MDgxMy4wIKXMDSoASAFQAw%3D%3D',
        qrCode: '/images/Vivin office location.png'
      },
      branches: [
        {
          name: 'Bengaluru Branch',
          badge: 'Branch Office',
          icon: 'fas fa-map-pin',
          phone: ['+91 9148205337', '+91 8660057176'],
          email: 'bengaluru@vivinconstructions.com',
          callUrl: 'tel:+9139148205337'
        },
        {
          name: 'Bellary Branch',
          badge: 'Branch Office',
          icon: 'fas fa-map-pin',
          phone: ['+91 9036067072'],
          email: 'bellary@vivinconstructions.com',
          callUrl: 'tel:+919036067072'
        },
        {
          name: 'Hubbali Branch',
          badge: 'Branch Office',
          icon: 'fas fa-map-pin',
          phone: ['+91 9449836556', '+91 7353476950'],
          email: 'hubbali@vivinconstructions.com',
          callUrl: 'tel:+919449836556'
        },
        {
          name: 'Shivamogga Branch',
          badge: 'Branch Office',
          icon: 'fas fa-map-pin',
          phone: ['+91 8089640656'],
          email: 'shivamogga@vivinconstructions.com',
          callUrl: 'tel:+918089640656'
        },
        {
          name: 'Kerala Branch',
          badge: 'Branch Office',
          icon: 'fas fa-map-pin',
          phone: ['+91 9952083161'],
          email: 'kerala@vivinconstructions.com',
          callUrl: 'tel:+919952083161'
        },
        {
          name: 'Mysore Branch',
          badge: 'Branch Office',
          icon: 'fas fa-map-pin',
          status: 'Opening Soon',
          email: 'contact@vivinconstructions.com',
          openingSoon: true
        }
      ]
    }
  },

  // Team page data
  team: {
    title: 'Our Team - Vivin Constructions',
    hero: {
      title: 'Our Team',
      subtitle: 'Every project is more than just bricks and beams — it\'s a dream taking shape. Behind every structure stands a dedicated team of professionals, committed to building with honesty, skill, and care.',
      background: 'linear-gradient(135deg, rgba(13, 27, 42, 0.8) 0%, rgba(27, 38, 59, 0.8) 50%, rgba(44, 62, 80, 0.8) 100%), url("https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")'
    },
    team: [
      {
        name: 'Rajesh Kumar',
        role: 'Chief Vision Officer',
        badge: 'Executive Member',
        image: '/images/teams/reynold.jpeg',
        stats: [
          { icon: 'fas fa-clock', text: '15+ Years' },
          { icon: 'fas fa-project-diagram', text: '200+ Projects' }
        ],
        bio: 'Visionary leader with expertise in strategic planning and business development. Led 200+ successful projects across residential and commercial sectors.',
        social: {
          linkedin: '#',
          twitter: '#',
          email: '#'
        }
      },
      {
        name: 'Reynold Doss',
        role: 'Head of Innovations',
        badge: 'Innovations',
        image: '/images/teams/reynold.jpeg',
        stats: [
          { icon: 'fas fa-clock', text: '8+ Years' },
          { icon: 'fas fa-palette', text: 'Creative Expert' }
        ],
        bio: 'Innovation-driven and tech-savvy professional with a strong background in AI, analytics, and web technologies — transforming construction with smarter systems and future-ready innovations.',
        social: {
          linkedin: '#',
          behance: '#',
          email: '#'
        }
      },
      {
        name: 'Amit Patel',
        role: 'Creative Build Architect',
        badge: 'Partner',
        image: '/images/teams/reynold.jpeg',
        stats: [
          { icon: 'fas fa-clock', text: '10+ Years' },
          { icon: 'fas fa-certificate', text: 'PMP Certified' }
        ],
        bio: 'PMP certified professional with expertise in managing large-scale construction projects. Ensures timely delivery and quality standards.',
        social: {
          linkedin: '#',
          twitter: '#',
          email: '#'
        }
      },
      {
        name: 'Suresh Reddy',
        role: 'Lead Civil Engineer',
        badge: 'Engineer',
        image: '/images/teams/reynold.jpeg',
        stats: [
          { icon: 'fas fa-clock', text: '8+ Years' },
          { icon: 'fas fa-shield-alt', text: 'Structural Expert' }
        ],
        bio: 'Structural engineering expert with specialization in earthquake-resistant design and modern construction techniques.',
        social: {
          linkedin: '#',
          github: '#',
          email: '#'
        }
      },
      {
        name: 'Meera Iyer',
        role: 'Interior Design Specialist',
        badge: 'Designer',
        image: '/images/teams/reynold.jpeg',
        stats: [
          { icon: 'fas fa-clock', text: '7+ Years' },
          { icon: 'fas fa-palette', text: 'Creative Expert' }
        ],
        bio: 'Creative designer with expertise in modern and traditional interior design. Transforms spaces into functional and beautiful environments.',
        social: {
          linkedin: '#',
          instagram: '#',
          email: '#'
        }
      },
      {
        name: 'Krishna Rao',
        role: 'Site Supervisor',
        badge: 'Supervisor',
        image: '/images/teams/reynold.jpeg',
        stats: [
          { icon: 'fas fa-clock', text: '6+ Years' },
          { icon: 'fas fa-hard-hat', text: 'Safety Expert' }
        ],
        bio: 'Experienced supervisor ensuring quality control and safety standards on all construction sites. Manages day-to-day operations efficiently.',
        social: {
          linkedin: '#',
          twitter: '#',
          email: '#'
        }
      },
      {
        name: 'Lakshmi Devi',
        role: 'Quality Control Manager',
        badge: 'Quality',
        image: '/images/teams/reynold.jpeg',
        stats: [
          { icon: 'fas fa-clock', text: '9+ Years' },
          { icon: 'fas fa-check-circle', text: 'Standards Expert' }
        ],
        bio: 'Dedicated to maintaining the highest quality standards. Implements rigorous testing and inspection protocols for all projects.',
        social: {
          linkedin: '#',
          twitter: '#',
          email: '#'
        }
      },
      {
        name: 'Anjali Gupta',
        role: 'Client Relations Manager',
        badge: 'Relations',
        image: '/images/teams/reynold.jpeg',
        stats: [
          { icon: 'fas fa-clock', text: '5+ Years' },
          { icon: 'fas fa-heart', text: 'Client Focused' }
        ],
        bio: 'Ensures exceptional client experience throughout the project lifecycle. Builds lasting relationships and exceeds expectations.',
        social: {
          linkedin: '#',
          twitter: '#',
          email: '#'
        }
      },
      {
        name: 'Vikram Singh',
        role: 'Safety Officer',
        badge: 'Safety',
        image: '/images/teams/reynold.jpeg',
        stats: [
          { icon: 'fas fa-clock', text: '4+ Years' },
          { icon: 'fas fa-shield-alt', text: 'Certified' }
        ],
        bio: 'Certified safety professional ensuring workplace safety and compliance with all safety regulations and standards.',
        social: {
          linkedin: '#',
          twitter: '#',
          email: '#'
        }
      }
    ]
  },

  // Careers page data
  careers: {
    title: 'Careers - Join Our Team',
    hero: {
      title: 'Build Your Future With Us',
      subtitle: 'Join our dynamic team and be part of creating amazing structures that stand the test of time',
      background: 'linear-gradient(135deg, rgba(13, 27, 42, 0.8) 0%, rgba(27, 38, 59, 0.8) 50%, rgba(44, 62, 80, 0.8) 100%), url("https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")'
    },
    intro: {
      title: 'Why Work With Vivin Constructions?',
      description: 'We offer competitive salaries, excellent benefits, and opportunities for growth in a dynamic construction environment. Join our team of professionals and help us build the future.',
      benefits: [
        'Competitive salary packages',
        'Health insurance coverage',
        'Professional development opportunities',
        'Modern equipment and tools',
        'Safe working environment',
        'Career advancement paths'
      ]
    },
    branches: [
      {
        name: 'Hubballi Main Office',
        location: 'Hubballi, Karnataka',
        address: '#39 Pride Icon Hubballi Karnataka',
        positions: [
          {
            title: 'Senior Project Manager',
            type: 'Full-time',
            experience: '8-12 years',
            requirements: [
              'Bachelor\'s degree in Civil Engineering or Construction Management',
              'Proven experience in managing large-scale construction projects',
              'Strong leadership and team management skills',
              'Excellent communication and negotiation abilities',
              'Knowledge of construction software and project management tools',
              'Safety certification and compliance knowledge'
            ],
            responsibilities: [
              'Oversee project planning, execution, and completion',
              'Manage project budgets and timelines',
              'Coordinate with architects, engineers, and contractors',
              'Ensure quality standards and safety compliance',
              'Lead project teams and mentor junior staff'
            ]
          },
          {
            title: 'Site Engineer',
            type: 'Full-time',
            experience: '3-6 years',
            requirements: [
              'Bachelor\'s degree in Civil Engineering',
              'Experience in residential and commercial construction',
              'Knowledge of building codes and regulations',
              'Proficiency in AutoCAD and construction software',
              'Strong problem-solving and analytical skills',
              'Ability to work in outdoor conditions'
            ],
            responsibilities: [
              'Supervise construction activities on site',
              'Ensure quality control and safety standards',
              'Coordinate with contractors and subcontractors',
              'Prepare progress reports and documentation',
              'Assist in project planning and scheduling'
            ]
          },
          {
            title: 'Safety Officer',
            type: 'Full-time',
            experience: '2-5 years',
            requirements: [
              'Diploma or degree in Safety Management or related field',
              'Certification in workplace safety (OSHA, NEBOSH, or equivalent)',
              'Experience in construction safety management',
              'Knowledge of safety regulations and best practices',
              'Strong attention to detail and communication skills',
              'Ability to conduct safety audits and training'
            ],
            responsibilities: [
              'Develop and implement safety policies and procedures',
              'Conduct regular safety inspections and audits',
              'Provide safety training to workers',
              'Investigate accidents and incidents',
              'Ensure compliance with safety regulations'
            ]
          }
        ]
      },
      {
        name: 'Bangalore Branch',
        location: 'Bangalore, Karnataka',
        address: 'Electronic City Phase 1, Bangalore',
        positions: [
          {
            title: 'Architectural Designer',
            type: 'Full-time',
            experience: '4-8 years',
            requirements: [
              'Bachelor\'s degree in Architecture',
              'Proficiency in AutoCAD, Revit, and 3D modeling software',
              'Experience in residential and commercial design',
              'Knowledge of building codes and zoning regulations',
              'Strong creative and technical skills',
              'Portfolio demonstrating design excellence'
            ],
            responsibilities: [
              'Create architectural designs and drawings',
              'Collaborate with clients and project teams',
              'Prepare construction documents and specifications',
              'Coordinate with engineers and contractors',
              'Ensure design compliance with regulations'
            ]
          },
          {
            title: 'Quantity Surveyor',
            type: 'Full-time',
            experience: '3-7 years',
            requirements: [
              'Bachelor\'s degree in Quantity Surveying or Civil Engineering',
              'Experience in cost estimation and project budgeting',
              'Knowledge of construction materials and methods',
              'Proficiency in cost estimation software',
              'Strong analytical and mathematical skills',
              'Attention to detail and accuracy'
            ],
            responsibilities: [
              'Prepare cost estimates and budgets',
              'Analyze project costs and variations',
              'Prepare bills of quantities and tender documents',
              'Monitor project costs and provide cost reports',
              'Negotiate with suppliers and contractors'
            ]
          }
        ]
      },
      {
        name: 'Mysore Branch',
        location: 'Mysore, Karnataka',
        address: 'Vijayanagar Industrial Area, Mysore',
        positions: [
          {
            title: 'Construction Supervisor',
            type: 'Full-time',
            experience: '5-8 years',
            requirements: [
              'Diploma or degree in Civil Engineering',
              'Experience in supervising construction projects',
              'Knowledge of construction methods and materials',
              'Strong leadership and communication skills',
              'Ability to read and interpret blueprints',
              'Experience with quality control procedures'
            ],
            responsibilities: [
              'Supervise daily construction activities',
              'Ensure work quality and safety standards',
              'Coordinate with workers and subcontractors',
              'Monitor project progress and timelines',
              'Report to project managers and engineers'
            ]
          },
          {
            title: 'Equipment Operator',
            type: 'Full-time',
            experience: '2-5 years',
            requirements: [
              'Valid heavy equipment operator license',
              'Experience operating excavators, bulldozers, and cranes',
              'Knowledge of equipment maintenance and safety',
              'Physical fitness and ability to work outdoors',
              'Attention to safety protocols',
              'Flexible working hours'
            ],
            responsibilities: [
              'Operate heavy construction equipment safely',
              'Perform routine equipment maintenance',
              'Follow safety protocols and procedures',
              'Coordinate with ground crew and supervisors',
              'Maintain equipment logs and reports'
            ]
          }
        ]
      }
    ],
    application: {
      title: 'How to Apply',
      description: 'Ready to join our team? Follow these steps to apply for your dream position.',
      steps: [
        {
          step: 1,
          title: 'Review Positions',
          description: 'Browse through our available positions and find the perfect match for your skills and experience.'
        },
        {
          step: 2,
          title: 'Prepare Documents',
          description: 'Update your resume and prepare a cover letter highlighting your relevant experience and why you want to join our team.'
        },
        {
          step: 3,
          title: 'Submit Application',
          description: 'Send your application to our HR department with all required documents and references.'
        },
        {
          step: 4,
          title: 'Interview Process',
          description: 'Shortlisted candidates will be invited for technical and HR interviews at our office.'
        }
      ],
      contact: {
        email: 'careers@vivinconstructions.com',
        phone: '+91 9449836556',
        address: 'HR Department, #39 Pride Icon Hubballi Karnataka'
      }
    }
  },

  // Error pages data
  error: {
    notFound: {
      title: 'Page Not Found - Vivin Constructions',
      message: 'The page you are looking for does not exist.'
    },
    serverError: {
      title: 'Error - Vivin Constructions',
      message: 'Something went wrong. Please try again later.'
    }
  }
}; 