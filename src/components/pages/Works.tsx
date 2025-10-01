import * as React from 'react';
import { Sidebar } from '../molecules/Sidebar.tsx';
import { Heading } from '../molecules/Heading.tsx';
import { ProjectCard } from '../molecules/ProjectCard.tsx';
import { projects } from '../../api/Constants.tsx';
import { SmallProjectCard } from '../molecules/SmallProjectCard.tsx';
import { Title } from '../molecules/Title.tsx';

export const Works: React.FC = () => {
  return (
    <div className={`px-[171px] mt-[53px]`}>
      <Sidebar />
      <Title
        title="projects"
        subtitle="List of my projects"
      />

      <div>
        <Heading
          text="complete-apps"
          linePresent={false}
        />
        <div className="flex gap-4 mb-[81px]">
          {projects.map((project) => (
            <ProjectCard project={project} />
          ))}
        </div>
      </div>

      <div className={`mb-[187px]`}>
        <Heading
          text="small-projects"
          linePresent={false}
        />
        <div className="flex gap-4">
          {projects.map((project) => (
            <SmallProjectCard project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};
