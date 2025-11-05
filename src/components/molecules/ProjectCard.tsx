import { LiveButton } from '../atoms/buttons/LiveButton.tsx';
import * as React from 'react';
import type { Project } from '../../types/Project.ts';
import { useTranslation } from 'react-i18next';

type ProjectCardProps = {
  project: Project;
  className?: string;
};

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  className,
}) => {
  const { t } = useTranslation();

  return (
    <div
      key={project.title}
      className={`w-full md:w-auto 2xl:w-[330px] border border-1
        border-custom-gray group h-fit ${className}
        `}
    >
      <div className={`relative bg-black overflow-hidden`}>
        <img
          src={`/img/${project.fileName}.png`}
          alt={project.fileName}
          className={`aspect-[1.65] object-cover opacity-80 group-hover:opacity-100
            transition-all duration-300 ease-in-out scale-100 group-hover:scale-105
            cursor-pointer
          `}
        />
      </div>
      <ul
        className={`flex flex-wrap gap-2 border-t border-b border-1
                      border-custom-gray p-2`}
      >
        {project.technologies.map((tech) => (
          <li key={tech}>
            <span className="text-custom-gray">{t(tech)}</span>
          </li>
        ))}
      </ul>
      <div className="p-4">
        <h3 className={`mb-4 font-medium text-white text-2xl`}>
          {t(project.title)}
        </h3>
        <p className="mb-4 text-custom-gray">{t(project.subtitle)}</p>
        <div className={`flex gap-4`}>
          <a
            href={project.demo || undefined}
            target="_blank"
          >
            <LiveButton
              text="demo"
              disabled={project.demo === ''}
            />
          </a>
          <a
            href={project.github}
            target="_blank"
          >
            <LiveButton text="github" />
          </a>
        </div>
      </div>
    </div>
  );
};
