import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import Header from '../organisms/Header';
import TechnologiesSection from '../organisms/TechnologiesSection';
import SocialLink from '../molecules/SocialLink';
import Typewriter from '../atoms/Typewriter';
import CurriculumButtons from '../molecules/CurriculumButtons';
import { personalInfo, summary } from '../../data/curriculum';
import avatarImage from '../../assets/avatar-1.jpg';

const Home = () => {
  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: 'linkedin',
      url: personalInfo.linkedin,
      color: 'text-blue-400',
    },
    {
      name: 'GitHub',
      icon: 'github',
      url: personalInfo.github,
      color: 'text-gray-400',
    },
    {
      name: 'Email',
      icon: 'email',
      url: `mailto:${personalInfo.email}`,
      color: 'text-red-400',
    },
    {
      name: 'WhatsApp',
      icon: 'whatsapp',
      url: personalInfo.whatsapp,
      color: 'text-green-400',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Henrique Hoinacki - Desenvolvedor Full Stack</title>
        <meta
          name="description"
          content="Portfólio pessoal de Henrique Hoinacki - Desenvolvedor Full Stack JavaScript"
        />
      </Helmet>

      <Header />

      <main>
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center py-20">
          <motion.div
            className="max-w-4xl mx-auto px-4 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="w-32 h-32 mx-auto mb-8 rounded-full overflow-hidden border-4 border-primary-400 shadow-lg"
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

            <motion.h1
              className="text-5xl md:text-6xl font-bold mb-4 text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {personalInfo.name}
            </motion.h1>

            <motion.div
              className="text-2xl md:text-3xl text-primary-400 mb-6 h-12 flex items-center justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Typewriter
                strings={[
                  'Desenvolvedor Full Stack JavaScript',
                  'Integrações com AWS',
                  'Developer NodeJS | ReactJS | VueJS',
                  'Banco de Dados: PostgreSQL • MySQL • MongoDB',
                  'Obsessed with Clean Code and Test Driven Development',
                  'DevOps Engineer',
                ]}
                className="text-primary-400"
                speed={50}
                backSpeed={30}
                backDelay={2000}
                loop={true}
              />
            </motion.div>

            <motion.p
              className="text-xl text-gray-300 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              📍 {personalInfo.location}
            </motion.p>

            <motion.div
              className="flex flex-wrap justify-center gap-4 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {socialLinks.map((link) => (
                <SocialLink
                  key={link.name}
                  name={link.name}
                  icon={link.icon}
                  url={link.url}
                  color={link.color}
                />
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <CurriculumButtons />
            </motion.div>
          </motion.div>
        </section>

        {/* About Section */}
        <section className="py-20 bg-gray-800/50">
          <motion.div
            className="max-w-4xl mx-auto px-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-center mb-12 text-white">
              {summary.title}
            </h2>

            <div className="card">
              <p className="text-lg text-gray-300 leading-relaxed">
                {summary.content}
              </p>
            </div>
          </motion.div>
        </section>

        {/* Technologies Section */}
        <TechnologiesSection />
      </main>
    </>
  );
};

export default Home;
