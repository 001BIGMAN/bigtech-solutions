import { motion } from 'framer-motion';

const projects = [
  {
    name: 'Business Growth Roundtable',
    category: 'Corporate Event / Landing Page',
    url: 'https://excellentprowess.com/bgr',
  },
  {
    name: 'BigTech Solutions Programmes',
    category: 'Corporate / Programs',
    url: 'https://excellentprowess.com/programmes',
  },
  {
    name: 'DNACH Treats',
    category: 'E-commerce / Bakery',
    url: 'https://dnach-treats.vercel.app/',
  },
  {
    name: 'Zee and Tee',
    category: 'E-commerce / Brand',
    url: 'https://zee-and-tee.vercel.app/',
  },
  {
    name: 'Tofeb Academy',
    category: 'Education / E-learning Platform',
    url: 'https://tofebacademy.com.ng/',
  },
];

const IframeCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="work-card"
      onClick={() => window.open(project.url, '_blank')}
    >
      <div className="work-card__preview">
        <div className="work-card__browser-bar">
          <div className="browser-dot browser-dot--red"></div>
          <div className="browser-dot browser-dot--yellow"></div>
          <div className="browser-dot browser-dot--green"></div>
          <div className="work-card__url-bar">{project.url}</div>
        </div>
        <div className="work-card__iframe-container">
          <iframe
            src={project.url}
            title={`Preview of ${project.name}`}
            loading="lazy"
            tabIndex="-1"
            aria-hidden="true"
          />
        </div>
        <div className="work-card__overlay" />
      </div>
      <div>
        <h3 className="work-card__name">{project.name}</h3>
        <p className="work-card__category">{project.category}</p>
      </div>
    </motion.div>
  );
};

export default function SelectedWorks() {
  return (
    <section className="selected-works">
      <div className="container">
        <div className="selected-works__header">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="selected-works__title"
          >
            Selected Works
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="selected-works__subtitle"
          >
            A showcase of our recent digital experiences. Crafted with precision, designed for conversion.
          </motion.p>
        </div>

        <div className="works-grid">
          {projects.map((project, index) => (
            <IframeCard key={project.name} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
