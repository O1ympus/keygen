import { Heading } from '../../molecules/Heading.tsx';
import { About } from '../../molecules/About.tsx';

export const AboutMe = () => {
  return (
    <div className="mb-[80px] lg:mb-[112px]">
      <Heading
        text="about-me"
        linePresent={true}
        className={`md:max-w-[516px]`}
      />
      <About isButtonPresent={true} />
    </div>
  );
};
