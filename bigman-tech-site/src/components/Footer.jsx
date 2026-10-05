import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div>
            <Link to="/" className="navbar__logo" style={{ display: 'block', marginBottom: '1rem' }}>
              BigTech Solutions
            </Link>
            <p className="footer__brand-desc">
              We design and build high-end digital experiences for forward-thinking brands.
            </p>
            <p className="footer__address">
              After Baptist Church Sabon Gari, Bwari, Abuja.
            </p>
          </div>

          <div>
            <h3 className="footer__heading">Company</h3>
            <Link to="/about" className="footer__link">About Us</Link>
            <Link to="/services" className="footer__link">Services</Link>
            <Link to="/projects" className="footer__link">Selected Works</Link>
            <Link to="/contact" className="footer__link">Contact</Link>
          </div>

          <div>
            <h3 className="footer__heading">Legal &amp; Privacy</h3>
            <Link to="/privacy-policy" className="footer__link">Privacy Policy</Link>
            <Link to="/terms-conditions" className="footer__link">Terms &amp; Conditions</Link>
            <Link to="/cookie-policy" className="footer__link">Cookie Policy</Link>
            <Link to="/refund-policy" className="footer__link">Refund Policy</Link>
          </div>

          <div>
            <h3 className="footer__heading">Connect</h3>
            <a href="#" className="footer__link">Twitter / X</a>
            <a href="#" className="footer__link">LinkedIn</a>
            <a href="https://www.instagram.com/_bigtech__" target="_blank" rel="noopener noreferrer" className="footer__link">Instagram</a>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">&copy; {currentYear} BigTech Solutions. All rights reserved.</p>
          <span className="footer__crafted">Crafted with precision.</span>
        </div>
      </div>
    </footer>
  );
}
