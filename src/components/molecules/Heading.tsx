import * as React from 'react';

type Heading = {
  text: string;
};

export const Heading: React.FC<Heading> = ({ text }) => {
  return (
    <div className="flex gap-4 items-center mb-[23px]">
      <h2 className="text-[32px] font-medium text-nowrap">
        <span className="text-primary">#</span>
        <span className="text-white">{text}</span>
      </h2>
      <div className="w-full h-[1px] bg-primary"></div>
    </div>
  );
};
