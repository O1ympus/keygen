import * as React from 'react';

type SquareProps = {
  className?: string;
};

export const Square: React.FC<SquareProps> = ({ className }) => (
  <div
    className={`border border-1 border-custom-gray bg-transparent ${className}
        absolute
      `}
  ></div>
);
