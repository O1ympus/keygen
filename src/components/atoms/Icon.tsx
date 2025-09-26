import * as React from 'react';

type IconProps = {
  fileName: string;
};

export const Icon: React.FC<IconProps> = ({ fileName }) => {
  return (
    <img
      src={`../../../public/img/icons/${fileName}.svg`}
      alt={fileName}
      className="h-8 w-8"
    />
  );
};
