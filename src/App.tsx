import './index.css';
import { Header } from './components/organisms/Header.tsx';
import { Sidebar } from './components/molecules/Sidebar.tsx';
import { HomeMain } from './components/organisms/Home/HomeMain.tsx';
import { Proverb } from './components/molecules/Proverb.tsx';
import { Footer } from './components/organisms/Footer.tsx';
import { AboutMe } from './components/organisms/Home/AboutMe.tsx';
import { Contacts } from './components/organisms/Home/Contacts.tsx';
import { Projects } from './components/organisms/Home/Projects.tsx';
import { Skills } from './components/organisms/Home/Skills.tsx';

const skills = {
  Frontend: [
    'JavaScript',
    'TypeScript',
    'React',
    'Fetch API',
    'REST API',
    'Sass',
    'Tailwind',
  ],
  Backend: ['Node.js', 'SQL', 'MySQL', 'MongoDB'],
  Testing: ['Jest', 'Cypress'],
  Tooling: ['Git', 'Vite', 'Docker', 'ESLint', 'Prettier', 'CI/CD'],
  Methodologies: ['Agile', 'Scrum', 'Kanban', 'SDLC'],
};

const projects = [
  {
    fileName: 'project',
    technologies: ['HTML', 'HTML', 'HTML'],
    title: 'ChertNodes',
    subtitle: 'Minecraft servers hosting',
  },
  {
    fileName: 'project',
    technologies: ['HTML', 'HTML', 'HTML'],
    title: 'ChertNodes',
    subtitle: 'Minecraft servers hosting',
  },
  {
    fileName: 'project',
    technologies: ['HTML', 'HTML', 'HTML'],
    title: 'ChertNodes',
    subtitle: 'Minecraft servers hosting',
  },
];

const linkNames = ['home', 'works', 'about-me', 'contacts'];

function App() {
  return (
    <div
      className={`
            w-screen font-fira bg-background
            min-h-screen relative
        `}
    >
      <Header linkNames={linkNames} />
      <Sidebar />
      <HomeMain />
      <Proverb />
      <Projects projects={projects} />
      <Skills skills={skills} />
      <AboutMe />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
