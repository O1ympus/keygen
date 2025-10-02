import { Heading } from '../../molecules/Heading.tsx';
import * as React from 'react';
import type { Project } from '../../../types/Project.ts';
import { ProjectCard } from '../../molecules/ProjectCard.tsx';
import { NavLink } from 'react-router-dom';

type ProjectsProps = {
  projects: Project[];
};

export const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <div className="mb-[106px]">
      <div className={`flex items-center justify-between mb-[60px] w-full`}>
        <Heading
          text="projects"
          linePresent={true}
          className={`mb-0 min-w-[700px]`}
        />
        <NavLink
          to="works"
          replace
          className={`text-custom-gray font-medium transition-all duration-300
            ease-in-out hover:text-white
          `}
        >
          {`View all ~~>`}
        </NavLink>
      </div>
      <div className="flex gap-4">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            project={project}
          />
        ))}
      </div>
    </div>
  );
};
