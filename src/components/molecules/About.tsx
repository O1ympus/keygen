import { LiveButton } from '../atoms/buttons/LiveButton.tsx';
import { Dots } from './Dots.tsx';
import { NavLink } from 'react-router-dom';
import * as React from 'react';

type AboutProps = {
  isButtonPresent: boolean;
};

export const About: React.FC<AboutProps> = ({ isButtonPresent }) => {
  return (
    <div className={`flex justify-between gap-[170px] items-center`}>
      <div className="max-w-[516px]">
        <div
          className={`text-custom-gray flex flex-col gap-4
                mb-[27px]
            `}
        >
          <p>
            Full-stack developer with a Bachelor’s degree in Software
            Engineering. Skilled in JavaScript, TypeScript, React, and with
            working knowledge of Node.js.
          </p>

          <p>
            Experienced in building user-friendly and visually polished
            applications, with strong attention to detail and quality. Able to
            manage multiple tasks simultaneously and deliver results under
            pressure.
          </p>

          <p>
            Proficient in English at B2 level, with the ability to communicate
            effectively in international teams. Motivated to contribute
            technical expertise and creative solutions to innovative projects.
          </p>
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
                after:bottom-0 after:left-[13%]
            `}
      >
        <img
          src="../../../../public/img/about.png"
          alt="anonym"
          className="w-[339px] h-[507px]"
        />
        <Dots className="left-1 top-[59px]" />
        <Dots className="right-4 bottom-[172px] h-14 overflow-hidden" />
      </div>
    </div>
  );
};
