import { motion } from 'framer-motion';
import { Award, Users, Target, Clock } from 'lucide-react';

const values = [
  { icon: Award, title: "Excellence", desc: "We hold ourselves to the highest standards. Every pixel, every line of code is crafted with intention." },
  { icon: Users, title: "Partnership", desc: "We don't just build for you — we build with you. Your success is our success." },
  { icon: Target, title: "Results-Driven", desc: "Beautiful design is nothing without results. We design for conversion and growth." },
  { icon: Clock, title: "Reliability", desc: "We deliver on time, every time. Clear communication and transparent timelines." },
];

export default function About() {
  return (
    <div style={{ background: 'var(--white)', minHeight: '100vh', paddingTop: '8rem', paddingBottom: '6rem' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '5rem' }}
        >
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 800, letterSpacing: '-0.04em', color: 'var(--black)', marginBottom: '1.5rem' }}>
            About Us
          </h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--gray-500)', maxWidth: '36rem', lineHeight: 1.7 }}>
            We are a team of designers, developers, and strategists who believe that great digital experiences can transform businesses.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', marginBottom: '6rem' }}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--black)', marginBottom: '1.5rem' }}>Our Story</h2>
            <p style={{ color: 'var(--gray-600)', lineHeight: 1.8, marginBottom: '1rem' }}>
              BigTech Solutions was founded with a simple mission: to help businesses succeed in the digital world through exceptional design and technology.
            </p>
            <p style={{ color: 'var(--gray-600)', lineHeight: 1.8 }}>
              Based in Abuja, Nigeria, we serve clients across the continent and beyond. We combine global design standards with local market understanding to create digital experiences that truly resonate.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            style={{ background: 'var(--gray-50)', borderRadius: '1rem', padding: '3rem', border: '1px solid var(--gray-100)' }}
          >
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
              <div>
                <div style={{ fontSize: '3rem', fontWeight: 800, color: 'var(--black)' }}>50+</div>
                <div style={{ color: 'var(--gray-500)', fontSize: '0.875rem' }}>Projects Delivered</div>
              </div>
              <div>
                <div style={{ fontSize: '3rem', fontWeight: 800, color: 'var(--black)' }}>30+</div>
                <div style={{ color: 'var(--gray-500)', fontSize: '0.875rem' }}>Happy Clients</div>
              </div>
              <div>
                <div style={{ fontSize: '3rem', fontWeight: 800, color: 'var(--black)' }}>3+</div>
                <div style={{ color: 'var(--gray-500)', fontSize: '0.875rem' }}>Years Experience</div>
              </div>
              <div>
                <div style={{ fontSize: '3rem', fontWeight: 800, color: 'var(--black)' }}>100%</div>
                <div style={{ color: 'var(--gray-500)', fontSize: '0.875rem' }}>Client Satisfaction</div>
              </div>
            </div>
          </motion.div>
        </div>

        <div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--black)', marginBottom: '3rem' }}
          >
            Our Values
          </motion.h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
            {values.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                style={{ padding: '2rem', border: '1px solid var(--gray-200)', borderRadius: '1rem' }}
              >
                <v.icon size={28} style={{ color: 'var(--black)', marginBottom: '1rem' }} />
                <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: 'var(--black)', marginBottom: '0.5rem' }}>{v.title}</h3>
                <p style={{ color: 'var(--gray-500)', fontSize: '0.875rem', lineHeight: 1.7 }}>{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
