import { motion } from 'framer-motion';
import Icon from '../atoms/Icon';

interface SocialLinkProps {
  name: string;
  icon: string;
  url: string;
  color?: string;
}

const SocialLink = ({
  name,
  icon,
  url,
  color = 'text-gray-400',
}: SocialLinkProps) => {
  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center space-x-2 p-3 rounded-lg hover:bg-gray-800 transition-colors duration-200 ${color}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Icon name={icon} className="text-xl" />
      <span className="font-medium">{name}</span>
    </motion.a>
  );
};

export default SocialLink;
