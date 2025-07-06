export interface Experience {
  company: string;
  position: string;
  period: string;
  description: string[];
  technologies: string[];
}

export interface Project {
  name: string;
  description: string;
  technologies: string[];
  link?: string;
}

export interface Education {
  institution: string;
  course: string;
  period: string;
  description?: string;
}

export interface Certification {
  name: string;
  institution: string;
  year: string;
  link?: string;
}

export interface Skill {
  category: string;
  skills: string[];
}

export const personalInfo = {
  name: 'Henrique Hoinacki',
  title: 'Desenvolvedor Full Stack JavaScript | NodeJS | ReactJS | VueJS',
  location: 'Santo André, São Paulo – Brasil',
  email: 'riqueah@gmail.com',
  phone: '(46) 991195068',
  linkedin: 'https://linkedin.com/in/henrique-hoinacki-a98b851a5',
  github: 'https://github.com/Henrique-Hoi-Dev',
  whatsapp: 'https://wa.me/5546991195068',
};

export const summary = {
  title: 'Resumo Profissional',
  content: `Desenvolvedor Full Stack com ampla experiência em desenvolvimento de sistemas web, manutenção de aplicações e sustentação de microsserviços. Especialista em tecnologias modernas como NodeJS, ReactJS, VueJS e ASP.NET Core, com foco em qualidade de código, testes automatizados e deploy contínuo. Sólida experiência em backend, integrações, criação de dashboards e suporte a aplicações de grande porte. Proativo, dinâmico e adaptável a equipes ágeis, sempre em busca de soluções robustas e escaláveis.`,
};

export const experiences: Experience[] = [
  {
    company: 'Ília Digital',
    position: 'Backend Developer',
    period: 'Outubro 2022 – Atualmente',
    description: [
      'Análise, sustentação e desenvolvimento de microsserviços utilizando NodeJS',
      'Implementação de testes automatizados garantindo a qualidade do código',
      'Deploy contínuo utilizando Bitbucket Pipelines',
    ],
    technologies: [
      'NodeJS',
      'Testes Automatizados',
      'Bitbucket Pipelines',
      'Microsserviços',
    ],
  },
  {
    company: 'NGT Brasil Tecnologia Ltda',
    position: 'Frontend Developer',
    period: 'Maio 2022 – Outubro 2022',
    description: [
      'Desenvolvimento e manutenção de aplicações web com foco no frontend',
      'Utilização de ReactJS e VueJS para entrega de soluções de alta qualidade',
    ],
    technologies: ['ReactJS', 'VueJS', 'JavaScript', 'HTML/CSS'],
  },
  {
    company: 'Sponte',
    position: 'Backend Developer',
    period: 'Outubro 2020 – Dezembro 2021',
    description: [
      'Desenvolvimento de aplicações web monolíticas em ASP.NET Core',
      'Criação de relatórios personalizados com JasperReports e PostgreSQL',
      'Automação de testes e deploy utilizando GitLab CI/CD',
    ],
    technologies: [
      'ASP.NET Core',
      'C#',
      'PostgreSQL',
      'JasperReports',
      'GitLab CI/CD',
    ],
  },
  {
    company: 'Freelancer',
    position: 'Full Stack Developer',
    period: 'Período variado',
    description: [
      'Desenvolvimento e manutenção de aplicações web sob demanda',
      'Criação de dashboards e websites completos utilizando ReactJS, NodeJS e MongoDB',
    ],
    technologies: ['ReactJS', 'NodeJS', 'MongoDB', 'JavaScript'],
  },
  {
    company: 'Seben Antenas',
    position: 'Técnico de Manutenção em Eletrônicos',
    period: 'Setembro 2014 – Julho 2020',
    description: [
      'Manutenção de dispositivos eletrônicos (celulares, receptores)',
      'Configuração e suporte técnico a dispositivos de rede e clientes',
    ],
    technologies: ['Manutenção Eletrônica', 'Redes', 'Suporte Técnico'],
  },
  {
    company: 'Cybertech Informática',
    position: 'Técnico de Redes e Internet',
    period: 'Novembro 2013 – Setembro 2014',
    description: [
      'Instalação e manutenção de redes utilizando Mikrotik e NanoStations',
      'Desenvolvimento de páginas web e suporte técnico a clientes',
    ],
    technologies: ['Mikrotik', 'NanoStations', 'Redes', 'Desenvolvimento Web'],
  },
];

export const projects: Project[] = [
  {
    name: 'Mirae – Site de Corretora',
    description:
      'Desenvolvimento de site utilizando Next.js com TypeScript. Implementação de backoffice com Strapi, permitindo a edição dinâmica de textos e imagens pelo cliente.',
    technologies: ['Next.js', 'TypeScript', 'Strapi', 'React'],
  },
  {
    name: 'Asics – Projeto de Cashback',
    description:
      'Atuação na manutenção e aprimoramento do sistema de cashback. Implementação de melhorias para integração com a VTEX, possibilitando a realização de transações de cashback através dos giftcards da plataforma.',
    technologies: ['VTEX', 'Cashback', 'Integração de APIs', 'JavaScript'],
  },
  {
    name: 'Asics – MGM Member Get Member',
    description:
      'Desenvolvimento de sistema de indicação onde, a partir do compartilhamento de um link (utm) em campanha, o usuário que indicou ganha bônus quando o indicado efetua uma compra.',
    technologies: ['Sistema de Indicação', 'UTM', 'Campanhas', 'JavaScript'],
  },
  {
    name: 'Asics – Site para Profissionais de Esporte',
    description:
      'Criação de um site personalizado para profissionais de esporte com perfis individuais. Desenvolvimento de funcionalidades para indicação de produtos, publicação de artigos e redes sociais.',
    technologies: [
      'Perfis Personalizados',
      'Sistema de Artigos',
      'Redes Sociais',
      'React',
    ],
  },
  {
    name: 'Asics – Ferramenta de Correção de Divergência em Transações VTEX',
    description:
      'Concepção e desenvolvimento de uma ferramenta para identificar e corrigir divergências entre o saldo do sistema de cashback e o saldo dos giftcards na VTEX. Implementação de consulta via e-mail ou CPF, permitindo correção automática com um clique.',
    technologies: ['VTEX', 'Sistema de Correção', 'Automação', 'JavaScript'],
  },
];

export const education: Education[] = [
  {
    institution: 'UNINTER',
    course: 'Análise e Desenvolvimento de Sistemas',
    period: 'Pato Branco, Paraná, Brasil',
    description:
      'Formação em desenvolvimento de sistemas com foco em programação e análise de sistemas',
  },
];

export const certifications: Certification[] = [
  {
    name: 'NodeJS I, II',
    institution: 'Curso Online',
    year: '154 horas',
  },
  {
    name: 'JavaScript I, II, III',
    institution: 'Curso Online',
    year: '136 horas',
  },
  {
    name: 'Padrões HTML e CSS',
    institution: 'Curso Online',
    year: '120 horas',
  },
  {
    name: 'ReactJS',
    institution: 'Curso Online',
    year: '140 horas',
  },
  {
    name: 'VueJS',
    institution: 'Curso Online',
    year: '141 horas',
  },
  {
    name: 'C# - ASP.NET Core MVC',
    institution: 'Curso Online',
    year: '60 horas',
  },
];

export const skills: Skill[] = [
  {
    category: 'Desenvolvimento Web',
    skills: [
      'HTML5',
      'CSS3',
      'JavaScript',
      'ReactJS',
      'VueJS',
      'NodeJS',
      'ASP.NET Core',
      'C#',
    ],
  },
  {
    category: 'Banco de Dados',
    skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'SQL Server'],
  },
  {
    category: 'Ferramentas de Relatórios',
    skills: ['JasperReports', 'iReport'],
  },
  {
    category: 'DevOps e Infraestrutura',
    skills: [
      'CI/CD (GitLab, Bitbucket Pipelines)',
      'Configuração de redes com Mikrotik e NanoStations',
    ],
  },
];

export const differentials = [
  'Experiência comprovada em projetos backend e frontend',
  'Adaptação às metodologias ágeis',
  'Facilidade em aprender novas tecnologias e colaborar em equipe',
  'Proativo, dinâmico e adaptável a equipes ágeis',
  'Sempre em busca de soluções robustas e escaláveis',
];
