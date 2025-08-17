# 🎨 Mavis Busenur Balci - Portfolio Website

A stunning, modern portfolio website showcasing the intersection of UI/UX design, engineering, and artistic creativity. Built with cutting-edge web technologies and featuring a unique Matisse-inspired design aesthetic.


## 👩‍💻 About

This portfolio represents:

- **UI/UX Design** - User-centered design and prototyping
- **Frontend Development** - React, TypeScript, and modern web technologies
- **Creative Arts** - Photography, oil painting, and digital illustration
- **Design Thinking** - Human-computer interaction and accessibility


## ✨ Features

### 🎨 **Unique Design System**
- **Matisse-Inspired Aesthetic** - Organic shapes, vibrant colors, and artistic flair
- **Responsive Design** - Seamless experience across all devices
- **Micro-Interactions** - Smooth animations and delightful user feedback
- **Accessibility** - WCAG compliant with proper focus states and screen reader support

### 🖼️ **Interactive Gallery**
- **Lightbox Experience** - Click images to view in full-screen with navigation
- **Keyboard Navigation** - Arrow keys for browsing, Escape to close
- **Image Information** - Detailed metadata and descriptions
- **Smooth Animations** - Elegant transitions and hover effects

### 📝 **Content Management**
- **MDX Integration** - Rich content with embedded React components
- **Dynamic Routing** - Individual pages for articles and case studies
- **Type Safety** - Full TypeScript implementation
- **SEO Optimized** - Proper meta tags and structured data

### ⚡ **Performance Optimized**
- **Next.js 14** - App Router with server-side rendering
- **Image Optimization** - Automatic WebP conversion and responsive images
- **Code Splitting** - Optimized bundle sizes
- **Progressive Enhancement** - Works without JavaScript

## 🛠️ Tech Stack

### **Frontend Framework**
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Animation library

### **UI Components**
- **shadcn/ui** - Customizable component library
- **Lucide React** - Beautiful icon library
- **Custom Components** - Bespoke interactive elements

### **Content & Media**
- **MDX** - Markdown with JSX support
- **Gray Matter** - Frontmatter parsing
- **Next.js Image** - Optimized image handling
- **Unsplash Integration** - High-quality imagery

### **Development Tools**
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Node.js 20+** - Runtime environment

## 🚀 Getting Started

### Prerequisites

- **Node.js** 20.0.0 or higher
- **npm** or **yarn** package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone ---link of githubrepo---
   cd art-design-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

### Build for Production

```bash
# Build the application
npm run build

# Start production server
npm start
```

## 📁 Project Structure

```
art-design-portfolio/
├── public/                 # Static assets
├── src/
│   ├── app/               # Next.js App Router pages
│   │   ├── about/         # About page
│   │   ├── contact/       # Contact page
│   │   ├── gallery/       # Gallery pages
│   │   ├── work/          # Work & projects
│   │   ├── writings/      # Blog & articles
│   │   └── layout.tsx     # Root layout
│   ├── components/        # React components
│   │   ├── artwork/       # Gallery components
│   │   ├── layout/        # Layout components
│   │   └── ui/           # Reusable UI components
│   ├── content/          # MDX content files
│   │   ├── artwork/      # Artwork descriptions
│   │   ├── case-studies/ # Project case studies
│   │   └── writings/     # Blog articles
│   ├── lib/              # Utility functions
│   ├── types/            # TypeScript definitions
│   └── hooks/            # Custom React hooks
├── tailwind.config.ts    # Tailwind configuration
├── next.config.js        # Next.js configuration
└── package.json          # Dependencies & scripts
```

## 🎨 Design System

### **Color Palette**
- **Primary**: Artistic red (#ff6b6b)
- **Secondary**: Teal (#4ecdc4)
- **Accent**: Yellow (#ffe66d)
- **Neutral**: Gray scale for text and backgrounds

### **Typography**
- **Headings**: Inter (Bold, varied sizes)
- **Body**: Inter (Regular, optimized readability)
- **Code**: Monospace font family

### **Components**
- **Matisse Shapes** - Organic, hand-cut paper aesthetic
- **Watercolor Effects** - Artistic backgrounds and borders
- **Interactive Buttons** - Enhanced with micro-animations
- **Image Lightbox** - Professional gallery viewing experience

## 📄 Content Management

### **Adding New Artwork**

1. Create an MDX file in `src/content/artwork/`
2. Include frontmatter with metadata:
   ```yaml
   ---
   title: "Artwork Title"
   type: "photo" | "oil" | "illustration"
   medium: "Digital Photography"
   year: "2024"
   image: "https://images.unsplash.com/..."
   ---
   ```

### **Adding New Articles**

1. Create an MDX file in `src/content/writings/`
2. Include frontmatter:
   ```yaml
   ---
   title: "Article Title"
   excerpt: "Brief description"
   publishDate: "2024-01-15"
   category: "Design"
   readTime: "8 min read"
   tags: ["Design", "UX", "Technology"]
   ---
   ```

### **Adding Case Studies**

1. Create an MDX file in `src/content/case-studies/`
2. Include project details and process documentation

## 🌐 Deployment

### **Vercel (Recommended)**

1. **Connect repository** to Vercel
2. **Configure build settings**:
   - Framework: Next.js
   - Node.js Version: 20.x
3. **Deploy automatically** on git push

### **Other Platforms**

The application can be deployed to any platform supporting Node.js:
- **Netlify**
- **AWS Amplify**
- **Railway**
- **Heroku**

## 🔧 Configuration

### **Environment Variables**

Create a `.env.local` file for environment-specific settings:

```env
# Analytics (optional)
NEXT_PUBLIC_ANALYTICS_ID=your_analytics_id

# Contact form (optional)
RESEND_API_KEY=your_resend_api_key
```

### **Image Optimization**

Configure additional image domains in `next.config.js`:

```javascript
images: {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'your-image-domain.com',
    },
  ],
}
```

## 🎯 SEO Features

- **Meta Tags** - Proper title, description, and Open Graph tags
- **Structured Data** - JSON-LD for rich snippets
- **Sitemap** - Automatic generation for search engines
- **Performance** - Optimized Core Web Vitals
- **Accessibility** - WCAG 2.1 AA compliance

