import * as React from 'react';

type TitleProps = {
  title: string;
  subtitle: string;
  className?: string;
};

export const Title: React.FC<TitleProps> = ({ title, subtitle, className }) => {
  return (
    <div className={`mb-[32px] xl:mb-[68px] ${className}`}>
      <h1 className={`font-semibold text-[32px] mb-[14px]`}>
        <span className="text-primary">/</span>
        <span className={`text-white`}>{title}</span>
      </h1>
      <p className={`text-white`}>{subtitle}</p>
    </div>
  );
};
