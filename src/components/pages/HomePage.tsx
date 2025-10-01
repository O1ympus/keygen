import { Sidebar } from '../molecules/Sidebar.tsx';
import { HomeMain } from '../organisms/Home/HomeMain.tsx';
import { Proverb } from '../molecules/Proverb.tsx';
import { Projects } from '../organisms/Home/Projects.tsx';
import { Skills } from '../organisms/Skills.tsx';
import { AboutMe } from '../organisms/Home/AboutMe.tsx';
import { Contacts } from '../organisms/Home/Contacts.tsx';
import { projects } from '../../api/Constants.tsx';
import { skills } from '../../api/Constants.tsx';

export const HomePage = () => {
  return (
    <div className={`px-[171px] mt-[62px]`}>
      <Sidebar />
      <HomeMain />
      <Proverb />
      <Projects projects={projects} />
      <Skills skills={skills} />
      <AboutMe />
      <Contacts />
    </div>
  );
};
