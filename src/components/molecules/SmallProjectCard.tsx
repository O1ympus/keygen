import { LiveButton } from '../atoms/buttons/LiveButton.tsx';
import { DemoButton } from '../atoms/buttons/DemoButton.tsx';
import * as React from 'react';
import type { Project } from '../../types/Project.ts';

type SmallProjectCardProps = {
  project: Project;
};

export const SmallProjectCard: React.FC<SmallProjectCardProps> = ({
  project,
}) => {
  return (
    <div
      key={project.title}
      className={` border border-1 border-white`}
    >
      <ul
        className={`flex gap-2 border-t border-b border-1 
                      border-white p-2`}
      >
        {project.technologies.map((t) => (
          <li key={t}>
            <span className="text-custom-gray">{t}</span>
          </li>
        ))}
      </ul>
      <div className="p-4">
        <h3 className={`mb-4 font-medium text-white text-2xl`}>
          {project.title}
        </h3>
        <p className="mb-4 text-custom-gray">{project.subtitle}</p>
        <div className={`flex gap-4`}>
          <LiveButton text="Demo <~>" />
          <DemoButton text="Github >=" />
        </div>
      </div>
    </div>
  );
};
