import { NavLink } from '../molecules/NavLink.tsx';
import * as React from 'react';
import { Logo } from '../molecules/Logo.tsx';

type HeaderProps = {
  linkNames: string[];
};
export const Header: React.FC<HeaderProps> = ({ linkNames }) => {
  return (
    <header
      className={`flex justify-between h-[61px] w-full pb-2 pt-8 mb-[62px]
            px-[171px]
        `}
    >
      <Logo />
      <nav>
        <ul className="flex gap-8">
          {linkNames.map((link) => (
            <NavLink
              key={link}
              text={link}
            />
          ))}
        </ul>
      </nav>
    </header>
  );
};
