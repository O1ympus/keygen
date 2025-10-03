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
    <div className="mb-[70px] md:mb-[106px]">
      <div
        className={`flex flex-col lg:flex-row lg:items-center justify-between
        mb-[40px] sm:mb-[60px] w-full gap-y-4 sm:gap-y-0
      `}
      >
        <Heading
          text="projects"
          linePresent={true}
          className={`!mb-0 min-w-[700px]`}
        />
        <NavLink
          to="works"
          replace
          className={`text-custom-gray font-medium transition-all duration-300
            ease-in-out hover:text-white ml-auto mr-0 w-fit
          `}
        >
          {`View all ~~>`}
        </NavLink>
      </div>
      <div className="flex gap-4 flex-wrap">
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
