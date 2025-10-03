import * as React from 'react';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';

type NavigationLinkProps = {
  text: string;
  handleIsBurgerMenuActive: (value: boolean) => void;
};

export const NavigationLink: React.FC<NavigationLinkProps> = ({
  text,
  handleIsBurgerMenuActive,
}) => {
  return (
    <li className={`z-30`}>
      <NavLink
        to={text}
        onClick={() => {
          handleIsBurgerMenuActive(false);
        }}
        className={`font-medium group select-none`}
      >
        {({ isActive }) => (
          <div>
            <span className="text-primary text-2xl md:text-base">#</span>
            <span
              className={cn(
                {
                  'text-white': isActive,
                },
                `text-custom-gray group-hover:text-white group-active:text-white
                  transition-all duration-300 ease-in-out text-2xl md:text-base
                `,
              )}
            >
              {text !== '/' ? text : 'home'}
            </span>
          </div>
        )}
      </NavLink>
    </li>
  );
};
