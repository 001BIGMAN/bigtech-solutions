import { motion, useScroll, useTransform } from 'framer-motion';
import SelectedWorks from '../components/SelectedWorks';
import MagneticButton from '../components/MagneticButton';
import { Link } from 'react-router-dom';

const TextReveal = ({ children }) => (
  <div className="text-reveal">
    <motion.div
      initial={{ y: "100%" }}
      whileInView={{ y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
    >
      {children}
    </motion.div>
  </div>
);

export default function Home() {
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 1000], [0, 300]);
  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <div>
      {/* Hero */}
      <section className="hero">
        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="hero__content container">
          <h1 className="hero__title">
            <TextReveal>We build digital</TextReveal>
            <TextReveal>experiences that</TextReveal>
            <TextReveal>drive growth.</TextReveal>
          </h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <p className="hero__subtitle">
              BigTech Solutions is a premium digital agency crafting high-end websites, brands, and digital products for forward-thinking companies.
            </p>
            <Link to="/booking">
              <MagneticButton className="btn-lg">Start a Project</MagneticButton>
            </Link>
          </motion.div>
        </motion.div>
        <div className="hero__bg" />
      </section>

      {/* Social Proof */}
      <section className="social-proof">
        <div className="container">
          <p className="social-proof__label">Trusted by industry leaders</p>
          <div className="social-proof__logos">
            <div className="social-proof__logo">Acme Corp</div>
            <div className="social-proof__logo">Global Tech</div>
            <div className="social-proof__logo">Innovate LLC</div>
            <div className="social-proof__logo">NextGen</div>
          </div>
        </div>
      </section>

      {/* Selected Works */}
      <SelectedWorks />

      {/* Services (Dark) */}
      <section className="services-dark">
        <div className="container">
          <div className="services-dark__grid">
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="services-dark__title"
              >
                Our Expertise
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="services-dark__subtitle"
              >
                We combine strategic thinking with premium design and cutting-edge engineering.
              </motion.p>
              <Link to="/services">
                <MagneticButton className="btn-white">View All Services</MagneticButton>
              </Link>
            </div>

            <div className="services-dark__list">
              {[
                { title: "Web Design & Development", desc: "High-performance websites built with modern frameworks." },
                { title: "Brand Identity", desc: "Memorable brand systems that resonate with your audience." },
                { title: "UI/UX Design", desc: "Intuitive digital products focused on user experience." }
              ].map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.2 }}
                  className="service-item"
                >
                  <h3 className="service-item__title">{s.title}</h3>
                  <p className="service-item__desc">{s.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
