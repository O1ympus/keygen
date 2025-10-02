import * as React from 'react';
import { iconsMap } from '../../api/iconsMap.ts';

type IconProps = {
  name: keyof typeof iconsMap;
  className?: string;
};

export const Icon: React.FC<IconProps> = ({ name, className }) => {
  const SvgIcon = iconsMap[name];

  return (
    <SvgIcon
      className={`transition-all duration-300 ease-in-out text-custom-gray group-hover:text-white
        h-8 w-8 ${className}`}
    />
  );
};
