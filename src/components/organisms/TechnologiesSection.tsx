import { motion } from 'framer-motion';
import TechnologyCard from '../molecules/TechnologyCard';

const TechnologiesSection = () => {
  const technologies = [
    { name: 'Node.js', icon: 'nodejs', description: 'Runtime JavaScript' },
    {
      name: 'TypeScript',
      icon: 'typescript',
      description: 'JavaScript tipado',
    },
    { name: 'PostgreSQL', icon: 'postgresql', description: 'Banco de dados' },
    { name: 'React', icon: 'react', description: 'Frontend framework' },
    { name: 'Vue.js', icon: 'vue', description: 'Frontend framework' },
    { name: 'HTML', icon: 'html', description: 'Markup language' },
    { name: 'CSS', icon: 'css', description: 'Estilização' },
    { name: 'AWS', icon: 'aws', description: 'Cloud computing' },
  ];

  return (
    <section className="py-16">
      <motion.div
        className="max-w-6xl mx-auto px-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-center mb-12 text-white">
          Tecnologias
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <TechnologyCard
                name={tech.name}
                icon={tech.icon}
                description={tech.description}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default TechnologiesSection;
