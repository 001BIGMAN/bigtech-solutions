import { motion } from 'framer-motion';
import SelectedWorks from '../components/SelectedWorks';
import grap from '../assets/grap.jpg';
import graph from '../assets/graph.jpg';

const graphicDesigns = [
  {
    title: 'Vintage Vision by Joy',
    client: 'Vintage Vision by Joy',
    type: 'Brand / Social Media Design',
    image: grap,
  },
  {
    title: 'ECWA Youth Sunday — Old School Edition',
    client: 'ECWA Gospel Church Youth Fellowship',
    type: 'Event Flyer / Graphic Design',
    image: graph,
  },
];

export default function Projects() {
  return (
    <div style={{ background: 'var(--white)', minHeight: '100vh', paddingTop: '5rem' }}>
      <SelectedWorks />

      {/* ── Graphic Design Section ── */}
      <section style={{ paddingTop: '5rem', paddingBottom: '6rem', background: 'var(--gray-50)', borderTop: '1px solid var(--gray-100)' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ marginBottom: '3.5rem' }}
          >
            <p style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--gray-400)', marginBottom: '0.75rem' }}>
              Creative Work
            </p>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.03em', color: 'var(--black)', marginBottom: '1rem' }}>
              Graphic Design
            </h2>
            <p style={{ fontSize: '1.0625rem', color: 'var(--gray-500)', maxWidth: '40rem', lineHeight: 1.7 }}>
              Beyond the screen — compelling visual identities, event flyers, and brand materials that make a lasting impression.
            </p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {graphicDesigns.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.55, delay: i * 0.12 }}
                style={{
                  background: 'var(--white)',
                  border: '1px solid var(--gray-200)',
                  borderRadius: '1.25rem',
                  overflow: 'hidden',
                  boxShadow: '0 2px 16px rgba(0,0,0,0.06)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                }}
                whileHover={{ y: -6, boxShadow: '0 12px 40px rgba(0,0,0,0.12)' }}
              >
                <div style={{ overflow: 'hidden', aspectRatio: '4/5', background: 'var(--gray-100)' }}>
                  <motion.img
                    src={item.image}
                    alt={item.title}
                    whileHover={{ scale: 1.04 }}
                    transition={{ duration: 0.45 }}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                </div>
                <div style={{ padding: '1.5rem 1.75rem' }}>
                  <p style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--gray-400)', marginBottom: '0.4rem' }}>
                    {item.type}
                  </p>
                  <h3 style={{ fontSize: '1.0625rem', fontWeight: 700, color: 'var(--black)', lineHeight: 1.3 }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: '0.875rem', color: 'var(--gray-500)', marginTop: '0.35rem' }}>
                    {item.client}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
