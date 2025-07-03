// src/Pages/PagesApp.js
import React from 'react';
import PagesHero from './pagesHero';
import Teacher from './Teacher';

import Footer from "../home/Footer";
import './Pages.css';

const PagesApp = () => {
  return (
    <div className="pages-container">
      <PagesHero />
      {/* The following components can be rendered conditionally based on the route or user interaction */}
      <Teacher />
      <Footer />

    </div>
  );
};

export default PagesApp;