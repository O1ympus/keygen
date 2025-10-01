import * as React from 'react';
import { SkillsList } from './SkillsList.tsx';

type SkillTableProps = {
  skillHeading: string;
  skillsArr: string[];
};

export const SkillTable: React.FC<SkillTableProps> = ({
  skillHeading,
  skillsArr,
}) => {
  return (
    <div className="border border-1 border-custom-gray max-w-[196px] h-fit">
      <span
        className={`font-semibold text-white border-b border-1
               border-custom-gray p-2 inline-block w-full`}
      >
        {skillHeading}
      </span>
      <SkillsList skillsArr={skillsArr} />
    </div>
  );
};
