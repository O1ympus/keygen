import { Heading } from '../../molecules/Heading.tsx';
import { LiveButton } from '../../atoms/buttons/LiveButton.tsx';
import { Dots } from '../../molecules/Dots.tsx';

export const AboutMe = () => {
  return (
    <div className={`px-[171px] mb-[112px] flex justify-center gap-[170px]`}>
      <div className="max-w-[516px]">
        <Heading text="about-me" />
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
        <LiveButton text="Read more ->" />
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
