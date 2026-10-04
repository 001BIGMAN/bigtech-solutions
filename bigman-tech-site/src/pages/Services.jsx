import { motion } from 'framer-motion';
import { Cpu, Globe, Server, Wrench, Shield, Smartphone } from 'lucide-react';
import MagneticButton from '../components/MagneticButton';
import { Link } from 'react-router-dom';

const services = [
  { icon: Globe, title: "Web Design & Development", desc: "Custom websites and web apps built with React, Next.js, and modern technologies. Responsive, fast, and optimised for conversions." },
  { icon: Smartphone, title: "Mobile App Development", desc: "Native and cross-platform mobile applications that deliver seamless user experiences on every device." },
  { icon: Cpu, title: "Brand Identity & Strategy", desc: "Complete brand systems including logos, colour palettes, typography, and brand guidelines that make you unforgettable." },
  { icon: Server, title: "E-Commerce Solutions", desc: "End-to-end online stores with secure payments, inventory management, and optimised checkout flows." },
  { icon: Shield, title: "SEO & Digital Marketing", desc: "Data-driven strategies to increase your visibility, drive traffic, and grow your business online." },
  { icon: Wrench, title: "Maintenance & Support", desc: "Ongoing support, updates, and performance monitoring to keep your digital assets running at peak performance." },
];

export default function Services() {
  return (
    <div className="legal-page" style={{ paddingTop: '8rem', paddingBottom: '6rem' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '4rem' }}
        >
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 800, letterSpacing: '-0.04em', color: 'var(--black)', marginBottom: '1.5rem' }}>
            Our Services
          </h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--gray-500)', maxWidth: '36rem' }}>
            We offer a comprehensive suite of digital services to help your business thrive in the modern landscape.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              style={{
                padding: '2rem',
                border: '1px solid var(--gray-200)',
                borderRadius: '1rem',
                transition: 'box-shadow 0.3s, transform 0.3s',
                cursor: 'pointer',
              }}
              whileHover={{ y: -4, boxShadow: '0 10px 40px rgba(0,0,0,0.08)' }}
            >
              <s.icon size={32} style={{ color: 'var(--black)', marginBottom: '1.5rem' }} />
              <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.75rem', color: 'var(--black)' }}>
                {s.title}
              </h3>
              <p style={{ color: 'var(--gray-500)', lineHeight: 1.7 }}>{s.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginTop: '4rem' }}
        >
          <Link to="/booking">
            <MagneticButton className="btn-lg">Start Your Project</MagneticButton>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
