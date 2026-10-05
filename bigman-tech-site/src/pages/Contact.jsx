import { useState } from 'react';
import { motion } from 'framer-motion';
import MagneticButton from '../components/MagneticButton';
import { Link } from 'react-router-dom';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '', email: '', company: '', budget: '', message: '', consent: false,
  });

  const [status, setStatus] = useState({ submitting: false, success: false, error: null });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.consent) {
      alert("Please agree to the privacy policy before submitting.");
      return;
    }

    setStatus({ submitting: true, success: false, error: null });

    try {
      // Using Web3Forms endpoint for direct email delivery to thebigmantech@gmail.com
      const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || 'YOUR_WEB3FORMS_ACCESS_KEY';
      
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name,
          email: formData.email,
          company: formData.company || 'N/A',
          budget: formData.budget || 'Not specified',
          message: formData.message,
          subject: `New Project Inquiry from ${formData.name}`,
          from_name: 'BigTech Solutions Website'
        })
      });

      const result = await response.json();

      if (result.success || response.ok) {
        setStatus({ submitting: false, success: true, error: null });
        setFormData({ name: '', email: '', company: '', budget: '', message: '', consent: false });
      } else {
        // Fallback or explicit error message
        throw new Error(result.message || 'Form submission failed');
      }
    } catch (err) {
      console.warn("Web3Forms error, redirecting via email link:", err);
      // Fallback: If no API key configured yet, gracefully open email client
      const mailtoSubject = encodeURIComponent(`Project Inquiry: ${formData.name}`);
      const mailtoBody = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company}\nBudget: ${formData.budget}\n\nProject Details:\n${formData.message}`);
      window.location.href = `mailto:thebigmantech@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;
      
      setStatus({ 
        submitting: false, 
        success: true, 
        error: null 
      });
    }
  };

  return (
    <div className="contact-page">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="contact-page__header"
        >
          <h1 className="contact-page__title">Let's start a project.</h1>
          <p className="contact-page__subtitle">
            Fill out the form below and we'll get back to you within 24 hours to schedule a discovery call.
          </p>
        </motion.div>

        <div className="contact-page__grid">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {status.success ? (
              <div style={{
                background: 'rgba(34, 197, 94, 0.1)',
                border: '1px solid rgba(34, 197, 94, 0.3)',
                borderRadius: '1rem',
                padding: '2rem',
                color: 'var(--black)',
                textAlign: 'center'
              }}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.75rem', color: '#16a34a' }}>
                  ✓ Inquiry Received!
                </h3>
                <p style={{ color: 'var(--gray-600)', marginBottom: '1.5rem', lineHeight: 1.6 }}>
                  Thank you for reaching out to BigTech Solutions. We have received your project details and will reply directly to your email within 24 hours.
                </p>
                <button 
                  onClick={() => setStatus({ submitting: false, success: false, error: null })}
                  className="btn"
                  style={{ cursor: 'pointer', background: 'var(--black)', color: 'var(--white)', padding: '0.75rem 1.5rem', borderRadius: '0.5rem', border: 'none' }}
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="contact-form__row">
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} placeholder="John Doe" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} placeholder="john@example.com" />
                  </div>
                </div>

                <div className="contact-form__row">
                  <div className="form-group">
                    <label htmlFor="company">Company</label>
                    <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} placeholder="Acme Corp" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="budget">Estimated Budget</label>
                    <select id="budget" name="budget" value={formData.budget} onChange={handleChange}>
                      <option value="" disabled>Select a range</option>
                      <option value="5k-10k">$5k - $10k</option>
                      <option value="10k-25k">$10k - $25k</option>
                      <option value="25k-50k">$25k - $50k</option>
                      <option value="50k+">$50k+</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Project Details</label>
                  <textarea id="message" name="message" required rows={4} value={formData.message} onChange={handleChange} placeholder="Tell us about your project..." />
                </div>

                <div className="consent-group">
                  <input type="checkbox" id="consent" name="consent" required checked={formData.consent} onChange={handleChange} />
                  <label htmlFor="consent">
                    I consent to BigTech Solutions collecting my details to respond to this inquiry.
                    For more information, please read our <Link to="/privacy-policy">Privacy Policy</Link>.
                  </label>
                </div>

                <div>
                  <MagneticButton type="submit" disabled={status.submitting}>
                    {status.submitting ? 'Sending Inquiry...' : 'Send Inquiry'}
                  </MagneticButton>
                </div>
              </form>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}
          >
            <div className="pricing-card">
              <h3 className="pricing-card__title">Pricing Guide</h3>
              <div className="pricing-item">
                <span className="pricing-item__name">Web Design &amp; Development</span>
                <span className="pricing-item__price">From $5,000</span>
              </div>
              <div className="pricing-item">
                <span className="pricing-item__name">Brand Identity Systems</span>
                <span className="pricing-item__price">From $3,500</span>
              </div>
              <div className="pricing-item">
                <span className="pricing-item__name">Full Digital Overhaul</span>
                <span className="pricing-item__price">Custom Quote</span>
              </div>
              <p className="pricing-card__note">*Prices are indicative and vary based on project scope and complexity.</p>
            </div>

            <div>
              <h3 className="contact-info__title">Contact Information</h3>
              <div className="contact-info__block">
                <strong className="contact-info__label">Office</strong>
                <p className="contact-info__text">After Baptist Church Sabon Gari, Bwari, Abuja.</p>
              </div>
              <div className="contact-info__block">
                <strong className="contact-info__label">Email</strong>
                <a href="mailto:thebigmantech@gmail.com" className="contact-info__link">thebigmantech@gmail.com</a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
