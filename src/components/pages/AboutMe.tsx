import { Sidebar } from '../molecules/Sidebar.tsx';
import * as React from 'react';
import { Title } from '../molecules/Title.tsx';
import { About } from '../molecules/About.tsx';
import { SkillsTableGrid } from '../molecules/skills/SkillsTableGrid.tsx';
import { Heading } from '../molecules/Heading.tsx';
import { funFacts } from '../../api/Constants.tsx';
import { BorderedText } from '../atoms/BorderedText.tsx';
import { AboutElements } from '../molecules/AbsoluteElements/AboutElements.tsx';
import { Dots } from '../molecules/Dots.tsx';

export const AboutMe: React.FC = () => {
  return (
    <div className={`px-4 md:px-6 lg:px-8 xl:px-[171px] mt-[53px]`}>
      <AboutElements />
      <Sidebar />

      <div className={`mb-[112px]`}>
        <Title
          title="about-me"
          subtitle="Who am i?"
        />
        <About isButtonPresent={false} />
      </div>

      <Heading
        text="skills"
        linePresent={false}
      />
      <div className={`flex gap-4 flex-wrap mb-[83px]`}>
        <SkillsTableGrid />
      </div>

      <Heading
        text="my-fun-facts"
        linePresent={false}
      />
      <div className={`flex items-center justify-between mb-[162px]`}>
        <div className={`flex gap-4 flex-wrap max-w-[60%]`}>
          {funFacts.map(([text, whiteWords]) => (
            <BorderedText
              key={text}
              text={text}
              whiteWords={whiteWords}
            />
          ))}
        </div>
        <div className={`relative w-[178px] h-[169px]`}>
          <Dots className={`h-5 w-5 left-0 top-0`} />
          <img
            src="../../../public/img/logo/logo-dark.svg"
            alt="elias"
            className={`w-[113px] h-[113px] absolute bottom-0 right-0`}
          />
        </div>
      </div>
    </div>
  );
};
