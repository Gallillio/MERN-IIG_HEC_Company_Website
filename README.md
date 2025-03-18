# IIG-HEC Website

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![React](https://img.shields.io/badge/React-18.2.0-61DAFB.svg?logo=react)
![Firebase](https://img.shields.io/badge/Firebase-10.3.1-FFCA28.svg?logo=firebase)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.3.3-38B2AC.svg?logo=tailwind-css)
![Node.js](https://img.shields.io/badge/Node.js-18.x-339933.svg?logo=node.js)
![MongoDB](https://img.shields.io/badge/MongoDB-6.0-47A248.svg?logo=mongodb)
![Express.js](https://img.shields.io/badge/Express.js-4.x-000000.svg?logo=express)
![MERN Stack](https://img.shields.io/badge/MERN-Stack-green.svg)

A modern, responsive website built on the MERN stack (MongoDB, Express.js, React, Node.js) for showcasing landscape architecture projects and services offered by IIG-HEC. This platform features project portfolios, service information, blog posts, and contact capabilities, with a robust admin dashboard for content management.

## ✨ Features

- **Responsive Design**: Fully mobile-responsive interface using TailwindCSS and DaisyUI
- **Project Showcase**: Gallery of featured landscape architecture projects with detailed individual project pages
- **Interactive UI**: Smooth animations and transitions using AOS (Animate On Scroll)
- **Content Management System**: Comprehensive admin dashboard for:
  - Creating, editing, and deleting projects
  - Managing blog posts with rich text editor
  - Uploading and organizing media content
  - Controlling site content dynamically
- **Blog/Posts Section**: Share news, insights, and information about landscape architecture
- **Integrated Contact Form**: Easy way for potential clients to reach out
- **Video Gallery**: Showcase of related video content
- **Authentication**: Secure admin login using Firebase Authentication

## 🛠️ Technology Stack

- **MERN Stack**:
  - **MongoDB**: Database for storing projects, blog posts, and user data
  - **Express.js**: Backend API framework
  - **React**: Frontend UI library
  - **Node.js**: JavaScript runtime for the backend
- **Authentication**: Firebase Authentication for secure admin access
- **Styling**: TailwindCSS, DaisyUI
- **Animations**: AOS (Animate On Scroll)
- **Content Editing**: TinyMCE React
- **UI Components**:
  - Swiper for carousels
  - React Icons for iconography
  - React Modal for modal dialogs
  - React Quill for rich text editing

## 📋 Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Firebase account (for deployment and backend services)

## 🚀 Installation and Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/IIG-HEC-Website.git
   cd IIG-HEC-Website
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Environment Variables**
   Create a `.env` file in the root directory with your Firebase configuration:

   ```
   REACT_APP_FIREBASE_API_KEY=your_api_key
   REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
   REACT_APP_FIREBASE_PROJECT_ID=your_project_id
   REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
   REACT_APP_FIREBASE_APP_ID=your_app_id
   ```

4. **Start the development server**
   ```bash
   npm start
   ```
   The site will be available at [http://localhost:3000](http://localhost:3000)

## 🏗️ Building for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder, ready for deployment.

## 🌐 Deployment

### Firebase Hosting (Recommended)

1. Install Firebase CLI:

   ```bash
   npm install -g firebase-tools
   ```

2. Login to Firebase:

   ```bash
   firebase login
   ```

3. Initialize Firebase:

   ```bash
   firebase init
   ```

   - Select Hosting
   - Select your Firebase project
   - Set public directory to "build"
   - Configure as a single-page app: "Yes"

4. Deploy to Firebase:
   ```bash
   firebase deploy
   ```

## 🧰 Project Structure

```
src/
├── assets/        # Images, icons, and other static assets
├── components/    # Reusable UI components
├── pages/         # Page components organized by route
│   ├── About/
│   ├── Contact/
│   ├── Home/
│   ├── Login/
│   ├── Posts/
│   ├── Projects/
│   └── Videos/
├── firebase.js    # Firebase configuration and utilities
├── App.js         # Main application component and routing
└── index.js       # Application entry point
```

## 🔧 Customization

- **Theme**: Customize colors and styling in `tailwind.config.js`
- **Content**: Manage content through the admin dashboard:
  - Add, edit, or delete projects with images and descriptions
  - Create and manage blog posts with the rich text editor
  - Customize homepage content and featured projects
- **Layout**: Modify components in the `components` directory

---

Built with ❤️ using React and Firebase.
