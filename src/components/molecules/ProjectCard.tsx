import { LiveButton } from '../atoms/buttons/LiveButton.tsx';
import * as React from 'react';
import type { Project } from '../../types/Project.ts';

type ProjectCardProps = {
  project: Project;
};

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div
      key={project.title}
      className={`w-full sm:w-[calc(50%-8px)] xl:w-[330px] border border-1 border-custom-gray group cursor-pointer h-fit`}
    >
      <div className={`relative bg-black`}>
        <img
          src={`../../../../public/img/${project.fileName}.png`}
          alt={project.fileName}
          className={`aspect-[1.65] object-cover opacity-70 group-hover:opacity-100 
            transition-all duration-300 ease-in-out
          `}
        />
      </div>
      <ul
        className={`flex flex-wrap gap-2 border-t border-b border-1 
                      border-custom-gray p-2`}
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
          <a
            href={project.demo}
            target="_blank"
          >
            <LiveButton text="Demo <~>" />
          </a>
          <a
            href={project.github}
            target="_blank"
          >
            <LiveButton text="Github >=" />
          </a>
        </div>
      </div>
    </div>
  );
};
