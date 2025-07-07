import { FaFilePdf, FaGlobe } from 'react-icons/fa';

interface CurriculumButtonsProps {
  className?: string;
}

const CurriculumButtons = ({ className = '' }: CurriculumButtonsProps) => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/Henrique_Hoinacki_CV.pdf';
    link.download = 'Henrique-Hoinacki-Curriculo.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      className={`flex flex-col sm:flex-row gap-4 justify-center items-center w-full ${className}`}
    >
      <button
        onClick={handleDownload}
        className="inline-flex items-center justify-center bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-200 hover:shadow-lg hover:border hover:border-primary-300"
        aria-label="Download do currículo em formato PDF"
        title="Download do currículo em formato PDF"
      >
        <FaFilePdf className="mr-2" />
        📄 Baixar Currículo em PDF
      </button>

      <a
        href="/curriculo"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center bg-gray-700 hover:bg-gray-600 text-white font-medium py-3 px-6 rounded-lg transition-all duration-200 hover:shadow-lg hover:border hover:border-gray-400"
        aria-label="Visualizar currículo em página estruturada"
        title="Visualizar currículo em página estruturada"
      >
        <FaGlobe className="mr-2" />
        🌐 Ver Currículo em Página Web
      </a>
    </div>
  );
};

export default CurriculumButtons;
