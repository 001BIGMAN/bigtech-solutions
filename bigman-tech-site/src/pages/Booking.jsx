import { useParams, Link } from 'react-router-dom';
import { MessageCircle, ArrowLeft, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import MagneticButton from '../components/MagneticButton';

export default function Booking() {
  const { serviceName } = useParams();

  return (
    <div style={{ background: 'var(--white)', minHeight: '100vh', paddingTop: '8rem', paddingBottom: '6rem' }}>
      <div className="container" style={{ maxWidth: '48rem' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link to="/services" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--gray-500)', marginBottom: '2rem', fontSize: '0.875rem' }}>
            <ArrowLeft size={16} /> Back to Services
          </Link>

          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.03em', color: 'var(--black)', marginBottom: '1.5rem' }}>
            {serviceName ? `Book: ${serviceName.replace(/-/g, ' ')}` : "Book a Consultation"}
          </h1>
          <p style={{ fontSize: '1.125rem', color: 'var(--gray-500)', marginBottom: '3rem', lineHeight: 1.7 }}>
            Schedule a free 30-minute consultation to discuss your project needs and how we can help bring your vision to life.
          </p>

          <div style={{ background: 'var(--gray-50)', border: '1px solid var(--gray-100)', borderRadius: '1rem', padding: '2rem', marginBottom: '2rem' }}>
            <h3 style={{ fontWeight: 600, color: 'var(--black)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <MessageCircle size={20} /> What to expect
            </h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {["30-minute video or phone call", "Discussion of your project goals", "Tailored recommendations and strategy", "Clear next steps and transparent pricing"].map((item, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--gray-600)', fontSize: '0.9375rem' }}>
                  <CheckCircle size={16} style={{ color: 'var(--green-400)', flexShrink: 0 }} /> {item}
                </li>
              ))}
            </ul>
          </div>

          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <MagneticButton className="btn-lg" onClick={() => window.open('https://wa.me/2349078191975', '_blank')}>
              Book via WhatsApp
            </MagneticButton>
            <p style={{ color: 'var(--gray-400)', fontSize: '0.875rem', marginTop: '1rem' }}>
              Or email us at <a href="mailto:hello@bigtechsolutions.com" style={{ color: 'var(--black)', textDecoration: 'underline' }}>hello@bigtechsolutions.com</a>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
