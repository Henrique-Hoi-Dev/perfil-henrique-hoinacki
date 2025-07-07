import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import Header from '../organisms/Header';
import {
  personalInfo,
  summary,
  experiences,
  projects,
  education,
  certifications,
  skills,
  differentials,
} from '../../data/curriculum';
import avatarImage from '../../assets/avatar-1.jpg';

const Perfil = () => {
  return (
    <>
      <Helmet>
        <title>Currículo - Henrique Hoinacki</title>
        <meta
          name="description"
          content="Currículo detalhado de Henrique Hoinacki - Experiências, projetos e habilidades técnicas"
        />
      </Helmet>

      <Header />

      <main className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          {/* Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex flex-col items-center mb-6">
              <motion.div
                className="w-24 h-24 rounded-full overflow-hidden border-4 border-primary-400 shadow-lg mb-4"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <img
                  src={avatarImage}
                  alt="Henrique Hoinacki"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>

            <h1 className="text-4xl font-bold text-white mb-4">
              {personalInfo.name}
            </h1>
            <h2 className="text-2xl text-primary-400 mb-4">
              {personalInfo.title}
            </h2>
            <p className="text-gray-300 mb-6">
              📍 {personalInfo.location} | 📧 {personalInfo.email} | 📱{' '}
              {personalInfo.phone}
            </p>
            <a
              href="/Henrique_Hoinacki_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gray-700 hover:bg-gray-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200"
            >
              📄 Download CV Completo
            </a>
          </motion.div>

          {/* About */}
          <motion.section
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              {summary.title}
            </h3>
            <div className="card">
              <p className="text-gray-300 leading-relaxed">{summary.content}</p>
            </div>
          </motion.section>

          {/* Experience */}
          <motion.section
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              Experiência Profissional
            </h3>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.company}
                  className="card"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-xl font-semibold text-white">
                      {exp.position}
                    </h4>
                    <span className="text-primary-400 font-medium">
                      {exp.period}
                    </span>
                  </div>
                  <h5 className="text-lg text-gray-400 mb-3">{exp.company}</h5>
                  <p className="text-gray-300 leading-relaxed">
                    {exp.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Projects */}
          <motion.section
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              Projetos Destacados
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {projects.map((project, index) => (
                <motion.div
                  key={project.name}
                  className="card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h4 className="text-xl font-semibold text-white mb-2">
                    {project.name}
                  </h4>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary-600 text-white text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Skills */}
          <motion.section
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              Habilidades Técnicas
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {skills.map((skillCategory, index) => (
                <motion.div
                  key={skillCategory.category}
                  className="card"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h4 className="text-lg font-semibold text-white mb-4">
                    {skillCategory.category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skillCategory.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-gray-700 text-gray-300 text-sm rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Education */}
          <motion.section
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              Formação Acadêmica
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.institution}
                  className="card"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-xl font-semibold text-white">
                      {edu.course}
                    </h4>
                    <span className="text-primary-400 font-medium">
                      {edu.period}
                    </span>
                  </div>
                  <h5 className="text-lg text-gray-400 mb-3">
                    {edu.institution}
                  </h5>
                  {edu.description && (
                    <p className="text-gray-300 leading-relaxed">
                      {edu.description}
                    </p>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Certifications */}
          <motion.section
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              Cursos e Certificações
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.name}
                  className="card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h4 className="text-xl font-semibold text-white mb-2">
                    {cert.name}
                  </h4>
                  <p className="text-gray-400 mb-2">{cert.institution}</p>
                  <p className="text-primary-400 font-medium">{cert.year}</p>
                  {cert.link && (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-400 hover:text-primary-300 text-sm mt-2 inline-block"
                    >
                      Ver certificado →
                    </a>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Differentials */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">Diferenciais</h3>
            <div className="card">
              <ul className="space-y-3">
                {differentials.map((differential, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start space-x-3 text-gray-300"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <span className="text-primary-400 mt-1">•</span>
                    <span>{differential}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.section>
        </div>
      </main>
    </>
  );
};

export default Perfil;
