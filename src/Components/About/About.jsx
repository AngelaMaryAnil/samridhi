import React from 'react';
import './About.css';
/*import icon from '../../assets/logo.png'; // Add path to your icon image*/

const AboutDepartment = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1 className="about-title">About Samridhi</h1>
      </div>
      <p className="about-description">
        Samridhi is dedicated to exploring and promoting traditional and sustainable farming methods for key crops in Kerala, including rubber, cardamom, nutmeg, and avocado. Our mission is to preserve indigenous farming knowledge while assisting farmers in adopting eco-friendly practices that enhance both productivity and sustainability.
      </p>
      <p className="about-description">
        The platform offers detailed insights into the origins, soil requirements, and organic inputs needed for these crops. We aim to bridge the gap between traditional agricultural wisdom and modern sustainable farming techniques, ensuring healthier lands and improved crop yields.
      </p>
      <p className="about-description">
        Additionally, Samridhi features a WhatsApp integration to provide real-time updates on government policies, agricultural schemes, and subsidies. This ensures farmers have easy access to essential information and resources to help them thrive in a rapidly changing agricultural landscape.
      </p>
      <p className="about-description">
        Join us at Samridhi as we embark on this journey to empower farmers, preserve traditions, and build a sustainable future for agriculture in Kerala. Together, we can cultivate a thriving, eco-conscious farming ecosystem that benefits both present and future generations.
      </p>
    </div>
  );
}

export default AboutDepartment;