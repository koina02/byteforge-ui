import React, { useState, useEffect } from 'react';
import './CookieConsent.css'; // We'll create this CSS file next

const CookieConsent = () => {
  const [showConsent, setShowConsent] = useState(true);

  // Check if the user has already given consent (stored in localStorage)
  useEffect(() => {
    const consentGiven = localStorage.getItem('cookieConsent');
    if (consentGiven) {
      setShowConsent(false); // Don't show the popup if consent is given
    }
  }, []);

  // Handle user's consent click
  const handleConsent = () => {
    localStorage.setItem('cookieConsent', 'true'); // Store the consent
    setShowConsent(false); // Hide the consent popup
  };

  return (
    showConsent && (
      <div className="cookie-consent">
        <div className="cookie-content">
          <p>We use cookies to ensure you get the best experience on our website.</p>
          <button onClick={handleConsent}>Got it!</button>
        </div>
      </div>
    )
  );
};

export default CookieConsent;
