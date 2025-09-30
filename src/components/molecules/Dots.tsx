import * as React from 'react';
import { Dot } from '../atoms/Dot.tsx';

type DotsProps = {
  className?: string;
};

export const Dots: React.FC<DotsProps> = ({ className }) => {
  return (
    <div
      className={`grid w-[84px] h-[84px] grid-cols-5 grid-rows-5
        absolute ${className} z-20
    `}
    >
      {Array.from({ length: 25 }, (_, i) => (
        <Dot key={i} />
      ))}
    </div>
  );
};
