import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Navbar from './components/NavBar';
import Footer from './components/Footer';
import app from './firebase'
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Navbar />
    <App />
    <Footer />
  </React.StrictMode>
);

