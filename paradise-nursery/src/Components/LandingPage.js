import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';  // Add your CSS for styling

const LandingPage = () => {
  return (
    <div className="landing-page-container">
      <img src="path/to/your/background-image.jpg" alt="Background" className="background-image" />
      <div className="landing-page-contentt">
        <h1>Welcome To <br/>Paradise Nursery</h1>
        <hr/>
        <p>Where Green Meets Serenity</p>
        <a href="/products" className="get-started-button">Get Started</a>
      </div>
      <div className='company-info'>
        <h4>Welcome To Paradise Nursery, Where Green Meets Serenity !</h4>
        <p>A paragraph is defined as “a group of sentences or a single sentence that forms a unit” (Lunsford and Connors 116). Length and appearance do not determine whether a section in a paper is a paragraph. For instance, in some styles of writing, particularly journalistic styles, a paragraph can be just one sentence long.</p>
        <br/>
        <p>A paragraph is defined as “a group of sentences or a single sentence that forms a unit” (Lunsford and Connors 116). Length and appearance do not determine whether a section in a paper is a paragraph. For instance, in some styles of writing, particularly journalistic styles, a paragraph can be just one sentence long.</p>
        <br/>
        <p>A paragraph is defined as “a group of sentences or a single sentence that forms a unit” (Lunsford and Connors 116). Length and appearance do not determine whether a section in a paper is a paragraph.</p>
      </div>
    </div>
  );
};

export default LandingPage;
