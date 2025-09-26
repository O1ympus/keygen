import * as React from 'react';
import { Dot } from '../atoms/Dot.tsx';

export const Dots: React.FC = () => {
  return (
    <div className="grid w-[84px] h-[84px] grid-cols-5 grid-rows-5">
      {Array.from({ length: 25 }).map(() => (
        <Dot />
      ))}
    </div>
  );
};
