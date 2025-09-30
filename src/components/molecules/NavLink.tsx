import * as React from 'react';

type NavLinkProps = {
  text: string;
};

export const NavLink: React.FC<NavLinkProps> = ({ text }) => {
  return (
    <li>
      <a
        href="#"
        className="font-medium group"
      >
        <span className="text-primary">#</span>
        <span
          className={`text-custom-gray group-hover:text-white
                        group-active:text-white
                    `}
        >
          {text}
        </span>
      </a>
    </li>
  );
};
