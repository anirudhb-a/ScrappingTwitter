// src/components/AboutPage.js
import React from 'react';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <div>
      <h1>About Page</h1>
      {/* Add content for the about page */}
      <Link to="/">Go to Home Page</Link>
    </div>
  );
};

export default AboutPage;