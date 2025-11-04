import * as React from 'react';

type DemoButtonProps = {
  text: string;
};

export const DemoButton: React.FC<DemoButtonProps> = ({ text }) => {
  return (
    <button
      className={`border border-1 border-custom-gray py-2 px-4 font-md
       text-custom-gray hover:bg-custom-gray/20
       `}
    >
      {text}
    </button>
  );
};
