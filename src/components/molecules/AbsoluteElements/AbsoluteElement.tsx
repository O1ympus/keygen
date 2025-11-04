import * as React from 'react';

type AbsoluteElementProps = {
  className?: string;
};

export const AbsoluteElement: React.FC<AbsoluteElementProps> = ({
  className,
}) => {
  return (
    <div
      className={`border border-1 border-custom-gray absolute ${className}`}
    />
  );
};
