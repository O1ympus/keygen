import * as React from 'react';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';
import { useTranslation } from 'react-i18next';

type NavigationLinkProps = {
  text: string;
  handleIsBurgerMenuActive: (value: boolean) => void;
};

export const NavigationLink: React.FC<NavigationLinkProps> = ({
  text,
  handleIsBurgerMenuActive,
}) => {
  const { t } = useTranslation();

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
              {text !== '/' ? t(`header-${text}`) : t('header-home')}
            </span>
          </div>
        )}
      </NavLink>
    </li>
  );
};
