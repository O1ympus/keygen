import { Sidebar } from '../molecules/Sidebar.tsx';
import * as React from 'react';
import { Title } from '../molecules/Title.tsx';
import { About } from '../molecules/About.tsx';
import { SkillsTableGrid } from '../molecules/skills/SkillsTableGrid.tsx';
import { Heading } from '../molecules/Heading.tsx';

export const AboutMe: React.FC = () => {
  return (
    <div className={`px-[171px] mt-[53px]`}>
      <Sidebar />

      <div className={`mb-[112px]`}>
        <Title
          title="about-me"
          subtitle="Who am i?"
        />
        <About />
      </div>

      <Heading
        text="skills"
        linePresent={false}
      />
      <div className={`flex gap-4 flex-wrap mb-[187px]`}>
        <SkillsTableGrid />
      </div>
    </div>
  );
};
