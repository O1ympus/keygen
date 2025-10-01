import { Sidebar } from '../molecules/Sidebar.tsx';
import { HomeMain } from '../organisms/Home/HomeMain.tsx';
import { Proverb } from '../molecules/Proverb.tsx';
import { Projects } from '../organisms/Home/Projects.tsx';
import { Skills } from '../organisms/Home/Skills.tsx';
import { AboutMe } from '../organisms/Home/AboutMe.tsx';
import { Contacts } from '../organisms/Home/Contacts.tsx';

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

export const HomePage = () => {
  return (
    <>
      <Sidebar />
      <HomeMain />
      <Proverb />
      <Projects projects={projects} />
      <Skills skills={skills} />
      <AboutMe />
      <Contacts />
    </>
  );
};
