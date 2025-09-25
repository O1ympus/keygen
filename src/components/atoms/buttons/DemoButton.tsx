import * as React from 'react';
import cn from 'classnames';

type DemoButtonProps = {
  filled: boolean;
};

export const DemoButton: React.FC<DemoButtonProps> = ({ filled }) => {
  return (
    <button
      className={cn(
        {
          'bg-custom-gray/20': filled,
        },
        `border border-1 border-custom-gray py-2 px-4 font-md text-base text-custom-gray`,
      )}
    >
      Demo {'|>'}
    </button>
  );
};
