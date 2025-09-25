import * as React from 'react';
import cn from 'classnames';

type LiveButtonProps = {
  filled: boolean;
};

export const LiveButton: React.FC<LiveButtonProps> = ({ filled }) => {
  return (
    <button
      className={cn(
        {
          'bg-primary/30': filled,
        },
        `border border-1 border-primary py-2 px-4 font-md text-base text-white`,
      )}
    >
      Live {'<~>'}
    </button>
  );
};
