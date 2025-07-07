import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaPhone,
} from 'react-icons/fa';
import {
  personalInfo,
  summary,
  experiences,
  projects,
  education,
  certifications,
  skills,
} from '../../data/curriculum';
import avatarImage from '../../assets/avatar-1.jpg';

const Curriculo = () => {
  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: FaLinkedin,
      url: personalInfo.linkedin,
      color: 'text-blue-400',
    },
    {
      name: 'GitHub',
      icon: FaGithub,
      url: personalInfo.github,
      color: 'text-gray-400',
    },
    {
      name: 'Email',
      icon: FaEnvelope,
      url: `mailto:${personalInfo.email}`,
      color: 'text-red-400',
    },
    {
      name: 'WhatsApp',
      icon: FaWhatsapp,
      url: personalInfo.whatsapp,
      color: 'text-green-400',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Currículo - Henrique Hoinacki</title>
        <meta
          name="description"
          content="Currículo profissional de Henrique Hoinacki - Desenvolvedor Backend"
        />
      </Helmet>

      <div className="min-h-screen bg-gray-50 text-gray-900">
        {/* Header */}
        <header className="bg-white shadow-sm border-b">
          <div className="max-w-4xl mx-auto px-6 py-8">
            <motion.div
              className="flex flex-col md:flex-row items-center md:items-start gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-primary-400 shadow-lg">
                <img
                  src={avatarImage}
                  alt="Henrique Hoinacki"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="text-center md:text-left flex-1">
                <h1 className="text-4xl font-bold text-gray-900 mb-2">
                  {personalInfo.name}
                </h1>
                <h2 className="text-2xl text-primary-600 mb-4 font-semibold">
                  {personalInfo.title}
                </h2>

                <div className="flex flex-wrap justify-center md:justify-start gap-4 text-gray-600 mb-4">
                  <div className="flex items-center gap-2">
                    <FaMapMarkerAlt className="text-primary-500" />
                    <span>{personalInfo.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaEnvelope className="text-primary-500" />
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="hover:text-primary-600"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaPhone className="text-primary-500" />
                    <a
                      href={`tel:${personalInfo.phone}`}
                      className="hover:text-primary-600"
                    >
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="flex justify-center md:justify-start gap-3">
                  {socialLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors ${link.color}`}
                      aria-label={link.name}
                    >
                      <link.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </header>

        <main className="max-w-4xl mx-auto px-6 py-8">
          {/* Resumo */}
          <motion.section
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">
              Resumo Profissional
            </h3>
            <p className="text-gray-700 leading-relaxed text-lg">
              {summary.content}
            </p>
          </motion.section>

          {/* Experiência */}
          <motion.section
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-2">
              Experiência Profissional
            </h3>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.company}
                  className="bg-white rounded-lg p-6 shadow-sm border border-gray-200"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                >
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                    <h4 className="text-xl font-semibold text-gray-900">
                      {exp.position}
                    </h4>
                    <span className="text-primary-600 font-medium text-sm md:text-base">
                      {exp.period}
                    </span>
                  </div>
                  <h5 className="text-lg text-gray-700 mb-3 font-medium">
                    {exp.company}
                  </h5>
                  <p className="text-gray-600 leading-relaxed">
                    {exp.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Projetos */}
          <motion.section
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-2">
              Projetos Destacados
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {projects.map((project, index) => (
                <motion.div
                  key={project.name}
                  className="bg-white rounded-lg p-6 shadow-sm border border-gray-200"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                >
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">
                    {project.name}
                  </h4>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary-100 text-primary-700 text-sm rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Habilidades */}
          <motion.section
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-2">
              Habilidades Técnicas
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {skills.map((skillCategory, index) => (
                <motion.div
                  key={skillCategory.category}
                  className="bg-white rounded-lg p-6 shadow-sm border border-gray-200"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                >
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">
                    {skillCategory.category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skillCategory.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Educação */}
          {education && education.length > 0 && (
            <motion.section
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-2">
                Educação
              </h3>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <motion.div
                    key={edu.institution}
                    className="bg-white rounded-lg p-6 shadow-sm border border-gray-200"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.0 + index * 0.1 }}
                  >
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">
                      {edu.course}
                    </h4>
                    <p className="text-gray-700 mb-2">{edu.institution}</p>
                    <p className="text-primary-600 text-sm">{edu.period}</p>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          )}

          {/* Certificações */}
          {certifications && certifications.length > 0 && (
            <motion.section
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-2">
                Certificações
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={cert.name}
                    className="bg-white rounded-lg p-4 shadow-sm border border-gray-200"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                  >
                    <h4 className="font-semibold text-gray-900 mb-1">
                      {cert.name}
                    </h4>
                    <p className="text-gray-600 text-sm">{cert.institution}</p>
                    <p className="text-primary-600 text-sm">{cert.year}</p>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          )}
        </main>

        {/* Footer */}
        <footer className="bg-gray-100 border-t border-gray-200 py-8">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <p className="text-gray-600">
              © {new Date().getFullYear()} Henrique Hoinacki. Todos os direitos
              reservados.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Curriculo;
