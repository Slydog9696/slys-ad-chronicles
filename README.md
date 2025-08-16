# Sly's Analog & Digital Chronicles - Multipage Website

A modern, responsive multipage website built with Next.js 15+, React 19, Firebase, and Tailwind CSS. This website showcases the work and services of David Campbell (Slydog9696) - a Digital Tinkerer with an Analog Soul.

## 🚀 Features

- **Modern Tech Stack**: Next.js 15+, React 19, TypeScript
- **Beautiful UI**: Tailwind CSS with custom brand colors and animations
- **Authentication**: Firebase Auth with login/signup flows
- **Database**: Firestore for data storage
- **File Storage**: Firebase Storage for media files
- **Responsive Design**: Mobile-first approach with beautiful animations
- **SEO Optimized**: Meta tags, Open Graph, and structured data
- **Performance**: Optimized images, lazy loading, and modern web standards

## 🎨 Design Philosophy

The website combines warm earth tones (representing the farming background) with cool tech blues (representing the digital expertise). This creates a unique brand identity that bridges "Silicon & Soil" - the core philosophy of Sly's Chronicles.

## 📱 Pages

- **Home** (`/`) - Landing page with hero section and features
- **About** (`/about`) - Personal story, skills, and experience
- **Portfolio** (`/portfolio`) - Project showcase with filtering
- **Services** (`/services`) - Service offerings and pricing
- **Downloads** (`/downloads`) - Downloadable projects and tools
- **Content** (`/content`) - Blog posts and tutorials
- **Contact** (`/contact`) - Contact form and information
- **Authentication** (`/auth/login`, `/auth/signup`) - User authentication

## 🛠️ Tech Stack

### Frontend

- **Next.js 15+** - React framework with App Router
- **React 19** - Latest React with new features
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library

### Backend & Services

- **Firebase Auth** - User authentication
- **Firestore** - NoSQL database
- **Firebase Storage** - File storage
- **Firebase Hosting** - Website hosting
- **Firebase DataConnect** - Data integration

### Development Tools

- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Firebase project (for production)

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd mutipagewebsite
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Environment Setup**

   Create a `.env.local` file in the root directory:

   ```env
   # Firebase Configuration
   NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
   NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=your_measurement_id
   ```

4. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000)

## 🔧 Development

### Project Structure

```
mutipagewebsite/
├── app/                    # Next.js App Router
│   ├── auth/              # Authentication pages
│   ├── about/             # About page
│   ├── portfolio/         # Portfolio page
│   ├── services/          # Services page
│   ├── downloads/         # Downloads page
│   ├── content/           # Content page
│   ├── contact/           # Contact page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/             # Reusable components
│   ├── Navigation.tsx     # Top navigation
│   └── Footer.tsx         # Bottom footer
├── lib/                    # Utility libraries
│   └── firebase.ts        # Firebase configuration
├── public/                 # Static assets
├── tailwind.config.js      # Tailwind configuration
├── next.config.js          # Next.js configuration
└── package.json            # Dependencies and scripts
```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Customization

#### Brand Colors

The website uses a custom color palette defined in `tailwind.config.js`:

- **Farm Colors**: Gold, hay yellow, barn red, soil brown, pasture green
- **Tech Colors**: Blue, electric blue, cyber teal, midnight blue, neon blue
- **Accent Colors**: Glow blue, glow orange, neutral gray

#### Fonts

- **Tech Font**: Orbitron (for headings and technical content)
- **Farm Font**: Georgia (for personal stories and descriptions)
- **Modern Font**: Inter (for body text and general content)

## 🚀 Deployment

### Firebase Hosting

1. **Install Firebase CLI**

   ```bash
   npm install -g firebase-tools
   ```

2. **Login to Firebase**

   ```bash
   firebase login
   ```

3. **Build the project**

   ```bash
   npm run build
   ```

4. **Deploy to Firebase**
   ```bash
   firebase deploy
   ```

### Environment Variables for Production

Make sure to set the correct Firebase configuration in your production environment:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_production_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_production_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_production_project_id
# ... other Firebase config
```

## 📱 Responsive Design

The website is fully responsive and optimized for:

- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

## 🎭 Animations

- **Framer Motion**: Smooth page transitions and component animations
- **CSS Animations**: Hover effects, loading states, and micro-interactions
- **Performance**: Optimized animations that don't impact performance

## 🔒 Security

- **Firebase Security Rules**: Proper Firestore and Storage security
- **Authentication**: Secure user authentication with Firebase Auth
- **Environment Variables**: Sensitive data stored in environment variables
- **HTTPS**: Secure connections in production

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**David Campbell (Slydog9696)**

- Discord: [Sly's Chronicles](https://discord.gg/5YQkJF6Znf)
- YouTube: [Sly's Analog & Digital Chronicles](https://www.youtube.com/@SlysAnalogandDigitalChronicles)
- GitHub: [@Slydog9696](https://github.com/Slydog9696)
- Facebook: [DC Global Enterprises](https://www.facebook.com/DCEnterprises)

## 🙏 Acknowledgments

- **Next.js Team** - For the amazing framework
- **Firebase Team** - For the powerful backend services
- **Tailwind CSS Team** - For the utility-first CSS framework
- **Framer Motion Team** - For the smooth animations
- **Lucide Team** - For the beautiful icons

## 📞 Support

If you need help or have questions:

- Join our [Discord Community](https://discord.gg/5YQkJF6Znf)
- Contact us through the [Contact Page](/contact)
- Email: contact@dcglobal.com

---

**"A Digital Tinkerer with an Analog Soul - Bridging Silicon & Soil, One Bit at a Time"**
