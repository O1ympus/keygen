import { Heading } from '../../molecules/Heading.tsx';
import * as React from 'react';
import type { Project } from '../../../types/Project.ts';
import { LiveButton } from '../../atoms/buttons/LiveButton.tsx';
import { DemoButton } from '../../atoms/buttons/DemoButton.tsx';

type ProjectsProps = {
  projects: Project[];
};

export const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <div className="px-[171px] mb-[106px]">
      <div className="max-w-[701px]">
        <Heading text="projects" />
      </div>
      <div className="flex gap-4">
        {projects.map((p) => (
          <div
            key={p.title}
            className={`h-[428px] border border-1 border-white`}
          >
            <img
              src={`../../../../public/img/${p.fileName}.jpg`}
              alt={p.fileName}
            />
            <ul
              className={`flex gap-2 border-t border-b border-1 
                      border-white p-2`}
            >
              {p.technologies.map((t) => (
                <li key={t}>
                  <span className="text-custom-gray">{t}</span>
                </li>
              ))}
            </ul>
            <div className="p-4">
              <h3 className={`mb-4 font-medium text-white text-2xl`}>
                {p.title}
              </h3>
              <p className="mb-4 text-custom-gray">{p.subtitle}</p>
              <div className={`flex gap-4`}>
                <LiveButton text="Demo <~>" />
                <DemoButton text="Github >=" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
