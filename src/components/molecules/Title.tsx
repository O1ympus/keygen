import * as React from 'react';

type TitleProps = {
  title: string;
  subtitle: string;
};

export const Title: React.FC<TitleProps> = ({ title, subtitle }) => {
  return (
    <div className={`mb-[68px]`}>
      <h1 className={`font-semibold text-[32px] mb-[14px]`}>
        <span className="text-primary">/</span>
        <span className={`text-white`}>{title}</span>
      </h1>
      <p className={`text-white`}>{subtitle}</p>
    </div>
  );
};
