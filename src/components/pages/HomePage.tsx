import { Sidebar } from '../molecules/Sidebar.tsx';
import { HomeMain } from '../organisms/Home/HomeMain.tsx';
import { Proverb } from '../molecules/Proverb.tsx';
import { Projects } from '../organisms/Home/Projects.tsx';
import { Skills } from '../organisms/Skills.tsx';
import { AboutMe } from '../organisms/Home/AboutMe.tsx';
import { Contacts } from '../organisms/Home/Contacts.tsx';
import { projects } from '../../api/Constants.tsx';
import { HomeElements } from '../molecules/AbsoluteElements/HomeElements.tsx';

export const HomePage = () => {
  return (
    <div
      className={`px-4 md:px-6 lg:px-8 xl:px-[171px] mt-[34px] sm:mt-[53px] max-w-[1920px]
      mx-auto
    `}
    >
      <HomeElements />
      <Sidebar />
      <HomeMain />
      <Proverb />
      <Projects projects={projects} />
      <Skills />
      <AboutMe />
      <Contacts />
    </div>
  );
};
