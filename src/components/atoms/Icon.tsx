import { motion } from 'framer-motion';

interface IconProps {
  name: string;
  className?: string;
}

const Icon = ({ name, className = '' }: IconProps) => {
  const iconMap: { [key: string]: string } = {
    nodejs: 'devicon-nodejs-plain',
    typescript: 'devicon-typescript-plain',
    postgresql: 'devicon-postgresql-plain',
    react: 'devicon-react-original',
    vue: 'devicon-vuejs-plain',
    html: 'devicon-html5-plain',
    css: 'devicon-css3-plain',
    aws: 'devicon-amazonwebservices-original',
    javascript: 'devicon-javascript-plain',
    github: 'devicon-github-original',
    linkedin: 'devicon-linkedin-plain',
    twitter: 'devicon-twitter-plain',
    email: 'fas fa-envelope',
    whatsapp: 'fab fa-whatsapp',
  };

  const iconClass = iconMap[name.toLowerCase()] || name;
  const classes = `${iconClass} ${className}`;

  return (
    <motion.i
      className={classes}
      whileHover={{ scale: 1.2, rotate: 5 }}
      transition={{ duration: 0.2 }}
    />
  );
};

export default Icon;
