import * as React from 'react';
import { useTranslation } from 'react-i18next';

type Heading = {
  text: string;
  linePresent: boolean;
  className?: string;
};

export const Heading: React.FC<Heading> = ({
  text,
  linePresent,
  className,
}) => {
  const { t } = useTranslation();

  return (
    <div className={`flex gap-4 items-center mb-8 md:mb-12 ${className}`}>
      <h2 className="text-[32px] font-medium sm:text-nowrap">
        <span className="text-primary">#</span>
        <span className="text-white">{t(text)}</span>
      </h2>
      {linePresent && <div className="w-full h-[1px] bg-primary"></div>}
    </div>
  );
};
