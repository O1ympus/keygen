import { LiveButton } from '../atoms/buttons/LiveButton.tsx';
import * as React from 'react';
import type { Project } from '../../types/Project.ts';
import { useTranslation } from 'react-i18next';

type SmallProjectCardProps = {
  landing: Partial<Project>;
};

export const SmallProjectCard: React.FC<SmallProjectCardProps> = ({
  landing,
}) => {
  const { t } = useTranslation();

  return (
    <div
      key={landing.title}
      className={`border border-1 border-custom-gray w-full 2xl:w-[330px] h-fit`}
    >
      <h3
        className={`p-4 font-medium text-white text-2xl after:block
        after:h-[1px] after:w-[calc(100%+32px)] after:bg-custom-gray after:mt-3
        box-content after:-ml-4
      `}
      >
        {t(landing.title ?? '')}
      </h3>
      <div className={`px-4 pb-4`}>
        <p className="mb-4 text-custom-gray">{t(landing.subtitle ?? '')}</p>
        <div className={`flex gap-4`}>
          <a
            href={landing.demo}
            target="_blank"
          >
            <LiveButton text="demo" />
          </a>
          <a
            href={landing.github}
            target="_blank"
          >
            <LiveButton text="github" />
          </a>
        </div>
      </div>
    </div>
  );
};
