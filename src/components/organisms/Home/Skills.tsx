import { Heading } from '../../molecules/Heading.tsx';
import * as React from 'react';
import { Dots } from '../../molecules/Dots.tsx';
import { Square } from '../../atoms/Square.tsx';
import { SkillTable } from '../../molecules/SkillTable.tsx';

type SkillsData = {
  [category: string]: string[];
};

type SkillsProps = {
  skills: SkillsData;
};

export const Skills: React.FC<SkillsProps> = ({ skills }) => {
  return (
    <div className="px-[171px] mb-[112px]">
      <div className="max-w-[391px]">
        <Heading text="skills" />
      </div>
      <div className={`flex gap-[60px] justify-center  pl-8`}>
        <div className={`w-[350px] h-[282px] relative max-w-[40%]`}>
          <Dots className={`top-10 left-0`} />
          <Dots className={`right-[100px] bottom-[75px]`} />
          <Square className={`h-[86px] w-[86px] right-9 top-0`} />
          <Square className={`h-[52px] w-[52px] right-0 bottom-[37px]`} />
          <img
            src="../../../../public/img/logo/logo-dark.svg"
            alt="elias"
            className={`w-[113px] h-[113px] absolute left-[15px]
                        bottom-0
                       `}
          />
        </div>
        <div className={`flex flex-wrap gap-4 w-[60%]`}>
          {Object.entries(skills).map(([category, items]) => (
            <SkillTable
              skillHeading={category}
              skillsArr={items}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
