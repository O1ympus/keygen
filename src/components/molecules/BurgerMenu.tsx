import React from 'react';
import cn from 'classnames';

type Props = {
  isActive: boolean;
};

export const BurgerMenu: React.FC<Props> = ({ isActive }) => {
  return (
    <div
      className="
        flex flex-col gap-1 w-6 h-6 relative cursor-pointer
        justify-center items-center z-30 pr-4
      "
    >
      <span
        className={cn(
          'h-[2px] w-5 bg-custom-gray block transition-all duration-300 origin-center',
          {
            '-rotate-45 translate-y-[7px]': isActive,
          },
        )}
      ></span>
      <span
        className={cn(
          'h-[2px] w-5 bg-custom-gray transition-all duration-300',
          {
            'opacity-0': isActive,
          },
        )}
      ></span>
      <span
        className={cn(
          'h-[2px] w-5 bg-custom-gray transition-all duration-300 origin-center',
          {
            'rotate-45 -translate-y-[5px]': isActive,
          },
        )}
      ></span>
    </div>
  );
};
