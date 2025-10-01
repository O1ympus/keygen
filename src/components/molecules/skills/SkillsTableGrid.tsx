import * as React from 'react';
import { SkillTable } from './SkillTable.tsx';
import { skills } from '../../../api/Constants.tsx';

export const SkillsTableGrid: React.FC = () => {
  return (
    <>
      {Object.entries(skills).map(([category, items]) => (
        <SkillTable
          skillHeading={category}
          skillsArr={items}
        />
      ))}
    </>
  );
};
