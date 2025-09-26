import * as React from 'react';

type InputProps = {
  placeholder: string;
};

export const Input: React.FC<InputProps> = ({ placeholder }) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className={`
                w-[244.5px] p-2 border border-1 border-custom-gray bg-transparent text-base
                active:border-white outline-none text-custom-gray
            `}
    />
  );
};
