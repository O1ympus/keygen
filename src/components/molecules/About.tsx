import { LiveButton } from '../atoms/buttons/LiveButton.tsx';
import { Dots } from './Dots.tsx';
import { NavLink } from 'react-router-dom';
import * as React from 'react';
import { about } from '../../api/Constants.tsx';
import cn from 'classnames';

type AboutProps = {
  isButtonPresent: boolean;
};

export const About: React.FC<AboutProps> = ({ isButtonPresent }) => {
  return (
    <div className={`flex justify-between gap-[90px] items-center`}>
      <div className="lg:max-w-[516px]">
        <div
          className={`text-custom-gray flex flex-col gap-4
             mb-[27px]
          `}
        >
          {about.map(([text, whiteWords], idx) => (
            <p key={idx}>
              {text.split(/([\s,']+)/).map((part, i) => {
                const clean = part.replace(/^[.,']+|[.,']+$/g, '');
                return (
                  <span
                    key={i}
                    className={cn({ 'text-white': whiteWords.includes(clean) })}
                  >
                    {part}
                  </span>
                );
              })}
              .
            </p>
          ))}
        </div>
        {isButtonPresent && (
          <NavLink to="about-me">
            <LiveButton text="Read more ->" />
          </NavLink>
        )}
      </div>
      <div
        className={`relative after:content-[''] after:h-[1px]
                after:w-[80%] after:bg-primary after:absolute
                after:bottom-0 after:left-[13%] hidden lg:block
            `}
      >
        <img
          src="/img/about.png"
          alt="anonym"
          className="w-[339px] h-[507px]"
        />
        <Dots className="left-1 top-[59px]" />
        <Dots className="right-4 bottom-[172px] !h-14 overflow-hidden" />
      </div>
    </div>
  );
};
