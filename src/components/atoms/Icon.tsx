import * as React from 'react';

type IconProps = {
  fileName: string;
  className?: string;
};

export const Icon: React.FC<IconProps> = ({ fileName, className }) => {
  return (
    <img
      src={`../../../public/img/icons/${fileName}.svg`}
      alt={fileName}
      className={`transition-all duration-300 ease-in-out group-hover:fill-white
        h-8 w-8 ${className}
      `}
    />
  );
};
