import * as React from 'react';
import { Sidebar } from '../molecules/Sidebar.tsx';
import { Heading } from '../molecules/Heading.tsx';
import { ProjectCard } from '../molecules/ProjectCard.tsx';
import { projects, landings } from '../../api/Constants.tsx';
import { SmallProjectCard } from '../molecules/SmallProjectCard.tsx';
import { Title } from '../molecules/Title.tsx';
import { WorksElements } from '../molecules/AbsoluteElements/WorksElements.tsx';

export const Works: React.FC = () => {
  return (
    <div className={`px-4 md:px-6 lg:px-8 xl:px-[171px] mt-[53px]`}>
      <WorksElements />
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
            <ProjectCard
              key={project.title}
              project={project}
            />
          ))}
        </div>
      </div>

      <div className={`mb-[187px]`}>
        <Heading
          text="Responsive Layout Projects"
          linePresent={false}
        />
        <div className="flex gap-4 flex-wrap">
          {landings.map((landing) => (
            <SmallProjectCard
              key={landing.title}
              landing={landing}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
