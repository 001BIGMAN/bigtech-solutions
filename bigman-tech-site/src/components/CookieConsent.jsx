import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) setIsVisible(true);
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'true');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="cookie-consent"
        >
          <div className="cookie-consent__inner">
            <p className="cookie-consent__text">
              We use cookies to enhance your browsing experience and analyze our traffic.
              By clicking "Accept All", you consent to our use of cookies. Read our{' '}
              <Link to="/cookie-policy">Cookie Policy</Link>.
            </p>
            <div className="cookie-consent__actions">
              <button onClick={() => setIsVisible(false)} className="cookie-consent__btn cookie-consent__btn--decline">
                Decline
              </button>
              <button onClick={handleAccept} className="cookie-consent__btn cookie-consent__btn--accept">
                Accept All
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
