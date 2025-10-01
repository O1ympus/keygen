import { Heading } from '../../molecules/Heading.tsx';
import * as React from 'react';
import type { Project } from '../../../types/Project.ts';
import { ProjectCard } from '../../molecules/ProjectCard.tsx';

type ProjectsProps = {
  projects: Project[];
};

export const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <div className="mb-[106px]">
      <div className="max-w-[701px]">
        <Heading
          text="projects"
          linePresent={true}
        />
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
