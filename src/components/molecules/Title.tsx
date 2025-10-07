import * as React from 'react';
import { useTranslation } from 'react-i18next';

type TitleProps = {
  title: string;
  subtitle: string;
  className?: string;
};

export const Title: React.FC<TitleProps> = ({ title, subtitle, className }) => {
  const { t } = useTranslation();

  return (
    <div className={`mb-[32px] xl:mb-[68px] ${className}`}>
      <h1 className={`font-semibold text-[32px] mb-[14px]`}>
        <span className="text-primary">/</span>
        <span className={`text-white`}>{t(title)}</span>
      </h1>
      <p className={`text-white`}>{t(subtitle)}</p>
    </div>
  );
};
