import * as React from 'react';

type SkillsListProps = {
  skillsArr: string[];
};

export const SkillsList: React.FC<SkillsListProps> = ({ skillsArr }) => {
  return (
    <div className="flex gap-2 p-2 flex-wrap">
      {skillsArr.map((skill) => (
        <span
          key={skill}
          className="text-custom-gray inline-block"
        >
          {skill}
        </span>
      ))}
    </div>
  );
};
