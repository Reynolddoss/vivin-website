# Vivin Constructions - React.js Website

A modern, responsive React.js website for Vivin Constructions, built with TypeScript and following best practices.

## 🚀 Features

- **Modern React.js** with TypeScript for type safety
- **Responsive Design** using Bootstrap 5
- **Component-Based Architecture** for maintainability
- **React Router** for client-side routing
- **Font Awesome Icons** for consistent iconography
- **Form Validation** with real-time feedback
- **Active Navigation** state management
- **Modular Structure** following best practices

## 📁 Project Structure

```
vivin-react/
├── public/
│   ├── images/           # Static images
│   └── index.html        # Main HTML file
├── src/
│   ├── components/       # Reusable components
│   │   ├── Layout/       # Layout components
│   │   ├── Home/         # Home page components
│   │   ├── Contact/      # Contact page components
│   │   ├── Team/         # Team page components
│   │   └── Careers/      # Careers page components
│   ├── pages/            # Page components
│   ├── data/             # Data configuration
│   ├── types/            # TypeScript interfaces
│   ├── App.tsx           # Main App component
│   ├── App.css           # Global styles
│   └── index.tsx         # Entry point
├── package.json          # Dependencies and scripts
└── README.md            # This file
```

## 🛠️ Technologies Used

- **React 18** - UI library
- **TypeScript** - Type safety
- **React Router DOM** - Client-side routing
- **Bootstrap 5** - CSS framework
- **Font Awesome** - Icon library
- **CSS Custom Properties** - Modern styling

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd vivin-react
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 📜 Available Scripts

- `npm start` - Starts the development server
- `npm run build` - Builds the app for production
- `npm test` - Runs the test suite
- `npm run eject` - Ejects from Create React App (not recommended)

## 🏗️ Architecture

### Component Structure

The application follows a modular component architecture:

- **Layout Components**: Navigation, Footer, Layout wrapper
- **Page Components**: Home, Contact, Team, Careers, NotFound
- **Feature Components**: Hero sections, forms, cards, etc.
- **Data Layer**: Centralized data management with TypeScript interfaces

### Data Management

- **TypeScript Interfaces**: Defined in `src/types/index.ts`
- **Company Configuration**: `src/data/companyConfig.ts`
- **Page Data**: `src/data/pageData.ts`

### Routing

- **Client-side routing** with React Router DOM
- **Active navigation** state management
- **404 handling** with custom NotFound page

## 🎨 Styling

- **Bootstrap 5** for responsive grid and components
- **CSS Custom Properties** for consistent theming
- **Custom CSS** for specific styling needs
- **Responsive design** for all screen sizes

## 📱 Pages

### Home Page (`/`)
- Hero section with call-to-action
- Services overview
- Why choose us section
- Process steps
- Technology features
- Testimonials

### Contact Page (`/contact`)
- Contact form with validation
- Office information
- Branch locations
- Interactive map integration

### Team Page (`/team`)
- Team member profiles
- Professional information
- Social media links
- Skills and experience

### Careers Page (`/careers`)
- Job openings by branch
- Application process
- Company benefits
- Contact information

## 🔧 Customization

### Adding New Pages

1. Create a new page component in `src/pages/`
2. Add the route in `src/App.tsx`
3. Add navigation item in `src/data/companyConfig.ts`
4. Add page data in `src/data/pageData.ts`

### Modifying Styles

- Global styles: `src/App.css`
- Component-specific styles: Create new CSS files
- Bootstrap customization: Override CSS custom properties

### Updating Content

- Company information: `src/data/companyConfig.ts`
- Page content: `src/data/pageData.ts`
- Images: `public/images/`

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

### Deploy Options

- **Netlify**: Drag and drop the `build` folder
- **Vercel**: Connect your GitHub repository
- **AWS S3**: Upload the `build` folder
- **Traditional hosting**: Upload the `build` folder to your server

## 📋 Best Practices Implemented

- **TypeScript** for type safety
- **Component composition** for reusability
- **Props interfaces** for component contracts
- **Error boundaries** for error handling
- **Accessibility** with ARIA labels
- **SEO-friendly** structure
- **Performance optimization** with lazy loading
- **Code splitting** for better performance

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 📞 Support

For support and questions:
- Email: contact@vivinconstructions.com
- Phone: +91 9449836556

## 🔄 Version History

- **v1.0.0** - Initial React.js implementation
  - Complete website conversion from Express.js
  - TypeScript integration
  - Modern component architecture
  - Responsive design implementation 