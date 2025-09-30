import { ColoredSquare } from '../atoms/buttons/ColoredSquare.tsx';
import * as React from 'react';

type CurrentlyWorkingOnProps = {
  text: string;
};

export const CurrentlyWorkingOn: React.FC<CurrentlyWorkingOnProps> = ({
  text,
}) => {
  return (
    <div
      className={`flex gap-[10px] px-2 py-[10.5px] items-center border
           border-1 border-custom-gray min-w-[402px] ml-[20px] mr-9`}
    >
      <ColoredSquare />
      <p>
        <span className="text-custom-gray mr-2">Currently working on</span>
        <span className="text-white font-semibold">{text}</span>
      </p>
    </div>
  );
};
