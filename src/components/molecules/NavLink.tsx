import * as React from 'react';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';

type NavigationLinkProps = {
  text: string;
};

export const NavigationLink: React.FC<NavigationLinkProps> = ({ text }) => {
  return (
    <li>
      <NavLink
        to={text}
        className={`font-medium group select-none`}
      >
        {({ isActive }) => (
          <>
            <span className="text-primary">#</span>
            <span
              className={cn(
                {
                  'text-white': isActive,
                },
                `text-custom-gray group-hover:text-white group-active:text-white`,
              )}
            >
              {text !== '/' ? text : 'home'}
            </span>
          </>
        )}
      </NavLink>
    </li>
  );
};
