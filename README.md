# Henrique Hoinacki - Portfólio Pessoal

Site pessoal moderno desenvolvido com React, Vite, TailwindCSS e arquitetura Atomic Design.

## 🚀 Tecnologias Utilizadas

- **React 18** - Biblioteca JavaScript para interfaces
- **Vite** - Build tool rápida e moderna
- **TypeScript** - Tipagem estática para JavaScript
- **TailwindCSS** - Framework CSS utilitário
- **Framer Motion** - Animações suaves e modernas
- **React Router Dom** - Roteamento da aplicação
- **React Helmet Async** - Gerenciamento de meta tags

## 📁 Estrutura do Projeto

```
src/
├── components/
│   ├── atoms/          # Componentes básicos (Button, Icon)
│   ├── molecules/      # Componentes compostos (SocialLink, TechnologyCard)
│   ├── organisms/      # Seções complexas (Header, TechnologiesSection)
│   └── pages/          # Páginas da aplicação (Home, Perfil)
├── data/               # Dados do currículo
├── routes/             # Configuração de rotas
└── assets/             # Recursos estáticos
```

## 🎨 Design System

- **Tema Escuro**: Interface moderna com cores escuras
- **Responsivo**: Layout adaptável para todos os dispositivos
- **Animações**: Transições suaves com Framer Motion
- **Tipografia**: Fonte clara e legível

## 📄 Páginas

### Home ("/")

- Apresentação pessoal
- Links para redes sociais
- Resumo profissional
- Seção de tecnologias
- Botão para ver currículo completo

### Perfil ("/perfil")

- Currículo detalhado
- Experiência profissional
- Projetos relevantes
- Formação acadêmica
- Habilidades técnicas
- Download do CV em PDF

## 🛠️ Como Executar

1. **Instalar dependências:**

   ```bash
   npm install
   ```

2. **Executar em desenvolvimento:**

   ```bash
   npm run dev
   ```

3. **Build para produção:**

   ```bash
   npm run build
   ```

4. **Preview da build:**
   ```bash
   npm run preview
   ```

## 📦 Deploy

O projeto está configurado para ser hospedado no GitHub Pages. Para fazer o deploy:

1. Faça push do código para o GitHub
2. Configure o GitHub Pages para usar a branch `main`
3. O site estará disponível em: `https://seu-usuario.github.io/react-profile`

## 🎯 Funcionalidades

- ✅ Design responsivo
- ✅ Tema escuro
- ✅ Animações suaves
- ✅ SEO otimizado
- ✅ Navegação entre páginas
- ✅ Links para redes sociais
- ✅ Download do currículo
- ✅ Arquitetura Atomic Design

## 📝 Personalização

Para personalizar o site:

1. **Dados pessoais**: Edite `src/data/curriculum.ts`
2. **Estilos**: Modifique `tailwind.config.js` e `src/index.css`
3. **Componentes**: Adicione novos componentes nas pastas apropriadas
4. **Páginas**: Crie novas páginas em `src/components/pages/`

## 🔧 Scripts Disponíveis

- `npm run dev` - Servidor de desenvolvimento
- `npm run build` - Build para produção
- `npm run preview` - Preview da build
- `npm run lint` - Verificação de código

## 📄 Licença

Este projeto é de uso pessoal e educacional.
