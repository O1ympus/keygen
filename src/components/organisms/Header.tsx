import { NavigationLink } from '../molecules/NavigationLink.tsx';
import * as React from 'react';
import { Logo } from '../molecules/Logo.tsx';
import { BurgerMenu } from '../molecules/BurgerMenu.tsx';
import cn from 'classnames';

type HeaderProps = {
  linkNames: string[];
  isBurgerMenuActive: boolean;
  handleIsBurgerMenuActive: (state: boolean) => void;
};

export const Header: React.FC<HeaderProps> = ({
  linkNames,
  isBurgerMenuActive,
  handleIsBurgerMenuActive,
}) => {
  return (
    <header
      className={`flex justify-between h-[61px] w-full pb-2 pt-8
        xl:px-[170px] relative
        after:content-[""] after:absolute after:block after:top-0 after:left-0 after:right-0
        after:h-full after:bg-background after:z-20
        top-0 z-20 max-w-[1920px] mx-auto
        `}
    >
      <div className={`pl-4 md:pl-6 lg:pl-8 xl:pl-0 z-30`}>
        <Logo />
      </div>
      <nav
        className={cn(
          {
            'items-center h-[100vh]': isBurgerMenuActive,
            'h-0': !isBurgerMenuActive,
          },
          `absolute top-[60px] w-screen md:w-auto md:static overflow-hidden
         transition-all duration-300 ease-in-out bg-background z-30 md:h-auto
        `,
        )}
      >
        <ul className="flex flex-col md:flex-row items-center gap-8 z-30">
          <li
            className={cn(
              {
                'h-[80px]': isBurgerMenuActive,
                'h-0': !isBurgerMenuActive,
              },
              `transition-all duration-300 ease-in-out md:h-auto`,
            )}
          ></li>
          {linkNames.map((link) => (
            <NavigationLink
              handleIsBurgerMenuActive={handleIsBurgerMenuActive}
              key={link}
              text={link !== 'home' ? link : '/'}
            />
          ))}
          <button
            className={`flex items-center gap-1 z-30 md:pr-6 lg:pr-8 xl:pr-0`}
          >
            <span
              className={`font-semibold text-custom-gray text-2xl md:text-base`}
            >
              EN
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`w-[15px] h-[10.5px] md:w-[10px] md:h-[7px]`}
              viewBox="0 0 10 7"
              fill="none"
            >
              <line
                x1="0.707107"
                y1="1.29289"
                x2="5.70711"
                y2="6.29289"
                stroke="#ABB2BF"
                strokeWidth="2"
              />
              <line
                x1="4.29289"
                y1="6.29289"
                x2="9.29289"
                y2="1.29289"
                stroke="#ABB2BF"
                strokeWidth="2"
              />
            </svg>
          </button>
        </ul>
      </nav>
      <button
        onClick={() => handleIsBurgerMenuActive(!isBurgerMenuActive)}
        className="md:hidden inline-flex items-center no-underline"
      >
        <BurgerMenu isActive={isBurgerMenuActive} />
      </button>
    </header>
  );
};
